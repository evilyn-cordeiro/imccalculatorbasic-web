const calcular = document.getElementById('calcular');

//FUNCAO DE CALCULOS E APRESENTACAO DE VARIAVEIS DE ALTURA E PESO//
function imc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    if (altura !== "" && peso !== "") {
        //VARIAVEL ESPECIFICA PARA CALCULAR O IMC//
        const IMC = (peso / (altura * altura)).toFixed(2);
        //ALERTA CRIADO PARA APRENSENTAR A SITUACAO DA MASSA CORPORAL DO USUARIO//
        alert(IMC);

    }else {
        alert("Preencha todos os campos!");
    }
}

//PROPRIEDADE PARA CLICK NO BOTAO//
calcular.addEventListener('click', imc);