// Handle Notifications
window.addEventListener("load", (event) => {
  navigator.serviceWorker
    .register("sw.js")
    .then((reg) => console.log("service worker registered successfully"))
    .catch((err) => {
      console.log(err);
    });
});

if (!(Notification in window)) {
  console.log("Notification not supported");
}

Notification.requestPermission((status) => {
  console.log("Notification Permission", status);
});

let dbPromise = idb.open("Todos", 1, function (upgradeDB) {
  console.log("Database Todos Created");
  upgradeDB.createObjectStore("Todos", { keyPath: "id", autoIncrement: true });
});

function scheduleNotification(todo) {
  const targetDate = new Date(todo.date);
  const now = new Date();

  const diffMs = targetDate.getTime() - now.getTime();
  console.log(`Notification scheduled in ${diffMs} ms`);

  if (diffMs <= 0) {
    return;
  }

  setTimeout(() => {
    const todoDiv = document.getElementById(`todo-${todo.id}`);
    if (todoDiv) {
      const p = todoDiv.querySelector("p");
      p.style.textDecoration = "line-through";
    }
    dbPromise.then(async (db) => {
      const tx = db.transaction("Todos", "readwrite");
      const store = tx.objectStore("Todos");
      console.log(`This is the dodo id: ${todo.id}`);
      store.put({ ...todo, notified: true });
      navigator.serviceWorker.getRegistration().then((reg) => {
        reg.showNotification(todo.name, { body: todo.date });
      });
    });
  }, diffMs);
}

const todosArea = document.getElementById("addedTodos");

function showTodoInUI(todo) {
  todosArea.innerHTML += `
        <div id="todo-${todo.id}" style="display: flex; align-items: center; gap: 10px;">
          <p>Todo: <strong>${todo.name}</strong> at ${todo.date}</p>
          <button onclick="deleteTodo(${todo.id})" style="cursor: pointer; background-color: red; color: white;">✖</button>
        </div>
      `;
}

function loadAllTodos() {
  dbPromise.then(async (db) => {
    const tx = db.transaction("Todos", "readonly");
    const store = tx.objectStore("Todos");
    const allTodos = await store.getAll();
    allTodos.forEach((todo) => {
      showTodoInUI(todo);
    });
  });
}

onload = function () {
  console.log("The page is fully loaded");
  this.document.getElementById("addTodoButton").onclick = AddTodo;
  loadAllTodos();
};

async function AddTodo() {
  console.log("Hello World");
  try {
    const db = await dbPromise;
    const tx = db.transaction("Todos", "readwrite");
    const store = tx.objectStore("Todos");

    const name = document.getElementById("todoInput").value;
    const hours = document.getElementById("hoursInput").value.padStart(2, "0");
    const mins = document.getElementById("minsInput").value.padStart(2, "0");
    const day = document.getElementById("day").value.padStart(2, "0");
    const month = document.getElementById("month").value.padStart(2, "0");
    const year = document.getElementById("year").value;

    const date = `${year}-${month}-${day}T${hours}:${mins}`;

    let todo = { name, date, notified: false };

    todo.id = await store.add(todo);

    scheduleNotification(todo);
    showTodoInUI(todo);
  } catch (err) {
    console.log(err);
  }
}

async function deleteTodo(todoId) {
  try {
    const db = await dbPromise;
    const tx = db.transaction("Todos", "readwrite");
    const store = tx.objectStore("Todos");
    await store.delete(todoId);
    const todoDiv = document.getElementById(`todo-${todoId}`);
    if (todoDiv) {
      todoDiv.remove();
    }
    await tx.done;
  } catch (err) {
    console.log(err);
  }
}
