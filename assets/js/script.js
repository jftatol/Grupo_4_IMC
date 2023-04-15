function calcularIMC(){
    event.preventDefault();
    //ELEMENTOS DEL DOM
    var content=document.getElementById('res-content');
    var nombre = document.getElementById("nombre");
    var peso = document.getElementById("peso");
    var estatura = document.getElementById("estatura");
    limpiar();

    var res = document.createElement('p');
    // validacion campos vacios //
    if (!(nombre.value.trim() == '' || peso.value.trim() == '' || estatura.value.trim() == '')){
        // validacion rango de peso //
        if (!(peso.value < 30 || peso.value > 200)){
            // validacion rango de estatura // 
            if (!(estatura.value < 100 || estatura.value > 230)){
                var imc = calculoIMC(peso.value,estatura.value);
                var rango = rangoIMC(imc);
                res.innerHTML = (nombre.value+' su clasificación es= '+rango+' y su IMC es= '+imc);
                res.classList.add ('respuesta');
                content.appendChild(res);
                pintar(rango);
            } else {
                alert('ERROR\n¡La estatura debe estar entre 100cm y 230cm.!');
                estatura.focus();
            }
        } else {
            alert('ERROR\n¡El peso debe estar entre 30kg y 200kg.!');
            peso.focus();
        }
    } else {
        alert('ERROR\n¡Todos los campos deben ser ingresados!');
    }
}

// CALCULAR IMC ESPECIFICO
function calculoIMC(peso, estatura){
    estatura = estatura/100;
    var imc = peso/(estatura*estatura);
    return imc.toFixed(1);
}

// CALCULAR RANGO DEL IMC
function rangoIMC(imc){
    if (imc<18.5){
        return 'Bajo Peso';
    } else if (imc >= 18.5 && imc < 25){
        return 'ADECUADO';
    } else if (imc >= 25 && imc < 30){
        return 'SOBREPESO';
    } else if (imc >= 30 && imc < 35){
        return 'OBESIDAD GRADO 1';
    } else if (imc >= 35 && imc < 40){
        return 'OBESIDAD GRADO 2';
    } else if (imc > 40){
        return 'OBESIDAD GRADO 3';
    }
}

// LIMPIAR CAMPOS Y RESULTADO
var botonLimpiar = document.getElementById("boton-limpiar");
botonLimpiar.addEventListener("click", limpiar);

function limpiar(){
    document.getElementById("res-content").innerHTML = "";
}

// PINTAR RESULTADO DEPENDIENDO DEL RANGO DEL IMC
function pintar(rango){
    let content=document.getElementById('res-content');
    let icono = ""
    let color = ""

    if (rango == 'Bajo Peso'){
        content.style.cssText = "background-color: #FFEFBF; color: black; font-size: 16px; border-radius: 15px 15px 15px 15px; font-size: 1.2rem;";
        icono = "fa-burger"
        color = "#FFEFBF"
    } else if (rango == 'ADECUADO'){
        content.style.cssText = "background-color: #6DD900; color: black; font-size: 16px; border-radius: 15px 15px 15px 15px; font-size: 1.2rem;";
        icono = "fa-burger"
        color = "#6DD900"
    } else if (rango == 'SOBREPESO'){
        content.style.cssText = "background-color: #FFDC73; color: black; font-size: 16px; border-radius: 15px 15px 15px 15px; font-size: 1.2rem;";
        icono = "fa-burger"
        color = "#FFDC73"
    } else if (rango == 'OBESIDAD GRADO 1'){
        content.style.cssText = "background-color: #FFA851; color: black; font-size: 16px; border-radius: 15px 15px 15px 15px; font-size: 1.2rem;";
        icono = "fa-burger"
        color = "#FFA851"
    } else if (rango == 'OBESIDAD GRADO 2'){
        content.style.cssText = "background-color: #EB7453; color: black; font-size: 16px; border-radius: 15px 15px 15px 15px; font-size: 1.2rem;";
        icono = "fa-burger"
        color = "#EB7453"
    } else if (rango == 'OBESIDAD GRADO 3'){
        content.style.cssText = "background-color: #B02D36; color: white; font-size: 16px; border-radius: 15px 15px 15px 15px; font-size: 1.2rem;";        
        icono = "fa-skull fa-shake"
        color = " #B02D36"
    }

    var miDiv = document.getElementById("icono");
    miDiv.innerHTML = "<i class='fa-solid " + icono + " fa-2xl' style='color: " + color + ";'></i>"


   


}

