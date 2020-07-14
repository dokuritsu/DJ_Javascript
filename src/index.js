import "./styles.css";

var square = document.getElementById("squares");

square.addEventListener("dblclick", doubleClick);

square.addEventListener("mouseover", hover);

square.addEventListener("mouseup", release);

square.addEventListener("mousedown", hold);

document.body.addEventListener("wheel", scroll);

document.addEventListener("keydown", event => {
  console.log(event.which);
  switch (event.which) {
    case 82:
      square.style.backgroundColor = "red";
      break;
    case 66:
      square.style.backgroundColor = "blue";
      break;
    case 79:
      square.style.backgroundColor = "darkorange";
      break;
    case 89:
      square.style.backgroundColor = "yellow";
      break;
    case 71:
      square.style.backgroundColor = "green";
      break;
    default:
      square.style.backgroundColor = "white";
  }
});

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
