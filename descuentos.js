function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio *porcentajePrecioConDescuento)/100;

    return precioConDescuento;
} 

function onclickbutton() {
  const InputPrice = document.getElementById ("InputPrice");
  const priceValue= InputPrice.value;
  
  const InputDiscount = document.getElementById ("InputDiscount");
  const discountValue= InputDiscount.value;

  const ValorPrecioDesc= calcularPrecioConDescuento (priceValue, discountValue);

  const resultP = document.getElementById ("ResultP");
  resultP.innerText = "El precio con descuento son : $" + ValorPrecioDesc;
}