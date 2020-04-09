const title = document.getElementById("main-title");
console.log(title);

title.textContent = "<h1>This is first maintitle</h1>";
title.innerText = "<h1>This is second maintitle</h1>";
title.innerHTML = "<h1>This is third maintitle</h1>";

const list = document.querySelectorAll("li");

list[1].style.color = "blue";
