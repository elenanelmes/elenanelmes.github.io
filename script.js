const colours = ["#ffbf46", "#648381", "#8acb88", "#e4fde1", "#be4577"];

const numDots = 30;
const dots = [];

for (let i = 0; i < numDots; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.background = colours[Math.floor(Math.random() * colours.length)];
  dot.style.left = `${Math.floor(Math.random() * 100)}vw`;
  dot.style.top = `${Math.floor(Math.random() * 100)}vh`;

  dots.push(dot);
  document.body.append(dot);
}

const numStars = 20;
const stars = [];

for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");
  star.classList.add("star");
  star.style.color = colours[Math.floor(Math.random() * colours.length)];
  star.style.left = `${Math.floor(Math.random() * 100)}vw`;
  star.style.top = `${Math.floor(Math.random() * 100)}vh`;

  stars.push(star);
  document.body.append(star);
}
