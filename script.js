var resultado = 0;
var resultadoParcial = [];
var acumuladorDeString = "";
var contadorDeClick = 1;
mostrador = document.querySelector("#resultado");
//Aqui aparece o resultado 
let button1 = (document.querySelector(".btn1"));
let button2 = (document.querySelector(".btn2"));
let button3 = (document.querySelector(".btn3"));
let button4 = (document.querySelector(".btn4"));
let button5 = (document.querySelector(".btn5"));
let button6 = (document.querySelector(".btn6"));
let button7 = (document.querySelector(".btn7"));
let button8 = (document.querySelector(".btn8"));
let button9 = (document.querySelector(".btn9"));
// Aqui estao os numeros
let somar = document.querySelector(".btnSomar");
let subtrair = document.querySelector(".btnSubtrair");
let multiplicar = document.querySelector(".btnMultiplicar");
let dividir = document.querySelector(".btnDividir");
let igual = document.querySelector(".btnIgual");
//Ate agora todos os inputs ja estao com seus respectivos valores
//Hora de criar as funçoes para realizar as operaçoes

function soma(a, b){
    let soma = a + b;
    return soma;
}

function subtracao(a, b){
    let subtracao = a - b;
    return subtracao;
}

function multiplicacao(a, b){
    let multiplicacao = a * b;
    return multiplicacao;
}

function divisao(a, b){
    let divisao = a / b;
    return divisao;
}

// ate aqui todas as funcoes estao funcionando

button1.addEventListener("click", function(){
    console.log("Botao 1 foi apertado");
    acumuladorDeString += +"1";
    console.log(acumuladorDeString);

}); // agora, a funcao de click do botao esta funcionando tambem!!!!

button2.addEventListener("click", function(){
    console.log("Botao 2 foi apertado");
    acumuladorDeString += +"2";
    console.log(acumuladorDeString);

});

button3.addEventListener("click", function(){
    console.log("Botao 3 foi apertado");
    acumuladorDeString += +"3";
    console.log(acumuladorDeString);

});

button4.addEventListener("click", function(){
    console.log("Botao 4 foi apertado");
    acumuladorDeString += +"4";
    console.log(acumuladorDeString);

});

button5.addEventListener("click", function(){
    console.log("Botao 5 foi apertado");
    acumuladorDeString += +"5";
    console.log(acumuladorDeString);

});

button6.addEventListener("click", function(){
    console.log("Botao 6 foi apertado");
    acumuladorDeString += +"6";
    console.log(acumuladorDeString);

});

button7.addEventListener("click", function(){
    console.log("Botao 7 foi apertado");
    acumuladorDeString += +"7";
    console.log(acumuladorDeString);

});

button8.addEventListener("click", function(){
    console.log("Botao 8 foi apertado");
    acumuladorDeString += +"8";
    console.log(acumuladorDeString);

});

button9.addEventListener("click", function(){
    console.log("Botao 9 foi apertado");
    acumuladorDeString += +"9";
    console.log(acumuladorDeString);

});

igual.addEventListener("click", function(){
    console.log("Botao igual foi apertado");
    resultado = parseInt(acumuladorDeString);
    mostrador.innerHTML = resultado;
});

// ate aqui tudo funcionando normalmente e esta convertando a string do acumulador de string para numero
// agora eh preciso adicionar as funcoes aritimeticas

somar.addEventListener("click", function(){
    console.log("Botao soma foi apertado");
    resultadoParcial.push( parseInt(acumuladorDeString));
    console.log(resultadoParcial[0]);
    acumuladorDeString = "";
// a partir daqui vou repetir os numeros no codigo
//aqui acaba a repeticao dos numeros no codigo
    igual.addEventListener("click", function(){
       let resultadoIgual = soma(resultadoParcial[0], parseInt(acumuladorDeString))
        //console.log(resultadoIgual);
        mostrador.innerHTML = resultadoIgual;
        console.log("O resultado eh " + resultadoIgual);
    });



});//FUNCAO SOMAR ESTA MOSTRANDO USANDO O DOM CORRETAMENTE!!!!!!!

subtrair.addEventListener("click", function(){
    console.log("Botao soma foi apertado");
    resultadoParcial.push( parseInt(acumuladorDeString));
    console.log(resultadoParcial[0]);
    acumuladorDeString = "";

    igual.addEventListener("click", function(){
       let resultadoIgual = subtracao(resultadoParcial[0], parseInt(acumuladorDeString));
        //console.log(resultadoIgual);
        mostrador.innerHTML = resultadoIgual;
        console.log("O resultado eh " + resultadoIgual);
    });


});

multiplicar.addEventListener("click", function(){
    console.log("Botao soma foi apertado");
    resultadoParcial.push( parseInt(acumuladorDeString));
    console.log(resultadoParcial[0]);
    acumuladorDeString = "";

    igual.addEventListener("click", function(){
       let resultadoIgual = multiplicacao(resultadoParcial[0], parseInt(acumuladorDeString));
        //console.log(resultadoIgual);
        mostrador.innerHTML = resultadoIgual;
        console.log("O resultado eh " + resultadoIgual);
    });


});

dividir.addEventListener("click", function(){
    console.log("Botao soma foi apertado");
    resultadoParcial.push( parseInt(acumuladorDeString));
    console.log(resultadoParcial[0]);
    acumuladorDeString = "";
    
    igual.addEventListener("click", function(){
       let resultadoIgual = divisao(resultadoParcial[0], parseInt(acumuladorDeString));
        //console.log(resultadoIgual);
        mostrador.innerHTML = resultadoIgual;
        console.log("O resultado eh " + resultadoIgual);
    });


});
