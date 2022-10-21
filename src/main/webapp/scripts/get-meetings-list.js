let id1 = document.getElementById("id1");
let id2 = document.getElementById("id2");
let id3 = document.getElementById("id3");

$(document).ready(function () {
    $(".nav_login").hide();
    $("#clock").hide();
    $("#logout_btn").hide();
    $(".logout").hide();
    $(".sort_drop").hide();
    alert('15');

    $.post("http://localhost:8080/Sobr/GetMeetingsList", function (data) {
        if (data) {
            console.log(data);
        } else {
            alert('error data');
        }
    });
});

$(".arrw").click(function () {
    $(".sort_drop").slideDown()
}).click(function () {
    $(".table_min").animate({
        opacity: "0.3"
    });
}).click(function () {
    $(".arrw").css("transform", "rotate(180deg)")
});

$(".sort_drop").mouseleave(function () {
    $(".sort_drop").slideUp()
}).mouseleave(function () {
    $(".table_min").animate({
        opacity: "1"
    });
}).mouseleave(function () {
    $(".arrw").css("transform", "rotate(360deg)")
});

$(".sort_drop li").click(function () {
    $(".sort_drop").slideToggle()
}).click(function () {
    $(".table_min").animate({
        opacity: "1"
    });
}).click(function () {
    $(".arrw").css("transform", "rotate(360deg)")
})

$(".sort1").click(function () {
    $(".sort_val").text("номеру")
});

$(".sort2").click(function () {
    $(".sort_val").text("дате добавления")
});

$(".sort3").click(function () {
    $(".sort_val").text("статусу")
});

//clock
setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);
