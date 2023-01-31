// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery");
const itemMarkup = createImageCards(galleryItems);
function createImageCards(images) {
      return images
            .map(({ preview, original, description }) => {
                  return `
      <div class="gallery__item">
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
</div>`;
            })
              .join("");

}

gallery.insertAdjacentHTML("beforeend", itemMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
captionsData: "alt",
captionDelay: 250, });

// Change code below this line

console.log(galleryItems);
