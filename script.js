resetColors();

function resetColors() {
  const boxes = document.querySelectorAll('.box');
  boxes[0].style.backgroundColor = 'red';
  boxes[0].style.border = '2px solid black';
  boxes[1].style.backgroundColor = 'blue';
  boxes[1].style.border = '2px dashed yellow';
  boxes[2].style.backgroundColor = 'green';
  boxes[2].style.border = '2px solid purple';
}

function changeColorAndBorder(boxId) {
  const box = document.getElementById(boxId);
  box.style.backgroundColor = getRandomColor();
  box.style.border = '4px solid ' + getRandomColor();
}

function changeAllColors() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.style.backgroundColor = getRandomColor();
    box.style.border = '4px solid ' + getRandomColor();
  });
}

function hideBox(boxId) {
  const box = document.getElementById(boxId);
  box.style.visibility = 'hidden';
}

function hideAllBoxes() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.style.visibility = 'hidden';
  });
}



function showAllBoxes() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.style.visibility = 'visible';
  });
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
