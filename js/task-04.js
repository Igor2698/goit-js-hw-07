const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const password = registerForm.elements.password.value;
    const email = registerForm.elements.email.value;
    if (!password || !email) {
        return alert('All fields must be completed')
    }

    const newUser = {
        password,
        email,
    }
    console.log(newUser);
    registerForm.reset();
}




// const counter = document.querySelector('#value');
// let valueOfCounter = 0;
// const counterContainer = document.querySelector('#counter');

// counterContainer.addEventListener('click', (event) => {
//     const button = event.target.closest('button');
//     if (!button) {
//         return
//     }
//     const action = button.dataset.action;
//     if (action === 'increment') {
//         valueOfCounter += 1;

//     }
//     else { valueOfCounter -= 1; }
//     counter.textContent = valueOfCounter;

// })












