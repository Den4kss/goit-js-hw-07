import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const palettePicturesRef = document.querySelector(".gallery");
const palettePictures = createCardsGallery(galleryItems);
palettePicturesRef.insertAdjacentHTML("beforeend", palettePictures);

function createCardsGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}
palettePicturesRef.addEventListener("click", onImageClick);
function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  let gallery = new SimpleLightbox(".gallery a");
  gallery.on("show.simplelightbox", function () {
    // do something…
  });

  gallery.on("error.simplelightbox", function (e) {
    console.log(e); // some usefull information
  });
}
