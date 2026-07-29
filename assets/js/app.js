// Variables globales
let ciudad1;
let ciudad2;
let distanciaCorrecta;
const campoResultado = document.getElementById("cuadroResultado");
const dialogAvisos = document.querySelector('#dialogoAvisos');
const txtAviso = document.querySelector('#textoAviso');
const btnContinuar = document.querySelector('#botonContinuar');
const puestosDeJugador = document.getElementsByClassName("jugador");
const NUM_JUGADORES = puestosDeJugador.length; // Número total de jugadores
//const seleccionCiudades = ciudades; // Todas las disponibles en datos-ciudades.js

// Lo siguiente es la alternativa a lo anterior, donde se hace un filtrado de ciudades
const seleccionCiudades = [];
for (let i = 0; i < ciudades.length; i++) {
  if (ciudades[i].pais == "España") { // Aquí seleccionamos sólo las españolas
    seleccionCiudades.push(ciudades[i]);
  }
  /*
  if (ciudades[i].continente == "África") { // Se podrían añadir como queramos
    seleccionCiudades.push(ciudades[i]);
  }
  */
}



/**
 * Calcula la distancia ortodrómica entre dos coordenadas geográficas.
 * @param {number} latitud1 - Latitud del primer punto en grados decimales.
 * @param {number} longitud1 - Longitud del primer punto en grados decimales.
 * @param {number} latitud2 - Latitud del segundo punto en grados decimales.
 * @param {number} longitud2 - Longitud del segundo punto en grados decimales.
 * @returns {number} Distancia en kilómetros entre los dos puntos anteriores,
 * es la que recorrería un dron volando en línea recta de un punto al otro.
 */
function calcularDistancia(latitud1, longitud1, latitud2, longitud2) {
  const R = 6371.23; // Radio medio de la Tierra en kilómetros

  // Función local para convertir grados decimales a radianes
  const aRadianes = ( grados ) => grados * Math.PI / 180;

  // Convertir coordenadas a radianes
  const phi1 = aRadianes(latitud1);
  const lambda1 = aRadianes(longitud1);
  const phi2 = aRadianes(latitud2);
  const lambda2 = aRadianes(longitud2);
    
  // Diferencias de coordenadas de los dos puntos
  const deltaPhi = phi2 - phi1; // diferencia de latitudes en radianes
  const deltaLambda = lambda2 - lambda1; // diferencia de longitudes en radianes

  // Aplicación de la fórmula de Haversine: cálculo del semiverseno, de la distancia de círculo máximo entre ambos puntos
  const a = Math.sin(deltaPhi / 2) ** 2 + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) ** 2;

  // Distancia angular en radianes: cálculo del ángulo central (c) que separa a ambos puntos sobre la superficie esférica
  const c = 2 * Math.atan2( Math.sqrt(a), Math.sqrt(1 - a) );
  // Math.sqrt(a) representa el seno del ángulo medio
  // Math.sqrt(1 - a) representa el coseno del ángulo medio

  // Se devuelve la distancia lineal real sobre el terreno, en kilómetros y redondeada a una cifra sin decimales
  return Math.round(R * c);
}


// Genera la pregunta aleatoria del concurso entre las ciudades seleccionadas
function generarPregunta() {
  // Subimos hasta arriba para leer bien la pregunta si venimos de una respuesta anterior, útil para mobile
  setTimeout(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, 10); // Así da tiempo a los iPhone a procesar el clic del botón antes de hacer scroll, es un bug de iOS

  // Gestionamos botones para evitar saltarse la pregunta
  botonRespuesta.disabled = false;
  botonPregunta.disabled = true;

  // Borramos las posibles respuestas anteriores de los jugadores y habilitamos inputs
  const respuestas = document.getElementsByClassName("inputJugador");
  for (let i = 0; i < respuestas.length; i++) {
    respuestas[i].value = "";
    respuestas[i].disabled = false;
  }

  // Reiniciamos el contenido del resultado
  campoResultado.classList.add("deshabilitado");
  campoResultado.innerHTML = `<p class="text-repartido text-center mb-0">
                                <i>Respondan en sus casillas de jugador.</i>
                              </p>`;

  // Aquí redondeamos hacia abajo, al entero menor más cercano
  const indice1 = Math.floor(Math.random() * seleccionCiudades.length);

  let indice2;
  do {
    indice2 = Math.floor(Math.random() * seleccionCiudades.length);
  } while (indice1 === indice2); // No puede coincidir con el otro

  // Tomamos así dos ciudades aleatorias
  ciudad1 = seleccionCiudades[indice1];
  ciudad2 = seleccionCiudades[indice2];

  // Mostramos sus nombres en la pregunta
  document.getElementById("ciudadA").textContent = ciudad1.nombre;
  document.getElementById("ciudadB").textContent = ciudad2.nombre;
  
  // Versión de lo anterior, con una pista, donde se muestra el país entre paréntesis
  // document.getElementById("ciudadA").textContent = `${ciudad1.nombre} (${ciudad1.pais})`;
  // document.getElementById("ciudadB").textContent = `${ciudad2.nombre} (${ciudad2.pais})`;
  
  // Procedemos al cálculo de la respuesta exacta
  distanciaCorrecta = calcularDistancia(
    ciudad1.coordenada.latitud,
    ciudad1.coordenada.longitud,
    ciudad2.coordenada.latitud,
    ciudad2.coordenada.longitud
  );
}



