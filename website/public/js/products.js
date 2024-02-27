window.addEventListener('load', function() {
loadProducts();
// Generar productos de forma dinámica
const sectionFeatured = document.querySelector('section[data-store="products-home-featured"]');
const featuredProducts = document.querySelector("#featured-products");
const prevBtns = document.querySelectorAll('#prevBtn');
const nextBtns = document.querySelectorAll('#nextBtn');
// Crear objetos para tus productos
// const products = [
//   {
//     nombre: "Bermuda Floreada",
//     precio: 9000,
//     imagen: "bermuda-1.jpg",
//     codigo: "bermuda-1",
//     descripcion: {
//       detalle: "Bermuda de playa floreada, comoda y ligera.",
//       color: "Azul y rojo",
//       material: "Poliéster",
//       talle: ['L'],
//     },
//   },
//   {
//     nombre: "Gorra negra",
//     precio: 2500,
//     imagen: "gorra-1.jpg",
//     codigo: "gorra-1",
//     descripcion: {
//       detalle: "Gorra ligera.",
//       color: "Negro",
//       material: "Poliéster",
//       talle: ['M'],
//     },
//   },
//   {
//     nombre: "Remera negra con diseño",
//     precio: 4000,
//     imagen: "remera-4.jpg",
//     codigo: "remera-4",
//     descripcion: {
//       detalle: "Remera con diseño de arte abstracto.",
//       color: "Negro",
//       material: "Algodón",
//       talle: ['M', 'L'],
//     },
//   },
//   {
//     nombre: "Bermuda Jean",
//     precio: 8000,
//     imagen: "jeanshort-3.jpg",
//     codigo: "jeanshort-3",
//     descripcion: {
//       detalle: "Bermuda de jean con detalles de rasgaduras.",
//       color: "Azul claro",
//       material: "Mezclilla",
//       talle: ['M', 'L'],
//     },
//   },
//   {
//     nombre: "Gorra Beige",
//     precio: 3000,
//     imagen: "gorra-2.jpg",
//     codigo: "gorra-2",
//     descripcion: {
//       detalle: "Gorra de algodón, ligera, comoda y fresca.",
//       color: "Beige",
//       material: "Algodón",
//       talle: ['Único'],
//     },
//   },
//   {
//     nombre: "Remera blanca para mujer",
//     precio: 3500,
//     imagen: "remera-girl-1.jpg",
//     codigo: "remera-girl-1",
//     descripcion: {
//       detalle: "Remera para mujer con detalles en las mangas.",
//       color: "Blanca",
//       material: "Algodón",
//       talle: ['S', 'M', 'L'],
//     },
//   },
//   {
//     nombre: "Remera blanca con diseño",
//     precio: 4500,
//     imagen: "remera-3.jpg",
//     codigo: "remera-3",
//     descripcion: {
//       detalle: "Remera ligera con estampado abstracto.",
//       color: "Blanca",
//       material: "Algodón",
//       talle: ['L', 'XL'],
//     },
//   },
//   {
//     nombre: "Jeans cortos floreados",
//     precio: 7500,
//     imagen: "jeanshort-1.jpg",
//     codigo: "jeanshort-1",
//     descripcion: {
//       detalle: "Jeans cortos con diseño floreado.",
//       color: "Celeste",
//       material: "Mezclilla",
//       talle: ['M', 'L'],
//     },
//   },
//   {
//     nombre: "Remera negra con diseño",
//     precio: 3800,
//     imagen: "remera-2.jpg",
//     codigo: "remera-2",
//     descripcion: {
//       detalle: "Remera con estampado fabuloso.",
//       color: "Negra",
//       material: "Algodón",
//       talle: ['M', 'L'],
//     },
//   },
//   {
//     nombre: "Bermuda Azul",
//     precio: 8500,
//     imagen: "bermuda-2.jpg",
//     codigo: "bermuda-2",
//     descripcion: {
//       detalle: "Bermuda de playa con diseño de flores, comoda y ligera.",
//       color: "Azul",
//       material: "Poliéster",
//       talle: ['L'],
//     },
//   },
// ];

// const products = productos;

let productsCantidad = 0;

const productList = document.querySelectorAll('#product-info');
let products = [];
productList.forEach((prod) => {
  const product = {
    id: prod.getAttribute('product-id'),
    nombre: prod.querySelector('#product-title').textContent,
    precio: prod.querySelector('#product-price').textContent,
    descuento: prod.querySelector('#product-discount').textContent,
    imagen: prod.querySelector('#product-image').textContent,
  }
  products.push(product);
})

// Función para obtener los productos
function getFeaturedProducts() {
  featuredProducts.innerHTML = "";
  for (let i = productsCantidad; i < productsCantidad + products.length; i++) {
    const product = products[i];
    const precio = product.precio;
    const precioFormateado = precio.toLocaleString();
    const precioCuotas3 = precio / 3;
    const cuotas3 = precioCuotas3.toLocaleString();
    const imagen = product.images[0].file;
    const productHTML = `
            <div class="product-card-dv swiper-slide js-swiper-slide-visible swiper-slide-active" data-swiper-slide-index="${id}">
                <div class="js-item-product js-item-slide p-0 item item-product grid-item" data-product-type="list"
                    data-product-id="${id}" data-store="product-item-${id}" data-component="product-list-item"
                    data-component-value="${id}" data-transition="fade-in-up">
                    <div class="js-product-container js-quickshop-container js-quickshop-has-variants position-relative"
                        data-quickshop-id="quick${id}">
                        <div class=" item-image">
                            <div style="padding-bottom: 125.390625%;" class="position-relative"
                                data-store="product-item-image-${id}">
                                <a href="/productos/${product.codigo}/" title="${product.nombre}" aria-label="${product.nombre}">
                                    <img alt="${product.nombre}" data-expand="-10"
                                        src="/img/productos/${imagen}"
                                        class="js-item-image lazyautosizes img-absolute img-absolute-centered fade-in ls-is-cached lazyloaded"
                                        width="1024" height="1284" sizes="(max-width: 768px) 50vw, (min-width: 769px) 25vw"
                                        srcset="/img/productos/${imagen} 240w, /img/productos/${imagen} 320w, /img/productos/${imagen} 480w, /img/productos/${imagen} 640w, /img/productos/${imagen} 1024w">
                                    <div class="placeholder-fade">
                                    </div>
                                </a>
                            </div>
                            <div class=" labels " data-store="product-item-labels">
                                <div class="js-stock-label label label-default" style="display:none;">Sin stock</div>
                            </div>
                            <span class="hidden" data-store="stock-product-${id}-15"></span>
                            <div class="item-buy">
                                <div id="descripcion" class="js-item-variants item-buy-variants hidden">
                                    <form class="js-product-form" method="post" action="/comprar/">
                                        <input type="hidden" name="add_to_cart" value="${id}">
                                        <div class="js-product-variants js-product-quickshop-variants mb-1  form-row">
                                            <div class="js-product-variants-group  col-12 " data-variation-id="${id}">
                                              <div class="form-group form-group-small mb-2 d-none">
                                                <label class="form-label mb-1" for="variation_1">TALLE</label>
                                                <div product-tallesmall-id="${id}">
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
                                                <div class="row ml-0 pl-0 justify-content-sm-start no-gutters" product-talle-id="${id}">
                                                  <!-- Aqui irian los talles -->
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                        <input type="submit"
                                            class="js-addtocart js-prod-submit-form btn btn-primary btn-small w-100 mb-2 cart"
                                            value="Agregar al carrito" add-product-cart-id="${id}">
                                        <div class="js-addtocart js-addtocart-placeholder btn btn-primary btn-small btn-block btn-transition mb-2 disabled"
                                            style="display: none;" animation-product-cart-id="${id}">
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
                        <div class="item-description" data-store="product-item-info-${id}">
                            <a href="/productos/${product.codigo}/" title="${product.nombre}" aria-label="${product.nombre}"
                                class="item-link">
                                <div class="js-item-name item-name mb-2 " data-store="product-item-name-${id}">${product.nombre}</div>
                                <div class="item-price-container mb-2" data-store="product-item-price-${id}">
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
                                    data-component="product-list-item.add-to-cart" data-component-value="${id}">Comprar</a>
                                <div class="d-xs-none d-sm-none d-md-block col-8 col-md-6 pl-0 pr-1">
                                    <a href="#" class="js-item-buy-open item-buy-open d-flex btn btn-primary btn-small" data-buy-id="${id}"
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
    const {xs,s,m,l,xl,unico} = product;
    const talles = {xs,s,m,l,xl,unico};
    const tallesArray = Object.values(talles.filter((talle) => talle > 0));
    const cantidadTalles = talles.length;
    let isFirstSelected = true;
    for (let j = 0; j < cantidadTalles; j++) {
      const talle = tallesArray[j];
      const isSelected = isFirstSelected ? 'selected="selected"' : '';
      const descripcionSmallHTML = `
        <select id="variation_1" class="form-select js-variation-option js-refresh-installment-data form-control-small" name="variation[0]">
          <option value="${talle}" ${isSelected}>${talle}</option>
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
    const {xs,s,m,l,xl,unico} = product;
    const talles = {xs,s,m,l,xl,unico};
    const tallesArray = Object.values(talles.filter((talle) => talle > 0));
    const cantidadTalles = talles.length;
    let isFirstSelected = true; // Variable para controlar el primer enlace seleccionado
    for (let j = 0; j < cantidadTalles; j++) {
      const talle = tallesArray[j];
      const isSelected = isFirstSelected ? 'selected' : ''; // Agrega la clase 'selected' solo al primer enlace generado
      const descripcionHTML = `
        <a data-option="${talle}" class="js-insta-variant btn btn-variant ${isSelected}" product-id="${id}" data-product-talla-id="${id}">
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
              srcset="/img/productos/${imagen} 1024w"
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

////////////////////////////////////////

function mostrarDescripcion(div) {
  if (div.style.display === "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

let numeroIdSeleccionado = "";
let talleSeleccionado = "";

// Obtén todos los enlaces con el atributo data-buy-id
const links = document.querySelectorAll("a[data-buy-id]");

// Itera sobre cada enlace
links.forEach((link) => {
  // Agrega un evento de clic a cada enlace
  link.addEventListener("click", async (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Obtén el valor del atributo data-buy-id del enlace
    const productId = link.getAttribute("data-buy-id");

    // Encuentra el div con el id "descripcion" dentro del div con el atributo data-product-id igual al valor obtenido
    const descripcionDiv = document.querySelector(
      `div[data-product-id="${productId}"] #descripcion`
    );

    await seleccionarEnlaceTalle(productId);
    seleccionarBtnAddCart(productId);

    // Establece el estilo del div como "display: block;"
    mostrarDescripcion(descripcionDiv);

    const enlaceSeleccionado = document.querySelector(
      `[data-product-talla-id="${productId}"].selected`
    );
    talleSeleccionado = enlaceSeleccionado.getAttribute("data-option");
    numeroIdSeleccionado = productId;
  });
});

