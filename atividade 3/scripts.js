function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let media = (nota1 + nota2) / 2;

    document.getElementById("resultado").innerText = "Média: " + media;
}

function calcularIdade() {
    let anoNascimento = parseInt(document.getElementById("ano-nascimento").value);
    let anoAtual = new Date().getFullYear();

    let idade = anoAtual - anoNascimento;

    document.getElementById("resultado-idade").innerText = "Quem nasceu no ano de " + anoNascimento + " irá completar " + idade + " anos em " + (anoAtual + (idade < 0 ? -idade : 0)) + ".";
}

function verificarParImpar() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultado = (numero % 2 === 0) ? "par" : "ímpar";

    document.getElementById("resultado-par-impar").innerText = "O número " + numero + " é " + resultado + ".";
}

function gerarTabuada() {
    let numero = parseInt(document.getElementById("numero-tabuada").value);
    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "<br>";
    }

    document.getElementById("resultado-tabuada").innerHTML = resultado;
}