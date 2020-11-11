const square = document.querySelector("#square");
square.style.left = "250px"
square.style.top = "250px"

document.addEventListener("keydown", e => {
  e = e || window.event;

  if (e.keyCode == '38') {
    console.log("up arrow");
  }
  else if (e.keyCode == '40') {
    console.log("down arrow");
  }
  else if (e.keyCode == '37') {
    moveLeft(square);
  }
  else if (e.keyCode == '39') {
    console.log("right arrow");
  }
});

function moveLeft(node) {
  let currLeft = node.style.left;
  currLeft = currLeft.slice(0, currLeft.length - 2)
  
  let newLeft = currLeft - 5;
  node.style.left = newLeft + "px";
  console.log(currLeft);
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

