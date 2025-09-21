async function showAllClients() {
  try {
    const res = await fetch("http://localhost:7000/clients");
    if (!res.ok) throw new Error("Failed to load clients");
    const clients = await res.json();

    const allClientsList = document.querySelector("#allClientsList");
    allClientsList.innerHTML = "";

    for (let client of clients) {
      console.log(`This is the client: ${client.name}`);
      const li = document.createElement("li");
      li.classList.add("client-item");

      const info = document.createElement("div");
      info.classList.add("client-info");
      info.innerHTML = `
       <form method="post" action="/clients" class="updateForm">
      <input
        type="text"
        id="username"
        placeholder="Name"
        name="name"
        value="${client.name}"
        required
      />
      <input
        type="number"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Phone Number"
        value=${client.phoneNumber}
        required
      />
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Address"
        value=${client.address}
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value=${client.email}
        required
      />
    </form>
      `;

      const actions = document.createElement("div");
      actions.classList.add("client-actions");

      const updateBtn = document.createElement("button");
      updateBtn.textContent = "Update";
      updateBtn.classList.add("btn-update");
      updateBtn.addEventListener("click", async () => {
        try {
          const updatedClient = {
            name: document.querySelector("#username").value,
            phoneNumber: document.querySelector("#phoneNumber").value,
            email: document.querySelector("#email").value,
            address: document.querySelector("#address").value,
          };

          const updateRes = await fetch(`http://localhost:7000/clients/`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedClient),
          });

          if (!updateRes.ok) throw new Error("Update failed");
          await fetch("http://localhost:7000/");
          showAllClients();
        } catch (err) {
          console.error(err);
        }
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("btn-delete");
      deleteBtn.addEventListener("click", async () => {
        try {
          const delRes = await fetch(
            `http://localhost:7000/clients/${client.phoneNumber}`,
            {
              method: "DELETE",
            }
          );
          if (!delRes.ok) throw new Error("Delete failed");
          showAllClients();
        } catch (err) {
          console.error(err);
        }
      });

      actions.appendChild(updateBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(info);
      li.appendChild(actions);

      allClientsList.appendChild(li);
    }
  } catch (err) {
    alert("Something went wrong showing all clients.");
    console.error(err);
  }
}

document
  .querySelector("#showAllClientsBtn")
  .addEventListener("click", showAllClients);

console.log("Hello from welcome.js");
