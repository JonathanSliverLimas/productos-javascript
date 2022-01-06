var productos = [
  {
    codigo: 1,
    descripcion: "Escritorio 2 cajones blanco 76x121x43 cm",
    marca: "Home Mobili",
    categoria: "escritorio",
    precio: 79000,
    img: "inc/img/escritorio1.jpg",
    destacado: true,
  },
  {
    codigo: 2,
    descripcion: "Escritorio Gamer 76x150x60 cm grafito/verde",
    marca: "Just Home Collection",
    categoria: "escritorio",
    precio: 329990,
    img: "inc/img/escritorio2.jpg",
    destacado: false,
  },
  {
    codigo: 3,
    descripcion: "Escritorio elegante 110x40x77 cm MDF blanco",
    marca: "Mobilo",
    categoria: "escritorio",
    precio: 79990,
    img: "inc/img/escritorio3.jpg",
    destacado: true,
  },
  {
    codigo: 4,
    descripcion: "Escritorio 2 funciones 75x100x50 cm tabaco chic",
    marca: "Inval",
    categoria: "escritorio",
    precio: 119990,
    img: "inc/img/escritorio4.jpg",
    destacado: false,
  },
  {
    codigo: 5,
    descripcion: "Escritorio 78x130x60 cm MDP blanco/rústico",
    marca: "InvMobilfrankal",
    categoria: "escritorio",
    precio: 239990,
    img: "inc/img/escritorio5.jpg",
    destacado: false,
  },
  {
    codigo: 6,
    descripcion: "Escritorio office simple 8 77x152x117 cm",
    marca: "Tuhome",
    categoria: "escritorio",
    precio: 109990,
    img: "inc/img/escritorio6.jpg",
    destacado: false,
  },
  {
    codigo: 7,
    descripcion: "Silla gamer greenx 59x117x63 cm verde",
    marca: "One Sit",
    categoria: "silla",
    precio: 139990,
    img: "inc/img/silla1.jpg",
    destacado: true,
  },
  {
    codigo: 8,
    descripcion: "Silla Ejecutiva Senna 121x66.5x69 cm Negro",
    marca: "One Sit",
    categoria: "silla",
    precio: 189990,
    img: "inc/img/silla2.jpg",
    destacado: true,
  },
  {
    codigo: 9,
    descripcion: "Silla Ejecutiva Malla 122x55x64 cm Black",
    marca: "Just Home Collection",
    categoria: "silla",
    precio: 140990,
    img: "inc/img/silla3.jpg",
    destacado: false,
  },
  {
    codigo: 10,
    descripcion: "Estantería color verde",
    marca: "Just Home Collection",
    categoria: "estante",
    precio: 49990,
    img: "inc/img/estante1.jpg",
    destacado: false,
  },
  {
    codigo: 11,
    descripcion: "Estante metálico",
    marca: "Lessox",
    categoria: "estante",
    precio: 89990,
    img: "inc/img/estante2.jpg",
    destacado: true,
  },
  {
    codigo: 12,
    descripcion: "Biblioteca 5 repisas",
    marca: "Tuhome",
    categoria: "estante",
    precio: 39990,
    img: "inc/img/estante3.jpg",
    destacado: true,
  },
];

/* Variables globales*/
var productosDestacados = document.getElementById("itemsDestacados");
var productosEscritorios = document.getElementById("itemsEscritorios");
var productosSillas = document.getElementById("itemsSillas");
var productosEstantes = document.getElementById("itemsEstantes");
var modoWeb = document.getElementById("modoWeb");
var body = document.getElementById("body");
var lateral = document.getElementById("lateral");
var header = document.getElementById("header");
var logo = document.querySelector(".logo h5");
var articulos = document.getElementsByClassName("articulo");
var registroProductos = document.getElementById("registroProductos");
var navegacion = document.getElementsByClassName("navegacion");
var tituloDestacados = document.querySelector(".tituloDestacados h1");
var tituloYoutube = document.querySelector(".tituloYoutube h1");
var tituloEscritorios = document.querySelector(".tituloEscritorios h1");
var tituloSillas = document.querySelector(".tituloSillas h1");
var tituloEstantes = document.querySelector(".tituloEstantes h1");

var footer = document.getElementById("footer");

