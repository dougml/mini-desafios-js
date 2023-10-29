const calcular =  document.getElementById('calc');


function imc(){
    const nome =  document.getElementById('nome').value;
    const altura =  document.getElementById('altura').value;
    const peso =  document.getElementById('peso').value; 
    const resultado =  document.getElementById('result');

    if (nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura*altura)).toFixed(2);
        resultado.textContent = (nome + ', o seu IMC é: '+ valorIMC)
    } else(
        resultado.textContent = 'Preencha todos os campos para calcular o seu IMC'
    )

}

calcular.addEventListener('click', imc);