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

        // Display characters one by one
        myTypeSpan.textContent = currentString.substring(0, myTypeSpan.textContent.length + 1);

        // Schedule next character typing
        if (myTypeSpan.textContent.length < currentStringLength) {
            typedTimeout = setTimeout(typeString, 100); // Typing speed: 100ms
        } else {
            // If current string is fully typed, move to the next string after 1 second
            typedIndex++;
            setTimeout(typeString, 1000); // Wait for 1 second before typing the next string
        }
    } else {
        // Reset index to loop through strings again
        typedIndex = 0;
        // Restart typing animation
        setTimeout(typeString, 1000);
    }
}

// Start typing animation when the page loads
document.addEventListener("DOMContentLoaded", function() {
    typeString();
});