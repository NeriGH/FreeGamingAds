var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var arrowCodes = [37, 38, 39, 40];
var arrowCharacters = ["←", "↑", "→", "↓"];
var userInput = [];
var row = document.getElementById("user-input");

for (var i = 0; i < 10; i++) {
  var card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("gradient-border");
  row.appendChild(card);
}

row.addEventListener("click", function () {
  row.classList.add("active");
});

document.addEventListener("keydown", function (event) {
  if (row.classList.contains("active")) {
    var keyIndex = arrowCodes.indexOf(event.keyCode);
    if (keyIndex !== -1) {
      event.preventDefault();
      var arrowCharacter = arrowCharacters[keyIndex];
      var card = row.children[userInput.length];
      card.textContent = arrowCharacter;
      userInput.push(event.keyCode);
      if (userInput.toString() === konamiCode.toString()) {
        // Trigger Easter egg here
        window.location.replace("nvhfuzoaze.html");
      } else if (
        userInput.length === konamiCode.length &&
        userInput.toString() !== konamiCode.toString()
      ) {
        // Reset user input if not equal to Konami code
        userInput = [];
        for (var i = 0; i < row.children.length; i++) {
          var card = row.children[i];
          card.textContent = "";
        }
      }
    } else if (event.keyCode >= 65 && event.keyCode <= 90) {
      var card = row.children[userInput.length];
      card.textContent = alphabet.charAt(event.keyCode - 65);
      userInput.push(event.keyCode);
      console.log(userInput);
      if (userInput.toString() === konamiCode.toString()) {
        // Trigger Easter egg here
        window.location.replace("nvhfuzoaze.html");
      } else if (
        userInput.length === konamiCode.length &&
        userInput.toString() !== konamiCode.toString()
      ) {
        // Reset user input if not equal to Konami code
        userInput = [];
        for (var i = 0; i < row.children.length; i++) {
          var card = row.children[i];
          card.textContent = "";
        }
      }
    }
  }
});

const title = document.querySelector(".title");
const modalContainer = document.querySelector(".modal-container");
const video = document.querySelector("video");

function preventScroll(e) {
  e.preventDefault();
}

title.addEventListener("click", () => {
  modalContainer.style.display = "flex";
  document.body.classList.add("modal-open");
  document.body.addEventListener("touchmove", preventScroll, {
    passive: false,
  });
});

modalContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-container")) {
    modalContainer.style.display = "none";
    video.pause();
    document.body.classList.remove("modal-open");
    document.body.removeEventListener("touchmove", preventScroll, {
      passive: false,
    });
  }
});
