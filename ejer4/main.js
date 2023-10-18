console.log('hola')

// ejercicio 1
const boton1 = document.querySelector("#boton1")// Selecciona un elemento
boton1.addEventListener('click', numAleatorio)// Agrega un evento de escucha al botón 'boton1'
const numeroAleatorioid = document.querySelector("#numeroAleatorio")// Selecciona un elemento

function numAleatorio() {
    const minimo = parseInt(document.querySelector("#num1").value)// Obtiene el valor numérico ingresado
    const maximo = parseInt(document.querySelector("#num2").value)// Obtiene el valor numérico ingresado
    const numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1) + minimo)// Calcula un número aleatorio dentro del rango especificado
    numeroAleatorioid.innerHTML = numeroAleatorio// Actualiza el contenido en html
}
// ejercicio 2

const mayusculas = document.querySelector("#mayusculas"); // Selecciona el elemento con el ID "mayusculas" y lo almacena en 'mayusculas'.
const minusculas = document.querySelector("#minusculas"); // Selecciona el elemento con el ID "minusculas" y lo almacena en 'minusculas'.
const texto = document.querySelector("#texto"); // Selecciona el elemento con el ID "texto" y lo almacena en 'texto'.
const palabras = document.querySelector("#palabras"); // Selecciona el elemento con el ID "palabras" y lo almacena en 'palabras'.

minusculas.addEventListener('click', hacerMinuscula); // Agrega un evento de clic al elemento 'minusculas' que ejecuta la función 'hacerMinuscula'.
mayusculas.addEventListener('click', hacerMayuscula); // Agrega un evento de clic al elemento 'mayusculas' que ejecuta la función 'hacerMayuscula'.

function hacerMinuscula() { // Define la función 'hacerMinuscula'.
    const textoOriginal = texto.value; // Obtiene el valor del elemento 'texto' y lo almacena en 'textoOriginal'.
    const textoEnMinusculas = textoOriginal.toLowerCase(); // Convierte 'textoOriginal' a minúsculas y lo almacena en 'textoEnMinusculas'.
    texto.value = textoEnMinusculas; // Actualiza el valor del elemento 'texto' con 'textoEnMinusculas'.
    contarPalabras(); // Llama a la función 'contarPalabras' para contar las palabras en el texto.
}

function hacerMayuscula() { // Define la función 'hacerMayuscula'.
    const textoOriginal = texto.value; // Obtiene el valor del elemento 'texto' y lo almacena en 'textoOriginal'.
    const textoEnMayusculas = textoOriginal.toUpperCase(); // Convierte 'textoOriginal' a mayúsculas y lo almacena en 'textoEnMayusculas'.
    texto.value = textoEnMayusculas; // Actualiza el valor del elemento 'texto' con 'textoEnMayusculas'.
    contarPalabras(); // Llama a la función 'contarPalabras' para contar las palabras en el texto.
}

function contarPalabras() { // Define la función 'contarPalabras'.
    const textoValue = texto.value; // Obtiene el valor del elemento 'texto' y lo almacena en 'textoValue'.
    const contarPalabras = textoValue.split(" "); // Divide 'textoValue' en palabras utilizando espacios en blanco como separadores y lo almacena en 'contarPalabras'.
    palabras.innerHTML = contarPalabras.length; // Actualiza el contenido del elemento 'palabras' con la cantidad de palabras.
}

const buscar = document.querySelector("#buscar"); // Selecciona el elemento con el ID "buscar" y lo almacena en 'buscar'.
const relleno = document.querySelector("#relleno"); // Selecciona el elemento con el ID "relleno" y lo almacena en 'relleno'.
const boton2 = document.querySelector("#boton2"); // Selecciona el elemento con el ID "boton2" y lo almacena en 'boton2'.

boton2.addEventListener('click', comparar); // Agrega un evento de clic al elemento 'boton2' que ejecuta la función 'comparar'.
const coincidencias = document.querySelector("#coincidencias"); // Selecciona el elemento con el ID "coincidencias" y lo almacena en 'coincidencias'.


// <span class="bg-primary text-light">lorem</span>
function comparar() {
    textoEscrito = texto.value; // Obtiene el texto ingresado en el elemento 'texto'.
    const iterador = textoEscrito.matchAll(`${buscar.value}`); // Busca todas las coincidencias de la cadena 'buscar' en el 'textoEscrito'.
    nuevoTexto = textoEscrito.replaceAll(`${buscar.value}`, `<span class="bg-primary text-light">${buscar.value}</span>`); // Reemplaza todas las coincidencias de 'buscar' con un span resaltado.
    document.querySelector('#relleno').innerHTML = nuevoTexto; // Actualiza el contenido del elemento con el ID 'relleno' con el texto resaltado.
    const spans = document.querySelectorAll('#relleno span'); // Obtiene todos los elementos 'span' dentro de 'relleno'.
    const count = spans.length; // Cuenta la cantidad de coincidencias.
    coincidencias.innerHTML = count; // Actualiza el contenido del elemento con el ID 'coincidencias' con la cantidad de coincidencias.
}
const resumen = document.querySelector('#resumen'); // Selecciona el elemento con el ID 'resumen' y lo almacena en 'resumen'.
boton2.addEventListener('click', resumen2); // Agrega un evento de clic al botón 'boton2' que ejecuta la función 'resumen2'.

