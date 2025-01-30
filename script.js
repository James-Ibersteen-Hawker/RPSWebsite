"use strict";
let round = 1;
let maxRound = 5;
let username = prompt("What is your username?").split(/\W|_/g)[0] || "User";
let scores = {
  userScore: 0,
  computerScore: 0,
  messages: [
    ["The Matrix Watches", "The Matrix Watches", "The Matrix Watches"],
    ["Victory is Yours", "The Matrix Obeys", "Enter into Greatness"],
    ["Access Denied", "Victim of the Matrix", "You Lost"],
  ],
  final: function () {
    let finalWinner;
    let result = this.userScore - this.computerScore;
    if (result > 0) finalWinner = 1;
    else if (result < 0) finalWinner = 2;
    else finalWinner = 0;
    let finalMessage =
      this.messages[finalWinner][
        Math.floor(Math.random() * this.messages[finalWinner].length)
      ];
    document.getElementById("digitize_screen").classList.add("fadeInFull");
    let winnerA = document.getElementById("winner");
    winnerA.classList.remove("d-none");
    winnerA.classList.add("pulsing");
    winnerA.classList.add("fadeInFull2");
    document.getElementById("winnerName").textContent = username;
    document.getElementById("winnerText").textContent = finalMessage;
    document.getElementById("userChoice1").textContent = this.userScore;
    document
      .getElementById("userChoice1")
      .setAttribute("style", "font-family: 'Arial', sans-serif;");
    document.getElementById("compChoice1").textContent = this.computerScore;
    document
      .getElementById("compChoice1")
      .setAttribute("style", "font-family: 'Arial', sans-serif;");
    document.getElementById("resetButton").classList.remove("d-none");
  },
  print: function () {
    document.getElementById(
      "userScore"
    ).textContent = `${username}'s Score: ${this.userScore}`;
    document.getElementById(
      "compScore"
    ).textContent = `Matrix's Score: ${this.computerScore}`;
  },
  incr: function (arg) {
    if (arg == 1) {
      this.userScore++;
    } else if (arg == 2) {
      this.computerScore++;
    } else if (arg == 0) {
      this.userScore;
      this.computerScore;
    }
  },
};
let secondScreenYes = false;
let userChoice;
let compChoice;
let winner;
let opp = {
  r: "paper",
  p: "scissors",
  s: "rock",
};
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
function loadOut() {
  let digitizeFrazzle = document.getElementById("digitize_frazzle");
  digitizeFrazzle.innerHTML = "";
  digitizeFrazzle.remove();
  digitize();
}
function digitize() {
  secondScreenYes = true;
  let across = 10;
  let vert = 7;
  let base = document.getElementById("digitize");
  base.classList.remove("pulsing");
  let container = document.getElementById("digiContainer");
  let nextScreen = document.getElementById("container-2");
  container.classList.remove("d-none");
  let divMeasure = Math.floor(base.offsetWidth / across);
  base.setAttribute(
    "style",
    `height: ${divMeasure * vert}px !important; width: ${
      base.offsetWidth
    }px !important;`
  );
  let button = document.getElementById("playButton");
  button.setAttribute("style", "pointer-events: none;");
  let divArr = [];
  for (let i = 0; i < vert; i++) {
    divArr.push(new Array());
    let row = document.createElement("div");
    row.classList.add("digiRow");
    for (let q = 0; q < across; q++) {
      let box = document.createElement("div");
      divArr[i].push(box);
      box.classList.add("digiBox");
      box.id = `box_${i}_${q}`;
      box.classList.add(`box_${i}_${q}`);
      box.setAttribute(
        "style",
        `height: ${divMeasure}px; width: ${divMeasure}px;`
      );
      row.append(box);
    }
    container.append(row);
  }
  let style = document.getElementsByTagName("STYLE")[0];
  for (let i = 0; i < divArr.length; i++) {
    for (let q = 0; q < divArr[i].length; q++) {
      let randomInt = Math.random() * 1.2;
      let direcInt = Math.round(Math.random() * 10);
      let direc = [];
      let direcOpp = [];
      if (direcInt < 3) {
        direc[0] = "right: -30px;";
        direc[1] = "left: 0px;";
        direc[2] = "top: -30px;";
        direc[3] = "bottom: 0px";
        direcOpp[0] = "left: -30px;";
        direcOpp[1] = "right: 0px;";
        direcOpp[2] = "bottom: -30px;";
        direcOpp[3] = "top: 0px";
      } else if ((direcInt >= 3) & (direcInt < 5)) {
        direc[0] = "left: -30px;";
        direc[1] = "right: 0px;";
        direc[2] = "top: -30px;";
        direc[3] = "bottom: 0px";
        direcOpp[0] = "right: -30px;";
        direcOpp[1] = "left: 0px;";
        direcOpp[2] = "botttom: -30px;";
        direcOpp[3] = "top: 0px";
      } else if (direcInt >= 5 && direcInt < 8) {
        direc[0] = "right: -30px;";
        direc[1] = "left: 0px;";
        direc[2] = "botttom: -30px;";
        direc[3] = "top: 0px";
        direcOpp[0] = "left: -30px;";
        direcOpp[1] = "right: 0px;";
        direcOpp[2] = "top: -30px;";
        direcOpp[3] = "bottom: 0px";
      } else if (direcInt >= 8) {
        direc[0] = "left: -30px;";
        direc[1] = "right: 0px;";
        direc[2] = "bottom: -30px;";
        direc[3] = "top: 0px";
        direcOpp[0] = "right: -30px;";
        direcOpp[1] = "left: 0px;";
        direcOpp[2] = "top: -30px;";
        direcOpp[3] = "bottom: 0px";
      }
      let anim = `@keyframes box_${i}_${q} {
        0% {
      transform: scale(0.8);
      ${direc.join("")}
        }
      19.99999% {
      transform: scale(0.8);
      ${direc.join("")}
      }
        20% {
      transform: scale(0.4);
      ${direcOpp.join("")}
        }
      39.99999% {
      transform: scale(0.4);
      ${direcOpp.join("")}
      }
        40% {
      transform: scale(1.2);
      ${direc.join("")}
        }
      59.99999% {
      transform: scale(1.2);
      ${direc.join("")}
      }
        60% {
      transform: scale(0.7);
      ${direcOpp.join("")}
        }
      79.99999% {
      transform: scale(0.7);
      ${direcOpp.join("")}
      }
        80% {
      transform: scale(0.1);
      ${direc.join("")}
        }
      99.99999% {
      transform: scale(0.1);
      ${direc.join("")}
      }
        100% {
      transform: scale(0.5);
      ${direcOpp.join("")}
        }
      }`;
      let animClass = `.box_${i}_${q} {
      background: black;
      animation-name: box_${i}_${q};
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-delay: ${randomInt}s;
      }`;
      style.append(animClass);
      style.append(anim);
    }
  } //make pulse anims

  let scaleAnim = `@keyframes scaleAnim {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      transform: translate(-50%, -50%) scale(${
        (Number(base.offsetHeight) / Number(window.innerHeight)) * 10
      });
    }
  }`;
  let scaleClass = `.off {
      animation-name: scaleAnim;
      animation-duration: 5s;
      animation-iteration-count: 1;
      background: transparent !important;
      border: none !important;
      animation-delay:0s;
      animation-fill-mode: forwards;
      animation-timing-function: steps(20);
  }
  .off::before {
        content: "";
        border: none !important;
        width: calc(100%);
        height: calc(100%);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
  `;
  base.classList.add("off");
  style.append(scaleClass);
  style.append(scaleAnim);
  setTimeout(
    () => {
      let fadeIn = document.getElementById("digitize_screen");
      fadeIn.classList.add("fadeIn");
      setTimeout(
        () => {
          base.classList.add("d-none");
          nextScreen.classList.remove("d-none");
          nextScreen.classList.add("d-flex");
          setTimeout(() => {
            frazzleSecond();
          }, 20);
        },
        2000,
        base,
        nextScreen
      );
      setTimeout(
        () => {
          fadeIn.classList.remove("fadeIn");
        },
        3000,
        fadeIn
      );
    },
    2500,
    base,
    nextScreen
  );
}
window.onload = function startUp() {
  document.getElementById(
    "rounds"
  ).textContent = `Round ${round} of ${maxRound}`;
  document.getElementById("userScore").textContent = `${username}'s Score: 0`;
  document.getElementById("compScore").textContent = `Matrix's Score: 0`;
  frazzle("#digitize_frazzle");
};
function frazzle(param) {
  let base = document.querySelector(param);
  base.innerHTML = "";
  let digitizeBase = document.getElementById("digitize");
  base.setAttribute(
    "style",
    `height: ${digitizeBase.offsetHeight}px; width: ${digitizeBase.offsetWidth}px;`
  );
  let across = Math.ceil(base.offsetWidth / 30);
  let vert = Math.ceil(base.offsetHeight / 30);
  let divArr = [];
  for (let i = 0; i < vert; i++) {
    divArr.push([]);
    let row = document.createElement("div");
    row.classList.add("digiRow");
    for (let q = 0; q < across; q++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.classList.add(`frazzlebox_${i}_${q}`);
      divArr[i].push(box);
      row.append(box);
    }
    base.append(row);
  }
  let style = document.getElementsByTagName("STYLE")[0];
  for (let i = 0; i < vert; i++) {
    for (let q = 0; q < across; q++) {
      if (i == 0 || i == vert - 1 || q == 0 || q == across - 1) {
        let randomInt = Math.random() * 1.2;
        let direcInt = Math.round(Math.random() * 10);
        let direc = [];
        let direcOpp = [];
        if (direcInt < 3) {
          direc[0] = "right: -30px;";
          direc[1] = "left: 0px;";
          direc[2] = "top: -30px;";
          direc[3] = "bottom: 0px";
          direcOpp[0] = "left: -30px;";
          direcOpp[1] = "right: 0px;";
          direcOpp[2] = "bottom: -30px;";
          direcOpp[3] = "top: 0px";
        } else if ((direcInt >= 3) & (direcInt < 5)) {
          direc[0] = "left: -30px;";
          direc[1] = "right: 0px;";
          direc[2] = "top: -30px;";
          direc[3] = "bottom: 0px";
          direcOpp[0] = "right: -30px;";
          direcOpp[1] = "left: 0px;";
          direcOpp[2] = "botttom: -30px;";
          direcOpp[3] = "top: 0px";
        } else if (direcInt >= 5 && direcInt < 8) {
          direc[0] = "right: -30px;";
          direc[1] = "left: 0px;";
          direc[2] = "botttom: -30px;";
          direc[3] = "top: 0px";
          direcOpp[0] = "left: -30px;";
          direcOpp[1] = "right: 0px;";
          direcOpp[2] = "top: -30px;";
          direcOpp[3] = "bottom: 0px";
        } else if (direcInt >= 8) {
          direc[0] = "left: -30px;";
          direc[1] = "right: 0px;";
          direc[2] = "bottom: -30px;";
          direc[3] = "top: 0px";
          direcOpp[0] = "right: -30px;";
          direcOpp[1] = "left: 0px;";
          direcOpp[2] = "top: -30px;";
          direcOpp[3] = "bottom: 0px";
        }
        let anim = `@keyframes frazzlebox_${i}_${q} {
        0% {
      transform: scale(0.8);
      ${direc.join("")}
        }
      19.99999% {
      transform: scale(0.8);
      ${direc.join("")}
      }
        20% {
      transform: scale(0.4);
      ${direcOpp.join("")}
        }
      39.99999% {
      transform: scale(0.4);
      ${direcOpp.join("")}
      }
        40% {
      transform: scale(1.2);
      ${direc.join("")}
        }
      59.99999% {
      transform: scale(1.2);
      ${direc.join("")}
      }
        60% {
      transform: scale(0.7);
      ${direcOpp.join("")}
        }
      79.99999% {
      transform: scale(0.7);
      ${direcOpp.join("")}
      }
        80% {
      transform: scale(0.1);
      ${direc.join("")}
        }
      99.99999% {
      transform: scale(0.1);
      ${direc.join("")}
      }
        100% {
      transform: scale(0.5);
      ${direcOpp.join("")}
        }
      }`;
        let animClass = `.frazzlebox_${i}_${q} {
      background: black;
      animation-name: frazzlebox_${i}_${q};
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-delay: ${randomInt}s;
      }`;
        style.append(animClass);
        style.append(anim);
      }
    }
  } //make pulse anims
}
function frazzleSecond() {
  let secondBase = document.querySelector("#digitize_frazzle_2");
  secondBase.innerHTML = "";
  let across = Math.ceil(secondBase.offsetWidth / 30);
  let vert = Math.ceil(secondBase.offsetHeight / 30);
  let divArr = [];
  for (let i = 0; i < vert; i++) {
    divArr.push([]);
    let row = document.createElement("div");
    row.classList.add("digiRow");
    for (let q = 0; q < across; q++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.classList.add(`frazzlebox2_${i}_${q}`);
      divArr[i].push(box);
      row.append(box);
    }
    secondBase.append(row);
  }
  let style = document.getElementsByTagName("STYLE")[0];
  for (let i = 0; i < vert; i++) {
    for (let q = 0; q < across; q++) {
      if (i == 0 || i == vert - 1 || q == 0 || q == across - 1) {
        let randomInt = Math.random() * 1.2;
        let direcInt = Math.round(Math.random() * 10);
        let direc = [];
        let direcOpp = [];
        if (direcInt < 3) {
          direc[0] = "right: -30px;";
          direc[1] = "left: 0px;";
          direc[2] = "top: -30px;";
          direc[3] = "bottom: 0px";
          direcOpp[0] = "left: -30px;";
          direcOpp[1] = "right: 0px;";
          direcOpp[2] = "bottom: -30px;";
          direcOpp[3] = "top: 0px";
        } else if ((direcInt >= 3) & (direcInt < 5)) {
          direc[0] = "left: -30px;";
          direc[1] = "right: 0px;";
          direc[2] = "top: -30px;";
          direc[3] = "bottom: 0px";
          direcOpp[0] = "right: -30px;";
          direcOpp[1] = "left: 0px;";
          direcOpp[2] = "botttom: -30px;";
          direcOpp[3] = "top: 0px";
        } else if (direcInt >= 5 && direcInt < 8) {
          direc[0] = "right: -30px;";
          direc[1] = "left: 0px;";
          direc[2] = "botttom: -30px;";
          direc[3] = "top: 0px";
          direcOpp[0] = "left: -30px;";
          direcOpp[1] = "right: 0px;";
          direcOpp[2] = "top: -30px;";
          direcOpp[3] = "bottom: 0px";
        } else if (direcInt >= 8) {
          direc[0] = "left: -30px;";
          direc[1] = "right: 0px;";
          direc[2] = "bottom: -30px;";
          direc[3] = "top: 0px";
          direcOpp[0] = "right: -30px;";
          direcOpp[1] = "left: 0px;";
          direcOpp[2] = "top: -30px;";
          direcOpp[3] = "bottom: 0px";
        }
        let anim = `@keyframes frazzlebox2_${i}_${q} {
        0% {
      transform: scale(0.8);
      ${direc.join("")}
        }
      19.99999% {
      transform: scale(0.8);
      ${direc.join("")}
      }
        20% {
      transform: scale(0.4);
      ${direcOpp.join("")}
        }
      39.99999% {
      transform: scale(0.4);
      ${direcOpp.join("")}
      }
        40% {
      transform: scale(1.2);
      ${direc.join("")}
        }
      59.99999% {
      transform: scale(1.2);
      ${direc.join("")}
      }
        60% {
      transform: scale(0.7);
      ${direcOpp.join("")}
        }
      79.99999% {
      transform: scale(0.7);
      ${direcOpp.join("")}
      }
        80% {
      transform: scale(0.1);
      ${direc.join("")}
        }
      99.99999% {
      transform: scale(0.1);
      ${direc.join("")}
      }
        100% {
      transform: scale(0.5);
      ${direcOpp.join("")}
        }
      }`;
        let animClass = `.frazzlebox2_${i}_${q} {
      animation-name: frazzlebox2_${i}_${q};
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-delay: ${randomInt}s;
      }`;
        style.append(animClass);
        style.append(anim);
      }
    }
  } //make pulse anims
}
window.onresize = function resized() {
  if (secondScreenYes == false) {
    frazzle("#digitize_frazzle");
  } else if (secondScreenYes == true) {
    frazzleSecond();
  }
};
let compChoices = ["rock", "scissors", "paper"];
let winOBJ = {
  tie: function () {
    scores.incr(0);
    return "It's a tie!";
  },
  rvp: {
    run: function () {
      scores.incr(2);
      return "The Matrix wins!";
    },
  },
  rvs: {
    run: function () {
      scores.incr(1);
      return `${username} wins!`;
    },
  },
  pvr: {
    run: function () {
      scores.incr(1);
      return `${username} wins!`;
    },
  },
  pvs: {
    run: function () {
      scores.incr(2);
      return "The Matrix wins!";
    },
  },
  svr: {
    run: function () {
      scores.incr(2);
      return "The Matrix wins!";
    },
  },
  svp: {
    run: function () {
      scores.incr(1);
      return `${username} wins!`;
    },
  },
};
function playGame(arg) {
  if (round <= maxRound) {
    countScreen();
    compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    userChoice = arg;
    compChoices.push(opp[userChoice.charAt(0).toLowerCase()]);
    let slot = `${arg.charAt(0).toLowerCase()}v${compChoice
      .charAt(0)
      .toLowerCase()}`;
    if (slot.charAt(0) == slot.charAt(slot.length - 1)) winner = winOBJ.tie();
    else {
      winner = winOBJ[slot].run();
      round++;
    }
  }
}
let count = 3;
function countDown(elem) {
  if (count > 0) {
    elem.textContent = count;
    switch (count) {
    }
    setTimeout(() => {
      count--;
      showChoices();
      countDown(elem);
    }, 1000);
  } else {
    digitizeAnalyze();
  }
}
function countScreen() {
  count = 3;
  let fadeIn = document.getElementById("digitize_screen");
  fadeIn.classList.add("fadeInFull");
  setTimeout(() => {
    let loader = document.querySelector("#loader");
    loader.classList.add("anaFadeIn");
    document.getElementById("userNameBox").textContent = username.split(" ")[0];
    setTimeout(
      () => {
        loader.classList.remove("anaFadeIn");
      },
      800,
      loader
    );
    loader.classList.remove("d-none");
    loader.classList.add("pulsing");
    let compPickElem = document.getElementById("compPick");
    compPickElem.textContent = "";
    let userPickElem = document.getElementById("userPick");
    userPickElem.textContent = "";
    countDown(document.querySelector("#countdown"));
  }, 1000);
}
function showChoices() {
  if (count == 2) {
    let userPickElem = document.getElementById("userPick");
    userPickElem.textContent =
      userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
  } else if (count == 1) {
    let compPickElem = document.getElementById("compPick");
    compPickElem.textContent =
      compChoice.charAt(0).toUpperCase() + compChoice.slice(1).toLowerCase();
  }
}
function digitizeAnalyze() {
  scores.print();
  if (document.getElementById("analyzeFrazzleStyles")) {
    document.getElementById("analyzeFrazzleStyles").remove();
  }
  let across = 7;
  let vert = 7;
  let base = document.getElementById("loader");
  base.classList.remove("pulsing");
  let container = document.getElementById("digiContainerZ");
  container.classList.remove("d-none");
  let divMeasure = Math.floor(base.offsetWidth / across);
  base.setAttribute(
    "style",
    `height: ${divMeasure * vert}px !important; width: ${
      base.offsetWidth
    }px !important;`
  );
  let button = document.getElementById("playButton");
  button.setAttribute("style", "pointer-events: none;");
  let divArr = [];
  for (let i = 0; i < vert; i++) {
    divArr.push(new Array());
    let row = document.createElement("div");
    row.classList.add("digiRow_analyze");
    for (let q = 0; q < across; q++) {
      let box = document.createElement("div");
      divArr[i].push(box);
      box.classList.add("digiBox_analyze");
      box.id = `box_${i}_${q}`;
      box.classList.add(`box_${i}_${q}_analyze`);
      box.setAttribute(
        "style",
        `height: ${divMeasure}px; width: ${divMeasure}px;`
      );
      row.append(box);
    }
    container.append(row);
  }
  let style = document.createElement("style");
  style.id = "analyzeFrazzleStyles";
  document.head.append(style);
  for (let i = 0; i < divArr.length; i++) {
    for (let q = 0; q < divArr[i].length; q++) {
      let randomInt = Math.random() * 1.2;
      let direcInt = Math.round(Math.random() * 10);
      let direc = [];
      let direcOpp = [];
      if (direcInt < 3) {
        direc[0] = "right: -30px;";
        direc[1] = "left: 0px;";
        direc[2] = "top: -30px;";
        direc[3] = "bottom: 0px";
        direcOpp[0] = "left: -30px;";
        direcOpp[1] = "right: 0px;";
        direcOpp[2] = "bottom: -30px;";
        direcOpp[3] = "top: 0px";
      } else if ((direcInt >= 3) & (direcInt < 5)) {
        direc[0] = "left: -30px;";
        direc[1] = "right: 0px;";
        direc[2] = "top: -30px;";
        direc[3] = "bottom: 0px";
        direcOpp[0] = "right: -30px;";
        direcOpp[1] = "left: 0px;";
        direcOpp[2] = "botttom: -30px;";
        direcOpp[3] = "top: 0px";
      } else if (direcInt >= 5 && direcInt < 8) {
        direc[0] = "right: -30px;";
        direc[1] = "left: 0px;";
        direc[2] = "botttom: -30px;";
        direc[3] = "top: 0px";
        direcOpp[0] = "left: -30px;";
        direcOpp[1] = "right: 0px;";
        direcOpp[2] = "top: -30px;";
        direcOpp[3] = "bottom: 0px";
      } else if (direcInt >= 8) {
        direc[0] = "left: -30px;";
        direc[1] = "right: 0px;";
        direc[2] = "bottom: -30px;";
        direc[3] = "top: 0px";
        direcOpp[0] = "right: -30px;";
        direcOpp[1] = "left: 0px;";
        direcOpp[2] = "top: -30px;";
        direcOpp[3] = "bottom: 0px";
      }
      let anim = `@keyframes box_${i}_${q}_analyze {
        0% {
      transform: scale(0.8);
      ${direc.join("")}
        }
      19.99999% {
      transform: scale(0.8);
      ${direc.join("")}
      }
        20% {
      transform: scale(0.4);
      ${direcOpp.join("")}
        }
      39.99999% {
      transform: scale(0.4);
      ${direcOpp.join("")}
      }
        40% {
      transform: scale(1.2);
      ${direc.join("")}
        }
      59.99999% {
      transform: scale(1.2);
      ${direc.join("")}
      }
        60% {
      transform: scale(0.7);
      ${direcOpp.join("")}
        }
      79.99999% {
      transform: scale(0.7);
      ${direcOpp.join("")}
      }
        80% {
      transform: scale(0.1);
      ${direc.join("")}
        }
      99.99999% {
      transform: scale(0.1);
      ${direc.join("")}
      }
        100% {
      transform: scale(0.5);
      ${direcOpp.join("")}
        }
      }`;
      let animClass = `.box_${i}_${q}_analyze {
      background: black;
      animation-name: box_${i}_${q};
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-delay: ${randomInt}s;
      }`;
      style.append(animClass);
      style.append(anim);
    }
  } //make pulse anims
  let scaleAnim = `@keyframes scaleAnim1 {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    100% {
      transform: translate(-50%, -50%) scale(${
        (Number(base.offsetHeight) / Number(window.innerHeight)) * 10
      });
    }
  }`;
  let scaleClass = `.off1 {
      animation-name: scaleAnim1;
      animation-duration: 5s;
      animation-iteration-count: 1;
      background: transparent !important;
      border: none !important;
      animation-delay:0s;
      animation-fill-mode: forwards;
      animation-timing-function: steps(20);
  }
  .off1::before {
        content: "";
        border: none !important;
        width: calc(100%);
        height: calc(100%);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
  `;
  style.append(scaleClass);
  style.append(scaleAnim);
  base.classList.add("off1");
  setTimeout(
    () => {
      let digitizeScreen = document.getElementById("digitize_screen2");
      digitizeScreen.classList.add("fadeIn2");
      setTimeout(
        () => {
          base.classList.add("d-none");
          base.classList.remove("off1");
          container.remove();
          let newContainer = document.createElement("div");
          newContainer.id = "digiContainerZ";
          base.append(newContainer);
        },
        2000,
        base,
        container
      );
      setTimeout(
        () => {
          digitizeScreen.classList.remove("fadeIn2");
          winAlert();
        },
        3000,
        digitizeScreen
      );
    },
    2500,
    base,
    container
  );
}
function winAlert() {
  let winnerA = document.getElementById("winner");
  winnerA.classList.remove("d-none");
  winnerA.classList.add("pulsing");
  winnerA.classList.add("fadeInFull2");
  document.getElementById("winnerName").textContent = username;
  document.getElementById("winnerText").textContent = winner;
  document.getElementById("userChoice1").textContent = userChoice;
  document.getElementById("compChoice1").textContent = compChoice;
  setTimeout(
    () => {
      winnerA.classList.remove("fadeInFull2");
      setTimeout(
        () => {
          winnerA.classList.remove("pulsing");
          winnerA.classList.add("fadeOut");
          setTimeout(
            () => {
              winnerA.classList.remove("fadeOut");
              winnerA.classList.add("d-none");
              //fadeToWin, after 1 sec
              if (round > maxRound) {
                setTimeout(() => {
                  scores.final();
                }, 1000);
              } else {
                //fadeToMain, after 1 sec
                setTimeout(() => {
                  document
                    .getElementById("digitize_screen")
                    .classList.add("fadeOut");
                  document
                    .getElementById("digitize_screen")
                    .classList.remove("fadeInFull");
                  setTimeout(() => {
                    document
                      .getElementById("digitize_screen")
                      .classList.remove("fadeOut");
                    document
                      .getElementById("digitize_screen")
                      .classList.add("d-none");
                  }, 2000);
                }, 1000);
              }
            },
            2000,
            winnerA
          );
        },
        5000,
        winnerA
      );
    },
    1000,
    winnerA
  );
}
