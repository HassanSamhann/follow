let submit = document.getElementById("but"); 
function validate() {
   let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "icuadmin" && password == "icu@2020") {
        window.location.href = "login.html";

    } else {
        alert("Invalid username or password. Please try again.");

    }
}

submit.addEventListener("click", validate);

