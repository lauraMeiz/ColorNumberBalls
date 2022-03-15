function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// }

const colorPicker = document.querySelector("#head");
const numberPicker = document.querySelector("#number");
const sukurti = document.querySelector(".sukurti");
const burbulas = document.querySelector(".burb-row");
const istrinti = document.querySelector(".istrinti");

const balls = [];

sukurti.addEventListener("click", () => {
  // const balls = [];

  const apskritimas = {};
  const color = colorPicker.value;
  apskritimas.color = color;
  const number = numberPicker.value;
  apskritimas.number = number;
  balls.push(apskritimas);
  const naujas = document.createElement("div");

  const naujasNr = document.createTextNode(number);
  naujas.style.backgroundColor = color;
  naujas.style.padding = "20px";
  naujas.style.marginLeft = "20px";
  naujas.style.display = "flex";
  naujas.style.flexDirection = "column";
  naujas.style.flexWrap = "wrap";
  naujas.appendChild(naujasNr);
  burbulas.appendChild(naujas);
  localStorage.setItem("ballsSave", JSON.stringify(balls));
});

console.log(JSON.parse(localStorage.getItem("ballsSave")));
const matomas = JSON.parse(localStorage.getItem("ballsSave"));
matomas.forEach((el) => {
  console.log(el);
  const naujas = document.createElement("div");

  const naujasNr = document.createTextNode(el.number);
  naujas.style.backgroundColor = el.color;
  naujas.style.padding = "20px";
  naujas.style.marginLeft = "20px";
  naujas.style.display = "flex";
  naujas.style.flexDirection = "column";
  naujas.style.flexWrap = "wrap";
  naujas.appendChild(naujasNr);
  burbulas.appendChild(naujas);
});
istrinti.addEventListener("click", () => {
  balls.splice(0, 1);
  burbulas.firstChild.remove();
});

console.log(balls);
//balls.push(apskritimas);
