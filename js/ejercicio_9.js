//Ejercicio 9
const nombre='Andres';
const AnioNacimiento=1995;
let fecha=new Date();
let AnioActual=fecha.getFullYear();
let edad=AnioActual-AnioNacimiento;

console.log(`El candidato ${nombre} tiene: ${edad} años`);

