const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

function signup() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    localStorage.setItem("user-name",username);
    localStorage.setItem("email-address",email);
    localStorage.setItem("pass-word",password);

    if(username != ""){
        alert("Registered Successfully !");
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }

    else{
        signup();
    }
    
}

function signin() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    var getuser = localStorage.getItem("user-name");
    var getpass = localStorage.getItem("pass-word");


    if(user == getuser && pass == getpass){
        window.location.href = "home.html";
        localStorage.setItem("Depends", "Secret");
        alert("Logged In");
    }
    else{
        alert("Invalid Value.");
        document.getElementById("user").value = "";
        document.getElementById("pass").value = "";
    }
    
}