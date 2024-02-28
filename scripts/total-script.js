
  var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET","data.json");
xmlhttp.onload= function(){
    var xdata = JSON.parse(xmlhttp.responseText); 
    var all = document.getElementById("all")
    var heeds = document.getElementById("heeds"); 
    heeds.innerHTML = `<h2>اجمالي حالات ارضاء المواطنين  : <span>${xdata.length} حالة </span></h2>`; 
    all.onclick = function(){ 
        for(var i = 1 ; i <= 50;i++){
                var table = document.getElementById("myTable");
                var row = table.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                // var cell6 = row.insertCell(5);
              // innerHTML=>xdata
                cell1.innerHTML =xdata[i].code;
                cell2.innerHTML =  xdata[i].name,
                cell3.innerHTML = "0"+xdata[i].phone,
                cell4.innerHTML = xdata[i].resone;
                cell5.innerHTML =xdata[i].stat;
                // cell6.innerHTML =xdata[i].comp;
              
            }

            }        
}
xmlhttp.send();