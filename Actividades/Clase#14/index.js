// const numeros = [200, 150, 140, 360, 100, 1000];
// numeros.sort((a,b) => a-b);
// console.log(numeros);


// //IMPERATIVO
// for(let i=0; i<numeros.length; i++){
//     console.log(numeros[i]);
// }


// //DECLARATIVO
// const declarativo = numeros.map((n)=> n);
// console.log(declarativo);


// const precios=[100,250,80,400];
// const caros=precios.filter((p)=> p > 150);
// console.log(caros);


// const estudiantes = [
//     {nombre: "Ana", carnet: "2024001"},
//     {nombre: "Luis", carnet: "2024002"}
// ];
// estudiantes.map(e => `${e.nombre}(${e.carnet})`.toUpperCase());
// console.log(estudiantes);


// const estudiantes=[
//     {nombre:"Ana", promedio: 85},
//     {nombre:"Luis", promedio:67},
//     {nombre:"Sara", promedio:91}
// ]
// const notas=estudiantes.filter(e=>e.promedio>=80);
// console.log(notas);


const gastos=[
    {cat:"comida", monto:5000},
    {cat:"transporte", monto:2000},
    {cat:"comida", monto:3000}
];
const porCategoria = gastos.reduce((acc,g)=>{
    acc[g.cat]=(acc[g.cat] || 0) + g.monto;
    return acc;
}, {});
const sumar= gastos.reduce((acc,g)=> acc+g.monto,0);
console.log(porCategoria);
console.log("Total:"+sumar);

