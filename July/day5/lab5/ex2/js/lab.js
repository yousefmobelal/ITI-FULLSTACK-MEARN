let tasks = [];
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task" + (task.status === "done" ? " done" : "");
    taskDiv.innerHTML = `
      <span>${task.name}</span>
      <div class="buttons">
        <button class="done-btn">✔</button>
        <button class="delete-btn">✖</button>
      </div>
    `;

    taskDiv.querySelector(".done-btn").addEventListener("click", () => {
      tasks[index].status = "done";
      renderTasks();
    });

    taskDiv.querySelector(".delete-btn").addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    taskList.appendChild(taskDiv);
  });
}

addBtn.addEventListener("click", () => {
  const taskName = taskInput.value.trim();
  if (taskName) {
    tasks.push({ name: taskName, status: "pending" });
    taskInput.value = "";
    renderTasks();
  }
});

renderTasks();
