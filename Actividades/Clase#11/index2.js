let resultado;
let i;
let doble;
for (i = 0; i < 5; i++) {
    doble = i * 2;
}
console.log(i);
console.log(doble);


let descuento;
if (monto >= 100000) {
    descuento = 0.20;
} else if (monto >= 50000) {
    descuento = 0.10;
} else if (monto >= 20000) {
    descuento = 0.05;
} else {
    descuento = 0;
}

const descuento =
    monto >= 100000 ? 0.20 :
        monto >= 50000 ? 0.10 :
            monto >= 20000 ? 0.05 :
                0;
switch (categoria) {
    case 'electronica':
        break;
    case 'ropa':
        break;
    case 'calzado':
    case 'accesorios':
        break;
    case 'libros':
        break;
    default:
        break;
}



for (let i = 1; i <= 50; i++) {
    if (i % 10 === 0) {
        console.log("Década completa");
    }
    if (i % 2 === 0) {
        console.log("Par");
    } else {
        console.log("Impar");
    }
}


const precios = [1500, 2300, 800, -1, 4200, 950];
let total = 0;
for (let i = 0; i < precios.length; i++) {
    if (precios[i] < 0) {
        console.log("Error en posición:", i);
        break;
    }
    total += precios[i];
}
console.log("Total:", total);



const edades = [22, 'veinte', 19, null, 30, 25, undefined, 17];
let suma = 0;
let contador = 0;
for (let edad of edades) {
    if (typeof edad !== "number" || isNaN(edad)) {
        continue;
    }
    suma += edad;
    contador++;
}
console.log("Válidas:", contador);
console.log("Promedio:", suma / contador);



function generarTablaMultiplicar(numero, limite) {
    if (numero <= 0 || limite <= 0) {
        console.log("Error: parámetros inválidos");
        return;
    }

    let i = 1;

    while (i <= limite) {
        console.log(`${numero}x${i}=${numero * i}`);
        i++;
    }
}