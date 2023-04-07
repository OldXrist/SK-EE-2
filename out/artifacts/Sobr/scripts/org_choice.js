document.getElementById("tip_dolzh").disabled = true

$(document).ready(function (){
    $(".dolg_drop").hide()
    $(".obem_drop").hide()
    $("#fl_form").hide()
    $("#ip_form").hide()
    $("#ql_form").hide()
})

$(".tip_dolzh img").click(function (){
    $(".dolg_drop").slideDown()
    $(".table_org").animate({
        opacity: "0.3"
    })
    document.getElementById("tip_dolzh").style.borderColor = "white"
})

$(".obem_sobr img").click(function (){
    $(".obem_drop").slideDown()
    $(".table_org").animate({
        opacity: "0.3"
    })
    document.getElementById("obem_sobr").style.borderColor = "white"
})

$("#10").click(function (){
    document.getElementById("obem_sobr").placeholder = document.getElementById("10").innerHTML
    $(".obem_drop").slideUp()
    $(".table_org").animate({
        opacity: "1"
    })
})
$("#20").click(function (){
    document.getElementById("obem_sobr").placeholder = document.getElementById("20").innerHTML
    $(".obem_drop").slideUp()
    $(".table_org").animate({
        opacity: "1"
    })
})
$("#40").click(function (){
    document.getElementById("obem_sobr").placeholder = document.getElementById("40").innerHTML
    $(".obem_drop").slideUp()
    $(".table_org").animate({
        opacity: "1"
    })
})

let k = 0
let l = 0

$("#fl").click(function (){
    if (k === 0 && l === 0) {
        $("#fl_form").slideDown()
        $(".table_org").animate({
            opacity: "1",
            height: "+=344px"
        })
        $(".under").animate({
            top: "+=344px"
        })
        $("#footer").animate({
            top: "+=344px"
        })
        $(".dolg_drop").slideUp()

        k += 1
        console.log(k)

    } else if (l !== 0){
        $(".table_org").animate({
            opacity: "1",
            height: "-=118px"
        })
        $(".under").animate({
            top: "-=118px"
        })
        $("#footer").animate({
            top: "-=118px"
        })
        $("#fl_form").slideDown()
        $("#ip_form").hide()
        $("#ql_form").hide()
        $(".dolg_drop").slideUp()

    } else {
        $(".table_org").animate({
            opacity: "1"
        })
        $("#fl_form").slideDown()
        $("#ip_form").hide()
        $("#ql_form").hide()
        $(".dolg_drop").slideUp()
    }
    document.getElementById("tip_dolzh").placeholder = document.getElementById("fl").innerHTML
})

$("#ip").click(function (){
    if (k === 0 && l === 0) {
        $("#ip_form").slideDown()
        $(".table_org").animate({
            opacity: "1",
            height: "+=344px"
        })
        $(".under").animate({
            top: "+=344px"
        })
        $("#footer").animate({
            top: "+=344px"
        })
        $(".dolg_drop").slideUp()

        k += 1

    } else if (l !== 0) {
        $(".table_org").animate({
            opacity: "1",
            height: "-=118px"
        })
        $(".under").animate({
            top: "-=118px"
        })
        $("#footer").animate({
            top: "-=118px"
        })
        $("#ip_form").slideDown()
        $("#ql_form").hide()
        $("#fl_form").hide()
        $(".dolg_drop").slideUp()

    } else {
        $(".table_org").animate({
            opacity: "1"
        })
        $("#ip_form").slideDown()
        $("#ql_form").hide()
        $("#fl_form").hide()
        $(".dolg_drop").slideUp()
    }
    document.getElementById("tip_dolzh").placeholder = document.getElementById("ip").innerHTML
})

$("#ql").click(function (){
    if (k === 0 && l === 0) {
        $("#ql_form").slideDown()
        $(".table_org").animate({
            opacity: "1",
            height: "+=462px"
        })
        $(".under").animate({
            top: "+=462px"
        })
        $("#footer").animate({
            top: "+=462px"
        })
        $(".dolg_drop").slideUp()

        k += 1

    } else if (k !== 0 && l === 0){
        $(".table_org").animate({
            opacity: "1",
            height: "+=118px"
        })
        $(".under").animate({
            top: "+=118px"
        })
        $("#footer").animate({
            top: "+=118px"
        })
        $("#ql_form").slideDown()
        $("#ip_form").hide()
        $("#fl_form").hide()
        $(".dolg_drop").slideUp()

        l += 1
    } else {
        $(".table_org").animate({
            opacity: "1"
        })
        $("#ql_form").slideDown()
        $("#ip_form").hide()
        $("#fl_form").hide()
        $(".dolg_drop").slideUp()
    }
    document.getElementById("tip_dolzh").placeholder = document.getElementById("ql").innerHTML
})


