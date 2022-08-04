var nombre = 'Marlon';
var apellido = 'Villamar';
var nombreCompleto = nombre + " " + apellido;
console.log("Hola bienvenido", nombreCompleto);
var N1 = 80;
var N2 = 20;
var Res = N1 + N2;
console.log("La suma es: ", Res);
var ban = true;
console.log("Valor: ", ban);
var cualquier = 'Valor string';
console.log('Cualquier valor: ', cualquier);
var ciudades = ["Quito", "Cuenca", "Machala"];
console.log(ciudades);
var enteros = [1, 2, 3, 4, 5, 6, 7];
console.log(enteros);
var varios = [5, "Marlon", true, 15.5, ['Hola', 'Mundo']];
console.log(varios);
var suma = 0;
enteros.forEach(function (entero) {
    suma = suma + entero;
});
console.log(enteros, suma);
function Restar(a, b) {
    return a - b;
}
var valorResta = Restar(10, 5);
console.log("Resta es: ", valorResta);
function Multiplicar(a, b) {
    return a * b;
}
var valorMultiplicacion = Multiplicar(10, 5);
console.log("Multiplicacion es: ", valorMultiplicacion);
var valorDivision = function (x, y) {
    x / y;
};
console.log("Division es: ", valorDivision(20, 2));
