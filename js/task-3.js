
const textForHello = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

input.addEventListener('input', () => {
  const trimmedValue = input.value.trim();
  textForHello.textContent = trimmedValue || 'Анонім';
})
