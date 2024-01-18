const categories = document.querySelectorAll('#categories > li');
console.log(`Number of categories: ${categories.length}`);


categories.forEach(elem => {
    console.log(`Category:
${elem.firstElementChild.textContent}`);
    console.log(`Elements: 
${elem.lastElementChild.children.length}`);
})