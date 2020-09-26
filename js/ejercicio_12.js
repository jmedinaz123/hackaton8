//Ejercicio 12
const SalarioInicial=1500;
let IncrementoAnual=0;
let SalarioConIncremento=0;
let SalarioAcumulado=0;

for (var i = 1; i <=6; i++) {
    if(i=1)
    {
        IncrementoAnual=0.1*SalarioInicial;
        SalarioConIncremento=SalarioInicial+IncrementoAnual;
        console.log(`Su salario durante el año ${i} es ${SalarioConIncremento} dolares`);
    }
    else
    {
        IncrementoAnual=0.1*SalarioConIncremento;
        SalarioConIncremento=SalarioConIncremento+IncrementoAnual;
        console.log(`Su salario durante el año ${i} es ${SalarioConIncremento} dolares`);
    }
    SalarioAcumulado=SalarioAcumulado+SalarioConIncremento;
 }

 console.log(`Su salario durante durante los 6 años es: ${SalarioAcumulado} dolares`);

