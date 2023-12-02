document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los elementos de botón y entrada de cantidad
  const btnMore = document.querySelectorAll(".btnMore");
  const btnLess = document.querySelectorAll(".btnLess");
  const cantidadInputs = document.querySelectorAll(".selectorCantidad input");
  const totalElementos = document.querySelectorAll('.total p');


  // Agregar eventos de clic a los botones
  btnMore.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      // Incrementar la cantidad y actualizar la entrada
      let nuevaCantidad = parseInt(cantidadInputs[index].value) + 1;
      actualizarCantidad(index, nuevaCantidad);
    });
  });

  btnLess.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      // Decrementar la cantidad solo si es mayor que 1 y actualizar la entrada
      let nuevaCantidad = parseInt(cantidadInputs[index].value) - 1;
      if (nuevaCantidad >= 1) {
        actualizarCantidad(index, nuevaCantidad);
      }
    });
  });

  // Función para actualizar la cantidad en la entrada
  function actualizarCantidad(index, nuevaCantidad) {
    cantidadInputs[index].value = nuevaCantidad;
  }
});
