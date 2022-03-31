const burger = document.querySelector('#burger');
const popup = document.querySelector('.popup');
const layout = document.querySelector('.layout');
const close = document.querySelector('.popup__close');
const gazvpol = document.querySelector('.lexa-go');
const lexa = document.querySelector('.lexa');
const koleso1 = document.querySelector('.koleso1');
const koleso2 = document.querySelector('.koleso2');
const semya = document.querySelector('.semya');
const noch = document.querySelector('.noch');
const sun = document.querySelector('.sun');
const toretto = document.querySelector('.toretto');

burger.addEventListener("click", () => {
    popup.classList.toggle('active');
});
layout.addEventListener("click", () => {
    popup.classList.toggle('active')
});
close.addEventListener("click", () => {
    popup.classList.toggle('active')
});
gazvpol.addEventListener("click", () => {
    lexa.classList.toggle('lexa-animate');
    koleso1.classList.toggle('koleso-animate');
    koleso2.classList.toggle('koleso-animate');
    noch.classList.toggle('noch-animate');
    sun.classList.toggle('sun-animate');
    toretto.classList.toggle('toretto-animate');
    semya.play()
});