document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("promo-form");
  const resultado = document.getElementById("resultado");
  const totalSinDescuento = document.getElementById("totalSinDescuento");
  const descuentoAplicado = document.getElementById("descuentoAplicado");
  const totalFinal = document.getElementById("totalFinal");

  const precios = {
    medialunas: 800,
    alfajores: 1000,
    pizzetas: 1200
  };

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const producto = document.getElementById("producto").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const promo = document.getElementById("promocion").value;

    if (!producto || !cantidad || !promo) {
      alert("Completá todos los campos para continuar.");
      return;
    }

    const precioUnitario = precios[producto];
    const total = precioUnitario * cantidad;
    let descuento = 0;
    let totalFinalCalc = total;

    switch (promo) {
      case "2x1":
        descuento = Math.floor(cantidad / 2) * (precioUnitario / 2);
        totalFinalCalc = total - descuento;
        break;

      case "3x2":
        descuento = Math.floor(cantidad / 3) * precioUnitario;
        totalFinalCalc = total - descuento;
        break;

      case "descuento10":
        if (total > 30000) {
          descuento = total * 0.10;
          totalFinalCalc = total - descuento;
        } else {
          descuento = 0;
          totalFinalCalc = total;
        }
        break;
    }

    totalSinDescuento.textContent = `Total sin descuento: $${total.toLocaleString("es-AR")}`;
    descuentoAplicado.textContent = `Descuento aplicado: $${descuento.toLocaleString("es-AR")}`;
    totalFinal.textContent = `Total final: $${totalFinalCalc.toLocaleString("es-AR")}`;
    resultado.style.display = "block";
  });
});
