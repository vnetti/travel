
export const burger = () => {
    const burgerButton = document.querySelector(".burger");
    const menu = document.querySelector(".menu");

    burgerButton.addEventListener("click", () => {
        burgerButton.classList.toggle("burger_active")
        menu.classList.toggle("menu_active");
    })

};

