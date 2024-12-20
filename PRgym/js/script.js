function calcularIMC() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = (peso / (altura * altura)).toFixed(2);

    let resultado = '';
    if (imc < 18.5) resultado = 'Abaixo do Peso';
    else if (imc < 24.9) resultado = 'Peso Normal';
    else resultado = 'Sobrepeso';

    document.getElementById('resultado').innerText = `IMC: ${imc} - ${resultado}`;
}

