var a;

function show_hide() {
    if (a == 1) {
        document.getElementById("image").style.display = "inline";
        return a = 0;
    } else {
        document.getElementById("image").style.display = "none";
        return a = 1;
    }
}