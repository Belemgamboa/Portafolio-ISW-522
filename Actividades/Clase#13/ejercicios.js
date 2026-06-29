// const persona = {nombre:"Luis", Edad:30, rol:"dev"};
// const {nombre, rol: puesto="invitado"} = persona;

// const colores = ["rojo", "verde", "azul"];
// const [primero, tercero] = colores;

// console.log(persona);
// console.log(colores);



// function sumarTodo(...numeros) {
//     return numeros.reduce((acum,n) => acum +n, 0);
// }
// console.log(sumarTodo(1, 2, 3));
// console.log(sumarTodo(5, 10, 15, 20));



// const original = {nombre: "Equipo A", puntos:10};
// const actualizado = {...original, puntos:15};

// console.log(original.puntos);
// console,log(actualizado.puntos);

// const numeros = [1, 2, 3];
// const copia = [...numeros, 4];


// import{sumar, restar} from"./matematicas.js";
// console.log(sumar(1,1));
// console.log(restar(2,1));

import{Perro} from"./Perro.js";

const perroUno = new Perro("Mamifero",2,"Pedro","Salchica","cafe");

perroUno.ladrar();

