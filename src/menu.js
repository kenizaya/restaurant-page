import CB from './assets/chicken-biryani.jpg';
import HP from './assets/hot-pot.jpg';
import NL from './assets/nasi-lemak.jpg';
import MEAL from './assets/meal.jpg';

export function menu() {
    const contentContainer = document.querySelector(".content-container");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    contentContainer.appendChild(menuContainer);

    // cb: chicken-biryani
    // hp: hot-pot
    // nl: nasi-lemak
    const cb = new Image();
    const hp = new Image();
    const nl = new Image();
    const meal = new Image();

    cb.src = CB;
    hp.src = HP;
    nl.src = NL;
    meal.src = MEAL;

    const cbDiv = document.createElement("div");
    cbDiv.classList.add("dish");

    const hpDiv = document.createElement("div");
    hpDiv.classList.add("dish");

    const nlDiv = document.createElement("div");
    nlDiv.classList.add("dish");

    const mealDiv = document.createElement("div");
    mealDiv.classList.add("dish");


    const cbH3 = document.createElement("h3");
    cbH3.textContent = "Chicken Biryani";

    const hpH3 = document.createElement("h3");
    hpH3.textContent = "Hot Pot";

    const nlH3 = document.createElement("h3");
    nlH3.textContent = "Nasi Lemak";

    const mealH3 = document.createElement("h3");
    mealH3.textContent = "Special Meal";


    const cbP = document.createElement("p");
    cbP.textContent = `Our Chicken Biryani has been specially made for those who love to have chicken
                        in every spoon of their biryani. The Equal amount of rice and chicken
                        is used to ensure that you get juicy chicken on every bite`;

    const hpP = document.createElement("p");
    hpP.textContent = `A colourful assortment of peppers, zucchini, broccoli and mushroom
                        in a toasted-peanut red-chilli sauce accompanied with a spicy chilli-bean fried rice
                        - a delightful summer meal! All our bowls are prepared fresh on your order.`;

    const nlP = document.createElement("p");
    nlP.textContent = `Tender pieces of boneless chicken are stir-fried and cooked further with the hot sambal sauce.
                        Served with peppered fried-rice, pickled cucumber and a boiled egg.
                        This is a great meal to keep YOU going through the day! `;

    const mealP = document.createElement("p");
    mealP.textContent = `Go ahead and indulge in this delicious super-saver chicken meal.
                        The Mexican Chicken Burrito lets you experience the exciting flavours of Mexico clubbed together in a bowl.
                        This teamed with Sticky Chicken Wings in spicy-sweet flavours is an excellent way to celebrate the month-end.`;


    cbDiv.append(cb, cbH3, cbP);
    hpDiv.append(hp, hpH3, hpP);
    nlDiv.append(nl, nlH3, nlP);
    mealDiv.append(meal, mealH3, mealP);

    menuContainer.append(cbDiv, hpDiv, nlDiv, mealDiv);
}