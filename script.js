// Arreglo que contiene las palabras para jugar
let arrayPalabras = ["GUITARRA", "ELEFANTE", "TURQUESA", "ABRIL", "TECLADO", "INGLATERRA", "GATO", "MESSI", "PELUQUERIA", "ASADO", "PELOTA", "PELUCHE", "MOTOSIERRA", "MATE", "OBELISCO", "TANGO", "MILONGA", "DULCEDELECHE", "CUMBIA", "MATE", "ZAPATO", "YERBA", "BIFE", "CHORIPAN", "MILANESA", "MENDOZA", "CUMBRE", "MARTINFIERRRO"];

let ayudas = [
    "Instrumento Musical",
    "Animal de la selva",
    "Es un color",
    "Nombre de mujer, Y esta en el calendario",
    "Hardware de computadora",
    "Es un Pais",
    "Es una mascota",
    "Es el mejor Jugador de futbol del Mundo",
    "Las mujeres Aman ir",
    "Comida tipica de un Argentino",
    "Juguete de Niño",
    "juguete de Mujer",
    "El mejor instrumento de JAVIER MILEI",
    "Infusión nacional de Argentina",
    "Monumento emblemático de Buenos Aires",
    "Baile típico de Argentina",
    "Baile tradicional de Buenos Aires",
    "Postre argentino por excelencia",
    "Género musical muy popular en Argentina",
    "Infusión nacional de Argentina",
    "Calzado comúnmente usado en Argentina",
    "Hierba utilizada para hacer mate",
    "Plato argentino famoso",
    "Plato típico argentino de comida rápida",
    "Plato argentino muy popular",
    "Provincia famosa por sus vinos",
    "Reunión importante o conferencia",
    "Importante premio literario argentino"
];
// Variable que guarda la cantidad de palabras ya jugadas
let cantPalabrasJugadas = 0;

// Variable que guarda la cantidad de intentos restantes
let intentosRestantes = 5;

// Variable que guarda el indice de la Palabra actual
let posActual;

// Arreglo que contiene la palabra actual con la que estoy jugando
let arrayPalabraActual = [];

// Cantidad de letras acertadas por cada jugada
let cantidadAcertadas = 0;

// Arreglo que guarda cada letra en divs
let divsPalabraActual = [];

// Cantidad de palabras que debe acertar en cada jugada
let totalQueDebeAcertar;

// Función que carga la palabra nueva para jugar
function cargarNuevaPalabra() {
    // Aumento en uno cantidad de palabras jugadas y controlo si llego a su límite
    cantPalabrasJugadas++;
    if (cantPalabrasJugadas > 6) {
        // Volvemos a cargar el arreglo
        arrayPalabras = ["GUITARRA", "ELEFANTE", "TURQUESA", "ABRIL", "TECLADO", "INGLATERRA", "GATO", "MESSI", "PELUQUERIA", "ASADO", "PELOTA", "PELUCHE", "MOTOSIERRA", "MATE", "OBELISCO", "TANGO", "MILONGA", "DULCEDELECHE", "CUMBIA", "MATE", "ZAPATO", "YERBA", "BIFE", "CHORIPAN", "MILANESA", "MENDOZA", "CUMBRE", "MARTINFIERRRO"];
        ayudas = [
            "Instrumento Musical",
            "Animal de la selva",
            "Es un color",
            "Nombre de mujer, Y esta en el calendario",
            "Hardware de computadora",
            "Es un Pais",
            "Es una mascota",
            "Es el mejor Jugador de futbol del Mundo",
            "Las mujeres Aman ir",
            "Comida tipica de un Argentino",
            "Juguete de Niño",
            "juguete de Mujer",
            "El mejor instrumento de JAVIER MILEI",
            "Infusión nacional de Argentina",
            "Monumento emblemático de Buenos Aires",
            "Baile típico de Argentina",
            "Baile tradicional de Buenos Aires",
            "Postre argentino por excelencia",
            "Género musical muy popular en Argentina",
            "Infusión nacional de Argentina",
            "Calzado comúnmente usado en Argentina",
            "Hierba utilizada para hacer mate",
            "Plato argentino famoso",
            "Plato típico argentino de comida rápida",
            "Plato argentino muy popular",
            "Provincia famosa por sus vinos",
            "Reunión importante o conferencia",
            "Importante premio literario argentino"
        ]
    }

    // Selecciono una posición aleatoria
    posActual = Math.floor(Math.random() * arrayPalabras.length);

    // Tomamos la palabra nueva
    let palabra = arrayPalabras[posActual];
    // Cantidad de letras que tiene esa palabra
    totalQueDebeAcertar = palabra.length;
    // Coloco en 0 la cantidad acertadas hasta el momento
    cantidadAcertadas = 0;

    // Guardamos la palabra que está en formato string en un arreglo
    arrayPalabraActual = palabra.split('');

    // Limpiamos los contenedores que quedaron cargados con la palabra anterior
    document.getElementById("palabra").innerHTML = "";
    document.getElementById("letrasIngresadas").innerHTML = "";

    // Cargamos la cantidad de divs (letras) que tiene la palabra
    for (let i = 0; i < palabra.length; i++) {
        let divLetra = document.createElement("div");
        divLetra.className = "letra";
        document.getElementById("palabra").appendChild(divLetra);
    }

    // Selecciono todos los divs de la palabra
    divsPalabraActual = document.getElementsByClassName("letra");

    // Seteamos los intentos
    intentosRestantes = 5;
    document.getElementById("intentos").innerHTML = intentosRestantes;

    // Cargamos la ayuda de la pregunta
    document.getElementById("ayuda").innerHTML = ayudas[posActual];

    // Elimino el elemento ya seleccionado del arreglo.
    // splice(posActual,1): A partir de la posición posActual elimino 1 elemento
    arrayPalabras.splice(posActual, 1);
    ayudas.splice(posActual, 1);
}

