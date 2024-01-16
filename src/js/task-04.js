const counter = document.querySelector('#value');
let valueOfCounter = 0;
const counterContainer = document.querySelector('#counter');

counterContainer.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) {
        return
    }
    const action = button.dataset.action;
    if (action === 'increment') {
        valueOfCounter += 1;

    }
    else { valueOfCounter -= 1; }
    counter.textContent = valueOfCounter;

})












