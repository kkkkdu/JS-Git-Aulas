const imcForm = document.querySelector('.imcformas');
const imcResultado = document.querySelector('.resultado');

imcForm.addEventListener('submit', function (segurEvento) {
    segurEvento.preventDefault();
    console.log('Evento Prevenido');
    setResultado('Salve testes');
    imcCalculo();

});
function setResultado(msg) {
    
    imcResultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'Deu certo';
    imcResultado.appendChild(p);

};


function imcCalculo() {
    const pesoIMC = imcForm.querySelector('.peso');
    const alturaIMC = imcForm.querySelector('.altura');

    const peso = Number(pesoIMC.value);
    const altura = Number(alturaIMC.value);
    const imcContas = (peso / (altura * altura)).toFixed(1);
    if (!peso) {
        setResultado('Peso Inválido', false)
        return;
    }
    if (!altura) {
        setResultado('Altura Inválida', false)
        return;
    }

    if (imcContas <= 18.5) {
        imcResultado.innerHTML += `<p> ${imcContas} Abaixo do Peso</p>`;
    }
    else if (imcContas > 18.5 || imcContas < + 24.9) {
        imcResultado.innerHTML += `<p> ${imcContas} Peso normal</p>`;
    }
    else if (imcContas >= 25 || imcContas <= 29.9) {
        imcResultado.innerHTML += `<p> ${imcContas} Sobrepeso</p>`;
    }
    else if (imcContas >= 30 || imcContas <= 34.9) {
        imcResultado.innerHTML += `<p> ${imcContas} Obesidade Grau 1</p>`;
    } else if (imcContas >= 35 || imcContas <= 39.9) {
        imcResultado.innerHTML += `<p> ${imcContas} Obesidade Grau 2</p>`;
    }
    else if (imcContas > 40) {
        imcResultado.innerHTML += `<p> ${imcContas} obesidade Grau 3</p>`;
    }
    else {
        console.log("Tente novamente");
        imcResultado.innerHTML += `<p> Tente novamente </p>`;
    }
    console.log(peso, altura, imcContas);

};
