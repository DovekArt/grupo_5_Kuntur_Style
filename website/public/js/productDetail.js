// Mostrar el modal de imágenes cuando se haga clic en la imagen principal
const imageContainer = document.querySelector('.gallery__image-container');
const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click', () => {
  imagesModal.style.display ='grid';
});

closeModalBtn.addEventListener('click', () => {
  imagesModal.style.display = 'none';
});

// Cambiar las imágenes principales desde los thumbnails
const galleryThumbnails = document.querySelector('.gallery__thumbnails');

galleryThumbnails.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('gallery__thumbnail')) {
    const index = Array.from(target.parentNode.children).indexOf(target);
    changeImage(imageContainer, index);
    changeImage(modalImageContainer, index);
  }
});

// Cambiar imágenes del modal con flechas
const previusModalBtn = document.querySelector('.modal-gallery__previus');
const nextModalBtn = document.querySelector('.modal-gallery__next');
const modalImageContainer = document.querySelector('.modal-gallery__image-container');

nextModalBtn.addEventListener('click', () => {
  changeImageByDirection(modalImageContainer, 1);
});

previusModalBtn.addEventListener('click', () => {
  changeImageByDirection(modalImageContainer, -1);
});

// Cambiar imágenes con los botones next y previous
const nextGalleryBtn = document.querySelector('.gallery__next');
const previusGalleryBtn = document.querySelector('.gallery__previus');
const imageUrls = [
  'bermuda-1.jpg',
  'bermuda-2.jpg',
  'campera-1.jpg',
  'campera-3.jpg'
];
let imgIndex = 0;

nextGalleryBtn.addEventListener('click', () => {
  changeImage(imageContainer, imgIndex);
  changeNextImage(imageContainer);
});

previusGalleryBtn.addEventListener('click', () => {
  changeImage(imageContainer, imgIndex);
  changePreviusImage(imageContainer);
});

// Incremento del contador + y -
const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');
const userInput = document.querySelector('.input__number');
let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
  userInputNumber++;
  userInput.value = userInputNumber;
  console.log(userInputNumber);
});

minusBtn.addEventListener('click', () => {
  userInputNumber--;
  if (userInputNumber <= 0) {
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
  console.log(userInputNumber);
});

// Funciones
function changeImage(container, index) {
  container.style.backgroundImage = `url("../../public/img/productos/${imageUrls[index]}")`;
}

function changeNextImage(imageContainer) {
  imgIndex = (imgIndex + 1) % imageUrls.length;
  changeImage(imageContainer, imgIndex);
}

function changePreviusImage(imageContainer) {
  imgIndex = (imgIndex - 1 + imageUrls.length) % imageUrls.length;
  changeImage(imageContainer, imgIndex);
}

function changeImageByDirection(container, direction) {
  imgIndex = (imgIndex + direction + imageUrls.length) % imageUrls.length;
  changeImage(container, imgIndex);
}