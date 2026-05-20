var container = document.getElementById('container');
var wrong_count = 0;

function add_new_chars(x) {
    var n = Math.floor(Math.random() * x) + 1;
    var str = "";

    for (let i = 0; i < n; i++) {
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }

    return str;
}

window.onload = function() {
    var n = Math.floor(Math.random() * 3);
    var str = "";

    for (let i = 0; i < n; i++) {
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }

    container.textContent = str;
};

window.addEventListener("keyup", function(e) {

    if (e.key.length === 1) {

        var firstone = container.textContent.substring(0, 1);

        if (container.textContent.length > 0 && e.key === firstone) {
            container.textContent = container.textContent.substring(1);
            wrong_count = 0;
        } else {
            wrong_count++;
        }

        container.textContent += add_new_chars(3);

        if (wrong_count === 3) {
            container.textContent += add_new_chars(3);
            wrong_count = 0;
        }
    }
});