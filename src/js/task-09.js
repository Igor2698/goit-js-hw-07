function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeButton = document.querySelector('.change-color');
const changeText = document.querySelector('.color')
colorChangeButton.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  changeText.textContent = getRandomHexColor();
})

