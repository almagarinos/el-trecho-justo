let datoLocalTrechoJustoListas = JSON.parse(localStorage.getItem("el_trecho_justo"));

// Vuelve al modal para elegir el mapa desde una lista
function volverAlModalDeListas() {
  // Vaciamos la lista en el objeto del localStorage
  datoLocalTrechoJustoListas.lista_ciudades = "";
  localStorage.setItem("el_trecho_justo", JSON.stringify(datoLocalTrechoJustoListas));
  window.location.href='../index.html';
  // Desde la index se abre el modal
}

// Confirma la lista de ciudades elegida desde su página
function confirmarLaLista( lista ) {
  // Actualizamos la lista en el objeto del localStorage
  datoLocalTrechoJustoListas.lista_ciudades = lista;
  localStorage.setItem("el_trecho_justo", JSON.stringify(datoLocalTrechoJustoListas));
  window.location.href='../index.html';
}