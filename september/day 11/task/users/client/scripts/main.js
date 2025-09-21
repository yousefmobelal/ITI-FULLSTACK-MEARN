async function login() {
  console.log("Button is pressed");
  try {
    const res = await fetch("http://localhost:7000/login");
    if (!res.ok) throw new Error("Failed to load clients");
  } catch (err) {
    console.error(err);
  }
}

document.querySelector("#loginBtn").addEventListener("click", login);
