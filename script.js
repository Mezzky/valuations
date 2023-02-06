// Variables
const hamburger = document.querySelector('#hamburger');
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header .navbar");
const ul = document.querySelector("header .navbar ul");
const appraisal = document.getElementById("appraisal");
const about = document.getElementById("about");
const line = document.getElementById("line");
const textApr = document.getElementById("textApraisal");
const textAbo = document.getElementById("textAbout");
const back = document.querySelectorAll("#back");
const logo = document.querySelector('header .logo');


// Scrolled Animation
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        logo.classList.add('scrolled');
    } else{
        logo.classList.remove('scrolled');
    }
});

// Hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
});

// Menu Toggle
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('slide');
    ul.classList.toggle('slide');
    textApr.classList.remove('show');
    textAbo.classList.remove('show');
    line.classList.remove('show');
});

// Multi List Link
appraisal.addEventListener('click', () => {
    textApr.classList.add('show');
    line.classList.add('show');
    ul.classList.add('show');
    textAbo.classList.remove('show');
});

about.addEventListener('click', () => {
    textAbo.classList.add('show');
    line.classList.add('show');
    ul.classList.add('show');
    textApr.classList.remove('show');
});

back.forEach(el => {
    el.addEventListener('click', () => {
        textApr.classList.remove('show');
        textAbo.classList.remove('show');
        line.classList.remove('show');
        ul.classList.remove('show');
    });
});