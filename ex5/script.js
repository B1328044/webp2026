var count = 1;

function addfunction() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = `CLICK ME (${count})`;
    btn.setAttribute("id", "btn_" + count++);
    btn.setAttribute("class", "btn btn-outline-danger");
    document.body.appendChild(btn);
}

function delfunction() {
    var btn = document.getElementById("btn_" + --count);
    if (btn) {
        document.body.removeChild(btn);
    }
    if (count < 1) {
        count = 1;
    }
}