/* Variables Formulario Producto */
var descripcion = document.getElementById("descripcion");
var marca = document.getElementById("marca");
var categoria = document.getElementById("categoria");
var precio = document.getElementById("precio");
var imagen = document.getElementById("imagen");
var botonAgregar = document.getElementById("btnAgregar");

var labelDescripcion = document.getElementById("lblDescripcion");
var labelMarca = document.getElementById("lblMarca");
var labelCategoria = document.getElementById("lblCategoria");
var labelPrecio = document.getElementById("lblPrecio");
var labelImagen = document.getElementById("lblImagen");

/* Variables Formulario Contacto */
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var correo = document.getElementById("correo");
var mensaje = document.getElementById("mensaje");

var labelNombre = document.getElementById("l_nombre");
var labelApellidos = document.getElementById("l_apellidos");
var labelCorreo = document.getElementById("l_correo");
var labelMensaje = document.getElementById("l_mensaje");
var botonEnviar = document.getElementById("botonEnviar");

var alertaMensaje = document.getElementById("alertaMensaje");
alertaMensaje.style.display = "none";

/* Variable carga de sitio Web */
var cargaDeSitioWeb = document.getElementById("cargaDeSitioWeb");
var bodyWeb = document.getElementById("bodyWeb");
bodyWeb.style.display = "none";

/* Variable noticia */
var noticia = document.getElementById("noticia");
noticia.style.display = "none";

/* Cerrar notificacion o noticia */
function cerrarSesion() {
  noticia.style.display = "none";
}

/* Mostrar notificacion o noticia */
function mostrarNoticia() {
  noticia.style.display = "flex";
}

/* Mostrar web después de cargar gif */
function mostrarWeb() {
  bodyWeb.style.display = "block";
  cargaDeSitioWeb.style.display = "none";
}

/* Mostrar gif al cargar la página */
window.addEventListener("load", function () {
  this.setTimeout(mostrarNoticia, 4000);
  this.setTimeout(mostrarWeb, 50);
});

/* Cambiar modo Dark o Light */
function cambiarModoWeb(modo) {
  if (modo) {
    modoWeb.innerHTML = `<img src="inc/img/dark.png" onclick="cambiarModoWeb(false)" title="Cambiar a modo dark" />`;
    body.style.background = "#fff";
    header.style.background = "#fff";
    header.style.borderTop = "5px solid #ffe067";
    lateral.style.background = "#f3f3f3";
    logo.style.color = "#524330";
    this.enlacesNavegacion("rgb(83, 65, 49)");
    this.tituloCategorias("#1a1613");
    this.fondoArticulos("#fff");
    this.labelsContacto("#1a1613");
    this.labelsProductos("#1a1613");
    footer.style.background = "#fcecaf";
  } else {
    modoWeb.innerHTML = `<img src="inc/img/light.png" onclick="cambiarModoWeb(true)" title="Cambiar a modo light" />`;
    body.style.background = "#111";
    header.style.background = "#222";
    header.style.borderTop = "5px solid #222";
    lateral.style.background = "rgb(209, 166, 0)";
    logo.style.color = "rgb(255 99 99)";
    this.enlacesNavegacion("rgb(229 143 67)");
    this.tituloCategorias("#fff");
    this.fondoArticulos("rgb(209 166 0)");
    this.labelsContacto("#fff");
    this.labelsProductos("#fff");
    footer.style.background = "rgb(255, 99, 99)";
  }
}

/* Listar los productos */
this.listadoDeProductos();

function enlacesNavegacion(colorTitulo) {
  for (let i = 0; i < navegacion.length; i++) {
    navegacion[i].style.color = colorTitulo;
  }
}

function fondoArticulos(colorFondo) {
  for (let i = 0; i < articulos.length; i++) {
    articulos[i].style.background = colorFondo;
  }
}

function tituloCategorias(colorTitulo) {
  if (tituloYoutube) {
    tituloYoutube.style.color = colorTitulo;
  }
  if (tituloDestacados) {
    tituloDestacados.style.color = colorTitulo;
  }
  if (tituloEscritorios) {
    tituloEscritorios.style.color = colorTitulo;
  }
  if (tituloSillas) {
    tituloSillas.style.color = colorTitulo;
  }
  if (tituloEstantes) {
    tituloEstantes.style.color = colorTitulo;
  }
}

