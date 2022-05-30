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
    empty(contentContainer);
    home();
})

homePage.addEventListener('click', () => {
    empty(contentContainer);
    home();
});

menuPage.addEventListener('click', () => {
    empty(contentContainer);
    menu();
})

contactPage.addEventListener('click', () => {
    empty(contentContainer);
    contact();
})

const empty = (el)=>{
    while(el.firstChild){
      el.removeChild(el.firstChild);
    }
  } 