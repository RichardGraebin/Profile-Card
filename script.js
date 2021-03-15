let txt = document.getElementById('gtxt')
let img = document.getElementById('gimg')

function anOver(){
    txt.style.opacity = 1
    txt.style.visibility = 'visible'
    txt.style.transition = 'visibility 0.5s ease,opacity 0.5s ease'
}

function anOut(){
    txt.style.opacity = 0
    txt.style.visibility = 'hidden'
    txt.style.transition = 'visibility 0.1s linear,opacity 0.1s linear'
}

function imgOver() {
    img.style.transform = 'translateX(-48px)'
}

function imgOut() {
    img.style.transform = 'translateX(0px)'
}

function masterOver() {
    imgOver()
    anOver()
}

function masterOut() {
    anOut()
    imgOut()
} 
