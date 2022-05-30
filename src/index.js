import { pageLoad, home } from "./pageLoad";
import { contact } from "./contact";
import { menu } from "./menu";

import './style.css';

pageLoad();

const homePage = document.querySelector(".home");
const menuPage = document.querySelector(".menu");
const contactPage = document.querySelector(".contact");
const content = document.querySelector("#content");
const contentContainer = document.querySelector(".content-container");

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