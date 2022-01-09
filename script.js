const calcular = document.getElementById('calcular');

//FUNCAO DE CALCULOS E APRESENTACAO DE VARIAVEIS DE ALTURA E PESO//
function imc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

    if (altura !== "" && peso !== "") {
        //VARIAVEL ESPECIFICA PARA CALCULAR O IMC//
        const IMC = (peso / (altura * altura)).toFixed(1);

        //VARIAVEL DO TIPO LET CRIADA COM O OBJETIVO DE NAO DEFINIR VARIACAO, OU SEJA ELA TERA VARIACOES//
        let classificacao = "";

        if (IMC < 18.5) {
            classificacao = "Você está abaixo do peso";
            alert(classificacao);
        } else if (IMC < 25) {
            classificacao = "Você está com o peso ideal. Parabéns!";
            alert(classificacao);
        } else if (IMC < 30) {
            classificacao = "Você está levemente acima do peso."
            alert(classificacao);
        } else if (IMC < 35) {
            classificacao = "Você está com obesidade grau 1"
            alert(classificacao);
        } else if (IMC < 40) {
            classificacao = "Você está com obesidade grau 2"
            alert(classificacao);

        } else {
            classificacao = "Você está com obesidade grau 3"
            alert(classificacao);
        }

    } else {
        alert("Preencha todos os campos!");
    }
}

//PROPRIEDADE PARA CLICK NO BOTAO//
calcular.addEventListener('click', imc);