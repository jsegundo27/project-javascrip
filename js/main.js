var btn_red=document.getElementById("btn-red");
     var btn_azul=document.getElementById("btn-azul");
     var btn_verde=document.getElementById("btn-verde");
     var color=document.getElementById('color');
     btn_red.addEventListener('click',function(e){
    
        document.body.className="red";
        color.innerHTML="Red";
        e.preventDefault();
    
     });
     btn_azul.addEventListener('click',function(e){
   
          document.body.className="azul"
          color.innerHTML="Blue";
          e.preventDefault();
    
     });
     btn_verde.addEventListener('click',function(e){
        
           document.body.className="verde";
           color.innerHTML="Green";
           e.preventDefault();
    
     });