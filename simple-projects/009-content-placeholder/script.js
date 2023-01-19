const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML =
        '<img src="img.jpg" alt="" />'
    title.innerHTML = 'Please like this video '
    excerpt.innerHTML =
        'Sbuscribe my channel and share this video and please comment '
    profile_img.innerHTML =
        '<img src="img2.jpg" alt="" />'
    name.innerHTML = 'Ram Chaudhary'
    date.innerHTML = 'From U.P'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}