// Llamada para cargar la primera palabra del juego
cargarNuevaPalabra();

// Detecto la tecla que el usuario presiona
document.addEventListener("keydown", event => {
    // Controlo si la tecla presionada es una letra
    if (isLetter(event.key)) {
        // Tomo las letras ya ingresadas hasta el momento
        let letrasIngresadas = document.getElementById("letrasIngresadas").innerHTML;
        // Arma un arreglo con las letras ingresadas
        letrasIngresadas = letrasIngresadas.split('');

        // Controlo si la letra presionada ya ha sido ingresada
        if (letrasIngresadas.lastIndexOf(event.key.toUpperCase()) === -1) {
            // Variable bandera para saber si la letra ingresada está en la palabra a descubrir
            let acerto = false;

            // Recorro el arreglo que contiene la palabra para verificar si la palabra ingresada está
            for (let i = 0; i < arrayPalabraActual.length; i++) {
                if (arrayPalabraActual[i] == event.key.toUpperCase()) { // Acertó
                    divsPalabraActual[i].innerHTML = event.key.toUpperCase();
                    acerto = true;
                    // Aumento en uno la cantidad de letras acertadas 
                    cantidadAcertadas = cantidadAcertadas + 1;
                }
            }

            // Controlo si acertó al menos una letra
            if (acerto == true) {
                // Controlamos si ya acertó todas
                if (totalQueDebeAcertar == cantidadAcertadas) {
                    // Asigno a cada div de la palabra la clase pintar para ponerlo en verde cada div
                    for (let i = 0; i < arrayPalabraActual.length; i++) {
                        divsPalabraActual[i].className = "letra pintar";
                        comprobarGanador();
                    }
                }
            } else {
                // No acertó, decremento los intentos restantes
                intentosRestantes = intentosRestantes - 1;
                document.getElementById("intentos").innerHTML = intentosRestantes;

                // Controlamos si ya acabó todas las oportunidades
                if (intentosRestantes <= 0) {
                    for (let i = 0; i < arrayPalabraActual.length; i++) {
                        divsPalabraActual[i].className = "letra pintarError";
                    }
                }
            }

            // Agrega la letra ingresada a las letras ya ingresadas que se visualizan
            document.getElementById("letrasIngresadas").innerHTML += event.key.toLocaleUpperCase() + " - ";
        }
    }
});
// Función que me determina si un caracter es una letra
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}
// Función para reproducir el sonido de celebración
function reproducirSonidoCelebracion() {
    var audio = document.getElementById('audio');
    audio.play();
}
function comprobarGanador() {
    if (cantidadAcertadas === totalQueDebeAcertar) {
        reproducirSonidoCelebracion();
        setTimeout(detenerSonidoCelebracion, 3000);
    }
    function detenerSonidoCelebracion() {
        audio.pause();
        audio.currentTime = 0;
    }
}
