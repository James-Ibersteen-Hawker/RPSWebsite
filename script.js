window.onload = digitize();

function digitize() {
  let across = 10;
  let vert = 7;
  let base = document.getElementById("digitize");
  base.setAttribute("style", "background: green;");
  let container = document.getElementById("digiContainer");
  let divMeasure = Math.floor(base.offsetWidth / across);
  base.setAttribute("style", `height: ${divMeasure * vert}px;`);
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
}
