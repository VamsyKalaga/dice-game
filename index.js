var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imgSrc1 = "./images/dice" + randomNumber1 + ".png";
var imgSrc2 = "./images/dice" + randomNumber2 + ".png";

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", imgSrc1);
img2.setAttribute("src", imgSrc2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Play 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Play 2 Wins🚩";
} else {
  document.querySelector("h1").textContent = "🚩 Draw! 🚩";
}

// if (randomNumber1 == 1) {
//   document.querySelectorAll("img")[0].setAttribute("src", "./images/dice1.png");
// } else if (randomNumber1 == 2) {
//   document.querySelectorAll("img")[0].setAttribute("src", "./images/dice2.png");
// } else if (randomNumber1 == 3) {
//   document.querySelectorAll("img")[0].setAttribute("src", "./images/dice3.png");
// } else if (randomNumber1 == 4) {
//   document.querySelectorAll("img")[0].setAttribute("src", "./images/dice4.png");
// } else if (randomNumber1 == 5) {
//   document.querySelectorAll("img")[0].setAttribute("src", "./images/dice5.png");
// } else if (randomNumber1 == 6) {
//   document.querySelectorAll("img")[0].setAttribute("src", "./images/dice6.png");
// }
// if (randomNumber2 == 1) {
//   document.querySelectorAll("img")[1].setAttribute("src", "./images/dice1.png");
// } else if (randomNumber2 == 2) {
//   document.querySelectorAll("img")[1].setAttribute("src", "./images/dice2.png");
// } else if (randomNumber2 == 3) {
//   document.querySelectorAll("img")[1].setAttribute("src", "./images/dice3.png");
// } else if (randomNumber2 == 4) {
//   document.querySelectorAll("img")[1].setAttribute("src", "./images/dice4.png");
// } else if (randomNumber2 == 5) {
//   document.querySelectorAll("img")[1].setAttribute("src", "./images/dice5.png");
// } else if (randomNumber2 == 6) {
//   document.querySelectorAll("img")[1].setAttribute("src", "./images/dice6.png");
// }
