const square = document.querySelector("#square");
square.style.left = "250px"
square.style.top = "250px"

document.addEventListener("keydown", e => {
  e = e || window.event;

  if (e.keyCode == '38') {
    moveUp(square);
  }
  else if (e.keyCode == '40') {
    console.log("down arrow");
  }
  else if (e.keyCode == '37') {
    moveLeft(square);
  }
  else if (e.keyCode == '39') {
    moveRight(square);
  }
});

function moveLeft(node) {
  let currLeft = node.style.left;
  currLeft = currLeft.slice(0, currLeft.length - 2)
  
  let newLeft = Number(currLeft) - 25;
  node.style.left = newLeft + "px";
  console.log(node.style.left);
}

function moveRight(node) {
  let currLeft = node.style.left;
  currLeft = currLeft.slice(0, currLeft.length - 2)
  
  let newLeft = Number(currLeft) + 25;
  node.style.left = newLeft + "px";
  console.log(node.style.left);
}

function moveUp(node) {
  let currTop = node.style.top;
  currTop = currTop.slice(0, currTop.length - 2)
  
  let newTop = Number(currTop) - 25;
  node.style.top = newTop + "px";
  console.log(node.style.top);
}

// On key up and down call function. There are different codes for each key.

// document.onkeydown = checkKey;

// function checkKey(e) {
//     e = e || window.event;

//     if (e.keyCode == '38') {
//       alert("up arrow");
//     }
//     else if (e.keyCode == '40') {
//       alert("down arrow");
//     }
//     else if (e.keyCode == '37') {
//       alert("left arrow");
//     }
//     else if (e.keyCode == '39') {
//       alert("right arrow");
//     }

// }

