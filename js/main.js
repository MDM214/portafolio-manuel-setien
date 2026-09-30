"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");
const navigationLinks = document.querySelectorAll(".main-navigation a");
const currentYear = document.querySelector("#current-year");
const homeLinks = document.querySelectorAll('a[href="#inicio"]');

function openMenu() {
    navigation.classList.add("is-open");
    menuButton.classList.add("is-open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Cerrar menú");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    navigation.classList.remove("is-open");
    menuButton.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú");
    document.body.classList.remove("menu-open");
}

function toggleMenu() {
    const menuIsOpen =
        menuButton.getAttribute("aria-expanded") === "true";

    if (menuIsOpen) {
        closeMenu();
        return;
    }

    openMenu();
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", toggleMenu);

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 760) {
            closeMenu();
        }
    });
}

homeLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        closeMenu();
    });
});
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}