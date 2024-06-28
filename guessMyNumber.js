"use strict";

// document.querySelector(".message").textContent = "🥳 correct answer";
// document.querySelector(".score").textContent = 100;
// document.querySelector(".number").textContent = 50;
// document.querySelector(".guess").value = 50;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);

  if (!guess) {
    // (document.querySelector(".message").textContent = "⛔ no number selected");
    displayMessage("⛔ no number selected");
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = `🎉 You Won the game`;
    displayMessage(`🎉 You Won the game`);

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber? ` Oh, The no is too high`: `Oh, The no is too small`;
      displayMessage(
        guess > secretNumber
          ? ` Oh, The no is too high`
          : `Oh, The no is too small`
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = `You lost the game`;
      displayMessage(`You lost the game`);
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(
  //       ".message"
  //     ).textContent = ` Oh, The no is too high`;
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = `You lost the game`;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(
  //       ".message"
  //     ).textContent = `Oh, The no is too small`;
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   }
  //    else {
  //   document.querySelector(".message").textContent = `You lost the game`;
  // }
  // }
});

// make Again button functional to reset the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
