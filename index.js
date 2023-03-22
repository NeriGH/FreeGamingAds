document.addEventListener("keydown", function (event) {
  userInput.push(event.keyCode);

  if (userInput.length > konamiCode.length) {
    userInput.shift();
  }

  if (userInput.toString() === konamiCode.toString()) {
    // Trigger Easter egg here
    alert("Congratulations! You found the Easter egg!");
  }
});

var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var userInput = [];
