class ViewTruck{
    constructor(){}

async viewTruckInfo()
{
        
var truckRef = await database.ref('trucks').once("value");
    if(truckRef.exists()){
        truckInfo=truckRef.val();
        console.log(truckInfo)
        for(var t in truckInfo){
            var p=[truckInfo[t].sno,truckInfo[t].destination]
            truckarr.push(p)
        }
    }
noCanvas()
            // get the reference for the body
var body = document.getElementsByTagName("body")[0];
            // creates a <table> element and a <tbody> element
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");

  // creating all cells
for (var i = 0; i < truckarr.length; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode(truckarr[i][j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }


    // add the row to the end of the table body
    tblBody.appendChild(row);
}
  

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
                       }
        }
        