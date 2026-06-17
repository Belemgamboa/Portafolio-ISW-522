    /*const v8 = require("v8");

    const variable = {
    nombre: "Javascript",
    version: 2026,
    };

    const tamano = v8.serialize(variable).length;

    console.log(`El tamano de la variable es de: ${tamano} bytes`);

    if (true){
    var edad=25
    }
    console.log(edad);

    if (true){
    let puntos=100;
    console.log(puntos);
    }


    const user={
    id:1
    }
    user.id=2;

    typeof 55
    console.log(typeof 55);
    */

let edad=20;

if (edad <= 12) {
    console.log("Eres un nin@")
}
else if (edad > 12 && edad < 18) {
    console.log("Eres un joven")
}
else {
    console.log("Eres un adulto");
}

let edad = 15;
let categoria = edad <= 12 ? "Eres niño": edad <= 17 ? "Eres adoslecente": "Eres adulto";
console.log(categoria);

let mes=1
switch (mes) {
    case mes=1:
        "Enero";
        break;

    default:
        break;
}

const rol = "admin";
var permiso;
permiso = rol === "admin" ? "admin": rol === "editor" ? "editor": rol === "viewer" ? "viewer": "sin acceso";
console.log(permiso)

    
const rol = "editor";
var permiso;
switch (rol) {
  case "admin":
    permiso = "admin";
    break;
  case "editor":
    permiso = "editor";
    break;
  case "viewer":
    permiso = "viewer";
    break;
  default:
    permiso = "sin acceso";
}
console.log(permiso);