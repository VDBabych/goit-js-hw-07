import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryMarkup = galleryItems.map(e => {
    return `<a class="gallery__item" href="${e.original}">
  <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
</a>`
}).join('');

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
})

