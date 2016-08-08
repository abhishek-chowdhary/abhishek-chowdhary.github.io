$(document).ready(function(){
    $("#ab").click(function(){
       $("#about").show();
       $("#home").hide();
       $("#port").hide();
       $("#conn").hide();

    });

    $("#po").click(function(){
       $("#port").show();
       $("#about").hide();
       $("#conn").hide();
       $("#home").hide();
    });

    $("#co").click(function(){
       $("#conn").show();
       $("#port").hide();
       $("#about").hide();
       $("#home").hide();
    });

    $('[data-toggle="tooltip"]').tooltip();
});
