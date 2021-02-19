// from data.js
let tableData = data;
// console.log(tableData);

// Giving a name to the variables
let tbody = d3.select("tbody");
let button = d3.select("#filter-btn");
let inputdate = d3.select("datetime");

// Create a fucntion to show the tabke with the data
function createtable(tabledata){
    tbody.html("")
    tabledata.forEach(d => {
        let row = tbody.append("tr");
        for(x in d){
            row.append("td").text(d[x])
        }
    });
}

// Formulating the function to display the data according to the date entered
function filtering(){
    let dateofinterest = d3.select("#datetime").property("value");
    console.log(dateofinterest)
    let subdata = data.filter(d=>{
        return d.datetime === dateofinterest
    })
createtable(subdata);

}
// Creating a table with all the data in data.js
createtable(data);

button.on("click", filtering)