let txt = document.getElementById('gtxt')
let img = document.getElementById('gimg')

function anOver(){
    txt.style.opacity = 1
    txt.style.visibility = 'visible'
}

function anOut(){
    txt.style.opacity = 0
    txt.style.visibility = 'hidden'

}

function imgOver() {
    img.style.transform = 'translateX(-48px)'
}

function imgOut() {
    img.style.transform = 'translateX(0px)'
}
