import { galleryItems } from './gallery-items.js';
// Change code below this line


const list = document.querySelector('.gallery');

list.style.setProperty("display", "flex")
list.style.setProperty("gap", "10px")
list.style.setProperty("list-style", "none")
list.style.setProperty("flex-wrap", "wrap")

const markup = galleryItems.map(image => {
    return `<li class = "gallery__item" style="width: calc((100% - 10px * 2) / 3);"><a class="gallery__link" href="${image.original}"><img src="${image.preview}" width = "800" class="gallery__image" alt ="${image.description}" data-source="${image.original}" /></a></li>`
}).join('');

list.insertAdjacentHTML("afterbegin", markup)

list.addEventListener('click', clickOnImage,)

function clickOnImage(event) {
    if (event.target.nodeName !== "IMG") {
        return
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute('data-source')}">
	`).show()



}