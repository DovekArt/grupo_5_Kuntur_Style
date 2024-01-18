let contadorImagenes = 1;
let contadorCategorias = 1;
let contadorTalles = 1;

// Función para agregar un nuevo campo de entrada de categoria
function agregarCampoTalle() {
  const container = document.getElementById('talle-container');
  // Verificar el contador antes de agregar un nuevo campo
  if (contadorTalles < 5) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'talle';
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = '-';
    deleteButton.onclick = function () {
        container.removeChild(newInput);
        container.removeChild(deleteButton);
        contadorTalles--;
    };
    container.appendChild(newInput);
    container.appendChild(deleteButton);
    
    // Incrementar el contador después de agregar un nuevo campo
    contadorTalles++;
  }
}

// Función para agregar un nuevo campo de entrada de categoria
function agregarCampoCategoria() {
  const container = document.getElementById('tag-container');
  // Verificar el contador antes de agregar un nuevo campo
  if (contadorCategorias < 5) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'tag';
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = '-';
    deleteButton.onclick = function () {
        container.removeChild(newInput);
        container.removeChild(deleteButton);
        contadorCategorias--;
    };
    container.appendChild(newInput);
    container.appendChild(deleteButton);
    
    // Incrementar el contador después de agregar un nuevo campo
    contadorCategorias++;
  }
}

// Función para agregar un nuevo campo de entrada de imagen
function agregarCampoImagen() {
  const container = document.getElementById('imagen-container');
  // Verificar el contador antes de agregar un nuevo campo
  if (contadorImagenes < 5) {
    const newInput = document.createElement('input');
    newInput.type = 'file';
    newInput.name = 'imagen';
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = '-';
    deleteButton.onclick = function () {
        container.removeChild(newInput);
        container.removeChild(deleteButton);
        contadorImagenes--;
    };
    container.appendChild(newInput);
    container.appendChild(deleteButton);
    
    // Incrementar el contador después de agregar un nuevo campo
    contadorImagenes++;
  }
}

// Obtener el formulario y la lista de productos
const form = document.getElementById('product-form');

// Agregar un evento de envío al formulario
form.addEventListener('submit', function (event) {
  event.preventDefault();
  // Obtener los valores del formulario
  const marca = document.getElementById('marca').value || 'KS';
  const stockInput = document.getElementById('stock');
  const stock = parseInt(stockInput.value);
  const titulo = document.getElementById('titulo').value;
  const codigo = document.getElementById('link').value;
  const precioInput = document.getElementById('precio');
  const precio = parseInt(precioInput.value);
  const tagInputs = document.querySelectorAll('#tag-container input[name="tag"]');
  const tag = Array.from(tagInputs).map(input => input.value).join(', ') || 'new';
  const imagenInputs = document.querySelectorAll('#imagen-container input[name="imagen"]');
  const imagen = Array.from(imagenInputs).map(input => input.value).join(', ');
  const talleInputs = document.querySelectorAll('#talle-container input[name="talle"]');
  const talle = Array.from(talleInputs).map(input => input.value).join(', ');
  const color = document.getElementById('color').value || 'No especificado';
  const material = document.getElementById('material').value || 'No especificado';
  const detalle = document.getElementById('detalles').value || `${titulo}. Material: ${material}. Color: ${color}. Talle: ${talle}.`;

  // Crear un nuevo producto utilizando la función crearProducto de datosProductos.js
  const nuevoProducto = {
      marca,
      nombre: titulo,
      precio,
      imagen: imagen.split(','),
      codigo,
      stock,
      tag: tag.split(','),
      detalle,
      color,
      material,
      talle: talle.split(',')
  };

  console.log(nuevoProducto);

  // Convertir el objeto nuevoProducto a una cadena JSON
  const nuevoProductoJSON = JSON.stringify(nuevoProducto);

  // Enviar la cadena JSON al servidor utilizando una solicitud POST
  fetch('/products', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: nuevoProductoJSON
  })
  .then(response => response.json())
  .then(data => {
      // Hacer algo con la respuesta del servidor
      console.log(data);
  })
  .catch(error => {
      // Manejar el error
      console.error(error);
  });

  // Resetear formulario
  form.reset();
});