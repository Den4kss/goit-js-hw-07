import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const palettePicturesRef = document.querySelector(".gallery");
const palettePictures = createCardsGallery(galleryItems);
palettePicturesRef.insertAdjacentHTML("beforeend", palettePictures);

function createCardsGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src='${preview}'
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `;
    })
    .join("");
}
palettePicturesRef.addEventListener("click", onImageClick);
function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    ` <img src="${event.target.dataset.source}">`
  );

  instance.show();
  palettePicturesRef.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
