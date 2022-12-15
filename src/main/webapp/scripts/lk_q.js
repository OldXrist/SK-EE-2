/*
function qSend(obj){
    $.get('http://localhost:8080/Sobr/QuestionsServlet', obj, function (){
        console.log("questions added!")
    })
}

 */

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

let n = 0
let qObj = {}
/*
function qAdd (){
    if (document.getElementById("enter_q").value !== ""){
        let quest = document.getElementById("enter_q").value
        qObj['key' + n] = quest
        n++
        qObj.num = n
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
    return qObj
}


 */

$(".knopka").click(function (){
    let newdoc = "<input type='text' class='forms2'>"
    $(".ud_lich").append(newdoc)
    $(".knopka").animate({
        top: "+=65px"
    })
    $(".dop_doks").animate({
        top: "+=65px"
    })
    $(".dop_doks_txt").animate({
        top: "+=65px"
    })
    $(".doks_img").animate({
        top: "+=65px"
    })
    $(".docs_tbl").animate({
        top: "+=65px"
    })
    $(".prek_dok").animate({
        top: "+=65px"
    })
    $(".voprosu").animate({
        top: "+=65px"
    })
    $(".knopka2").animate({
        top: "+=65px"
    })
    $(".povestka_drop").animate({
        top: "+=65px"
    })
    $(".nim_cod").animate({
        top: "+=65px"
    });
    $(".knopka4").animate({
        top: "+=65px"
    });
    $(".knopka5").animate({
        top: "+=65px"
    });
    $(".knopka3").animate({
        top: "+=65px"
    });
    $(".table_fio").animate({
        top: "+=65px"
    });
    $(".base").animate({
        top: "+=65px"
    });
    $(".base_bg").animate({
        top: "+=65px"
    });
    $(".table_org").animate({
        height: "+=65px"
    })
})
i = 1

let email = {}
$(".knopka3").click(function (){

    if (document.getElementById("nim_cod").value !== ""){
        let mail = document.getElementById("nim_cod").value

        email['mail'+ i]=mail

        i++

        console.log(email)

        let newrow = "<tr><td>"+ mail +"</td></tr>"
        $(".table_fio tbody").append(newrow)
        document.getElementById("nim_cod").value = null
        $(".knopka4").animate({
            top: "+=50px"
        });
        $(".knopka5").animate({
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
        });
        $.post("/Sobr/", email, function (){
            console.log(email)
        })
    }
})

