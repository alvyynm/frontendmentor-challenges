"use strict";

const btns = document.querySelectorAll(".question");
const btnQuestion = document.querySelectorAll(".faq");
const accordionIcon = document.querySelectorAll(".arrow-icon");
const answers = document.querySelectorAll(".answers");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    if (answers[i].classList.contains("hidden")) {
      answers[i].classList.remove("hidden");
      btnQuestion[i].classList.add("active");
      accordionIcon[i].classList.add("rotate-icon");
    } else {
      answers[i].classList.add("hidden");
      btnQuestion[i].classList.remove("active");
      accordionIcon[i].classList.remove("rotate-icon");
    }
  });
}
