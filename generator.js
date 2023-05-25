"use strict";

const againBtn = document.querySelector(".again");
const generateBtn = document.querySelector(".geneRate");
const promptBox = document.querySelector(".prompttext");
const ogText = "🤓Are you ready?";
const prompt = [
  "Share your favorite hobby and explain why you enjoy it.",
  "Describe a memorable family vacation and what made it special.",
  "Talk about a funny or embarrassing moment that happened to you recently.",
  "Share your favorite book or movie and explain why you recommend it.",
  "Describe a popular local dish from your region and why you think it is delicious.",
  "Share a personal story of overcoming a challenge or obstacle.",
  "Talk about a memorable school event or field trip and why it was memorable.",
  "Describe your dream vacation destination and what you would do there.",
  "Talk about a recent community service or volunteer experience and how it impacted you.",
  "Share your favorite way to spend free time and explain why you enjoy it.",
];

const start = function () {
  promptBox.textContent = ogText;
};

start();

generateBtn.addEventListener("click", function () {
  const question = Math.trunc(Math.random() * 10);
  //console.log(question);
  promptBox.textContent = prompt[question];
});

againBtn.addEventListener("click", function () {
  start();
});
