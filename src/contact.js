export function contact() {
    const contentContainer = document.querySelector(".content-container");

    const info = document.createElement("div");
    info.classList.add("info");

    contentContainer.appendChild(info);

    const ph = document.createElement("h2");
    const eh = document.createElement("h2");
    const ah = document.createElement("h2");

    ph.textContent = "Phone";
    eh.textContent = "Email";
    ah.textContent = "Address";

    const tel = document.createElement("p");
    const email = document.createElement("p");
    const address = document.createElement("p");

    tel.textContent = "123.456.7890";
    email.textContent = "info@odinrestaurant.com";
    address.textContent = "101 Some Lane, Some Place, Some City";

    info.append(ph, tel, eh, email, ah, address);
}