const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')


ingredients.forEach(ingredient => {
  const elem = document.createElement('li');
  elem.textContent = ingredient;
  elem.classList.add('item');
  console.log(elem);
  list.append(elem);



})
