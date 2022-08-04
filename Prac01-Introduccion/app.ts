let nombre: string = 'Marlon';
let apellido: string = 'Villamar';
let nombreCompleto = nombre + " " + apellido;
console.log("Hola bienvenido", nombreCompleto);

let N1:number = 80;
let N2: number = 20;
let Res = N1+N2;
console.log("La suma es: ", Res);

let ban: boolean = true;
console.log("Valor: ", ban);

let cualquier:any='Valor string';
console.log('Cualquier valor: ', cualquier);

let ciudades=["Quito", "Cuenca", "Machala"];
console.log(ciudades);

let enteros=[1,2,3,4,5,6,7];
console.log(enteros);

let varios=[5, "Marlon", true, 15.5, ['Hola', 'Mundo']];
console.log(varios);
let suma = 0;
enteros.forEach((entero:number) => {
    suma = suma + entero;
});
console.log(enteros, suma);

function Restar(a:number, b:number){
    return a - b;
}

const valorResta = Restar(10, 5);
console.log("Resta es: ", valorResta);

function Multiplicar(a:number, b:number){
    return a * b;
}

const valorMultiplicacion = Multiplicar(10, 5);
console.log("Multiplicacion es: ", valorMultiplicacion);


const valorDivision = (x: number, y:number)=>{
    x/y;
}

console.log("Division es: ", valorDivision(20,2));

