const form =document.querySelector('.imcformas')

form.addEventListener('submit', function(e){
    e.preventDefault();
    setResultado('Nao tankei!');
});

function criaP(){
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');    
    p.innerHTML = 'Qualquer Coisa';
    resultado.appendChild(p);
};  

function setResultado(msg){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
   
};