$(document).ready(function (){
    $(".povestka_drop").hide()
})

document.getElementById("ud_lich").value = "Документ, удостоверяющий личность"
document.getElementById("ud_lich").disabled = true

$(".knopka2").click(function (){
    $(".povestka_drop").slideDown()
    $(".nim_cod").animate({
        top: "+=200px"
    });
    $(".knopka4").animate({
        top: "+=200px"
    });
    $(".knopka5").animate({
        top: "+=200px"
    });
    $(".knopka3").animate({
        top: "+=200px"
    });
    $(".table_fio").animate({
        top: "+=200px"
    });
    $(".base").animate({
        top: "+=200px"
    });
    $(".base_bg").animate({
        top: "+=200px"
    });
    $(".table_org").animate({
        height: "+=200px"
    })
    $(".knopka2").hide()

})

$(".save_btn").click(function (){
    if (document.getElementById("enter_q").value !== ""){
        let quest = document.getElementById("enter_q").value
        let markup = "<tr><td>" + quest + "<img src='../../../img/cross.png' style='position: absolute; left: 1000px;'/> </td></tr>"
        $(".q_tbl tbody").append(markup)
        document.getElementById("enter_q").value = null

        $(".nim_cod").animate({
            top: "+=50px"
        });
        $(".knopka4").animate({
            top: "+=50px"
        });
        $(".knopka5").animate({
            top: "+=50px"
        });
        $(".knopka3").animate({
            top: "+=50px"
        });
        $(".table_fio").animate({
            top: "+=50px"
        });
        $(".base").animate({
            top: "+=50px"
        });
        $(".base_bg").animate({
            top: "+=50px"
        });
        $(".table_org").animate({
            height: "+=50px"
        })
    }
})

$(".knopka").click(function (){
    let newdoc = "<input type='text' class='forms2'>"
    $(".ud_lich").append(newdoc)
    $(".knopka").animate({
        top: "+=65px"
    })
})