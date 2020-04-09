const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const todo = document.getElementById("todo");

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let amPm = hour >= 12 ? "PM" : "AM";

  time.innerHTML = `${addZero(hour)} <span> : </span> ${addZero(
    min
  )} <span> : </span> ${addZero(sec)}`;
  setTimeout(showTime, 1000);
}

function setBackground() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage =
      'linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.8)), url("./images/moring.jpg")';
    greeting.textContent = "Good Morning! ";
  } else if (hour < 18) {
    document.body.style.backgroundImage =
      'linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.8)), url("./images/afternoon.jpg")';
    greeting.textContent = "How are you doing? ";
  } else {
    document.body.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url('./images/night.jpg')";
    greeting.textContent = "Good evening, ";
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "Enter your name";
  } else {
    name.textContent = localStorage("name");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innertext);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innertext);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

function getTodo() {
  if (localStorage.getItem("todo") === null) {
    todo.textContent = "What is your plan today?";
  } else {
    todo.textContent = localStorage.getItem("todo");
  }
}

function setTodo(e) {
  if (e.type == "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("todo", e.target.innertext);
      todo.blur();
    }
  } else {
    localStorage.setItem("todo", e.type.innertext);
  }
}
todo.addEventListener("keypress", setTodo);
todo.addEventListener("blur", setTodo);

showTime();
setBackground();

getName();
getTodo();
