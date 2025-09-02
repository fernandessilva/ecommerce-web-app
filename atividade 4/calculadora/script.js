document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('calculadora');
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    const operacao = document.getElementById('operacao');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        try {
            const num1 = numero1.value.trim();
            const num2 = numero2.value.trim();
            if (num1 === '' || num2 === '') {
                throw new Error('Preencha ambos os números.');
            }
            if (isNaN(num1) || isNaN(num2)) {
                throw new Error('Digite apenas números válidos.');
            }
            if (operacao.value === 'div' && Number(num2) === 0) {
                throw new Error('Não é possível dividir por zero.');
            }
            let result;
            switch (operacao.value) {
                case 'add':
                    result = Number(num1) + Number(num2);
                    break;
                case 'sub':
                    result = Number(num1) - Number(num2);
                    break;
                case 'mult':
                    result = Number(num1) * Number(num2);
                    break;
                case 'div':
                    result = Number(num1) / Number(num2);
                    break;
            }
            let resultFormat = Number.isInteger(result) ? result : result.toFixed(1);
            resultDiv.textContent = `Resultado: ${resultFormat}`;
            resultDiv.style.color = 'green';
        } catch (error) {
            resultDiv.textContent = error.message;
            resultDiv.style.color = 'red';
        }
    });
});
