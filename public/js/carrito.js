document.addEventListener("DOMContentLoaded", function () {
  const btnMore = document.querySelectorAll(".btnMore");
  const btnLess = document.querySelectorAll(".btnLess");
  const cantidadInputs = document.querySelectorAll(".selectorCantidad input");

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

  // AGREGAR AL CARRITO
  const addToCartButton = document.getElementById("addToCartButton");

  if (addToCartButton) {
    addToCartButton.addEventListener("click", function () {
      const productId = addToCartButton.getAttribute("data-product-id");
      console.log("ID del producto:", productId);
      addToCart(productId);
    });
  }

  function addToCart(productId) {
    axios
      .post(`/shop/cart/${productId}/add`)
      .then(function (response) {
        console.log(response.data);
        // Actualizar la vista del carrito con la respuesta directa del servidor
        updateCartView(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  // Función para actualizar la vista del carrito
  function updateCartView(cartData) {
    console.log("updateCartView ejecutado");

    // Obtén el elemento cartItems
    const cartItemsList = document.getElementById("cartItems");
    console.log("Elemento cartItems:", cartItemsList);

    // Verifica si el elemento existe antes de intentar modificar su contenido
    if (cartItemsList) {
      // Limpiar la lista antes de agregar elementos
      cartItemsList.innerHTML = "";

      // Recorrer los productos en el carrito y mostrarlos en la lista
      for (const product of cartData) {
        const listItem = document.createElement("li");
        listItem.textContent = `Producto ID: ${product.product_id}, Cantidad: 1`;
        cartItemsList.appendChild(listItem);
      }
    } else {
      console.error("Elemento cartItems no encontrado");
    }
  }
  const deleteButtons = document.querySelectorAll(".iconoEliminar");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = button.getAttribute("data-product-id");
      removeFromCart(productId);
    });
  });

  // Función para eliminar un producto del carrito
  function removeFromCart(productId) {

    // Actualizar la vista del carrito después de eliminar el producto
    updateCartView();
  }
});
