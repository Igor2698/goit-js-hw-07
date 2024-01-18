
const textForHello = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

input.addEventListener('input', () => {

  if (input.value) {
    textForHello.textContent = input.value;
    return
  }

  textForHello.textContent = 'Anonymous!'


})








// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];


// const list = document.querySelector('.gallery');
// const marcup = images.map(image => `<li class="list-item"><img class='image'src = ${image.url} alt = ${image.alt} /></li>`
// ).join('');
// console.log(marcup);

// list.insertAdjacentHTML('afterbegin', marcup)
