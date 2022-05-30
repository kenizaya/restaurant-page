import { pageLoad, home } from "./pageLoad";
import { contact } from "./contact";
import { menu } from "./menu";

import './style.css';

pageLoad();

const homePage = document.querySelector(".home");
const menuPage = document.querySelector(".menu");
const contactPage = document.querySelector(".contact");
const contentContainer = document.querySelector(".content-container");
const h1 = document.querySelector("h1");

h1.addEventListener('click', () => {
    contentContainer.innerHTML = "";
    home();
})

homePage.addEventListener('click', () => {
    contentContainer.innerHTML = "";
    home();
});

menuPage.addEventListener('click', () => {
    contentContainer.innerHTML = "";
    menu();
})

contactPage.addEventListener('click', () => {
    contentContainer.innerHTML = "";
    contact();
})