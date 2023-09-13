function dadosEscopo(){
    const form = document.querySelector('.Form');
    const resultado = document.querySelector('.resultado');
    const personas = [];
    
   
    function recebeEventoForm(evento){
      evento.preventDefault();

      const nome = form.querySelector('.nome');
      const sobrenome = form.querySelector('.sobrenome');
      const peso = form.querySelector('.peso');
      const altura = form.querySelector('.altura');
      
      personas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value});

      console.log(personas);    
      resultado.innerHTML += `<p> Seu nome é: ${nome.value} ${sobrenome.value},  ` + `e seu peso e altura são de: ${peso.value}kg ${altura.value}m</p>`;
      
    };
    form.addEventListener('submit', recebeEventoForm); 
};

dadosEscopo();
