import { pageLoad } from "./pageLoad";
import './style.css';

pageLoad();

const home = document.querySelector(".home");
const content = document.querySelector("#content");

home.addEventListener('click', () => {
    content.innerHTML = "";
    pageLoad();
});