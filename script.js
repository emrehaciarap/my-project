// script.js

// Modal ve ilgili öğeleri seçin
const modal = document.getElementById("myModal");

const btn = document.getElementById("openModal");
const btnTwo = document.getElementById("openModal-2");
const btnThree = document.getElementById("openModal-3");

const imageOne = document.getElementById("img-1-r");
const modalİmageOne = document.getElementById("img-1");
imageOne.onclick = function () {
    modalİmageOne.style.display = "block"
    modalİmageTwo.style.display = "none"
    modalİmageThree.style.display = "none"
}

const imageTwo = document.getElementById("img-2-r");
const modalİmageTwo = document.getElementById("img-2");

imageTwo.onclick = function () {
    modalİmageTwo.style.display = "block"
    modalİmageThree.style.display = "none"
    modalİmageOne.style.display = "none"
}

const imageThree = document.getElementById("img-3-r");
const modalİmageThree = document.getElementById("img-3");

imageThree.onclick = function () {
    modalİmageThree.style.display = "block"
    modalİmageTwo.style.display = "none"
    modalİmageOne.style.display = "none"
}


const closeBtn = document.getElementsByClassName("close")[0];

// Butona tıklanınca modal açılır
btn.onclick = function() {
    modal.style.display = "block";
}
btnTwo.onclick = function() {
    modal.style.display = "block";
}
btnThree.onclick = function() {
    modal.style.display = "block";
}

// Kapat düğmesine tıklanınca modal kapanır
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Modal dışına tıklanınca modal kapanır
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
