let index = 0
let carousel = document.getElementById("carousel")
let max = carousel.getElementsByTagName("div").length
let timeout = setTimeout(() => {swapCarousel("r")}, 5000)

function swapCarousel(direction) {
    if(direction == "r") index++
    else if(direction == "l") index--
    else return
    if(index >= max) index = 0
    else if(index < 0) index = max-1
    carousel.style.transform = `translateX(-${(index) * 45}vh`
    clearTimeout(timeout)
    timeout = setTimeout(() => {swapCarousel("r")}, 5000)
}
