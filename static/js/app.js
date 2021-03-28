// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");


// Append data table to web page and add new rows of data for each UFO sighting 
function displayData(data){ 
  tbody.text("")
  data.forEach(function(sighting){
  new_tr = tbody.append("tr")
  Object.entries(sighting).forEach(function([key, value]){
      new_td = new_tr.append("td").text(value)	
  })
})}

displayData(tableData)


//   USE code to listen for events and search through
//   the date/time column to find rows that match user input

// Select the submit button
var button = d3.select("#filter-btn");
var dateInput = d3.select('#datetime');

// Complete the click handler for the form
 function clickSelect() {
  // Prevent the page from refreshing
    d3.event.preventDefault();
  //print the value that was input
  console.log(dateInput.property("value"));
  //create a new table showing only the filterd data
  var new_table = tableData.filter(sighting => sighting.datetime===dateInput.property("value"))
    //display the new table
    displayData(new_table);  
}

// event listener to handle change and click for date
dateInput.on("change", clickSelect)
