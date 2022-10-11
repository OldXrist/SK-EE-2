$(document).ready(function (){
    $(".povestka_drop").hide()
})

$(".knopka2").click(function (){
    $(".povestka_drop").slideDown()
    $(".nim_cod").animate({
        top: "+=330px"
    })
    $(".knopka4").animate({
        top: "+=330px"
    })
    $(".knopka5").animate({
        top: "+=330px"
    })
})