function labelsContacto(colorTitulo) {
  if (labelNombre) {
    labelNombre.style.color = colorTitulo;
  }
  if (labelApellidos) {
    labelApellidos.style.color = colorTitulo;
  }
  if (labelCorreo) {
    labelCorreo.style.color = colorTitulo;
  }
  if (labelMensaje) {
    labelMensaje.style.color = colorTitulo;
  }
}

function labelsProductos(colorTitulo) {
  if (labelDescripcion) {
    labelDescripcion.style.color = colorTitulo;
  }
  if (labelMarca) {
    labelMarca.style.color = colorTitulo;
  }
  if (labelCategoria) {
    labelCategoria.style.color = colorTitulo;
  }
  if (labelPrecio) {
    labelPrecio.style.color = colorTitulo;
  }

  if (labelImagen) {
    labelImagen.style.color = colorTitulo;
  }
}

function listadoDeProductos() {
  for (producto of productos) {
    if (productosDestacados && producto.destacado) {
      productosDestacados.innerHTML += this.itemProducto(
        producto.descripcion,
        producto.marca,
        producto.precio,
        producto.img
      );
    }
    if (productosEscritorios && producto.categoria == "escritorio") {
      productosEscritorios.innerHTML += this.itemProducto(
        producto.descripcion,
        producto.marca,
        producto.precio,
        producto.img
      );
    }
    if (productosSillas && producto.categoria == "silla") {
      productosSillas.innerHTML += this.itemProducto(
        producto.descripcion,
        producto.marca,
        producto.precio,
        producto.img
      );
    }
    if (productosEstantes && producto.categoria == "estante") {
      productosEstantes.innerHTML += this.itemProducto(
        producto.descripcion,
        producto.marca,
        producto.precio,
        producto.img
      );
    }
    if (registroProductos) {
      registroProductos.innerHTML += this.registrosTabla(
        producto.codigo,
        producto.descripcion,
        producto.marca,
        producto.categoria,
        producto.precio
      );
    }
  }
}

function itemProducto(descripcion, marca, precio, img) {
  return `<article class="articulo">
  <div class="imgArticle">
    <img src="${img}" onerror="cargarImgDefecto(this)"/>
  </div>
  <div class="nombreProducto">
    <h3>${marca}</h3>
    <h2>${descripcion} </h2>
  </div>
  <div class="precioProducto">
    <h3>$${precio} C/U</h3>
  </div>
  </article>`;
}

function cargarImgDefecto(imagen){
  imagen.onerror = "";
  imagen.src = "inc/img/noimage.jpeg";
  return true;
}

function registrosTabla(codigo, descripcion, marca, categoria, precio) {
  return `<tr>
  <td id="codigoTabla">${codigo}</td>
  <td id="descripcionTabla">${descripcion}</td>
  <td id="">${marca}</td>
  <td id="categoriaTabla">${categoria}</td>
  <td id="precioTabla">$${precio}</td>
  <td class="botonModificar" onclick="obtenerDatosProducto(${codigo})">Modificar</td>
  <td class="botonEliminar" onclick="eliminarProducto(${codigo})">Eliminar</td>
</tr>`;
}

var a = 13;

