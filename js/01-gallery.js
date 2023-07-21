import { galleryItems } from './gallery-items.js';
// Change code below this line


const list = document.querySelector('.gallery');

list.style.setProperty("display", "flex")
list.style.setProperty("gap", "10px")
list.style.setProperty("list-style", "none")
list.style.setProperty("flex-wrap", "wrap")

const markup = galleryItems.map(image => {
    return `<li class = "gallery__item" style="width: calc((100% - 10px * 2) / 3);"><a class="gallery__link" href="${image.original}"><img src="${image.preview}" class="gallery__image" alt ="${image.description}" data-source="${image.original}" /></a></li>`
}).join('');

list.insertAdjacentHTML("afterbegin", markup)

list.addEventListener('click', clickOnImage)
let instance
function clickOnImage(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return
    }
    instance = basicLightbox.create(`
    <img src="${event.target.getAttribute('data-source')}">
	`, {
        onClose: function handleKeyDown(event) {
            if (event.key === 'Escape' && instance) {
                instance.close();

            }
        }
    }
    );
    instance.show();
}

document.addEventListener('keydown', handleKeyDown);
function handleKeyDown(event) {
    if (event.key === 'Escape' && instance) {
        instance.close();

    }


}