// Comprueba las cifras dadas por los jugadores y muestra el resultado con el ganador
function comprobarRespuesta() {
  // Recogemos los datos puestos por los jugadores en sus casillas de respuesta
  const entradasJugador = document.getElementsByClassName("inputJugador");

  // Comprobamos que cada jugador ha rellenado su casilla de respuesta
  for (let i = 0; i < NUM_JUGADORES; i++) {
    if ( entradasJugador[i].value === "") {
      txtAviso.innerHTML = "Todos los jugadores deben responder su cifra en kilómetros. Usen sólo números.";
      dialogAvisos.showModal();
      return;
    }
  }

  // Convertimos en formato número las respuestas de los jugadores para poder operar
  let respuestasJugador = new Array(NUM_JUGADORES);
  for (let i = 0; i < NUM_JUGADORES; i++) {
    respuestasJugador[i] = Number(entradasJugador[i].value);
  }

  // Comprobamos que las respuestas son válidas para participar en el concurso
  for (let i = 0; i < NUM_JUGADORES; i++) {
    if ( !Number.isInteger(respuestasJugador[i]) || respuestasJugador[i] <= 0 ) {
      txtAviso.innerHTML = `La cifra del <strong>jugador ${i + 1}</strong> debe ser un número entero mayor que cero.`;
      dialogAvisos.showModal();
      return;
    } else if (respuestasJugador[i] > 20037) {
      txtAviso.innerHTML = `La cifra del <strong>jugador ${i + 1}</strong> supera el máximo de 20037 km entre antípodas.`;
      dialogAvisos.showModal();
      return;
    }
  }

  // Operador spread para evitar modificar el orden del array original en la siguiente reordenación
  let copiaRespuestas = [...respuestasJugador];

  // Comprobamos que no se repite ninguna respuesta entre todos los jugadores, sean cuantos sean
  copiaRespuestas.sort((a, b) => a - b); // Primero reordenamos con sort() todas las respuestas de menor a mayor
  for (let i = 1; i < NUM_JUGADORES; i++) { // Si hay respuestas iguales, ahora serán consecutivas por el nuevo orden
    if ( copiaRespuestas[i - 1] === copiaRespuestas[i] ) { // Detectamos si se repiten entre cada dos consecutivas
      txtAviso.innerHTML = "Eviten las respuestas repetidas entre jugadores. No puede haber empate.";
      dialogAvisos.showModal();
      return;
    }
  }

  // Gestionamos botones e inputs para evitar cambiar las respuestas
  botonRespuesta.disabled = true;
  botonPregunta.disabled = false;
  for (let i = 0; i < NUM_JUGADORES; i++) {
    entradasJugador[i].disabled = true;
  }

  // Cálculo del error respecto a la respuesta correcta, manteniendo el mismo orden original de respuestas de jugadores
  let erroresJugador = new Array(NUM_JUGADORES);
  for (let i = 0; i < NUM_JUGADORES; i++) {
    erroresJugador[i] = Math.abs(respuestasJugador[i] - distanciaCorrecta);
  }

  // Averiguamos quién ha ganado aproximándose más a la respuesta exacta
  let errorMinimo = erroresJugador[0]; // Primer elemento como referencia
  let jugadorGanador = 1;
  for (let i = 1; i < NUM_JUGADORES; i++) {
      if (erroresJugador[i] < errorMinimo) {
          errorMinimo = erroresJugador[i];
          jugadorGanador = 1 + i;
      }
  }

  // Preparamos cada renglón donde indicaremos el margen de error de cada jugador
  let margenesJugadores = ``;
  for (let i = 0; i < NUM_JUGADORES; i++) {
    margenesJugadores = margenesJugadores + `
    <p class="mb-1">
      - Margen del jugador ${i + 1}: <strong>${erroresJugador[i]} km</strong>
    </p>
    `;
  }

  // Generamos el texto del resultado final con todos los márgenes
  campoResultado.classList.remove("deshabilitado");
  campoResultado.innerHTML = `
    <h3 class="mb-1">Distancia: <strong>${distanciaCorrecta} km</strong></h3>
  ` + margenesJugadores + `
    <div id="ganador">🏆 Gana el jugador ${jugadorGanador}</div>
  `;
}



// Gestión de eventos de botones
document.getElementById("botonRespuesta").addEventListener("click", comprobarRespuesta);
document.getElementById("botonPregunta").addEventListener("click", generarPregunta);
btnContinuar.addEventListener('click', () => {
  dialogAvisos.close();
});



// Se inicializa la app con una primera pregunta
generarPregunta();