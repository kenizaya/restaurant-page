import BG from "./bg.jpg";

export function pageLoad() {
    const content = document.getElementById("content");
    console.log("Hello");

    // Add Header 
    const header = document.createElement("div");
    const h1 = document.createElement("h1");
    header.classList.add("header");
    h1.textContent = "Odin Restaurant";

    const ul = document.createElement("ul");
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const contact = document.createElement("li");

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    home.classList.add("home");
    menu.classList.add("menu");
    contact.classList.add("contact");

    content.appendChild(header);
    header.append(h1, ul);
    ul.append(home, menu, contact);

    // Add background to content, below header
    const bg = new Image();
    bg.src = BG;
    content.appendChild(bg);


    // Add divs for main content below image
    const main = document.createElement("div");
    const left = document.createElement("div");
    const right = document.createElement("div");

    main.classList.add("main");
    left.classList.add("left");
    right.classList.add("right");

    content.appendChild(main);
    main.appendChild(left);
    main.appendChild(right);

    const h2 = document.createElement("h2");
    h2.textContent = "Welcome to Odin Restaurant";

    const lp1 = document.createElement("p");
    const lp2 = document.createElement("p");
    const lp3 = document.createElement("p");

    lp1.textContent = `Our new menus, conceived by Chef Thor and his culinary team, 
                        showcase ingredient led, contemporary cuisine that is firmly rooted in the classics;
                        bold, bright flavours are presented in skillfully executed dishes that echo nostalgia with a modern and local twist.`;

    lp2.textContent = `Our award-winning wine list is deep and global,
                        carefully selected to deliver value and quality -
                        let us guide you to your favourites or help you discover new varietals.`;

    lp3.textContent = `Open for lunch and dinner, with cocktail bar and happy hour in between
                        and our own private dining room overlooking the art gallery,
                        Hawksworth delivers an array of experiences to suit your individual mood and preferences.`;

    left.append(h2, lp1, lp2, lp3);


    const rp1 = document.createElement("p");
    const rp2 = document.createElement("p");

    rp1.textContent = `"Greatest night of my life. The food was delicious,
                        and the service was out of this world.
                        A must in Asgard."`;
    rp2.textContent = `"We had the best night out in last 18 months!!
                        Odin's food and service was as good as it gets
                        maybe the best in the last ten years of coming here!
                        Can't wait to come back soon! Much thanks to the whole team!"`;

    const timing = document.createElement("div");
    timing.classList.add("timing");

    right.append(rp1, rp2, timing);

    const rh2 = document.createElement("h2");
    rh2.textContent = "Hours of Operation";

    const tp1 = document.createElement("p");
    const tp2 = document.createElement("p");

    tp1.textContent = "Monday to Friday 11:20am to 4pm";
    const span1 = document.createElement("span");
    span1.textContent = "Lunch: ";
    tp1.prepend(span1);

    tp2.textContent = `Sunday to Thursday 6pm to 10pm,
                        Friday & Saturday 6pm to 11pm`;
    const span2 = document.createElement("span");
    span2.textContent = "Dinner: ";
    tp2.prepend(span2);

    timing.append(rh2, tp1, tp2);
}

