function play() {
    var audio = document.getElementById("audio");
    var flag = document.getElementById("flag");
    var btn = document.getElementById("btn");
    var bg = document.getElementById('bg')
    flag.style.visibility = 'inherit';
    audio.play();
    btn.style.display = 'none';
    bg.style.background = 'green';
}

const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'HAPPY REPUBLIC DAY 🤩'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)