console.log("Hola");
console.log("Hola companero Santi");

let nombre: string = "Hola bebe";
let nombreDos = "Shakira";

function saludar(nombre:string): void{
    console.log(`Hola ${nombre}`);
}
saludar("Alejandro");

function sumar(a: number, b:number):number{
    return a+b;
}

function restar(a: number, b:number, c?:number): number{
    return a-b-(c || 0);
}
console.log(restar(10,5));


import { Estudiante } from "./Estudiante";
let estudiante = new Estudiante(208870458, "Ana", "Gamboa", 20);
estudiante.matricular();

import { Pato } from "./Pato";
let pato = new Pato("Blanco", "Domestico", "cuacuacc", "Lucas");
pato.comer("insectos");