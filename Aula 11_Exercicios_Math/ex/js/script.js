const numeroQ = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById('numero-titulo');
const textoDiv = document.getElementById ('texto');


numeroTitulo.innerHTML = numeroQ;
textoDiv.innerHTML += `<p>Seu número é ${numeroQ}</p>`;
textoDiv.innerHTML += `<p>A raiz quadrada do seu número é ${Math.sqrt(numeroQ)}.</p>`;
textoDiv.innerHTML += `<p>${numeroQ} é um número inteiro: ${Number.isInteger(numeroQ)}.</p>`;
textoDiv.innerHTML += `<p> É um NaN: ${Number.isNaN(numeroQ)}.</p>`;
textoDiv.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numeroQ)}</p>`;
textoDiv.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numeroQ)}</p>`;
textoDiv.innerHTML += `<p> Com duas casas decimais ${numeroQ.toFixed(2)}`;
