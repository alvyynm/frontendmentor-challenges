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
    findClickedBtn(i);
  });
}

function findClickedBtn(x) {
  //here x takes the value of which button was clicked by user
  for (let i = 0; i < btns.length; i++) {
    if (i != x) {
      //do this for all non-clicked button by the user
      answers[i].classList.add("hidden");
      btnQuestion[i].classList.remove("active");
      accordionIcon[i].classList.remove("rotate-icon");
    }
  }
}
