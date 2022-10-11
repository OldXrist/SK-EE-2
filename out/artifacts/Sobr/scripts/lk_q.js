$(document).ready(function (){
    $(".povestka_drop").hide()
})

$(".knopka2").click(function (){
    $(".povestka_drop").slideDown()
    $(".nim_cod").animate({
        top: "+=330px"
    });
    $(".knopka4").animate({
        top: "+=330px"
    });
    $(".knopka5").animate({
        top: "+=330px"
    });
    $(".knopka3").animate({
        top: "+=330px"
    });
    $(".table_fio").animate({
        top: "+=330px"
    });
    $(".base").animate({
        top: "+=330px"
    });
    $(".base_bg").animate({
        top: "+=330px"
    });
    $(".table_org").animate({
        height: "+=330px"
    })
    $(".knopka2").hide()

})