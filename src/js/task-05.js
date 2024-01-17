const textForHello = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

input.addEventListener('input', () => {

    if (input.value) {
        textForHello.textContent = input.value;
        return
    }

    textForHello.textContent = 'Anonymous!'


})