function resumen2(event) {
    document.querySelector("#resumen").innerHTML = document.querySelector("#texto").value; // Copia el contenido del elemento 'texto' al elemento 'resumen'.
    let resumen2 = document.querySelector("#resumen").innerHTML;

    if (resumen2.split(" ").length < 11) { // Comprueba si el texto tiene menos de 11 palabras.
        resumen2 = document.querySelector("#resumen").innerHTML; // Si es así, mantiene el contenido original en 'resumen2'.
    } else {
        let array = resumen2.split(" "); // Divide el contenido de 'resumen2' en palabras.
        let resumenNuevo = ''; // Inicializa una cadena vacía para el resumen.

        for (let i = 0; i < 10; i++) { // Obtiene las primeras 10 palabras del texto.
            resumenNuevo += `${array[i]} `; // Agrega cada palabra al resumen con un espacio.
        }

        document.querySelector("#resumen").innerHTML = resumenNuevo; // Actualiza el contenido del elemento 'resumen' con el resumen generado.
    }
}





// ejercicio 3

const nombre = document.querySelector("#nombre"); // Selecciona el elemento con el ID 'nombre' y lo almacena en 'nombre'.
const convertirNombre = document.querySelector("#convertirNombre"); // Selecciona el elemento con el ID 'convertirNombre' y lo almacena en 'convertirNombre'.
const nombreConvertido = document.querySelector("#nombreConvertido"); // Selecciona el elemento con el ID 'nombreConvertido' y lo almacena en 'nombreConvertido'.

convertirNombre.addEventListener('click', convertir); // Agrega un evento de clic al elemento 'convertirNombre' que ejecuta la función 'convertir'.

function convertir() {
    texto2 = nombre.value; // Obtiene el valor ingresado en el elemento 'nombre'.
    remplazar = texto2.replace(/ /g, "-"); // Reemplaza todos los espacios en blanco por guiones.
    nombreConvertido.innerHTML = remplazar; // Actualiza el contenido del elemento 'nombreConvertido' con el valor modificado.
}

const fecha = document.querySelector("#fecha"); // Selecciona el elemento con el ID 'fecha' y lo almacena en 'fecha'.
const convertirFecha = document.querySelector("#convertirFecha"); // Selecciona el elemento con el ID 'convertirFecha' y lo almacena en 'convertirFecha'.
const fechaConvertida = document.querySelector("#fechaConvertida"); // Selecciona el elemento con el ID 'fechaConvertida' y lo almacena en 'fechaConvertida'.

convertirFecha.addEventListener('click', convertir2); // Agrega un evento de clic al elemento 'convertirFecha' que ejecuta la función 'convertir2'.

function convertir2() {
    texto3 = fecha.value; // Obtiene el valor ingresado en el elemento 'fecha'.
    remplazar2 = texto3.replace(/\//g, '-'); // Reemplaza todas las barras inclinadas por guiones.
    fechaConvertida.innerHTML = remplazar2; // Actualiza el contenido del elemento 'fechaConvertida' con el valor modificado.
}



//ejercicio 4

const boton4 = document.querySelector("#boton4"); // Selecciona el elemento con el ID 'boton4' y lo almacena en 'boton4'.
boton4.addEventListener('click', generarContraseña); // Agrega un evento de clic al botón 'boton4' que ejecuta la función 'generarContraseña'.

const password = document.querySelector("#pass"); // Selecciona el elemento con el ID 'pass' y lo almacena en 'password'.

function generarContraseña() { // Define la función 'generarContraseña'.
    const letras = 'abcdefghijklmnopqrstuvwxyz'; // Define un conjunto de letras en minúsculas.
    let contraseña = ''; // Inicializa una cadena vacía para la contraseña.

    for (let i = 0; i < 10; i++) { // Genera una contraseña de 10 caracteres.
        const letraAleatoria = Math.floor(Math.random() * letras.length); // Genera un índice aleatorio para seleccionar una letra.
        contraseña += letras.charAt(letraAleatoria); // Agrega la letra seleccionada a la contraseña.
    }

    password.value = contraseña; // Actualiza el valor del elemento 'password' con la contraseña generada.
}

// Ejercicio 4.2

const boton5 = document.querySelector("#boton5"); // Selecciona el elemento con el ID 'boton5' y lo almacena en 'boton5'.
boton5.addEventListener('click', generarEmoji); // Agrega un evento de clic al botón 'boton5' que ejecuta la función 'generarEmoji'.

const emoji = document.querySelector("#emoji"); // Selecciona el elemento con el ID 'emoji' y lo almacena en 'emoji'.

function generarEmoji() { // Define la función 'generarEmoji'.
    var emojis = [
        '😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨'
    ];

    const indiceAleatorio = Math.floor(Math.random() * emojis.length); // Genera un índice aleatorio para seleccionar un emoji.
    const emojiAleatorio = emojis[indiceAleatorio]; // Obtiene el emoji seleccionado.

    emoji.innerHTML = emojiAleatorio; // Actualiza el contenido del elemento 'emoji' con el emoji seleccionado.
}


