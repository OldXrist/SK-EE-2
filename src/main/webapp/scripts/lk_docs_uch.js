let btn = document.querySelector('.upl')
btn.disabled = true

$(document).ready(function(){
    $(".add_docs").hide()
}).ready(function (){
    $("#doc").hide()
}).ready(function (){
    $(".upl").animate({
        opacity: "0.3"
    });
}).ready(function (){
    $(".docs_tbl").hide()
});

$(".prek_dok").click(function(){
    $(".add_docs").fadeIn()
}).click(function(){
    $(".ep").animate({
        opacity: "0.3"
    });
});

$(".add_docs h6").click(function (){
    $(".add_docs").fadeOut()
}).click(function(){
    $(".ep").animate({
        opacity: "1"
    });
});

$(".add_docs label").click(function (){
    $(".add_docs img").hide()
}).click(function (){
    $("#doc").show()
}).click(function (){
    $(".add_docs a").hide()
}).click(function (){
    $(".upl").animate({
        opacity: "1"
    }, 3000);
    btn.disabled = false
});

$(".upl").click(function (){
    let tr = document.getElementById("doc").value
    let f = tr.split("\\")
    let file = f[2]
    console.log(f,file)
    let markup = "<tr><td>" + file + "<img src='../../../img/cross.png' style='position: absolute; left: 1050px;'/> </td></tr>"

    $(".docs_tbl tbody").append(markup)
}).click(function (){
    $(".add_docs").fadeOut()
}).click(function(){
    $(".ep").animate({
        opacity: "1"
    });
}).click(function (){
    $(".docs_tbl").fadeIn("fast")
    $(".base").animate({
        marginTop: "+=65px"
    });
    $(".base_bg").animate({
        marginTop: "+=65px"
    });
    $(".add_docs img").show()
    $("#doc").hide()
    $(".add_docs a").show()
})