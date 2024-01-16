const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const password = registerForm.elements.password.value;
    const email = registerForm.elements.email.value;
    if (!password && !email) {
        return alert('All fields must be completed')
    }

    const newUser = {
        password,
        email,
    }
    console.log(newUser);
    registerForm.reset();
}