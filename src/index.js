import "./styles.css";

// var square = document.querySelector("#squares");
var square = document.getElementById("squares");

square.addEventListener("dblclick", doubleClick);

square.addEventListener("mouseover", hover);

square.addEventListener("mouseup", release);

square.addEventListener("mousedown", hold);

document.body.addEventListener("wheel", scroll);

function scroll() {
  console.log("Scrolling through the page");
  square.style.backgroundColor = "darkorange";
}

function doubleClick() {
  console.log("Square was double clicked");
  square.style.backgroundColor = "green";
}

function hover() {
  console.log("Mouse is hovering over square");
  square.style.backgroundColor = "blue";
}

function release() {
  console.log("Mouse was released over square");
  square.style.backgroundColor = "yellow";
}

function hold() {
  console.log("Mouse was held over square");
  square.style.backgroundColor = "red";
}
