function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');

let size = 30;

createButton.addEventListener('click', onCreateButtonClick);
destroyButton.addEventListener('click', onDestroyButtonClick)

function onCreateButtonClick() {
    boxes.innerHTML = '';

    const fragment = document.createDocumentFragment();

    if (Number(input.value) > 100) {
        return
    }

    for (let i = 0; i < Number(input.value); i += 1) {

        const divEl = document.createElement('div');
        divEl.style.width = `${size}px`;
        divEl.style.height = `${size}px`;
        divEl.style.backgroundColor = getRandomHexColor();

        fragment.appendChild(divEl);
        size += 10;
    }

    input.value = 0;
    boxes.appendChild(fragment);
    size = 30;
    return
}

function onDestroyButtonClick() {
    boxes.innerHTML = '';
    input.value = 0;
}

