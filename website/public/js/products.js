// Generar productos de forma dinámica
const sectionFeatured = document.querySelector('section[data-store="products-home-featured"]');
const featuredProducts = document.querySelector("#featured-products");
const prevBtns = document.querySelectorAll('#prevBtn');
const nextBtns = document.querySelectorAll('#nextBtn');
// Crear objetos para tus productos
const products = [
  {
    nombre: "Bermuda Floreada",
    precio: 9000,
    imagen: "bermuda-1.jpg",
    codigo: "bermuda-1",
    descripcion: {
      detalle: "Bermuda de playa floreada, comoda y ligera.",
      color: "Azul y rojo",
      material: "Poliéster",
      talle: ['L'],
    },
  },
  {
    nombre: "Gorra negra",
    precio: 2500,
    imagen: "gorra-1.jpg",
    codigo: "gorra-1",
    descripcion: {
      detalle: "Gorra ligera.",
      color: "Negro",
      material: "Poliéster",
      talle: ['M'],
    },
  },
  {
    nombre: "Remera negra con diseño",
    precio: 4000,
    imagen: "remera-4.jpg",
    codigo: "remera-4",
    descripcion: {
      detalle: "Remera con diseño de arte abstracto.",
      color: "Negro",
      material: "Algodón",
      talle: ['M', 'L'],
    },
  },
  {
    nombre: "Bermuda Jean",
    precio: 8000,
    imagen: "jeanshort-3.jpg",
    codigo: "jeanshort-3",
    descripcion: {
      detalle: "Bermuda de jean con detalles de rasgaduras.",
      color: "Azul claro",
      material: "Mezclilla",
      talle: ['M', 'L'],
    },
  },
  {
    nombre: "Gorra Beige",
    precio: 3000,
    imagen: "gorra-2.jpg",
    codigo: "gorra-2",
    descripcion: {
      detalle: "Gorra de algodón, ligera, comoda y fresca.",
      color: "Beige",
      material: "Algodón",
      talle: ['Único'],
    },
  },
  {
    nombre: "Remera blanca para mujer",
    precio: 3500,
    imagen: "remera-girl-1.jpg",
    codigo: "remera-girl-1",
    descripcion: {
      detalle: "Remera para mujer con detalles en las mangas.",
      color: "Blanca",
      material: "Algodón",
      talle: ['S', 'M', 'L'],
    },
  },
  {
    nombre: "Remera blanca con diseño",
    precio: 4500,
    imagen: "remera-3.jpg",
    codigo: "remera-3",
    descripcion: {
      detalle: "Remera ligera con estampado abstracto.",
      color: "Blanca",
      material: "Algodón",
      talle: ['L', 'XL'],
    },
  },
  {
    nombre: "Jeans cortos floreados",
    precio: 7500,
    imagen: "jeanshort-1.jpg",
    codigo: "jeanshort-1",
    descripcion: {
      detalle: "Jeans cortos con diseño floreado.",
      color: "Celeste",
      material: "Mezclilla",
      talle: ['M', 'L'],
    },
  },
  {
    nombre: "Remera negra con diseño",
    precio: 3800,
    imagen: "remera-2.jpg",
    codigo: "remera-2",
    descripcion: {
      detalle: "Remera con estampado fabuloso.",
      color: "Negra",
      material: "Algodón",
      talle: ['M', 'L'],
    },
  },
  {
    nombre: "Bermuda Azul",
    precio: 8500,
    imagen: "bermuda-2.jpg",
    codigo: "bermuda-2",
    descripcion: {
      detalle: "Bermuda de playa con diseño de flores, comoda y ligera.",
      color: "Azul",
      material: "Poliéster",
      talle: ['L'],
    },
  },
];

let productsCantidad = 0;

