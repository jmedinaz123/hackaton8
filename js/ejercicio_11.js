//Ejercicio 11
const AniosTrabajados=4;
const nombre_x='Jose';

let bono;
switch (AniosTrabajados) {
    case 1:
        bono=100;
        break;
    case 2:
        bono=200;
        break;
    case 3:
        bono=300;
        break;
    case 4:
        bono=400;
        break;
    case 5:
        bono=500;
        break;              
    default:
        bono=1000;
  }
console.log(`El trabajador ${nombre_x} ha laborado ${AniosTrabajados} años y le corresponde un bono: ${bono} dolares`);




