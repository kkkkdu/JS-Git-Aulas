function dadosEscopo(){
    const form = document.querySelector('.Form');
    const resultado = document.querySelector('.resultado');
    const personas = [];
    let arrei = [...personas];
   
    function recebeEventoForm(evento){
      evento.preventDefault();
      const nome = form.querySelector('.nome');
      const sobrenome = form.querySelector('.sobrenome');
      const peso = form.querySelector('.peso');
      const altura = form.querySelector('.altura');
      personas.push({nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value}
      );
      console.log(personas);
      console.log(arrei);
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` + `${peso.value} ${altura.value}</p>`;
    form.addEventListener('submit', recebeEventoForm);
    };
    
}
dadosEscopo();
