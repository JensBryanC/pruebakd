document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "59176941564";

  let cliente = document.querySelector("#cliente").value;
  let fecha = document.querySelector("#fecha").value;
  let hora = document.querySelector("#hora").value;
  let empleado = document.querySelector("#empleado").value;
  let servicio = document.querySelector("#servicio").value;
  let cantidad = document.querySelector("#cantidad").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_KIMMY DOG_*%0A
		*Pedido*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A
		*Indica la fecha de tu pedido*%0A
		${fecha}%0A
		*Indica la hora de tu pedido*%0A
		${hora}%0A
		*Metodo de Pago*%0A
		${empleado}%0A
		*Producto*%0A
		${servicio}%0A
    *Cantidad*%0A
    ${cantidad}`;

  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
