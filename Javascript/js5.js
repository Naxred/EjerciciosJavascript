function calcular(){
    let primer_numero = parseInt(document.getElementById("primer_numero").value);
    let segundo_numero = parseInt(document.getElementById("segundo_numero").value);
    let operacion = document.getElementById("operacion").value;

    let resultado = 0;

    if (operacion == "+"){
        resultado = primer_numero + segundo_numero;

    } else if (operacion == "-"){
        resultado = primer_numero - segundo_numero;


    } else if (operacion == "*"){
        resultado = primer_numero * segundo_numero;

    } else if (operacion == "/"){
        resultado = primer_numero / segundo_numero;

    }

    let input_resultado = document.getElementById("resultado");
    input_resultado.value = resultado;
}

function verImagen(){
    let numero_imagen = document.getElementById("num_img").value;
    console.log(numero_imagen);

    let imagen_resultado = document.querySelector(".imagen_seleccionada");
    
    if (numero_imagen == "Alvaro"){
        imagen_resultado.innerHTML = '<img src="./img/alvaro.jpg" alt="Imagen1">';
    } else if (numero_imagen == "Gustavo"){
        imagen_resultado.innerHTML = '<img src="./img/gustavo.jpg" alt="Imagen2">';
    } else if (numero_imagen == "Roberto"){
        imagen_resultado.innerHTML = '<img src="./img/roberto.jpg" alt="Imagen2">';
    } else if (numero_imagen == "Santiago"){
        imagen_resultado.innerHTML = '<img src="./img/santiago.jpg" alt="Imagen2">';
    } else if (numero_imagen == "Santiago Travela"){
        imagen_resultado.innerHTML = '<img src="./img/santiagotravela.jpg" alt="Imagen2">';
    }

    
}

function calcularTabla(){
    let numero_tabla = parseInt(document.getElementById("tabla").value);

    for(let i = 1; i <= 10; i++){
        
    }
}

