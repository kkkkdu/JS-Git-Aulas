function imcCalculo(){
    const imcForm = document.querySelector('.imcformas');
    const imcResultado = document.querySelector('.resultado')
      
    function segurEvento(evento){
        evento.preventDefault();
        
        const pesoIMC = imcForm.querySelector('.peso');
        const alturaIMC = imcForm.querySelector('.altura');
        function imcCalculo() { 
            peso = pesoIMC.value;
            altura = alturaIMC.value;
            imcContas = peso+altura;
            
            if (imcContas <= 18.5){
                imcResultado.innerHTML += `<p> IMC Abaixo do Peso</p>`;
               }
               else if (imcContas >18.5 ||imcContas <+ 24.9){
                imcResultado.innerHTML+= `<p> IMC Peso normal</p>`;
               }
               else if (imcContas >= 25 || imcContas <= 29.9){
                imcResultado.innerHTML += `<p> IMC Sobrepeso</p>`;
               }
               else if (imcContas >= 30 || imcContas <= 34.9){
                imcResultado.innerHTML += `<p> IMC Obesidade Grau 1</p>`;
               }else if (imcContas >= 35 || imcContas <= 39.9){
                imcResultado.innerHTML += `<p> IMC Obesidade Grau 2</p>`;
               }
               else if (imcContas > 40){
                imcResultado.innerHTML += `<p> IMC obesidade Grau 3</p>`;
               }
               else{
                console.log("Tente novamente");
                imcResultado.innerHTML += `<p> Tente novamente </p>`;
               }
            console.log(imcContas.value, peso.value, altura.value);
            
        };
       imcCalculo();
        console.log(pesoIMC.value, alturaIMC.value, imcCalculo.value);
      
    };
imcForm.addEventListener('submit', segurEvento);  
    
};
imcCalculo();