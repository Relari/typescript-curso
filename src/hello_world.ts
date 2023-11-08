console.log('Hola Mundo');

//Variables
let mensaje: string = "Mi primer mensaje";
console.log(mensaje);

let numero: number = 123;
console.log(numero);

let decimal: number = 12.5;
console.log(decimal);

let estado: boolean = true;
console.log(estado);

//Funciones
function sumar(numero_uno: number, numero_dos: number) {
    return numero_uno + numero_dos;
}
console.log(sumar(2, 2));

//Arrays
let animales: string[] = ["Perrito", "Gatito", "Conejito", "Lorito"];
console.log(animales);
console.log(typeof animales);

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let validaciones: boolean[] = []
let numeros2: Array<number> = []

//Enums
enum Tallas { Chica = 'S', Mediano = 'M', Largo = 'L', ExtraLargo = 'XL'}
console.log(Tallas);
console.log(Tallas.Chica);

const enum Niveles { Basico, Normal, Avansado, Experto}
const nivel = Niveles.Basico;
console.log(nivel);

//Objetos
const objeto: {
    id: number,
    nombre: string
} = { id: 1, nombre: "Hello World"}
console.log(objeto);

objeto.id = 0
console.log(objeto);

const objeto2: {
    id: number,
    nombre?: string //Para poner el parametro en opcional
} = { id: 2 }
console.log(objeto);

const objeto3: {
    readonly id: number, //Esto permite que el parameto sea de solo lectura
    nombre: string
} = { id: 1, nombre: "Hello World"}
console.log(objeto3);

const objeto4: {
    readonly id: number, //Esto permite que el parameto sea de solo lectura
    nombre: string,
    talla: Tallas
} = { id: 1, nombre: "Hello World", talla: Tallas.Mediano };
console.log(objeto4);

//Tipos

type Direccion = {
    readonly numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Tallas,
    direccion: Direccion
}

const objeto5: Persona = {
    id: 2,
    nombre: "Hello World",
    talla: Tallas.Largo,
    direccion: {
        numero: 1,
        pais: "New World",
        calle: "Original"
    }
};
console.log(objeto5);

const personas: Persona[] = [];