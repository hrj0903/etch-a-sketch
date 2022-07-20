const container = document.createElement('div');
const button = document.createElement('button');

container.classList.add('container');
button.textContent = 'Change Size';

document.body.appendChild(container);
document.body.insertBefore(button, container);

const makeGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    const square = document.createElement('div');
    square.classList.add('grid-item');
    square.addEventListener('mouseover', changeColor);
    container.appendChild(square);
  }
};

const changeColor = (e) => {
  const rgbR = Math.floor(Math.random() * 256);
  const rgbG = Math.floor(Math.random() * 256);
  const rgbB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${rgbR},${rgbG},${rgbB})`;
};

const changeSize = () => {
  const size = parseInt(prompt('100을 넘지 않는 숫자를 입력하세요.'));
  if (size > 100) {
    alert('100보다 큰 사이즈를 입력하셨어요. 다시 입력하세요.');
    changeSize();
  } else {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
      container.removeChild(element);
    });
    makeGrid(size);
  }
};

button.addEventListener('click', changeSize);

makeGrid(16);


