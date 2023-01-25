$(document).ready(function () {
    $(".nav_login").hide()
}).ready(function () {
    $("#clock").hide()
}).ready(function () {
    $("#logout_btn").hide()
}).ready(function () {
    $(".logout").hide()
});

$.get('/Sobr/HashServlet', function (data){
    console.log(data)
})

$(document).ready(function () {
    $(".dropd").hide()
});
$(document).ready(function () {
    $(".stats_btn").click(function () {
        $(".dropd").slideDown();
    });
});
$(document).ready(function () {
    $(".stats_btn").click(function () {
        $(".table").animate({
            top: "1583px"
        });
    });
});
$(document).ready(function () {
    $(".stats_btn").click(function () {
        $(".sort").animate({
            top: "1535px"
        });
    });
});
$(document).ready(function () {
    $(".stats_btn").click(function () {
        $(".sort_drop").animate({
            top: "1573px"
        });
    });
});
$(document).ready(function () {
    $(".stats_btn").click(function () {
        $(".base_bg").animate({
            marginTop: "2333px"
        });
    }).click(function () {
        $(".base").animate({
            marginTop: "2333px"
        });
    });
});

$(document).ready(function () {
    $(".cross").click(function () {
        $(".dropd").slideUp();
    });
});
$(document).ready(function () {
    $(".cross").click(function () {
        $(".table").animate({
            top: "996px"
        });
    });
});
$(document).ready(function () {
    $(".cross").click(function () {
        $(".sort").animate({
            top: "948px"
        });
    });
});
$(document).ready(function () {
    $(".cross").click(function () {
        $(".sort_drop").animate({
            top: "986px"
        });
    });
});
$(document).ready(function () {
    $(".cross").click(function () {
        $(".base_bg").animate({
            marginTop: "1748px"
        });
    }).click(function () {
        $(".base").animate({
            marginTop: "1748px"
        });
    });
});
$(document).ready(function () {
    $(".sort_drop").hide()
})
$(document).ready(function(){
    $(".arrw").click(function(){
        $(".sort_drop").slideDown()
    }).click(function(){
        $(".table").animate({
            opacity: "0.3"
        });
    }).click(function(){
        $(".arrw").css("transform", "rotate(180deg)")
    });
});
$(document).ready(function(){
    $(".sort_drop").mouseleave(function(){
        $(".sort_drop").slideUp()
    }).mouseleave(function(){
        $(".table").animate({
            opacity: "1"
        });
    }).mouseleave(function(){
        $(".arrw").css("transform", "rotate(360deg)")
    });
});
$(document).ready(function(){
    $(".sort_drop li").click(function(){
        $(".sort_drop").slideToggle()
    }).click(function(){
        $(".table").animate({
            opacity: "1"
        });
    }).click(function(){
        $(".arrw").css("transform", "rotate(360deg)")
    })
});
$(document).ready(function(){
    $(".sort1").click(function(){
        $(".sort_val").text("номеру")
    });
});
$(document).ready(function(){
    $(".sort2").click(function(){
        $(".sort_val").text("дате добавления")
    });
});
$(document).ready(function(){
    $(".sort3").click(function(){
        $(".sort_val").text("статусу")
    });
});
$(document).ready(function(){
    $(".form_drop1").hide()
});
$(document).ready(function(){
    $(".form_drop2").hide()
});
$(document).ready(function(){
    $("#searchStatus").click(function(){
        $(".form_drop1").slideDown()
    }).focus(function(){
        $(".table").animate({
            opacity: "0.3"
        });
    }).focus(function(){
        $(".drop_arrw1").css("transform", "rotate(180deg)")
    });
});
$(document).ready(function(){
    $(".form_drop1").mouseleave(function(){
        $(".form_drop1").slideUp()
    }).mouseleave(function(){
        $(".table").animate({
            opacity: "1"
        });
    }).mouseleave(function(){
        $(".drop_arrw1").css("transform", "rotate(360deg)")
    });
});
$(document).ready(function(){
    $(".form_drop1 li").click(function(){
        $(".form_drop1").slideToggle()
    }).click(function(){
        $(".table").animate({
            opacity: "1"
        });
    }).click(function(){
        $(".drop_arrw1").css("transform", "rotate(360deg)")
    })
});
$(document).ready(function(){
    $(".drop_arrw1").click(function(){
        $(".form_drop1").slideDown()
    }).click(function(){
        $(".table").animate({
            opacity: "0.3"
        });
    }).click(function(){
        $(".drop_arrw1").css("transform", "rotate(180deg)")
    });
});
$(document).ready(function(){
    $("#searchType").click(function(){
        $(".form_drop2").slideDown()
    }).focus(function(){
        $(".table").animate({
            opacity: "0.3"
        });
    }).focus(function(){
        $(".drop_arrw2").css("transform", "rotate(180deg)")
    });
});
$(document).ready(function(){
    $(".form_drop2").mouseleave(function(){
        $(".form_drop2").slideUp()
    }).mouseleave(function(){
        $(".table").animate({
            opacity: "1"
        });
    }).mouseleave(function(){
        $(".drop_arrw2").css("transform", "rotate(360deg)")
    });
});
$(document).ready(function(){
    $(".form_drop2 li").click(function(){
        $(".form_drop2").slideToggle()
    }).click(function(){
        $(".table").animate({
            opacity: "1"
        });
    }).click(function(){
        $(".drop_arrw2").css("transform", "rotate(360deg)")
    })
});
$(document).ready(function(){
    $(".drop_arrw2").click(function(){
        $(".form_drop2").slideDown()
    }).click(function(){
        $(".table").animate({
            opacity: "0.3"
        });
    }).click(function(){
        $(".drop_arrw2").css("transform", "rotate(180deg)")
    });
});
$(document).ready(function() {
    $.mask.definitions['0'] = "[0-9]";
    $(".form_gr3 li input ").mask("00.00.0000");
});
$(document).ready(function(){
    $(".form1").click(function(){
        $(".status li input").val("")
    });
});
$(document).ready(function(){
    $(".form2").click(function(){
        $(".status li input").val("Объявлено")
    });
});
$(document).ready(function(){
    $(".form3").click(function(){
        $(".status li input").val("Прием заявок")
    });
});
$(document).ready(function(){
    $(".form4").click(function(){
        $(".status li input").val("Прием заявок завершен")
    });
});
$(document).ready(function(){
    $(".form5").click(function(){
        $(".status li input").val("Ожидание начала собрания")
    });
});
$(document).ready(function(){
    $(".form6").click(function(){
        $(".status li input").val("В стадии проведения")
    });
});
$(document).ready(function(){
    $(".form7").click(function(){
        $(".status li input").val("Подведение итогов")
    });
});
$(document).ready(function(){
    $(".form8").click(function(){
        $(".status li input").val("Завершено")
    });
});
$(document).ready(function(){
    $(".form9").click(function(){
        $(".status li input").val("Отменено")
    });
});
$(document).ready(function(){
    $(".form10").click(function(){
        $(".status li input").val("Не состоялось")
    });
});$(document).ready(function(){
    $(".form11").click(function(){
        $(".status li input").val("Черновик")
    });
});
$(document).ready(function(){
    $(".form12").click(function(){
        $(".status li input").val("Приём бюллетеней")
    });
});
$(document).ready(function(){
    $(".form13").click(function(){
        $(".status li input").val("Приём бюллетеней завершен")
    });
});
$(document).ready(function(){
    $(".form14").click(function(){
        $(".status li input").val("Приостановлено")
    });

    $('.form21').click(function (){
        $('#searchType').val("")
    })

    $('.form22').click(function (){
        $('#searchType').val("Очное")
    })

    $('.form23').click(function (){
        $('#searchType').val("Заочное")
    })
});

$.get("/Sobr/MAINServlet", function (data) {
    console.log(data)
    console.log(typeof data)

    if (data !== "") {
        $(".nouser").hide()
        $(".signin").hide()
        $(".signup").hide()
        $(".nav_login").show()
        $("#clock").show()
        $("#logout_btn").show()
        $(".logout").show()
        $(".login_block").animate({
            height: "282px",
            marginTop: "45px"
        }, 1);
        document.getElementById("lk").innerHTML = data.split('\n')[0]
    }
})