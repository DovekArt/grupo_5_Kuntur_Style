//////////////////////////////////////// Carousel-Variables

let currentPosition = products.length / 2 - 1;
let multiplicadorFinal = products.length - 4;
let posicionCarousel = 0;
let carouselPosition = 0;

const productsCard = document.querySelectorAll(".product-card-dv");
const containerCards = document.querySelector(
  "#featured-products.swiper-wrapper"
);
let modoPantalla = "";
let anchoCards = 0;
let marginCards = 0;

function ajustarAnchoPCard() {
  const anchoPantalla = window.innerWidth;
  if (anchoPantalla >= 1024) {
    modoPantalla = "granpantalla";
  } else if (anchoPantalla >= 768) {
    modoPantalla = "tablet";
  } else if (anchoPantalla >= 540) {
    modoPantalla = "tabletmini";
  } else {
    modoPantalla = "mobile";
  }

  let anchoContenedorPadre = containerCards.offsetWidth;
  productsCard.forEach((card) => {
    let anchoCard = 0;
    let margin = 0;
    let unidad = "";

    if (modoPantalla === "tablet" || modoPantalla === "granpantalla") {
      anchoCard = anchoContenedorPadre / (1100 / 266.25);
      margin = 15;
      unidad = "px";
    } else if (modoPantalla === "tabletmini") {
      anchoCard = 255.25;
      margin = 4;
      unidad = "px";
    } else if (modoPantalla === "mobile") {
      anchoCard = 159.25;
      margin = 4;
      unidad = "px";
    }
    card.style.width = `${anchoCard}${unidad}`;
    card.style.marginRight = `${margin}${unidad}`;
    marginCards = margin;
    anchoCards = anchoCard;
  });
}
ajustarAnchoPCard();
window.addEventListener("resize", ajustarAnchoPCard);

//////////////////////////////////////// Carousel-Modificado

function cambiarPosition() {
  featuredProducts.style.transform = `translate3d(${carouselPosition}px, 0px, 0px)`;
}

function actualizarPosicionCarousel() {
  if (
    modoPantalla === "granpantalla" ||
    modoPantalla === "tabletmini" ||
    modoPantalla === "tablet"
  ) {
    multiplicadorFinal = products.length - 4;
    carouselPosition = -(
      (anchoCards + marginCards) * (currentPosition - 1) -
      marginCards
    );
  } else if (modoPantalla === "mobile") {
    multiplicadorFinal = products.length - 2;
    carouselPosition = -(
      (anchoCards + marginCards) * (currentPosition - 1) -
      marginCards
    );
  }
}

actualizarPosicionCarousel();
cambiarPosition();
window.addEventListener("resize", () => {
  actualizarPosicionCarousel();
  cambiarPosition();
});

nextBtns.forEach((nextBtn) => {
  nextBtn.addEventListener("click", () => {
    if (currentPosition > multiplicadorFinal) {
      currentPosition = 1;
      carouselPosition = 0;
    } else {
      currentPosition++;
      actualizarPosicionCarousel();
    }

    cambiarPosition();

    setTimeout(() => {
      observer.disconnect();
      fadeElements = document.querySelectorAll(
        '[data-transition="fade-in-up"]'
      );
      fadeElements.forEach((el) => {
        observer.observe(el);
      });
    }, 100);
  });
});

prevBtns.forEach((prevBtn) => {
  prevBtn.addEventListener("click", () => {
    if (currentPosition === 1) {
      currentPosition = multiplicadorFinal + 1;
    } else {
      currentPosition--;
    }

    actualizarPosicionCarousel();

    cambiarPosition();

    setTimeout(() => {
      observer.disconnect();
      fadeElements = document.querySelectorAll(
        '[data-transition="fade-in-up"]'
      );
      fadeElements.forEach((el) => {
        observer.observe(el);
      });
    }, 100);
  });
});
