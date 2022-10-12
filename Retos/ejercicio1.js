// for (var i = 2; i <= 500; i++ ){
//     b = 0;

//     for (var j = 1; j <= Math.floor(i/2); j++){
//         if (parseInt(i) % parseInt(j) == 0)
//         b = b + parseInt(j);
//     }

//     if (b == 1)
//         console.log("El numero %d es perfecto\n", i)
// }

// console.log("Hello world");


let numero_evaluar = 6;
let acumulador = 0;
for (var i = 1; i < numero_evaluar; i++){

    if ( (i % numero_evaluar) == 0)
        acumulador = acumulador + i;
        console.log("El residuo es 0")
    
}
console.log(acumulador)
// console.log(6 % 5);



// if (acumulador == numero_evaluar){
//     console.log("El numero: ", numero_evaluar, " es perfecto")
// }else {
//     console.log("El numero: ", numero_evaluar, " no es perfecto")
// }


