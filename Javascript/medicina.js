let horaInicio =22;
let frecuenciaDosis = 5;
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