function agregarProducto() {
  if (
    (!descripcion.value && descripcion.value.trim() == null) ||
    descripcion.value.trim().length == 0
  ) {
    descripcion.style.border = "1px solid red";
  } else {
    descripcion.style.border = "1px solid #cccccc";
  }

  if (
    (!marca.value && marca.value.trim() == null) ||
    marca.value.trim().length == 0
  ) {
    marca.style.border = "1px solid red";
  } else {
    marca.style.border = "1px solid #cccccc";
  }

  if (
    (!categoria.value && categoria.value.trim() == null) ||
    categoria.value.trim().length == 0
  ) {
    categoria.style.border = "1px solid red";
  } else {
    categoria.style.border = "1px solid #cccccc";
  }

  if (
    (!precio.value && precio.value == null) ||
    precio.value <= 0 ||
    isNaN(precio.value)
  ) {
    precio.style.border = "1px solid red";
  } else {
    precio.style.border = "1px solid #cccccc";
  }

  if (
    (!imagen.value && imagen.value.trim() == null) ||
    imagen.value.trim().length == 0
  ) {
    imagen.style.border = "1px solid red";
  } else {
    imagen.style.border = "1px solid #cccccc";
  }

  if (
    descripcion.value &&
    marca.value &&
    categoria.value &&
    precio.value &&
    imagen.value
  ) {
    if (botonAgregar.value === "Agregar producto") {
      productos.push({
        codigo: a++,
        descripcion: descripcion.value,
        marca: marca.value,
        categoria: categoria.value,
        precio: precio.value,
        img: imagen.value,
        destacado: false,
      });
    }

    if (
      botonAgregar.value === "Modificar producto" &&
      codigoModificar &&
      indexModificar
    ) {
      productos.splice(indexModificar, 1);
      productos.splice(indexModificar, 0, {
        codigo: codigoModificar,
        descripcion: descripcion.value,
        marca: marca.value,
        categoria: categoria.value,
        precio: precio.value,
        img: imagen.value,
        destacado: false,
      });
    }

    if (indexModificar === 0) {
      productos.shift();
      productos.unshift({
        codigo: codigoModificar,
        descripcion: descripcion.value,
        marca: marca.value,
        categoria: categoria.value,
        precio: precio.value,
        img: imagen.value,
        destacado: false,
      });
    }

    botonAgregar.value = "Agregar producto";
    productosEscritorios.innerHTML = "";
    productosSillas.innerHTML = "";
    productosEstantes.innerHTML = "";
    registroProductos.innerHTML = "";
    this.listadoDeProductos();
    this.limpiarCamposProducto();
  }
}

var codigoModificar = null;
var indexModificar = null;

function obtenerDatosProducto(codigo) {
  productos.find((producto, index) => {
    if (producto.codigo === codigo) {
      descripcion.value = producto.descripcion;
      marca.value = producto.marca;
      categoria.value = producto.categoria;
      precio.value = producto.precio;
      imagen.value = producto.img;

      codigoModificar = codigo;
      indexModificar = index;

      botonAgregar.value = "Modificar producto";
    }
  });
}

function eliminarProducto(codigo) {
  for (var i = 0; i < productos.length; i++) {
    if (productos[i].codigo === codigo) {
      productos.splice(i, 1);
    }
  }
  productosEscritorios.innerHTML = "";
  productosSillas.innerHTML = "";
  productosEstantes.innerHTML = "";
  registroProductos.innerHTML = "";

  botonAgregar.value = "Agregar producto";
  this.listadoDeProductos();
  this.limpiarCamposProducto();
}

function limpiarCamposProducto() {
  descripcion.value = "";
  marca.value = "";
  precio.value = "";
  imagen.value = "";
}

/* Enviar mensaje - Contacto */
function enviarMensaje() {
  if (
    (!nombre.value && nombre.value.trim() == null) ||
    nombre.value.trim().length == 0
  ) {
    nombre.style.border = "1px solid red";
  } else {
    nombre.style.border = "1px solid #cccccc";
  }

  if (
    (!apellidos.value && apellidos.value.trim() == null) ||
    apellidos.value.trim().length == 0
  ) {
    apellidos.style.border = "1px solid red";
  } else {
    apellidos.style.border = "1px solid #cccccc";
  }

  if (
    (!correo.value && correo.value.trim() == null) ||
    correo.value.trim().length == 0
  ) {
    correo.style.border = "1px solid red";
  } else {
    correo.style.border = "1px solid #cccccc";
  }

  if (
    (!mensaje.value && mensaje.value.trim() == null) ||
    mensaje.value.trim().length == 0
  ) {
    mensaje.style.border = "1px solid red";
  } else {
    mensaje.style.border = "1px solid #cccccc";
  }

  if (nombre.value && apellidos.value && correo.value && mensaje.value) {
    let mensajeRecibido = `<div class="alerta-mensaje-recibido">
    <div class="icono-cerrar">
      <img src="inc/img/cerrar-sesion.png" onclick="cerrarMensaje()" />
    </div>
    <h5>¡${nombre.value} ${apellidos.value} recibimos tu mensaje!</h5>
    <h4><strong>${correo.value}</strong> ${mensaje.value}</h4>
    </div>`;
    alertaMensaje.innerHTML = mensajeRecibido;
    alertaMensaje.style.display = "flex";

    nombre.value = "";
    apellidos.value = "";
    correo.value = "";
    mensaje.value = "";

  }
}

function cerrarMensaje() {
  alertaMensaje.style.display = "none";
}
