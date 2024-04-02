// Array of strings for typing animation
var typedStrings = ["UI/UX Designer", "Graphics Designer", "Full Stack Web Developer"];
var typedIndex = 0; // Index to track which string is currently being typed
var typedTimeout; // Timeout variable to control typing speed

function typeString() {
    // Clear existing timeout
    clearTimeout(typedTimeout);
    
    // Get the span element
    var myTypeSpan = document.querySelector('.myType');
    
    // Check if index is within bounds
    if (typedIndex < typedStrings.length) {
        var currentString = typedStrings[typedIndex];
        var currentStringLength = currentString.length;

        // Remove characters one by one
        if (myTypeSpan.textContent.length > 0) {
            myTypeSpan.textContent = currentString.substring(0, myTypeSpan.textContent.length - 1);
            typedTimeout = setTimeout(typeString, 50); // Typing speed: 50ms
        } else {
            // Once all characters are removed, type the next string
            typedIndex++;
            setTimeout(typeNextString, 1000); // Wait for 1 second before typing the next string
        }
    } else {
        // Reset index to loop through strings again
        typedIndex = 0;
        // Restart typing animation
        setTimeout(typeString, 1000);
    }
}

// Function to type the next string
function typeNextString() {
    // Get the next string to type
    var nextString = typedStrings[typedIndex];
    // Get the span element
    var myTypeSpan = document.querySelector('.myType');
    // Type the next string character by character
    typeCharacter(0, nextString, myTypeSpan);
}

// Function to type a string character by character
function typeCharacter(index, string, element) {
    if (index < string.length) {
        element.textContent += string.charAt(index);
        setTimeout(function() {
            typeCharacter(index + 1, string, element);
        }, 50); // Typing speed: 50ms
    } else {
        // Once all characters are typed, start deleting the string
        setTimeout(typeString, 1000); // Wait for 1 second before deleting the string
    }
}

// Start typing animation when the page loads
document.addEventListener("DOMContentLoaded", function() {
    typeString();
});