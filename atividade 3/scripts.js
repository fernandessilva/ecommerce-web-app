function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nomeAluno = document.getElementById("nome-aluno").value.trim();
    let nomeDisciplina = document.getElementById("nome-disciplina").value.trim();
    let resultado = document.getElementById("resultado");

    if (!nomeAluno) {
        resultado.innerText = "Por favor, informe o nome do aluno.";
        return;
    }
    if (!nomeDisciplina) {
        resultado.innerText = "Por favor, informe o nome da disciplina.";
        return;
    }
    if (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
        resultado.innerText = "Nota 1 inválida. Digite um valor entre 0 e 10.";
        return;
    }
    if (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
        resultado.innerText = "Nota 2 inválida. Digite um valor entre 0 e 10.";
        return;
    }
    let media = (nota1 + nota2) / 2;
    resultado.innerText = "Nome do aluno: " + nomeAluno + "\n" + "Nome da disciplina: " + nomeDisciplina + "\n" + "Nota 1: " + nota1 + "\n" + "Nota 2: " + nota2 + "\n" + "Média: " + media.toFixed(2);
}

function calcularIdade() {
    let anoNascimento = parseInt(document.getElementById("ano-nascimento").value);
    let anoAtual = new Date().getFullYear();
    let resultado = document.getElementById("resultado-idade");

    if (isNaN(anoNascimento) || anoNascimento > anoAtual) {
        resultado.innerText = "Ano de nascimento inválido. Digite um ano anterior a " + anoAtual + ".";
        return;
    }
    let idade = anoAtual - anoNascimento;
    resultado.innerText = "Quem nasceu no ano de " + anoNascimento + " irá completar " + idade + " anos em " + anoAtual + ".";
}

function verificarParImpar() {
    let numero = parseInt(document.getElementById("numero").value);
    let resultadoDiv = document.getElementById("resultado-par-impar");
    if (isNaN(numero)) {
        resultadoDiv.innerText = "Digite um número válido.";
        return;
    }
    let resultado = (numero % 2 === 0) ? "par" : "ímpar";
    resultadoDiv.innerText = "O número " + numero + " é " + resultado + ".";
}

function gerarTabuada() {
    let numero = parseInt(document.getElementById("numero-tabuada").value);
    let resultadoDiv = document.getElementById("resultado-tabuada");
    if (isNaN(numero)) {
        resultadoDiv.innerText = "Digite um número válido para gerar a tabuada.";
        return;
    }
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "<br>";
    }
    resultadoDiv.innerHTML = resultado;
}