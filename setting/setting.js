function darkmode() {

    var darkmode = document.getElementById('dark-mode');
    var darkbody = document.getElementById('bg');

    if (bg.style.background != 'white') {
        bg.style.background = 'white';
    } else {
        bg.style.background = 'black';
    }
    if (bg.style.color != 'black') {
        bg.style.color = 'black';
    } else {
        bg.style.color = 'yellow';
    }
}