const closeLinks = document.querySelectorAll(".js-item-buy-close");
closeLinks.forEach((closeLink) => {
  closeLink.addEventListener("click", (event) => {
    event.preventDefault();
    const descripcionDiv = closeLink.closest("#descripcion");
    descripcionDiv.removeAttribute("style");

    talleSeleccionado = "";
    numeroIdSeleccionado = "";
  });
});

// Obtén todos los enlaces con el atributo data-component-value
const linksMobile = document.querySelectorAll("a[data-component-value]");
const descripcionMobile = document.querySelector("div#quickshop-modal");
const descripcionMobileModal = document.querySelector(
  '[data-modal-id="#quickshop-modal"]'
);

// Itera sobre cada enlace
linksMobile.forEach((link) => {
  // Agrega un evento de clic a cada enlace
  link.addEventListener("click", async (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Obtén el valor del atributo data-buy-id del enlace
    const productId = link.getAttribute("data-component-value");
    const idProduct = "quick-" + productId;

    await getDescriptionMobile(productId);
    getTallesModalSmall(productId);
    await getTallesModal(productId);
    seleccionarEnlaceTalle(idProduct);
    seleccionarBtnAddCart(idProduct);

    // Establece el estilo del div como "display: block;"
    mostrarDescripcion(descripcionMobile);
    mostrarDescripcion(descripcionMobileModal);
    descripcionMobile.classList.add("modal-show");
    const enlaceSeleccionado = document.querySelector(
      `[data-product-talla-id="${idProduct}"].selected`
    );
    talleSeleccionado = enlaceSeleccionado.getAttribute("data-option");
    numeroIdSeleccionado = productId;
  });
});

