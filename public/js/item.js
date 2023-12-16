const quantityInput = document.querySelector("#quantity");
const addBtn = document.querySelector("#add");
const substractBtn = document.querySelector("#subtract");

// const maxQuantity = 10; Para cuando se pueda establecer el limite y hacerlo dinamico.

addBtn.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value);
    if(!isNaN(currentValue)){// && currentValue < maxQuantity
        quantityInput.value = currentValue +1;
    } else {
        quantityInput.value = 1;
    }
});

substractBtn.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value);
    if(!isNaN(currentValue) && currentValue > 0){
        quantityInput.value = currentValue -1
    } else {
        quantityInput.value = 0;
    }
})