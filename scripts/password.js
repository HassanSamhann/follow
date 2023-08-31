var submit = document.getElementById("but"); 
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "icuadmin" && password == "icu@2020") {
        window.location.href = "login.html"
        alert("مرحبا بك في ادارة التقييم والمتابعة ");
    
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

submit.addEventListener("click", validate);

console.log(window.location.href)