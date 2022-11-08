import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = createMurkupFromObjArr(galleryItems)

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener('click', onGalleryItemClick);



function onGalleryItemClick(event) {
    if (event.target.nodeName !== 'IMG') {
        return
    };

    event.preventDefault();

    const optionsForInstace = {
        onShow: () => {document.addEventListener('keydown', escPressListener)},
        onClose: () => {document.removeEventListener('keydown', escPressListener)}
    }

    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`,
    optionsForInstace);
    
    instance.show()

    function escPressListener(e) {
        if (e.code === 'Escape') {
        instance.close()
        }
    }
}


function createMurkupFromObjArr(arr) {
   return arr.map(el => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"/>
    </a>
    </div>`
}).join("")
}

   


// function onGalleryItemClick(event) {
//     if (event.target.nodeName !== 'IMG') {
//         return
//     };

//     event.preventDefault();
//     const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">
//     `);
//     instance.show()

//     document.addEventListener('keydown', escPressListener)

//     function escPressListener(e) {
//         console.log(e);
//     if (!document.querySelector('.basicLightbox')) {
//         document.removeEventListener('keydown', escPressListener)
//         }

//     if (e.code === 'Escape') {
//         instance.close()
//         }
//     }
// }


    
    