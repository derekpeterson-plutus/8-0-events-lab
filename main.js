// Do not change the code below.

const main = document.querySelector('main');
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.classList.add('cell');
  main.append(div);
}
// You may write your code here!

//Passed all lab tests:
let currentColor = document.getElementById('current-color');
let colors = document.getElementsByClassName('color');
let cells = document.getElementsByClassName('cell');

for (let color of colors) {
  color.addEventListener('click', (event) => {
    currentColor.style.background = event.target.style.background;
  });
}

for (let cell of cells) {
  cell.addEventListener('click', (event) => {
    event.target.style.background = currentColor.style.background;
  });
}

//Additional features:
for (let color of colors) {
  color.addEventListener('mousedown', (event) => {
    currentColor.style.background = event.target.style.background;
  });
}

for (let cell of cells) {
  cell.addEventListener('mouseover', (event) => {
    event.target.style.background = currentColor.style.background;
  });
}
