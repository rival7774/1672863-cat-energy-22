"use strict";

if (document.querySelector(".main-menu")) {
  const header = document.querySelector(".page-header");
  const menu = document.querySelector(".main-menu");
  const menuButton = document.querySelector(".button-menu");
  const menuButtonSpan = document.querySelector(".button-menu__item");

  if (header.classList.contains("main-menu--no-js")) {
    header.classList.remove("main-menu--no-js");
  }

  menuButton.addEventListener("click", () => {
    menuButtonSpan.classList.toggle("button-menu__item--active");
    menu.classList.toggle("main-menu--active");
  });
}
