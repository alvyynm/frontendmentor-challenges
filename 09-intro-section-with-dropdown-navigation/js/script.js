"use strict";

const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const hamburgerBtn = document.querySelector(".icon-hamburger");
const closeBtn = document.querySelector(".icon-close");
const menuNavToggle = document.querySelectorAll(".menu-dropdown-toggle");

// Event handlers

navToggle.addEventListener("click", function () {
  primaryNav.classList.contains("show")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.classList.toggle("show");
  hamburgerBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
});

menuNavToggle.forEach((toggle) => {
  toggle.addEventListener("click", function () {
    console.log(`Clicked!`);
  });
});
