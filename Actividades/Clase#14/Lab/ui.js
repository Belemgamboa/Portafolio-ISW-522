import {crearPedido, calcularTotalDia, aplicarDescuento} from "./Pedidos.js";

console.log(`Pedido creado para ${crearPedido("Ana","Casado", 2500, "Sin cebolla")} `);
console.log(`Pedido creado para ${crearPedido("Luis","Cafecon pan", 1200, undefined)} `);

console.log("Total del dia: " + calcularTotalDia());

