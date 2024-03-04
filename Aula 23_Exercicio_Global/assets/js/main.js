const imcForm = document.querySelector('.imcformas');
const imcResultado = document.querySelector('.resultado');

imcForm.addEventListener('submit', function (segurEvento) {
    segurEvento.preventDefault();
    console.log('Evento Prevenido');
    imcCalculo();

});

function imcCalculo() {
    const pesoIMC = imcForm.querySelector('.peso');
    const alturaIMC = imcForm.querySelector('.altura');

    const peso = Number(pesoIMC.value);
    const altura = Number(alturaIMC.value);
    const imc = getImc(peso,altura);
    const grauImc = getGrauIMC(imc);
    const msg = `Seu imc é ${imc} ${grauImc}`;

    setResultado(msg, true);

    
    function getImc(peso, altura){
        const imc = peso / altura**2;
        return imc.toFixed(1)
    }

    if (!peso) {
        setResultado('Peso Inválido', false)
        return;
    }
    if (!altura) {
        setResultado('Altura Inválida', false)
        return;
    }


    function getGrauIMC(imc){

        const grau =['Abaixo do Peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'obesidade Grau 3']

        if (imc >= 39.9) return grau[5];
        
         if (imc >= 34.9) return grau[4];
        
         if (imc >= 29.9)  return grau[3];
        
         if (imc >= 24.9) return grau[2];
        
         if (imc >=18.5) return grau[1];
         
         if (imc<18.5) return grau[0];

        else if (imc > 18.5 || imc <= 24.9) {
            imcResultado.innerHTML += `<p> ${imc} Peso normal</p>`;
        }
        else if (imc >= 25 || imc <= 29.9) {
            imcResultado.innerHTML += `<p> ${imc} Sobrepeso</p>`;
        }
        else if (imc >= 30 || imc <= 34.9) {
            imcResultado.innerHTML += `<p> ${imc} Obesidade Grau 1</p>`;
        } 
        else if (imc >= 35 || imc <= 39.9) {
            imcResultado.innerHTML += `<p> ${imc} Obesidade Grau 2</p>`;
        }
        else if (imc > 40) {
            imcResultado.innerHTML += `<p> ${imc} obesidade Grau 3</p>`;
        }
        else {
            console.log("Tente novamente");
        
        }
        console.log(peso, altura, imc);
        };
};
function setResultado(msg, isValid) {    
    imcResultado.innerHTML = '';
    
    const p = document.createElement('p');
    if (isValid) p.classList.add('paragrafo-resultado');
    p.innerHTML = msg;
    imcResultado.appendChild(p);
};
