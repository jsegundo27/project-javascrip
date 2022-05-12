//variables

var btn_red   = document.getElementById("btn-red");
var btn_azul  = document.getElementById("btn-azul");
var btn_verde = document.getElementById("btn-verde");
var color     = document.getElementById('color');

//funcion de inicio
function init(){
   event_click();
}

//evetos
function event_click(){
       btn_red.addEventListener('click',clickRed);
       btn_azul.addEventListener('click',clickAzul);
       btn_verde.addEventListener('click',clickVerde);
}


function colorear(colorEsp,colorEng){
     document.body.className=colorEsp;  
     color.innerHTML=colorEng;
}

//metodos click
function clickVerde(e){
     colorear('verde','Green');
     e.preventDefault();
}
function clickRed(e){
     colorear('red','Red');
     e.preventDefault();
}
function clickAzul(e){
     colorear('azul','Blue');  
     e.preventDefault();
}

init();


