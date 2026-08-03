"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hola");
console.log("Hola companero Santi");
let nombre = "Hola bebe";
let nombreDos = "Shakira";
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar("Alejandro");
function sumar(a, b) {
    return a + b;
}
function restar(a, b, c) {
    return a - b - (c || 0);
}
console.log(restar(10, 5));
const Estudiante_1 = require("./Estudiante");
let estudiante = new Estudiante_1.Estudiante(208870458, "Ana", "Gamboa", 20);
estudiante.matricular();
const Pato_1 = require("./Pato");
let pato = new Pato_1.Pato("Blanco", "Domestico", "cuacuacc", "Lucas");
pato.comer("insectos");
//# sourceMappingURL=index.js.map