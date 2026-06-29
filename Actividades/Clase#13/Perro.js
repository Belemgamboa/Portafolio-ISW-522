import{Perro} from "./Animal.js";

export class Perro extends Animal{
    constructor(especie, edad, nombre,raza,color){
        
        super(especie,edad);
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
    }
    ladrar(){

        console.log("El perro esta ladrando");
    }
}

