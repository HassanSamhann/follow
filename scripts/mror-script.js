
  var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","mror.json");
xmlhttp.onload= function(){
    var xdata = JSON.parse(xmlhttp.responseText); 
    var se1l= document.getElementById("alzay-1"); 
    var se2l= document.getElementById("monira-1"); 
    var se3l= document.getElementById("alzay-2"); 
    var se4l= document.getElementById("monira-2"); 
    var buttom= document.getElementById("mainbot");
    var thread = document.querySelector(".table .thead-dark")
    console.log()
    buttom.onclick = function(){
      if(se1l.selected){
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML =xdata[0].day;
      cell2.innerHTML =  xdata[0].mrorpa,
      cell3.innerHTML = xdata[0].reso,
      cell4.innerHTML = xdata[0].before;
      thread.removeChild(thread.children[2])

    }else if (se2l.selected){ 
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML =xdata[1].day;
      cell2.innerHTML =  xdata[1].mrorpa,
      cell3.innerHTML = xdata[1].reso,
      cell4.innerHTML = xdata[1].before;
      thread.removeChild(thread.children[2])

    }else if (se3l.selected){ 
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML =xdata[2].day;
      cell2.innerHTML =  xdata[2].mrorpa,
      cell3.innerHTML = xdata[2].reso,
      cell4.innerHTML = xdata[2].before;
      thread.removeChild(thread.children[2])

    }else if (se4l.selected){ 
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML =xdata[3].day;
      cell2.innerHTML =  xdata[3].mrorpa,
      cell3.innerHTML = xdata[3].reso,
      cell4.innerHTML = xdata[3].before;
      thread.removeChild(thread.children[2])

    }
    
    }
  }
      
    
                


            
            
xmlhttp.send();