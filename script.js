// Variables
const hamburger = document.querySelector('#hamburger');
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header .navbar");
const ul = document.querySelector("header .navbar ul");
// const header = document.querySelector('header');

// Hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
});

// Menu Toggle
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('slide');
    ul.classList.toggle('slide');
});