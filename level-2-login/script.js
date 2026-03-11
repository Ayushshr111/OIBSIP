function register() {

let user = document.getElementById("regUser").value
let pass = document.getElementById("regPass").value

localStorage.setItem("username", user)
localStorage.setItem("password", pass)

alert("Registration successful")
window.location = "index.html"
}

function login(){

let user = document.getElementById("loginUser").value
let pass = document.getElementById("loginPass").value

let storedUser = localStorage.getItem("username")
let storedPass = localStorage.getItem("password")

if(user === storedUser && pass === storedPass){
window.location = "dashboard.html"
}
else{
alert("Invalid login")
}

}

function logout(){
window.location = "index.html"
}