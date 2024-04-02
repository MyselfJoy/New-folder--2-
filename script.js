var typedStrings = ["UI/UX Designer", "Graphics Designer", "Full Stack Web Developer"];
var typedIndex = 0;
var typedTimeout;

// Create a separate element for the blinking cursor
var cursorSpan = document.createElement('span');
cursorSpan.classList.add('cursor');

function typeString() {
  var myTypeSpan = document.querySelector('.myType');
  myTypeSpan.appendChild(cursorSpan); // Insert the cursor element

  var currentString = typedStrings[typedIndex % typedStrings.length];
  var currentStringLength = currentString.length;

  function typeCharacter(index) {
    if (index <= currentStringLength) {
      myTypeSpan.textContent = currentString.substring(0, index);
      setTimeout(function() {
        typeCharacter(index + 1);
      }, 50);
    } else {
      setTimeout(eraseString, 1000);
    }
  }

  function eraseString() {
    var currentText = myTypeSpan.textContent;
    if (currentText.length > 0) {
      myTypeSpan.textContent = currentText.substring(0, currentText.length - 1);
      setTimeout(eraseString, 50);
    } else {
      typedIndex++;
      setTimeout(typeString, 1000);
    }
  }

  typeCharacter(0);
}

document.addEventListener("DOMContentLoaded", function() {
  typeString();
});
