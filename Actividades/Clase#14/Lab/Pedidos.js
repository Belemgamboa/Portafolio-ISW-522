const nombreSoda = "La Sodita UTN";
const pedidos = [];
 
export function crearPedido(cliente, producto, precio, notas) {
  var pedido = {
    cliente: cliente,
    producto: producto,
    precio: precio,
    notas: notas
  };
  pedidos.push(pedido);
  return pedido;
}
 
export function calcularTotalDia() {
  var total = 0;
  for (var i = 0; i < pedidos.length; i++) {
    total = total + pedidos[i].precio;
  }
  return total;
}
 
export function aplicarDescuento(pedido, porcentaje) {
  pedido.precio = pedido.precio - (pedido.precio * porcentaje / 100);
  return pedido;
}
 