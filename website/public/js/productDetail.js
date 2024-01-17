

// Mostrar el modal de imagenes cuando haga click en la imagen principal

const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');

imageContainer.addEventListener('click', () => {
    imagesModal.style.display ='grid';
})

closeModalBtn.addEventListener('click', () => {
    imagesModal.style.display = 'none';
})


// Cambiar las imagenes principales desde los thumnails

let thumnails = document.querySelector('.gallery__thumnail');
thumnails = [...thumnails]

thumnails.forEach(thumnail => {
    thumnail.addEventListener('click', event =>{
        console.log(event.target.id)
        imageContainer.style.backgroundImage = `url('${imagesUrls[imgIndex]}')`;
    })
})
// Cambiar imagenes principales desde los tumnails con el modal

let modalthumnails = document.querySelector('.modal-gallery__thumnail');
const modalImageContainer = document.querySelector('.modal-gallery__image-container')
modalthumnails = [...modalthumnails];

modalthumnails.forEach(modalthumnail => {
    modalthumnail.addEventListener('click', event => {
        console.log(event.target.id.slice(-1))
        modalImageContainer.style.backgroundImage = `url('${imagesUrls[imgIndex]}')`;
    });
});

// Cambiar imagenes del modal con flechas

const previusModalBtn = document.querySelector('.modal-gallery__previus');
const nextModalBtn = document.querySelector('.modal-gallery__previus');

nextModalBtn.addEventListener('click', () => {
    changeNextImage(modalImageContainer);
})

previusModalBtn.addEventListener('click', () => {
    changePreviusImage(modalImageContainer);
})




// Cambiar imagenes con los botones next y previu


const imageContainer = document.querySelector('.gallery__image-container');
const nextGalleryBtn = document.querySelector('.gallery__next');
const previusGalleryBtn = document.querySelector('.gallery__previus');
let imgIndex = 0; 
const imagesUrls = [
    '../img/productos/bermuda-1.jpg',
    '../img/productos/bermuda-2.jpg',
    '../img/productos/campera-1.jpg',
    '../img/productos/campera-3.jpg'
];

nextGalleryBtn.addEventListener('click', () => {
    changeNextImage(imageContainer);
});

previusGalleryBtn.addEventListener('click', () => {
    changePreviusImage(imageContainer);
});



// Incremento del contador + y -. 

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

minusBtn.addEventListener('click',  () => {
    userInputNumber--;
    if(userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
})


// Funciones

function changeNextImage(imageContainer) {
    if (imgIndex === imagesUrls.length - 1) {
        imgIndex = 0;
    } else {
        imgIndex++;
    }
    imageContainer.style.backgroundImage = `url('${imagesUrls[imgIndex]}')`;
}

function changePreviusImage(imageContainer) {
    if (imgIndex === 0) {
        imgIndex = imagesUrls.length - 1;
    } else {
        imgIndex--;
    }
    imageContainer.style.backgroundImage = `url('${imagesUrls[imgIndex]}')`;
}





