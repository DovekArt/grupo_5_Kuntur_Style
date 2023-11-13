// Obtener el banner
const banner = document.querySelector('#banner-large');
// Función para ajustar el ancho del banner según el ancho de la pantalla
function ajustarAnchoBanner() {
  // Obtener el ancho de la pantalla
  const anchoPantalla = window.innerWidth - 15;
  // Establecer el ancho del banner en función del ancho de la pantalla
  banner.style.width = anchoPantalla + 'px';
}
// Llamar a la función una vez al cargar la página
ajustarAnchoBanner();
// Agregar el evento resize para que la función se llame cada vez que se cambie el tamaño de la ventana del navegador
window.addEventListener('resize', ajustarAnchoBanner);