const closeLinkMobile = document.querySelector(".modal-floating-close");
closeLinkMobile.addEventListener("click", () => {
  descripcionMobile.style.display = "none";
  descripcionMobileModal.style.display = "none";
  descripcionMobile.classList.remove("modal-show");

  talleSeleccionado = "";
  numeroIdSeleccionado = "";
});

const getTallesModalSmall = (producto) => {
  const divTalleModalSmall = document.querySelector(
    `[quickmodal-tallesmall-id="${producto}"]`
  );
  divTalleModalSmall.innerHTML = "";
  const j = producto - 1;
  const product = products[j];
  const {xs,s,m,l,xl,unico} = product;
  const talles = {xs,s,m,l,xl,unico};
  const tallesArray = Object.values(talles.filter((talle) => talle > 0));
  const cantidadTalles = talles.length;
  let isFirstSelected = true;
  for (let i = 0; i < cantidadTalles; i++) {
    const isSelected = isFirstSelected ? 'selected="selected"' : "";
    const talle = tallesArray[i];
    const descripcionSmallHTML = `
            <select id="variation_1" class="form-select js-variation-option js-refresh-installment-data form-control-small" name="variation[0]">
              <option value="${talle}" ${isSelected}>${talle}</option>
            </select>
          `;
    divTalleModalSmall.innerHTML += descripcionSmallHTML;
    isFirstSelected = false;
  }
};

const getTallesModal = (producto) => {
  const divTalleModal = document.querySelector(
    `[quickmodal-talle-id="${producto}"]`
  );
  divTalleModal.innerHTML = "";
  const j = producto - 1;
  const product = products[j];
  const {xs,s,m,l,xl,unico} = product;
  const talles = {xs,s,m,l,xl,unico};
  const tallesArray = Object.values(talles.filter((talle) => talle > 0));
  const cantidadTalles = talles.length;
  let isFirstSelected = true;
  for (let i = 0; i < cantidadTalles; i++) {
    const isSelected = isFirstSelected ? "selected" : "";
    const talle = tallesArray[i];
    const descripcionHTML = `
            <a data-option="${talle}" class="js-insta-variant btn btn-variant ${isSelected}" product-id="${producto}" data-product-talla-id="quick-${producto}">
              <span class="btn-variant-content" data-name="${talle}">${talle}</span>
            </a>
          `;
    divTalleModal.innerHTML += descripcionHTML;
    isFirstSelected = false;
  }
};

function seleccionarEnlaceTalle(id) {
  const productId = id;
  const enlacesTalles = document.querySelectorAll(
    `[data-product-talla-id="${productId}"]`
  );
  enlacesTalles.forEach((enlace) => {
    enlace.addEventListener("click", (event) => {
      event.preventDefault();
      const enlaceSeleccionado = document.querySelector(
        `[data-product-talla-id="${productId}"].selected`
      );

      if (enlaceSeleccionado) {
        enlaceSeleccionado.classList.remove("selected");
      }
      enlace.classList.add("selected");
      talleSeleccionado = enlace.getAttribute("data-option");
      numeroIdSeleccionado = enlace.getAttribute("product-id");
    });
  });
}

function animacionBtnCart(id) {
  const productId = id;
  const btnAddCart = document.querySelector(
    `[add-product-cart-id="${productId}"]`
  );
  const btnAnimationCart = document.querySelector(
    `[animation-product-cart-id="${productId}"]`
  );
  const addtocartAdding = btnAnimationCart.querySelector(
    ".js-addtocart-adding"
  );
  const addtocartSuccess = btnAnimationCart.querySelector(
    ".js-addtocart-success"
  );
  const addtocartText = btnAnimationCart.querySelector(".js-addtocart-text");

  btnAddCart.style.display = "none";
  btnAnimationCart.style.display = "inline-block";
  addtocartText.style.display = "none";
  addtocartAdding.classList.add("active");
  addtocartSuccess.classList.remove("active");

  setTimeout(() => {
    addtocartAdding.classList.remove("active");
    addtocartSuccess.classList.add("active");
    setTimeout(() => {
      addtocartText.style.display = "inline-block";
      btnAnimationCart.style.display = "none";
      btnAddCart.style.display = "inline-block";
    }, 3000);
  }, 2000);
}

let productoComprado = "";

const notificationCart = document.querySelector(".js-alert-added-to-cart");
const cantidadProductCart = document.querySelector(
  "span.js-cart-widget-amount.badge.badge-amount"
);
const productDetailCart = document.querySelector(".js-ajax-cart-list");
const productPriceCart = document.querySelector("#price-cart-product");
const productCartVacio = document.querySelector(".js-empty-ajax-cart");
const notificationCard = document.querySelector("#cart-notification-product");

