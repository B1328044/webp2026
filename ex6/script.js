var container = document.getElementById('container');

// Generate a random a-z character
function randomChar() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

// Append 1-3 random a-z characters to the container text
function add_new_chars() {
    var numChars = Math.floor(Math.random() * 3) + 1; // 1 to 3
    for (var i = 0; i < numChars; i++) {
        container.textContent += randomChar();
    }
}

// On window.onload, generate 0-2 random a-z characters
window.onload = function() {
    var numChars = Math.floor(Math.random() * 3); // 0 to 2
    for (var i = 0; i < numChars; i++) {
        container.textContent += randomChar();
    }
};

// On keyup, check if typed key matches first character and remove it, then add new chars
window.addEventListener("keyup", function(e) {
    console.log(e.key);
    if (e.key.length === 1) {
        var str = container.textContent;
        // Check if first character matches the typed key
        if (str.length > 0 && str[0] === e.key) {
            container.textContent = str.substring(1);
        }
        add_new_chars();
    }
});
