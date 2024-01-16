const textForHello = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

input.addEventListener('input', () => {

    textForHello.textContent = input.value;
})

