function addTask(){

let title=document.getElementById("title").value;
let desc=document.getElementById("desc").value;

if(title===""){
alert("Please enter title");
return;
}

let li=document.createElement("li");

li.innerHTML=
"<div><b>"+title+"</b><br>"+desc+"</div>" +
"<div>" +
"<button class='complete'>✓</button>" +
"<button class='delete'>X</button>" +
"</div>";

document.getElementById("pending").appendChild(li);

li.querySelector(".complete").onclick=function(){
document.getElementById("completed").appendChild(li);
};

li.querySelector(".delete").onclick=function(){
li.remove();
};

document.getElementById("title").value="";
document.getElementById("desc").value="";
}