// Función para obtener los productos
function getFeaturedProducts() {
  featuredProducts.innerHTML = "";
  for (let i = productsCantidad; i < productsCantidad + products.length; i++) {
    const product = products[i];
    const precio = product.precio;
    const precioFormateado = precio.toLocaleString();
    const precioCuotas3 = precio / 3;
    const cuotas3 = precioCuotas3.toLocaleString();
    const productHTML = `
            <div class="product-card-dv swiper-slide js-swiper-slide-visible swiper-slide-active" data-swiper-slide-index="${i + 1}">
                <div class="js-item-product js-item-slide p-0 item item-product grid-item" data-product-type="list"
                    data-product-id="${i + 1}" data-store="product-item-${i + 1}" data-component="product-list-item"
                    data-component-value="${i + 1}" data-transition="fade-in-up">
                    <div class="js-product-container js-quickshop-container js-quickshop-has-variants position-relative"
                        data-quickshop-id="quick${i + 1}">
                        <div class=" item-image">
                            <div style="padding-bottom: 125.390625%;" class="position-relative"
                                data-store="product-item-image-${i + 1}">
                                <a href="/productos/${product.codigo}/" title="${product.nombre}" aria-label="${product.nombre}">
                                    <img alt="${product.nombre}" data-expand="-10"
                                        src="/img/productos/${product.imagen}"
                                        class="js-item-image lazyautosizes img-absolute img-absolute-centered fade-in ls-is-cached lazyloaded"
                                        width="1024" height="1284" sizes="(max-width: 768px) 50vw, (min-width: 769px) 25vw"
                                        srcset="/img/productos/${product.imagen} 240w, /img/productos/${product.imagen} 320w, /img/productos/${product.imagen} 480w, /img/productos/${product.imagen} 640w, /img/productos/${product.imagen} 1024w">
                                    <div class="placeholder-fade">
                                    </div>
                                </a>
                            </div>
                            <div class=" labels " data-store="product-item-labels">
                                <div class="js-stock-label label label-default" style="display:none;">Sin stock</div>
                            </div>
                            <span class="hidden" data-store="stock-product-${i + 1}-15"></span>
                            <div class="item-buy">
                                <div id="descripcion" class="js-item-variants item-buy-variants hidden">
                                    <form class="js-product-form" method="post" action="/comprar/">
                                        <input type="hidden" name="add_to_cart" value="${i + 1}">
                                        <div class="js-product-variants js-product-quickshop-variants mb-1  form-row">
                                            <div class="js-product-variants-group  col-12 " data-variation-id="${i + 1}">
                                              <div class="form-group form-group-small mb-2 d-none">
                                                <label class="form-label mb-1" for="variation_1">TALLE</label>
                                                <div product-tallesmall-id="${i + 1}">
                                                  <!-- Aqui irian los talles -->
                                                </div>
                                                <div class="form-select-icon">
                                                  <svg class="icon-inline icon-w-14 icon-lg"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path
                                                      d="M256,340.3,451.75,144.55l18.1,18.1L256,376.5,42.15,162.65l18.1-18.1Z">
                                                    </path>
                                                  </svg>
                                                </div>
                                              </div>
                                              <div class="col px-0">
                                                <div class="quickshop-custom-label mt-2 mb-2">
                                                  <div class="row ml-0 pl-0">
                                                      <label for="variation_1" class="form-label d-inline-block">TALLE
                                                      </label>
                                                  </div>
                                                  <a href="#" class="d-xs-none d-sm-none d-lg-block row js-item-buy-close">
                                                      <svg class="icon-inline icon-lg svg-circle svg-icon-text"
                                                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                          <path
                                                              d="M256,274.92,72.67,458.25l-18.1-18.1L237.9,256.82,54.57,73.49l18.1-18.11L256,238.72,439.33,55.38l18.1,18.11L274.1,256.82,457.43,440.15l-18.1,18.1Z">
                                                          </path>
                                                      </svg> </a>
                                                </div>
                                                <div class="row ml-0 pl-0 justify-content-sm-start no-gutters" product-talle-id="${i + 1}">
                                                  <!-- Aqui irian los talles -->
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <input type="submit"
                                            class="js-addtocart js-prod-submit-form btn btn-primary btn-small w-100 mb-2 cart"
                                            value="Agregar al carrito" add-product-cart-id="${i + 1}">
                                        <div class="js-addtocart js-addtocart-placeholder btn btn-primary btn-small btn-block btn-transition mb-2 disabled"
                                            style="display: none;" animation-product-cart-id="${i + 1}">
                                            <div class="d-inline-block">
                                                <span class="js-addtocart-text">Agregar al carrito</span>
                                                <span class="js-addtocart-success transition-container">
                                                    ¡Listo!
                                                </span>
                                                <div class="js-addtocart-adding transition-container">
                                                    Agregando...
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="item-description" data-store="product-item-info-${i + 1}">
                            <a href="/productos/${product.codigo}/" title="${product.nombre}" aria-label="${product.nombre}"
                                class="item-link">
                                <div class="js-item-name item-name mb-2 " data-store="product-item-name-${i + 1}">${product.nombre}</div>
                                <div class="item-price-container mb-2" data-store="product-item-price-${i + 1}">
                                    <span class="js-compare-price-display price-compare " style="display:none;">
                                        $0
                                    </span>
                                    <span class="js-price-display item-price">
                                        $ ${precioFormateado}
                                    </span>
                                </div>
                                <span
                                    class="js-max-installments-container js-max-installments  text-bold text-accent-buy item-installments">
                                    <svg class="icon-inline icon-w svg-icon-text text-accent-buy mr-1" width="512" height="512"
                                        viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M170.667 84.6667C167.661 84.6667 164.778 85.8607 162.653 87.9861C160.527 90.1115 159.333 92.9942 159.333 96V138.667C159.333 144.19 154.856 148.667 149.333 148.667C143.81 148.667 139.333 144.19 139.333 138.667V96C139.333 87.6899 142.634 79.7201 148.511 73.844C154.387 67.9678 162.356 64.6667 170.667 64.6667H448C456.31 64.6667 464.28 67.9678 470.156 73.844C476.032 79.7201 479.333 87.6899 479.333 96V288C479.333 296.31 476.032 304.28 470.156 310.156C464.28 316.032 456.31 319.333 448 319.333H426.667C421.144 319.333 416.667 314.856 416.667 309.333C416.667 303.81 421.144 299.333 426.667 299.333H448C451.006 299.333 453.888 298.139 456.014 296.014C458.139 293.888 459.333 291.006 459.333 288V96C459.333 92.9942 458.139 90.1115 456.014 87.9861C453.888 85.8607 451.006 84.6667 448 84.6667H170.667ZM64 212.667C57.7407 212.667 52.6666 217.741 52.6666 224V245.333V288.667H352.667V245.333V224C352.667 217.741 347.593 212.667 341.333 212.667H64ZM372.667 245.333V373.333V416C372.667 433.305 358.638 447.333 341.333 447.333H64C46.695 447.333 32.6666 433.305 32.6666 416V373.333V245.333V224C32.6666 206.695 46.695 192.667 64 192.667H341.333C358.638 192.667 372.667 206.695 372.667 224V245.333ZM52.6666 373.333V416C52.6666 422.259 57.7407 427.333 64 427.333H341.333C347.593 427.333 352.667 422.259 352.667 416V373.333V308.667H52.6666V373.333ZM117.333 352.667C111.81 352.667 107.333 357.144 107.333 362.667C107.333 368.189 111.81 372.667 117.333 372.667H202.667C208.189 372.667 212.667 368.189 212.667 362.667C212.667 357.144 208.189 352.667 202.667 352.667H117.333ZM266.667 352.667C261.144 352.667 256.667 357.144 256.667 362.667C256.667 368.189 261.144 372.667 266.667 372.667H288C293.523 372.667 298 368.189 298 362.667C298 357.144 293.523 352.667 288 352.667H266.667Z"
                                            fill="black"></path>
                                    </svg>
                                    <span class="js-max-installments">
                                        <span class="js-installment-amount installment-amount">3</span> cuotas sin interés de <span
                                            class="js-installment-price installment-price">$${cuotas3}</span>
                                    </span>
                                </span>
                            </a>
                            <div class="item-actions mt-3 row ">
                                <a href="#"
                                    class="d-md-none col-8 col-md-6 
                                        js-quickshop-modal-open js-quickshop-slide js-modal-open js-fullscreen-modal-open btn btn-primary btn-small"
                                    title="Compra rápida de ${product.nombre}" aria-label="Compra rápida de ${product.nombre}"
                                    data-toggle="#quickshop-modal" data-modal-url="modal-fullscreen-quickshop"
                                    data-component="product-list-item.add-to-cart" data-component-value="${i + 1}">Comprar</a>
                                <div class="d-xs-none d-sm-none d-md-block col-8 col-md-6 pl-0 pr-1">
                                    <a href="#" class="js-item-buy-open item-buy-open d-flex btn btn-primary btn-small" data-buy-id="${i + 1}"
                                        title="Compra rápida de ${product.nombre}" aria-label="Compra rápida de ${product.nombre}">Comprar</a>
                                </div>
                                <div class=" col-4 col-md-6 pl-1">
                                    <a href="/productos/${product.codigo}/" title="${product.nombre}" aria-label="${product.nombre}"
                                        class="d-flex btn btn-secondary btn-small"><svg class="icon-inline svg-icon-primary"
                                            width="512" height="512" viewBox="0 0 512 512" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M256 408.421C169.356 408.421 95.1954 359.575 33.8824 256C95.1954 152.425 169.356 103.579 256 103.579C342.644 103.579 416.805 152.425 478.118 256C416.805 359.575 342.644 408.421 256 408.421ZM256 75C153.654 75 70.0956 135.05 4.88702 248.91C2.37099 253.303 2.37099 258.697 4.88702 263.09C70.0956 376.95 153.654 437 256 437C358.346 437 441.904 376.95 507.113 263.09C509.629 258.697 509.629 253.303 507.113 248.91C441.904 135.05 358.346 75 256 75ZM222.584 256.001C222.584 237.586 237.544 222.658 255.999 222.658C274.453 222.658 289.414 237.586 289.414 256.001C289.414 274.415 274.453 289.343 255.999 289.343C237.544 289.343 222.584 274.415 222.584 256.001ZM255.999 194.08C221.726 194.08 193.942 221.803 193.942 256.001C193.942 290.199 221.726 317.922 255.999 317.922C290.272 317.922 318.055 290.199 318.055 256.001C318.055 221.803 290.272 194.08 255.999 194.08Z"
                                                fill="black"></path>
                                        </svg>
                                        <span class="d-none d-md-inline-block">Ver</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
    featuredProducts.innerHTML += productHTML;
  }
}

// Llamar a la función para obtener los productos
getFeaturedProducts();

const divsTallesSmall = document.querySelectorAll('[product-tallesmall-id]');
function getTallesSmall() {
  divsTallesSmall.forEach((divTalleSmall) => {
    divTalleSmall.innerHTML = "";
  });
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const cantidadTalles = product.descripcion.talle.length;
    let isFirstSelected = true;
    for (let j = 0; j < product.descripcion.talle.length; j++) {
      const isSelected = isFirstSelected ? 'selected="selected"' : '';
      const descripcionSmallHTML = `
        <select id="variation_1" class="form-select js-variation-option js-refresh-installment-data form-control-small" name="variation[0]">
          <option value="${product.descripcion.talle[j]}" ${isSelected}>${product.descripcion.talle[j]}</option>
        </select>
      `;
      divsTallesSmall[i].innerHTML += descripcionSmallHTML;
      isFirstSelected = false;
    }
  }
}

const divsTalles = document.querySelectorAll('[product-talle-id]');
function getTalles() {
  divsTalles.forEach((divTalle) => {
    divTalle.innerHTML = "";
  });
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const cantidadTalles = product.descripcion.talle.length;
    let isFirstSelected = true; // Variable para controlar el primer enlace seleccionado
    for (let j = 0; j < cantidadTalles; j++) {
      const talle = product.descripcion.talle[j];
      const isSelected = isFirstSelected ? 'selected' : ''; // Agrega la clase 'selected' solo al primer enlace generado
      const descripcionHTML = `
        <a data-option="${talle}" class="js-insta-variant btn btn-variant ${isSelected}" product-id="${i + 1}" data-product-talla-id="${i + 1}">
          <span class="btn-variant-content" data-name="${talle}">${talle}</span>
        </a>
      `;
      divsTalles[i].innerHTML += descripcionHTML;
      isFirstSelected = false; // Desactiva la variable isFirstSelected después de generar el primer enlace seleccionado
    }
  }
}

// Llamar a la función para obtener los talles en pequeño
getTallesSmall();
// Llamar a la función para obtener los talles
getTalles();

const divModalMobile = document.getElementById('quickmodal-body');

function getDescriptionMobile(producto) {
  const j = producto - 1;
  const product = products[j];
  divModalMobile.innerHTML = "";
  const descripcionHTML = `
      <div class="js-item-product js-swiper-slide-visible js-item-slide" data-quickshop-product-id="${producto}">
        <div class="js-product-container js-quickshop-container js-quickshop-modal js-quickshop-modal-shell"
          data-quickshop-id="quick${producto}">
          <div class="js-item-variants">
            <div class="js-item-name h4 mb-2 pr-4" data-store="product-item-name-">${product.nombre}</div>
            <div class="item-price-container mb-3" data-store="product-item-price-">
              <span class="js-compare-price-display price-compare" style="display:none;">
                $0
              </span>
              <span class="js-price-display">
                ${product.precio}
              </span>
            </div>
            <img
              srcset="/img/productos/${product.imagen} 1024w"
              class="js-quickshop-img js-item-image">
            <div id="quickshop-form">
              <form class="js-product-form" method="post" action="/comprar/">
                <input type="hidden" name="add_to_cart" value="${producto}">
                <div class="js-product-variants js-product-quickshop-variants mb-1  form-row">
                  <div class="js-product-variants-group  col-12 " data-variation-id="0">
                    <div class="form-group form-group-small mb-2 d-none">
                      <label class="form-label mb-1" for="variation_1">TALLE</label>
                      <div quickmodal-tallesmall-id="${producto}">
                        <!-- Aqui irian los talles -->
                      </div>
                      <div class="form-select-icon">
                        <svg class="icon-inline icon-w-14 icon-lg" xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512">
                          <path d="M256,340.3,451.75,144.55l18.1,18.1L256,376.5,42.15,162.65l18.1-18.1Z"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="col px-0">
                      <div class="quickshop-custom-label mt-2 mb-2">
                        <div class="row ml-0 pl-0">
                          <label for="variation_1" class="form-label d-inline-block">TALLE
                          </label>
                        </div>
                        <a href="#" class="d-xs-none d-sm-none d-lg-block row js-item-buy-close">
                          <svg class="icon-inline icon-lg svg-circle svg-icon-text" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path
                              d="M256,274.92,72.67,458.25l-18.1-18.1L237.9,256.82,54.57,73.49l18.1-18.11L256,238.72,439.33,55.38l18.1,18.11L274.1,256.82,457.43,440.15l-18.1,18.1Z">
                            </path>
                          </svg> </a>
                      </div>
                      <div class="row ml-0 pl-0 justify-content-sm-start no-gutters" quickmodal-talle-id="${producto}">
                        <!-- Aqui irian los talles -->
                      </div>
                    </div>
                  </div>
                </div>
                <input type="submit" class="js-addtocart js-prod-submit-form btn btn-primary btn-small w-100 mb-2 cart"
                  value="Agregar al carrito" add-product-cart-id="quick-${producto}">
                <div
                  class="js-addtocart js-addtocart-placeholder btn btn-primary btn-small btn-block btn-transition mb-2 disabled"
                  style="display: none;" animation-product-cart-id="quick-${producto}">
                  <div class="d-inline-block">
                    <span class="js-addtocart-text">Agregar al carrito</span>
                    <span class="js-addtocart-success transition-container">
                      ¡Listo!
                    </span>
                    <div class="js-addtocart-adding transition-container">
                      Agregando...
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;
  divModalMobile.innerHTML += descripcionHTML;
}
