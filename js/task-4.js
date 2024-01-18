const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const password = registerForm.elements.password.value.trim();
    const email = registerForm.elements.email.value.trim();
    if (!password || !email) {
        return alert('All fields must be completed')
    }
    const newUser = {
        email,
        password,
    }
    console.log(newUser);
    registerForm.reset();
}







