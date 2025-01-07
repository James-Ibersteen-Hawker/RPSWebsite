function digitize() {
  let across = 10;
  let vert = 7;
  let base = document.getElementById("digitize");
  base.setAttribute("style", "background: green;");
  let container = document.getElementById("digiContainer");
  let subContainer = document.getElementById("subDigiContainer");
  let divMeasure = Math.floor(base.offsetWidth / across);
  base.setAttribute(
    "style",
    `height: ${divMeasure * vert}px !important; width: ${
      base.offsetWidth
    }px !important;`
  );
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
      let animClass = `#box_${i}_${q} {
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
      let anim = `@keyframes box_${i}_${q}_sub {
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
      let animClass = `#box_${i}_${q}_sub {
      background: black;
      animation-name: box_${i}_${q}_sub;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-delay: ${randomInt}s;
      }`;
      style.append(animClass);
      style.append(anim);
    }
  } //make pulse anims
  let subDivArr = [];
  for (let i = 0; i < vert; i++) {
    subDivArr.push(new Array());
    let row = document.createElement("div");
    row.classList.add("digiRow");
    for (let q = 0; q < across; q++) {
      let box = document.createElement("div");
      subDivArr[i].push(box);
      box.classList.add("digiBox");
      box.id = `box_${i}_${q}_sub`;
      box.setAttribute(
        "style",
        `height: ${Math.round(divMeasure / 2)}px; width: ${Math.round(
          divMeasure / 2
        )}px; margin: ${Math.round(divMeasure / 3)}px;`
      );
      row.append(box);
    }
    subContainer.append(row);
  }
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
      animation-duration: 2s;
      animation-iteration-count: 1;
      animation-timing-function: linear;
      background: transparent !important;
      border: none !important;
      animation-delay:0s;
      animation-fill-mode: forwards;
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
  //magic number is 1.27
  let fadeAnim = ` @keyframes fadeOff {
  0% {
  background: black;
  }
  20% {
  background: green;
  }    
  21% {
  background: radial-gradient(green ${99 - (100 / 79) * 1}%, black ${
    (100 % -(100 / 99)) * 1
  });
  }
  24% {
  background: radial-gradient(green ${99 - (100 / 79) * 2}%, black ${
    (100 % -(100 / 99)) * 2
  });
  }
  27% {
  background: radial-gradient(green ${99 - (100 / 79) * 3}%, black ${
    (100 % -(100 / 99)) * 3
  });
  }
  30% {
  background: radial-gradient(green ${99 - (100 / 79) * 4}%, black ${
    (100 % -(100 / 99)) * 4
  });
  }
  33% {
  background: radial-gradient(green ${99 - (100 / 79) * 5}%, black ${
    (100 % -(100 / 99)) * 5
  });
  }
  36% {
  background: radial-gradient(green ${99 - (100 / 79) * 6}%, black ${
    (100 % -(100 / 99)) * 6
  });
  }
  39% {
  background: radial-gradient(green ${99 - (100 / 79) * 7}%, black ${
    (100 % -(100 / 99)) * 7
  });
  }
  42% {
  background: radial-gradient(green ${99 - (100 / 79) * 8}%, black ${
    (100 % -(100 / 99)) * 8
  });
  }
  45% {
  background: radial-gradient(green ${99 - (100 / 79) * 9}%, black ${
    (100 % -(100 / 99)) * 9
  });
  }
  48% {
  background: radial-gradient(green ${99 - (100 / 79) * 10}%, black ${
    100 - (100 / 99) * 10
  }%);
  }
  51% {
  background: radial-gradient(green ${99 - (100 / 79) * 11}%, black ${
    100 - (100 / 99) * 11
  }%);
  }
  54% {
  background: radial-gradient(green ${99 - (100 / 79) * 12}%, black ${
    100 - (100 / 99) * 12
  }%);
  }
  57% {
  background: radial-gradient(green ${99 - (100 / 79) * 13}%, black ${
    100 - (100 / 99) * 13
  }%);
  }
  60% {
  background: radial-gradient(green ${99 - (100 / 79) * 14}%, black ${
    100 - (100 / 99) * 14
  }%);
  }
  63% {
  background: radial-gradient(green ${99 - (100 / 79) * 15}%, black ${
    100 - (100 / 99) * 15
  }%);
  }
  66% {
  background: radial-gradient(green ${99 - (100 / 79) * 16}%, black ${
    100 - (100 / 99) * 16
  }%);
  }
  69% {
  background: radial-gradient(green ${99 - (100 / 79) * 17}%, black ${
    100 - (100 / 99) * 17
  }%);
  }
  72% {
  background: radial-gradient(green ${99 - (100 / 79) * 18}%, black ${
    100 - (100 / 99) * 18
  }%);
  }
  75% {
  background: radial-gradient(green ${99 - (100 / 79) * 19}%, black ${
    100 - (100 / 99) * 19
  }%);
  }
  78% {
  background: radial-gradient(green ${99 - (100 / 79) * 20}%, black ${
    100 - (100 / 99) * 20
  }%);
  }
  91% {
  background: radial-gradient(green ${99 - (100 / 79) * 21}%, black ${
    100 - (100 / 99) * 21
  }%);
  }
  94% {
  background: radial-gradient(green ${99 - (100 / 79) * 22}%, black ${
    100 - (100 / 99) * 22
  }%);
  }
  97% {
  background: radial-gradient(green ${99 - (100 / 79) * 23}%, black ${
    100 - (100 / 99) * 23
  }%);
  }
  100% {
  background: radial-gradient(green ${99 - (100 / 79) * 24}%, black ${
    100 - (100 / 99) * 24
  }%);
  }
  }
  `;
  let fadeAnimClass = `.fadeAnimClass {
  animation-name: fadeOff;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  }`;
  base.classList.add("off");
  style.append(scaleClass);
  style.append(scaleAnim);
  style.append(fadeAnim);
  style.append(fadeAnimClass);
  let allBoxes = document.querySelectorAll("[id^='box']");
  console.log(allBoxes);
  setTimeout(
    () => {
      for (let i = 0; i < allBoxes.length; i++) {
        allBoxes.classList.remove("");
        allBoxes[i].classList.add("fadeAnimClass");
      }
    },
    3000,
    allBoxes
  );
}
