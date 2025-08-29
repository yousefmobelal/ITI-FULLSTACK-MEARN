var userNameInput = document.querySelector("input[type='text']");
var passwordInput = document.querySelector("input[type='password']");
var loginButton = document.querySelector("#loginButton");
var loginData = {};
loginButton.addEventListener("click", function () {
  if (userNameInput.value === "" || passwordInput.value === "") {
    alert("Please fill in all fields");
    return;
  }
  loginData.username = userNameInput.value;
  loginData.password = passwordInput.value;
  if (loginData.username === "admin" && loginData.password === "123") {
    alert("Welcome");
  } else {
    alert("Not Registered");
  }
});
