

  var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET","data.json");
xmlhttp.onload= function(){
    var xdata = JSON.parse(xmlhttp.responseText); 
    var number= document.getElementById("number");
    var name = document.getElementById("name");
    var phone =  document.getElementById("phone");
    var resone = document.getElementById("resone");
    var state = document.getElementById("state");
    var buttom= document.getElementById("mainbot");
    const textarea = document.querySelectorAll("textarea");
    var sec =  document.querySelector(".ftco-section");
    buttom.onclick = function(){ 
        
        for(var i = 0 ; i <= xdata.length;i++){
            if(xdata[i]["code"] == number.value){ 
                name.value = xdata[i].name ;
                phone.value = "0"+xdata[i].phone ;
                resone.value = xdata[i].resone ;
                state.value = xdata[i].stat ;
            }
                }
                textarea.addEventListener("keyup", e =>{
                    textarea.style.height = "63px";
                    let scHeight = e.target.scrollHeight;
                    textarea.style.height = `${scHeight}px`;
                  });         
}

}
xmlhttp.send();
