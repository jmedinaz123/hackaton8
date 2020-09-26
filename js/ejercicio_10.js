//Ejercicio 10
const nombre_1='Andres';
const nombre_2='Laura';
const nombre_3='Juan';
const edad_1=10;
const edad_2=12;
const edad_3=20;

let edadMenor;
let nombre_x;

if (edad_1 < edad_2 && edad_1 < edad_3) { 
    edadMenor=edad_1;
    nombre_x=nombre_1;
 } 
 else { 
    if (edad_2 < edad_1 && edad_2 < edad_3) {
        edadMenor=edad_2;
        nombre_x=nombre_2;
    }
    else{
        edadMenor=edad_3;
        nombre_x=nombre_3;        
    }
}
console.log(`${nombre_x} es el menor y tiene: ${edadMenor} años`);