function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}



const input = document.querySelector('input');
const container = document.querySelector('#controls');
const boxes = document.querySelector('#boxes')
let size = 30;


container.addEventListener('click', onButtonClick)
function onButtonClick(event) {
    const button = event.target.closest('button');
    if (!button) {
        return
        // Якщо клік не на кнопку - виходимо з функції
    }

    if (button.textContent === 'Create') {
        let newBoxesHTML = ''
        // Якщо клікаємо на кнопку "Створити", то реалізуємо наступний код

        for (let i = 0; i < input.value; i += 1) {
            newBoxesHTML += `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`;
            size += 10;
        }
        boxes.innerHTML = newBoxesHTML;
        return
    }

    boxes.innerHTML = '';
    size = 30;
    input.value = 0;



}