function seleccionarBtnAddCart(id) {
  notificationCard.innerHTML = "";
  productDetailCart.innerHTML = "";
  productPriceCart.innerHTML = "";
  const productId = id;
  const btnAddCart = document.querySelector(
    `[add-product-cart-id="${productId}"]`
  );
  btnAddCart.addEventListener("click", async (event) => {
    event.preventDefault();
    await animacionBtnCart(productId);
    const product = products[numeroIdSeleccionado - 1];
    const numero = numeroIdSeleccionado;
    const talle = talleSeleccionado;
    const precio = product.precio;
    const precioFormateado = precio.toLocaleString("es-ES");
    const imagen = product.images[0].file;
    const contenidoHTML = `
                <div class="js-cart-notification-item row" data-store="cart-notification-item">
                  <div class="col-2 pr-0 notification-img">
                    <img src="" class="js-cart-notification-item-img img-fluid"
                      srcset="/img/productos/${imagen} 240w, /img/productos/${imagen} 320w, /img/productos/${imagen} 480w, /img/productos/${imagen} 640w, /img/productos/${imagen} 1024w">
                  </div>
                  <div class="col-10 text-left">
                    <div class="mb-1 mr-4">
                      <span class="js-cart-notification-item-name text-bold">${product.nombre}</span>
                      <span class="js-cart-notification-item-variant-container">
                        (<span class="js-cart-notification-item-variant">${talle}</span>)
                      </span>
                    </div>
                    <div class="mb-1">
                      <span class="js-cart-notification-item-quantity">1</span>
                      <span> x </span>
                      <span class="js-cart-notification-item-price">$${precioFormateado}</span>
                    </div>
                    <strong class="text-accent-success">¡Agregado al carrito!</strong>
                  </div>
                </div>
                <div class="divider my-2"></div>
                <div class="row h6 mb-3">
                  <span class="col-auto text-left ml-2">
                    <span>Total</span>
                    (<span class="js-cart-widget-amount">1</span>
                    <span class="js-cart-counts-plural">
                      producto/s):
                    </span>
                  </span>
                  <strong class="js-cart-total col text-right text-bold js-free-shipping-achieved"
                    data-priceraw="${product.precio}">$${precioFormateado}</strong>
                </div>
            `;
    notificationCard.innerHTML = contenidoHTML;
    setTimeout(() => {
      notificationCart.style.display = "block";
      notificationCart.classList.replace(
        "notification-hidden",
        "notification-visible"
      );
      cantidadProductCart.innerHTML = "1";
      seleccionarBtnCloseNotification();
      setTimeout(() => {
        notificationCart.classList.replace(
          "notification-visible",
          "notification-hidden"
        );
        notificationCart.style.display = "none";
      }, 10000);
    }, 2000);
    const porcentajeEnvioGratis = (precio * 100) / 50000;
    const diferencia = (50000 - precio).toLocaleString();
    const precioCuotas3 = (precio / 3).toLocaleString();
    setTimeout(() => {
      productCartVacio.style.display = "none";
    }, 1000);
    const contenidoDetailHTML = `
            <div class="js-cart-item js-cart-item-shippable cart-item form-row position-relative" data-item-id="${numero}"
              data-store="cart-item-00000${numero}" data-component="cart.line-item">
              <div class="col-2">
                <a href="/productos/${product.codigo}/?variant=${talle}" previewlistener="true">
                  <img
                    src="/img/productos/${imagen}"
                    class="img-fluid">
                </a>
              </div>
              <div class="col-10 d-flex align-items-center">
                <div class="w-100">
                  <div class="cart-item-name" data-component="line-item.name">
                    <a href="/productos/${product.codigo}/?variant=${talle}"
                      data-component="name.short-name" previewlistener="true">
                      ${product.nombre}
                    </a>
                    <small data-component="name.short-variant-name">(${talle})</small>
                  </div>
                  <div class="cart-item-quantity " data-component="line-item.subtotal">
                    <div class="form-group float-left form-quantity cart-item-quantity small mb-0">
                      <div class="row m-0 align-items-center ">
                        <span class="js-cart-quantity-btn form-quantity-icon btn"
                          onclick="LS.minusQuantity(${numero}, true)" data-component="quantity.minus">
                          <svg class="icon-inline icon-lg svg-icon-text" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path d="M486.4,269.27H25.6v-25.6H486.4Z"></path>
                          </svg>
                        </span>
                        <div class="form-control-container js-cart-quantity-container col px-1">
                          <input type="number" class=" form-control js-cart-quantity-input text-center form-control-inline"
                            autocorrect="off" autocapitalize="off" pattern="\d*" name="quantity[${numero}]" value="1"
                            data-item-id="${numero}" data-component="quantity.value"
                            style="visibility: visible; pointer-events: all;">
                        </div>
                        <span class="js-cart-input-spinner cart-item-spinner" style="display: none;">
                          <svg class="icon-inline icon-spin svg-icon-text" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512">
                            <path
                              d="M460.115 373.846l-6.941-4.008c-5.546-3.202-7.564-10.177-4.661-15.886 32.971-64.838 31.167-142.731-5.415-205.954-36.504-63.356-103.118-103.876-175.8-107.701C260.952 39.963 256 34.676 256 28.321v-8.012c0-6.904 5.808-12.337 12.703-11.982 83.552 4.306 160.157 50.861 202.106 123.67 42.069 72.703 44.083 162.322 6.034 236.838-3.14 6.149-10.75 8.462-16.728 5.011z">
                            </path>
                          </svg> </span>
                        <span class="js-cart-quantity-btn form-quantity-icon btn"
                          onclick="LS.plusQuantity(${numero}, true)" data-component="quantity.plus">
                          <svg class="icon-inline icon-lg svg-icon-text" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path d="M268.8,268.8V486.4H243.2V268.8H25.6V243.2H243.2V25.6h25.6V243.2H486.4v25.6Z"></path>
                          </svg> </span>
                      </div>
                    </div>
                  </div>
                  <span class="js-cart-item-subtotal cart-item-subtotal" data-line-item-id="${numero}"
                    data-component="subtotal.value" data-component-value="$${precioFormateado}">$${precioFormateado}</span>
                </div>
              </div>
              <div class="cart-item-delete col-1 text-right">
                <button type="button" class="btn " onclick="LS.removeItem(${numero}, true)"
                  data-component="line-item.remove">
                  <svg class="icon-inline svg-icon-text icon-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M428.8,102.45a51.2,51.2,0,0,0-51.2-51.2H300.8V25.65A25.6,25.6,0,0,0,275.2.05H172.8a25.6,25.6,0,0,0-25.6,25.6v25.6H70.4a51.2,51.2,0,0,0-51.2,51.2v76.8H44.8v281.6A51.2,51.2,0,0,0,96,512.05H352a51.2,51.2,0,0,0,51.2-51.2V179.25h25.6Zm-256-76.8H275.2v25.6H172.8Zm204.8,435.2a25.6,25.6,0,0,1-25.6,25.6H96a25.6,25.6,0,0,1-25.6-25.6V179.25H377.6Zm25.6-307.2H44.8v-51.2a25.6,25.6,0,0,1,25.6-25.6H377.6a25.6,25.6,0,0,1,25.6,25.6ZM172.8,435.25H147.2V204.85h25.6Zm128,0H275.2V204.85h25.6Z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          `;
    productDetailCart.innerHTML = contenidoDetailHTML;
    const contenidoPriceHTML = `
            <div class="js-visible-on-cart-filled" data-prev-visibility="block" style="display: block;">
              <div class="js-fulfillment-info js-allows-non-shippable">
                <div class="js-ship-free-rest  mt-2 mb-3">
                  <div class="js-bar-progress bar-progress">
                    <div class="js-bar-progress-active bar-progress-active transition-soft" style="width: ${porcentajeEnvioGratis}%;"></div>
                  </div>
                  <div class="js-ship-free-rest-message ship-free-rest-message condition">
                    <div class="ship-free-rest-text bar-progress-success text-accent transition-soft text-accent-success">
                      ¡Genial! Tenés envío gratis
                    </div>
                    <div class="ship-free-rest-text bar-progress-amount transition-soft">
                      ¡Estás a <span class="js-ship-free-dif">${diferencia}</span> de tener <span class="text-accent-success">envío
                        gratis</span>!
                    </div>
                    <div class="ship-free-rest-text bar-progress-condition transition-soft">
                      <span class="text-accent text-accent-success">Envío gratis</span> superando los <span>$50.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="subtotal-price hidden" data-priceraw="${precio}00">Subtotal: $${precioFormateado}</div>
            <div id="store-curr" class="hidden">ARS</div>
            <h6 class="js-visible-on-cart-filled row mb-1" data-store="cart-subtotal" data-prev-visibility="flex"
              style="display: flex;">
              <span class="col-7">
                Subtotal
                <small class="js-subtotal-shipping-wording"> (sin envío)</small>
                :
              </span>
              <span class="js-ajax-cart-total js-cart-subtotal col text-right text-bold" data-priceraw="${precio}00"
                data-component="cart.subtotal" data-component-value="${precio}00">$${precioFormateado}</span>
            </h6>
            <div class="js-total-promotions text-accent">
              <span class="js-promo-in" style="display:none;">en</span>
              <span class="js-promo-all" style="display:none;">todos los productos</span>
              <span class="js-promo-buying" style="display:none;"> comprando</span>
              <span class="js-promo-units-or-more" style="display:none;"> o más</span>
              <div class="promotions-wrapper"></div>
            </div>
            <div class="js-fulfillment-info js-allows-non-shippable">
              <div class="js-visible-on-cart-filled divider" data-prev-visibility="block" style="display: block;"></div>
              <div class="js-visible-on-cart-filled js-has-new-shipping js-shipping-calculator-container"
                data-prev-visibility="block" style="display: block;">
                <div class="js-shipping-method-unavailable alert alert-warning row row mx-0 mb-3" style="display: none;">
                  <div class="col-11 text-left pl-1 pr-0">
                    <div class="mb-1">El medio de envío que habías elegido ya no se encuentra disponible para este carrito. </div>
                    <div>¡No te preocupes! Podés elegir otro.</div>
                  </div>
                </div>
                <div id="cart-shipping-container" data-shipping-url="/envio/">
                  <span id="cart-selected-shipping-method" data-code="null" class="hidden"></span>
                  <div class="js-accordion-container js-toggle-shipping mb-1">
                    <a href="#" class="js-accordion-toggle py-1 row">
                      <div class="col">
                        <svg class="icon-inline icon-w svg-icon-text mr-1" width="512" height="512" viewBox="0 0 512 512" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.3336 117.333C11.3336 111.811 15.8108 107.333 21.3336 107.333H330.668C336.19 107.333 340.668 111.811 340.668 117.333V182H422.09C425.223 182 428.176 183.469 430.066 185.968L498.643 276.634C499.957 278.371 500.668 280.489 500.668 282.666V373.334C500.668 378.857 496.19 383.334 490.668 383.334H424.651C419.129 383.334 414.651 378.857 414.651 373.334C414.651 367.811 419.129 363.334 424.651 363.334H480.668V286.022L417.116 202H340.668V373.334C340.668 378.857 336.19 383.334 330.668 383.334H186.668C181.145 383.334 176.668 378.857 176.668 373.334C176.668 367.811 181.145 363.334 186.668 363.334H320.668V127.333H31.3336V363.334H85.3336C90.8565 363.334 95.3336 367.811 95.3336 373.334C95.3336 378.857 90.8565 383.334 85.3336 383.334H21.3336C15.8108 383.334 11.3336 378.857 11.3336 373.334V117.333Z"
                            fill="black"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M131.5 426C160.495 426 184 402.495 184 373.5C184 344.505 160.495 321 131.5 321C102.505 321 79 344.505 79 373.5C79 402.495 102.505 426 131.5 426ZM131.5 407C150.002 407 165 392.002 165 373.5C165 354.998 150.002 340 131.5 340C112.998 340 98 354.998 98 373.5C98 392.002 112.998 407 131.5 407Z"
                            fill="black"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M375.5 426C404.495 426 428 402.495 428 373.5C428 344.505 404.495 321 375.5 321C346.505 321 323 344.505 323 373.5C323 402.495 346.505 426 375.5 426ZM375.5 407C394.002 407 409 392.002 409 373.5C409 354.998 394.002 340 375.5 340C356.998 340 342 354.998 342 373.5C342 392.002 356.998 407 375.5 407Z"
                            fill="black"></path>
                        </svg>
                        <span class="subtitle">Medios de envío</span>
                      </div>
                      <div class="col-auto">
                        <span class="js-accordion-toggle-inactive" data-prev-visibility="inline" style="display: none;">
                          <svg class="icon-inline svg-icon-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256,340.3,451.75,144.55l18.1,18.1L256,376.5,42.15,162.65l18.1-18.1Z"></path>
                          </svg> </span>
                        <span class="js-accordion-toggle-active" style="display: inline;" data-prev-visibility="inline">
                          <svg class="icon-inline svg-icon-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M60.25,367.45l-18.1-18.1L256,135.5,469.85,349.35l-18.1,18.1L256,171.7Z"></path>
                          </svg> </span>
                      </div>
                    </a>
                    <div class="js-accordion-content" style="display: none;" data-prev-visibility="block">
                      <div class="mt-1 mb-2" data-store="shipping-calculator">
                        <div
                          class="js-shipping-calculator-head shipping-calculator-head position-relative transition-soft with-form with-free-shipping">
                          <div class="js-shipping-calculator-with-zipcode  mb-4 w-100 transition-up position-absolute mt-2">
                            <div class="free-shipping-title transition-soft">
                              <div class="js-free-shipping-title position-absolute transition-up w-100 text-accent">
                                ¡Genial! Tenés envío gratis
                              </div>
                              <div class="js-free-shipping-title-min-cost position-absolute transition-up w-100 transition-up-active">
                                <span class="text-accent-success">Envío gratis</span> superando los <span>$50.000</span>
                              </div>
                            </div>
                            <div class="container p-0">
                              <div class="row align-items-center">
                                <span class="col pr-0">
                                  <span class="font-small align-bottom">
                                    <span>Entregas para el CP:</span>
                                    <strong class="js-shipping-calculator-current-zip"></strong>
                                  </span>
                                </span>
                                <div class="col-auto pl-0">
                                  <a class="js-shipping-calculator-change-zipcode btn btn-secondary btn-small float-right"
                                    href="#">Cambiar CP</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="js-shipping-calculator-form mt-2 shipping-calculator-form transition-up position-absolute w-100 transition-up-active">
                            <div class="form-group form-row form-group-inline mb-3">
                              <div class="col-12">
                                <div class=" mb-2" style="display: none;">
                                  <span class="text-accent">Envío gratis</span> superando los <span>$50.000</span>
                                </div>
                                <div class=" text-accent mb-2" style="display: none;">
                                  ¡Genial! Tenés envío gratis
                                </div>
                              </div>
                              <div class="position-relative col-12">
                                <div class="form-control-container ">
                                  <input type="tel" class=" form-control js-shipping-input form-control-inline" autocorrect="off"
                                    autocapitalize="off" name="zipcode" placeholder="Tu código postal" aria-label="Tu código postal"
                                    data-component="cart">
                                </div>
                                <button class="js-calculate-shipping btn btn-secondary btn-block" aria-label="Calcular envío">
                                  <span class="js-calculate-shipping-wording">
                                    <svg class="icon-inline btn-icon svg-icon-text" xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512">
                                      <path d="M268.8,268.8V486.4H243.2V268.8H25.6V243.2H243.2V25.6h25.6V243.2H486.4v25.6Z"></path>
                                    </svg> </span>
                                  <span class="float-right loading" style="display: none;">
                                    <svg class="icon-inline btn-icon icon-spin svg-icon-text" xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 256 512">
                                      <path
                                        d="M460.115 373.846l-6.941-4.008c-5.546-3.202-7.564-10.177-4.661-15.886 32.971-64.838 31.167-142.731-5.415-205.954-36.504-63.356-103.118-103.876-175.8-107.701C260.952 39.963 256 34.676 256 28.321v-8.012c0-6.904 5.808-12.337 12.703-11.982 83.552 4.306 160.157 50.861 202.106 123.67 42.069 72.703 44.083 162.322 6.034 236.838-3.14 6.149-10.75 8.462-16.728 5.011z">
                                      </path>
                                    </svg> </span>
                                </button>
                              </div>
                              <div class="col-12">
                                <a class="btn-link btn-link-primary mt-2 mb-2 d-block "
                                  href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank" previewlistener="true">No sé
                                  mi código postal</a>
                              </div>
                              <div class="col-12">
                                <div class="js-ship-calculator-error invalid-zipcode alert alert-danger" style="display: none;">
                                  No encontramos este código postal para Argentina. Podés intentar con otro o
                                  <a href="#" data-toggle="#cart-shipping-country"
                                    class="js-modal-open js-open-over-modal btn-link btn-link-primary text-lowercase">
                                    cambiar tu país de entrega
                                  </a>
                                </div>
                                <div class="js-ship-calculator-error js-ship-calculator-common-error alert alert-danger"
                                  style="display: none;">Ocurrió un error al calcular el envío. Por favor intentá de nuevo en unos
                                  segundos.</div>
                                <div class="js-ship-calculator-error js-ship-calculator-external-error alert alert-danger"
                                  style="display: none;">El calculo falló por un problema con el medio de envío. Por favor intentá de
                                  nuevo en unos segundos.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="js-shipping-calculator-spinner shipping-spinner-container my-4 transition-soft text-center"
                          style="display: none;">
                          <i class="spinner col-6 offset-3"></i>
                        </div>
                        <div class="js-shipping-calculator-response transition-soft  radio-buttons-group" style="display: none;"></div>
                      </div>
                    </div>
                  </div>
                  <div class="js-accordion-container js-toggle-shipping mb-1">
                    
                    
                  <details class="js-accordion-container js-toggle-shipping mb-1" id="acordionElement">
                    <summary>
                      
                    <a class="js-accordion-toggle py-1 row">
                          <div class="col">
                            <svg class="icon-inline icon-w svg-icon-text mr-1" width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3336 117.333C11.3336 111.811 15.8108 107.333 21.3336 107.333H330.668C336.19 107.333 340.668 111.811 340.668 117.333V182H422.09C425.223 182 428.176 183.469 430.066 185.968L498.643 276.634C499.957 278.371 500.668 280.489 500.668 282.666V373.334C500.668 378.857 496.19 383.334 490.668 383.334H424.651C419.129 383.334 414.651 378.857 414.651 373.334C414.651 367.811 419.129 363.334 424.651 363.334H480.668V286.022L417.116 202H340.668V373.334C340.668 378.857 336.19 383.334 330.668 383.334H186.668C181.145 383.334 176.668 378.857 176.668 373.334C176.668 367.811 181.145 363.334 186.668 363.334H320.668V127.333H31.3336V363.334H85.3336C90.8565 363.334 95.3336 367.811 95.3336 373.334C95.3336 378.857 90.8565 383.334 85.3336 383.334H21.3336C15.8108 383.334 11.3336 378.857 11.3336 373.334V117.333Z" fill="black"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M131.5 426C160.495 426 184 402.495 184 373.5C184 344.505 160.495 321 131.5 321C102.505 321 79 344.505 79 373.5C79 402.495 102.505 426 131.5 426ZM131.5 407C150.002 407 165 392.002 165 373.5C165 354.998 150.002 340 131.5 340C112.998 340 98 354.998 98 373.5C98 392.002 112.998 407 131.5 407Z" fill="black"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M375.5 426C404.495 426 428 402.495 428 373.5C428 344.505 404.495 321 375.5 321C346.505 321 323 344.505 323 373.5C323 402.495 346.505 426 375.5 426ZM375.5 407C394.002 407 409 392.002 409 373.5C409 354.998 394.002 340 375.5 340C356.998 340 342 354.998 342 373.5C342 392.002 356.998 407 375.5 407Z" fill="black"></path>
                            </svg>
                            <span class="subtitle">Medios de envío</span>
                          </div>
                          <div class="col-auto">
                            <span class="js-accordion-toggle-inactive" data-prev-visibility="inline" style="display: none;">
                              <svg class="icon-inline svg-icon-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M256,340.3,451.75,144.55l18.1,18.1L256,376.5,42.15,162.65l18.1-18.1Z"></path>
                              </svg> </span>
                            <span class="js-accordion-toggle-active" style="display: inline;" data-prev-visibility="inline">
                              <svg class="icon-inline svg-icon-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M60.25,367.45l-18.1-18.1L256,135.5,469.85,349.35l-18.1,18.1L256,171.7Z"></path>
                              </svg>
                            </span>
                          </div>
                        </a></summary>
                    
                  <div class="js-accordion-content" data-prev-visibility="block">
                      <div class="mt-1 mb-2" data-store="shipping-calculator">
                        <div class="js-shipping-calculator-head shipping-calculator-head position-relative transition-soft with-form with-free-shipping">
                          <div class="js-shipping-calculator-with-zipcode  mb-4 w-100 transition-up position-absolute mt-2">
                            <div class="free-shipping-title transition-soft">
                              <div class="js-free-shipping-title position-absolute transition-up w-100 text-accent">
                                ¡Genial! Tenés envío gratis
                              </div>
                              <div class="js-free-shipping-title-min-cost position-absolute transition-up w-100 transition-up-active">
                                <span class="text-accent-success">Envío gratis</span> superando los <span>$50.000</span>
                              </div>
                            </div>
                            <div class="container p-0">
                              <div class="row align-items-center">
                                <span class="col pr-0">
                                  <span class="font-small align-bottom">
                                    <span>Entregas para el CP:</span>
                                    <strong class="js-shipping-calculator-current-zip"></strong>
                                  </span>
                                </span>
                                <div class="col-auto pl-0">
                                  <a class="js-shipping-calculator-change-zipcode btn btn-secondary btn-small float-right" href="#">Cambiar CP</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="js-shipping-calculator-form mt-2 shipping-calculator-form transition-up position-absolute w-100 transition-up-active">
                            <div class="form-group form-row form-group-inline mb-3">
                              <div class="col-12">
                                <div class=" mb-2" style="display: none;">
                                  <span class="text-accent">Envío gratis</span> superando los <span>$50.000</span>
                                </div>
                                <div class=" text-accent mb-2" style="display: none;">
                                  ¡Genial! Tenés envío gratis
                                </div>
                              </div>
                              <div class="position-relative col-12">
                                <div class="form-control-container ">
                                  <input type="tel" class=" form-control js-shipping-input form-control-inline" autocorrect="off" autocapitalize="off" name="zipcode" placeholder="Tu código postal" aria-label="Tu código postal" data-component="cart" style="
    width: 433px;
    height: 10px;
">
                                </div>
                                <button class="js-calculate-shipping btn btn-secondary btn-block" aria-label="Calcular envío">
                                  <span class="js-calculate-shipping-wording">
                                    <svg class="icon-inline btn-icon svg-icon-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                      <path d="M268.8,268.8V486.4H243.2V268.8H25.6V243.2H243.2V25.6h25.6V243.2H486.4v25.6Z"></path>
                                    </svg> </span>
                                  <span class="float-right loading" style="display: none;">
                                    <svg class="icon-inline btn-icon icon-spin svg-icon-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                                      <path d="M460.115 373.846l-6.941-4.008c-5.546-3.202-7.564-10.177-4.661-15.886 32.971-64.838 31.167-142.731-5.415-205.954-36.504-63.356-103.118-103.876-175.8-107.701C260.952 39.963 256 34.676 256 28.321v-8.012c0-6.904 5.808-12.337 12.703-11.982 83.552 4.306 160.157 50.861 202.106 123.67 42.069 72.703 44.083 162.322 6.034 236.838-3.14 6.149-10.75 8.462-16.728 5.011z">
                                      </path>
                                    </svg> </span>
                                </button>
                              </div>
                              <div class="col-12">
                                <a class="btn-link btn-link-primary mt-2 mb-2 d-block " href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank" previewlistener="true">No sé
                                  mi código postal</a>
                              </div>
                              <div class="col-12">
                                <div class="js-ship-calculator-error invalid-zipcode alert alert-danger" style="display: none;">
                                  No encontramos este código postal para Argentina. Podés intentar con otro o
                                  <a href="#" data-toggle="#cart-shipping-country" class="js-modal-open js-open-over-modal btn-link btn-link-primary text-lowercase">
                                    cambiar tu país de entrega
                                  </a>
                                </div>
                                <div class="js-ship-calculator-error js-ship-calculator-common-error alert alert-danger" style="display: none;">Ocurrió un error al calcular el envío. Por favor intentá de nuevo en unos
                                  segundos.</div>
                                <div class="js-ship-calculator-error js-ship-calculator-external-error alert alert-danger" style="display: none;">El calculo falló por un problema con el medio de envío. Por favor intentá de
                                  nuevo en unos segundos.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="js-shipping-calculator-spinner shipping-spinner-container my-4 transition-soft text-center" style="display: none;">
                          <i class="spinner col-6 offset-3"></i>
                        </div>
                        <div class="js-shipping-calculator-response transition-soft  radio-buttons-group" style="display: none;"></div>
                      </div>
                    </div></details></div>
                </div>
              </div>
            </div>
            <div class="js-cart-total-container js-visible-on-cart-filled mb-4 pt-3" data-store="cart-total"
              data-prev-visibility="block" style="display: block;">
              <h4 class="row mb-0">
                <span class="col">Total:</span>
                <span class="js-cart-total col text-bold text-right" data-component="cart.total" data-component-value="${precio}00"
                  data-priceraw="${precio}00">$${precioFormateado},00</span>
              </h4>
              <div class="total-price hidden" data-priceraw="${precio}00">Total: $${precioFormateado}</div>
              <div class="text-right">
                <div data-interest="0" data-cart-installment="6"
                  class="js-installments-cart-total mt-2 text-right text-accent-buy">
                  O hasta
                  <span class="js-cart-installments-amount">3</span> cuotas sin interés de <span
                    class="js-cart-installments installment-price">$${precioCuotas3}</span>
                </div>
              </div>
            </div>
            <div class="js-visible-on-cart-filled container-fluid" data-prev-visibility="block" style="display: block;">
              <div class="js-ajax-cart-submit row mb-3" id="ajax-cart-submit-div">
                <input class="btn btn-primary btn-block" type="submit" name="go_to_checkout" value="Iniciar Compra"
                  data-component="cart.checkout-button">
              </div>
              <div class="row">
                <div class="js-ajax-cart-minimum alert alert-warning mt-4" style="display:none" id="ajax-cart-minumum-div">
                  El monto mínimo de compra es de $0 sin incluir el costo de envío
                </div>
              </div>
              <input type="hidden" id="ajax-cart-minimum-value" value="0">
              <div class="row mb-2">
                <div class="text-center w-100">
                  <a href="#" class="js-modal-close js-fullscreen-modal-close btn-link">Ver más productos</a>
                </div>
              </div>
            </div>
          `;
    productPriceCart.innerHTML = contenidoPriceHTML;
    productPriceCart.style.display = "block";
    seleccionarBtnBorrarProduct();
  });
}

function seleccionarBtnCloseNotification() {
  const notificationCartClose = document.querySelectorAll(
    ".js-cart-notification-close"
  );
  notificationCartClose.forEach((btnClose) => {
    btnClose.addEventListener("click", () => {
      notificationCart.classList.replace(
        "notification-visible",
        "notification-hidden"
      );
      notificationCart.style.display = "none";
      if (btnClose.classList.contains("js-open-cart")) {
        openCart();
      }
    });
  });
}

function seleccionarBtnBorrarProduct() {
  const btnsBorrar = document.querySelectorAll(
    '[data-component="line-item.remove"]'
  );
  btnsBorrar.forEach((btnBorrar) => {
    btnBorrar.addEventListener("click", () => {
      productPriceCart.style.display = "none";
      productCartVacio.style.display = "block";
      productDetailCart.innerHTML = "";
      productPriceCart.innerHTML = "";
    });
  });
}

}, 3000);