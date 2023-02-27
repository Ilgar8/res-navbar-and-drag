'use strict'
let header = document.querySelector("#header")
let navIco = document.querySelector("#header .nav-ico")
let ul = document.querySelector("#header ul")
navIco.addEventListener("click", function () {
    ul.classList.toggle("active")
   
})



window.onscroll = function () {
    if (window, scrollY > 150) {
        header.classList.add("active-header")
    }
    else (header.classList.remove("active-header"))
}


let loader = document.querySelector(".loader")
window.onload = function () {
    setTimeout(() => {
        loader.classList.add("active")
    }, 1000);
}

let dragItem = document.querySelectorAll("#dragArea .drag-item")
let dropArea = document.querySelector("#dropArea")

for (let i = 0; i < dragItem.length; i++) {
    dragItem[i].addEventListener("dragstart", function (e) {
        e.dataTransfer.setData('qonce', this.id)
        this.style.background = "red"

    })

}
dropArea.addEventListener("dragover", function (e) {
    e.preventDefault()
    this.style.background = "yellow"
})
dropArea.addEventListener("dragleave", function (m) {

    this.style.background = "transparent"
})

dropArea.addEventListener("drop", function (m) {
    m.preventDefault()
    let myId=m.dataTransfer.getData('qonce')
    let dragItem=document.getElementById(myId)
    dropArea.appendChild(dragItem)
})
// =================================\\

