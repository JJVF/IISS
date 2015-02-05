//Desplegable boton
$(document).ready(function(){ 
    
    // Menu de Cabecera
    $(".dropdown").mouseover(function(){
        $(this).addClass('open');       // Agregamos la clase open
    })
    $(".dropdown , .dropdown-menu").mouseout(function(){
        $('.dropdown').removeClass('open');    //Quitamos la clase open
    });
    
});
