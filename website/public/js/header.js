// Obtener el header
const body = document.querySelector('body');
const header = document.querySelector('header');
// Función para ajustar el ancho del header según el ancho de la pantalla
function ajustarPaddingTop() {
  // Obtener la altura del header
  const headerHeight = header.offsetHeight;
  const anchoPantalla = window.innerWidth;
  if (anchoPantalla >= 768) {
    // Establecer el padding-top del body igual a la altura del header
    body.style.paddingTop = headerHeight + 'px';
  } else {
    // Establecer el padding-top del body igual a 0
    body.style.paddingTop = '0';
  }
}
// Llamar a la función una vez al cargar la página
ajustarPaddingTop();
// Agregar el evento resize para que la función se llame cada vez que se cambie el tamaño de la ventana del navegador
window.addEventListener('resize', ajustarPaddingTop);

// Acordions
const acordionElementsHeader = document.querySelectorAll('header #acordionElement');
acordionElementsHeader.forEach((acordionElement) => {
  const overlayElement = acordionElement.querySelector('.acordion-modal-overlay');
  acordionElement.addEventListener('toggle', () => {
    if (acordionElement.open) {
      overlayElement.classList.add('open');
    } else {
      overlayElement.classList.remove('open');
    }
  });
});

// Función para cerrar los acordions dentro de un detailsElement
function closeAccordions() {
  const acordionElements = document.querySelectorAll('#acordionElement');
  acordionElements.forEach((acordionElement) => {
    acordionElement.open = false;
  });
}

// Details Elements
const detailsElementsModal = document.querySelectorAll('#detailsElementModal');
detailsElementsModal.forEach((detailsElement) => {
  const modalId = detailsElement.getAttribute('data-modal');
  const overlayElement = detailsElement.querySelector('.details-modal-overlay');
  const modal = document.querySelector(`#${modalId}`);
  const closeBtn = modal.querySelector('#close-modal');
  closeBtn.addEventListener('click', () => {
    detailsElement.open = false;
    closeAccordions();
  });
  detailsElement.addEventListener('toggle', () => {
    if (detailsElement.open) {
      overlayElement.classList.add('open');
      modal.style.display = "block";
      modal.classList.add('modal-show');
    } else {
      overlayElement.classList.remove('open');
      modal.classList.remove('modal-show');
      modal.style.display = "none";
      closeAccordions();
    }
  });
});

// Cart
const cart = document.querySelector('[data-modal="modal-cart"]');
const openCart = () => {cart.open = true;};

// Obtener todos los elementos con el atributo data-transition="fade-in-up"
let fadeElements = document.querySelectorAll('[data-transition="fade-in-up"]');
// Crear una instancia de Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // Verificar si el elemento está visible en la pantalla
    if (entry.isIntersecting) {
      // Agregar la clase "is-inViewport" al elemento
      entry.target.classList.add('is-inViewport');
    } else {
      entry.target.classList.remove('is-inViewport');
    }
  });
});
// Observar cada elemento con el atributo data-transition="fade-in-up"
fadeElements.forEach((element) => {
  observer.observe(element);
});