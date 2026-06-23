// const readline = require("readline/promises");

// const{ stdin: input, stdout: output }= require("process");

// const rl =  readline.createInterface({input, output});

// async function iniciar(){
//     const nombre = await rl.question("Digite su nombre:");
//     const valLetras = /^([a-zA-Z]\s)+$/;
//     if(valLetras.test(nombre)){
//         console.log(`El nombre escrito fue: ${nombre}`);
//     }
//     else{
//         console.log("Debe digitar solo letras");
//     }
//     rl.close(); 
// }

// iniciar();

const listNumeros = [10, -3, 7, -1, 5, 8, -2];
let suma = 0;
for (let i = 0; i < listNumeros.length; i++) {
    if (listNumeros[i] > 0) {
        suma += listNumeros[i];
    }
}

console.log("La suma es de:"+suma);