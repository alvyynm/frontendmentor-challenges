"use strict";

const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const hamburgerBtn = document.querySelector(".icon-hamburger");
const closeBtn = document.querySelector(".icon-close");
const menuNavToggle = document.querySelectorAll(".menu-dropdown-toggle");
const icons = document.querySelectorAll(".updownarrow");

// Event handlers

navToggle.addEventListener("click", function () {
  primaryNav.classList.contains("show")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.classList.toggle("show");
  hamburgerBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
});

// menuNavToggle.forEach((toggle) => {
//   toggle.addEventListener("click", function () {
//     toggle.classList.toggle("reveal");
//   });
// });

// Switch displayed arrows in nav buttons
menuNavToggle.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    icons.forEach((icon, i) => {
      if (el.dataset.num === icon.dataset.id) {
        icon.setAttribute("src", "./images/icon-arrow-up.svg");
      }
    });
  });
});

menuNavToggle.forEach((el) => {
  el.addEventListener("mouseleave", () => {
    icons.forEach((icon, i) => {
      icon.setAttribute("src", "./images/icon-arrow-down.svg");
    });
  });
});
