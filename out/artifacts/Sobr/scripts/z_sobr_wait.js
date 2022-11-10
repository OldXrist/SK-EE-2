$(document).ready(function (){
    $(".wait").hide()
});

$(".sign").click(function (){
    $(".wait").fadeIn()
}).click(function (){
    $(".ep").animate({
        opacity: "0.3"
    });
});