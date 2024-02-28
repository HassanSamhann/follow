var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","bayandata.json");
xmlhttp.onload= function(){
    var xdata = JSON.parse(xmlhttp.responseText); 
    var cair1o = document.querySelector(".cairo-1");
    var cair2o = document.querySelector(".cairo-2");
    var cair3o = document.querySelector(".cairo-3");
    var cair4o = document.querySelector(".cairo-4");
    var cair5o = document.querySelector(".cairo-5");
    var cair6o = document.querySelector(".cairo-6");
    var akaly1m = document.querySelector(".akalym-1");
    var akaly2m = document.querySelector(".akalym-2");
    var akaly3m = document.querySelector(".akalym-3");
    var akaly4m = document.querySelector(".akalym-4");
    var akaly5m = document.querySelector(".akalym-5");
    var akaly6m = document.querySelector(".akalym-6");
    var akaly7m = document.querySelector(".akalym-7");
    var tota1l = document.querySelector(".total-1");
    var tota2l = document.querySelector(".total-2");
    var tota3l = document.querySelector(".total-3");
    var number= document.getElementById("number");
    var buttom= document.getElementById("mainbot");
    const textarea = document.querySelectorAll("textarea");
    buttom.onclick = function(){ 
        for(var i = 0 ; i <= xdata.length;i++){
            if(xdata[i]["day"] == number.value){ 
                cair1o.innerHTML = xdata[i].cair1o ;
                cair2o.innerHTML = xdata[i].cair2o ;
                cair3o.innerHTML = xdata[i].cair3o ;
                cair4o.innerHTML = xdata[i].cair4o ;
                cair5o.innerHTML = xdata[i].cair5o ;
                cair6o.innerHTML = xdata[i].cair6o ;
                akaly1m.innerHTML = xdata[i].akaly1m ;
                akaly2m.innerHTML = xdata[i].akaly2m ;
                akaly3m.innerHTML = xdata[i].akaly3m ;
                akaly4m.innerHTML = xdata[i].akaly4m ;
                akaly5m.innerHTML = xdata[i].akaly5m ;
                akaly6m.innerHTML = xdata[i].akaly6m ;
                akaly7m.innerHTML = xdata[i].akaly7m ;
                tota1l.innerHTML = xdata[i].tota1l ;
                tota2l.innerHTML = xdata[i].tota2l ;
                tota3l.innerHTML = xdata[i].tota3l ;
            }
            }
                }
                textarea.addEventListener("keyup", e =>{
                    textarea.style.height = "63px";
                    let scHeight = e.target.scrollHeight;
                    textarea.style.height = `${scHeight}px`;
                  });         
}


xmlhttp.send();
