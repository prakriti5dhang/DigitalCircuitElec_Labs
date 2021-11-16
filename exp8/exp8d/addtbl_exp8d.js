/* /*Lab:exp_5_Part1_Decoder
	File name: addtbl.js
  content: inert  into table, sorting teh table, remove duplicate row.
    Author:Prakriti Dhang */

    /* Table creation */
var tabrowindex = 0;
var arr = [];
var table;
var clmns, vlt, columns, rest;
var dataPoints = [];

var table, rows, switching, i, x, y, shouldSwitch;
function srintbl(){
    table = document.getElementById("mytablesr");

    
    arr[0]=clkp[0];

    arr[1]=sr[0];
    arr[2]=sr[1];
    

    arr[3]=qq1[0];
    arr[4]=qq1[1];
    
    

    tabrowindex + 1;
    
       
    var row = table.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 5; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];

    }
    sortTable(); /* sort table  in ascending order */
  
    
    deleterow(); /* Delete duplicate row */
   
    
}


    function sortTable() {
     
      table = document.getElementById("mytable1");
      swap = true;
      /*Make a loop that will continue until
      no swaping has been done:*/
      while (swap) {
        //start by saying: no swap is done:
        swap = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 3; i < (rows.length - 1); i++) {
          //start by saying there should be no swap:
          shouldswap = false;
          /*Get the two elements you want to compare,
          one from current row and one from the next:*/
          x = rows[i].getElementsByTagName("td")[0];
          y = rows[i + 1].getElementsByTagName("td")[0];
          //check if the two rows should swap place:
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            //if so, mark as a swap and break the loop:
            shouldswap = true;
            break;
          }

          

        }
        if (shouldswap) {
          /*If a swap has been marked, make the swap
          and mark that a switch has been done:*/
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          swap = true;
          

        }
       
       
      }
    }
    

    function deleterow()
    {
      
      table = document.getElementById("mytable1");
      var rowCount = table.rows.length;
      swap = true;
      /*Make a loop that will continue until
      no swaping has been done:*/
      while (swap) {
        //start by saying: no swap is done:
        swap = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 3; i < (rows.length - 1); i++) {
          //start by saying there should be no swap:
          shouldswap = false;
          /*Get the two elements you want to compare,
          one from current row and one from the next:*/
          x = rows[i].getElementsByTagName("td")[0];
          y = rows[i + 1].getElementsByTagName("td")[0];
          //check if the two rows should swap place:
          if (Number(x.innerHTML) == Number(y.innerHTML)) {
            //if so, mark as a swap and break the loop:
            shouldswap = true;
            alert("Already Inserted");
            break;
          }
       
        }
        if (shouldswap) {
          /*If a swap has been marked, make the swap
          and mark that a switch has been done:*/
          rows[i].remove(rows[i + 1]);
          rowCount--;
          i--;
          tabrowindex--;
          swap = true;
        
          

        }
       
       
      }
      }
    