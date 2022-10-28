/* Actividad 1 Numeros perfectos */

let numeroAlm = 0;
let cantidad = 4;
let b = 0;
let n = 6;

while(b<cantidad){
    numeroAlm=0;
    for(i = 0;i<n;i++){
        if(n%i == 0){
            numeroAlm = numeroAlm+i;
        }
    }
    
    if(numeroAlm == n){
        console.log("Es perfecto")
        console.log(n)
        i =0;
        b++;
    }
    n++;
    
}

/* Actividad 2 Tomas de medicina */

let horaInicio = parseInt(prompt("Ingresa la hora de la toma inicial: "));
let frecuenciaDosis = parseInt(prompt("Indica la frecuencia de la toma: "))

// let horaInicio =22;
// let frecuenciaDosis = 5;
let cantidadDosis = 0;

cantidadDosis = Math.floor(24/frecuenciaDosis);

console.log(`Cada ${frecuenciaDosis} horas, debe tomar su medicamento. Su hora inicia a las ${horaInicio}`)

for(i = 1; i<=cantidadDosis; i++){
    if(horaInicio>23){
        horaInicio = horaInicio-24
    }
    console.log(`Dosis ${i}: ${horaInicio}`)
    horaInicio = horaInicio+frecuenciaDosis
}