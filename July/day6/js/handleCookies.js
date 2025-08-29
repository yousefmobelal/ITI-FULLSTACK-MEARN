function setCookieValue(key, value) {
  document.cookie = key + "=" + value + ";";
}

function getCookiesValues() {
  var data = document.cookie.split(";");
  var values = [];
  for (var element of data) {
    values.push(element.split("=")[1]);
  }
  return values;
}

function checkIfASpecificValueExists(value) {
  var allValues = getCookiesValues();
  return allValues.includes(value);
}

setCookieValue("name", "Yousef");
setCookieValue("age", "24");
var values = getCookiesValues();
console.log("values", values);
console.log(checkIfASpecificValueExists("Yousef"));
