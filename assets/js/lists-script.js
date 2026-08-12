// Vuelve al modal para elegir el mapa desde una lista
function volverAlModalDeListas() {
  localStorage.removeItem("Lista de ciudades");
  window.location.href='../index.html';
  // Desde la index se abre el modal
}

// Confirma la lista de ciudades elegida desde su página
function confirmarLaLista( lista ) {
  localStorage.setItem("Lista de ciudades", lista);
  window.location.href='../index.html';
}