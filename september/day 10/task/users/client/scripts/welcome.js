async function showAllClients() {
  console.log("Hello World");
  try {
    const res = await fetch("http://localhost:7000/clients");
    if (!res.ok) throw new Error("Failed to load clients");
    const clients = await res.json();

    const allClientsList = document.querySelector("#allClientsList");
    allClientsList.innerHTML = "";

    console.log("Parsed clients:", clients, typeof clients);

    for (let client of clients) {
      const ul = document.createElement("ul");
      ul.innerHTML = `
        <li><strong>Name:</strong> ${client.name}</li>
        <li><strong>Phone Number:</strong> ${client.phoneNumber}</li>
        <li><strong>Email:</strong> ${client.email}</li>
        <li><strong>Address:</strong> ${client.address}</li>
      `;
      ul.style.marginBottom = "20px";

      allClientsList.appendChild(ul);
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
