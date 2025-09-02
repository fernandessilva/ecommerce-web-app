document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('calculadora-imc');
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const resultDiv = document.getElementById('result');
    const infoDiv = document.getElementById('info');

    infoDiv.style.display = 'none';

    function validarCampos(altura, peso) {
        if (altura === '' || peso === '') {
            throw new Error('Preencha todos os campos.');
        }
        if (isNaN(altura) || isNaN(peso)) {
            throw new Error('Digite apenas números.');
        }
        if (!Number.isInteger(Number(altura)) || !Number.isInteger(Number(peso))) {
            throw new Error('Digite apenas números inteiros.');
        }
        if (Number(altura) <= 0 || Number(peso) <= 0) {
            throw new Error('Digite apenas números positivos.');
        }
    }

    function validarNumeroInteiro(event) {
        const valor = event.target.value;
        if (valor.includes('.') || valor.includes(',')) {
            resultDiv.textContent = 'Digite apenas números inteiros.';
            resultDiv.style.color = 'red';
        } else {
            resultDiv.textContent = '';
        }
    }

    altura.addEventListener('input', validarNumeroInteiro);
    peso.addEventListener('input', validarNumeroInteiro);

    function obterClassificacaoIMC(imc) {
        const classificacoes = [
            { limite: 16, texto: 'Magreza grave', cor: 'red' },
            { limite: 17, texto: 'Magreza moderada', cor: 'orange' },
            { limite: 18.5, texto: 'Magreza leve', cor: 'yellow' },
            { limite: 24.9, texto: 'Peso ideal', cor: 'green' },
            { limite: 29.9, texto: 'Sobrepeso', cor: 'yellow' },
            { limite: 34.9, texto: 'Obesidade grau I', cor: 'orange' },
            { limite: 39.9, texto: 'Obesidade grau II ou severa', cor: 'orange' },
            { limite: Infinity, texto: 'Obesidade grau III ou mórbida', cor: 'red' }
        ];

        return classificacoes.find(c => imc <= c.limite);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        try {
            const alturaValue = altura.value.trim();
            const pesoValue = peso.value.trim();

            validarCampos(alturaValue, pesoValue);

            const alturaNum = Number(alturaValue) / 100;
            const pesoNum = Number(pesoValue);
            const imc = pesoNum / (alturaNum * alturaNum);

            const classificacao = obterClassificacaoIMC(imc);

            resultDiv.textContent = `Seu IMC é: ${imc.toFixed(1)} e indica: ${classificacao.texto}`;
            resultDiv.style.color = classificacao.cor;

            infoDiv.style.display = 'block';
        } catch (error) {
            resultDiv.textContent = error.message;
            resultDiv.style.color = 'red';
        }
    });

    form.addEventListener('reset', function () {
        resultDiv.textContent = '';
        infoDiv.style.display = 'none';
    });
});