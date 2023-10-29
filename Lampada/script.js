const img = document.querySelector('#lampada');
const btn = document.querySelector('#btn');


btn.addEventListener ("click", turnOnOff);
// desligar.addEventListener ("click", desligaLamp);
img.addEventListener ("mouseover", ligaLamp);
img.addEventListener ("mouseleave", desligaLamp);
img.addEventListener ("dblclick", quebra);

function lampTaQuebrada (){
    return img.src.indexOf ('quebrada') > -1
    //retorna -1 se nao encontrar a palavra quebrada no src da img
}


function ligaLamp () {
    if(!lampTaQuebrada()){
    img.src = "img/ligada.jpg";
}
}

function desligaLamp () {
    if(!lampTaQuebrada()){
    img.src = "img/desligada.jpg";
    }
}

function quebra () {
    img.src = "img/quebrada.jpg";
    
}

function turnOnOff (){
    if(btn.textContent == 'Ligar'){
        ligaLamp();
        btn.textContent = "Desligar"
    }else if(btn.textContent == 'Desligar'){
        desligaLamp();
        btn.textContent = "Ligar" 
    }
}