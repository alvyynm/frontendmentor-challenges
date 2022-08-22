"use strict";

const submitBtn = document.getElementById("submit-btn");
const ratingCard = document.getElementById("card-rating");
const thankYouCard = document.querySelector(".card-thankyou");
const ratingBtns = document.querySelectorAll(".rating-btn");
const userScore = document.querySelector(".user-rating");
const ratingMessage = document.querySelector(".rating-score");

const showThankYou = function () {
  ratingCard.classList.add("hidden");
  thankYouCard.classList.remove("hidden");
};

submitBtn.addEventListener("click", showThankYou);
