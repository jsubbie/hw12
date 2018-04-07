// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");

var allData = dataSet;

// renderTable renders the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < allData.length; i++) {
    var data = allData[i];
    var truth = Object.keys(data);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < truth.length; j++) {
      var varInput = truth[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[varInput];
    }
  }
}

// Render the table for the first time on page load
renderTable();
