var personsData = [];
var id = 0;

$(document).ready(function () {
  $("#add").click(addToTable);
  $("#search").click(searchForPersons);
});

function addToTable() {
  var personName = $("#name").val().trim();
  var personAge = $("#age").val().trim();
  var person = {
    id: id,
    name: personName,
    age: personAge,
  };
  personsData.push(person);

  $("#persons-list tbody").append(personDataRow(person));
  $("#name").val("");
  $("#age").val("");

  id++;
}

function deleteFromTable(id) {
  $("#" + id).remove();
  personsData = personsData.filter((item) => item.id !== Number(id));
}

function searchForPersons() {
  var searchStr = $("#search-item").val().toLowerCase();
  var foundedpersons = personsData.filter((item) =>
    item.name.toLowerCase().includes(searchStr.trim())
  );
  $("#persons-list tbody").empty();
  for (var person of foundedpersons) {
    $("#persons-list tbody").append(personDataRow(person));
  }
}

function personDataRow(person) {
  return `<tr id=${person.id}>
  <td>${person.name}</td>
  <td>${person.age}</td>
  <td>
    <button onClick="deleteFromTable('${person.id}')">Delete</button>
  </td>
  </tr>`;
}
