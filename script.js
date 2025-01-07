function digitize() {
  let across = 10;
  let vert = 7;
  let base = document.getElementById("digitize");
  base.setAttribute("style", "background: green;");
  let container = document.getElementById("digiContainer");
  let divMeasure = Math.floor(base.offsetWidth / across);
  base.setAttribute(
    "style",
    `height: ${divMeasure * vert}px !important; width: ${
      base.offsetWidth
    }px !important; background: transparent; border: none;`
  );
  let divArr = [];
  for (let i = 0; i < vert; i++) {
    divArr.push(new Array());
    let row = document.createElement("div");
    row.classList.add("digiRow");
    for (let q = 0; q < across; q++) {
      let box = document.createElement("div");
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
  let style = document.getElementsByTagName("style")[0];
  for (let i = 0; i < divArr.length; i++) {
    for (let q = 0; q < divArr[i].length; q++) {
      let anim = `@keyframes box_${i}_${q} {
        0% {
      translate: scale(0.8);
      left: -30px;
      right: 0;
        }
        20% {
      translate: scale(0.4);
      left: 0;
      right: -30px;
        }
        40% {
      translate: scale(1.2);
      left: -30px;
      right: 0;
        }
        60% {
      translate: scale(0.7);
      left: 0;
      right: -30px;
        }
        80% {
      translate: scale(0.1);
      left: -30px;
      right: 0;
        }
        100% {
      translate: scale(0.5);
      left: 0;
      right: -30px;
        }
      }`;
      let animClass = `#box_${i}_${q} {
      background: red !important;
      animation-name: box_${i}_${q};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-delay: ${i + q}s;
      }`;
      style.insertAdjacentHTML("beforebegin", animClass);
      style.insertAdjacentHTML("beforebegin", anim);
    }
  }
  alert(style.innerHTML);
}
