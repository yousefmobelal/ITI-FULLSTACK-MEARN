async function showAllClients() {
  console.log("Hello World");
  try {
    const res = await fetch("http://localhost:7000/clients");
    if (!res.ok) throw new Error("Failed to load clients");
    console.log(`this is the res: ${res}`);
    const clients = await res.json();
    const allClientsList = document.querySelector("#allClientsList");
    allClientsList.innerHTML = "";
    console.log("Parsed clients:", clients, typeof clients);

    for (let client of clients) {
      const li = document.createElement("li");
      li.textContent = client.name;
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
