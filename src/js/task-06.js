const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {

    if (input.value.length === Number(input.dataset.length)) {
        input.style.borderColor = 'green';
    }
    else {
        input.style.borderColor = 'red';
    }
})