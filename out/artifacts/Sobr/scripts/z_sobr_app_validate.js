$(document).ready(function (){
    $("#error").hide()
})

function Validate(){
    let k = 0

    if (document.getElementById("check1").checked === false ||
        document.getElementById("check2").checked === false ||
        document.getElementById("check3").checked === false){
        $("#footer").animate({
            marginTop: "+=68px"
        });
        $(".stat_drop").animate({
            top: '837px'
        })
        $(".int_drop").animate({
            top: '712px'
        })
        $("#error").show()
        window.scroll(0, 0)


        k += 1
    }
    console.log(document.getElementById("behalf").innerText)
    if (document.getElementById("behalf").innerHTML.includes('Выберите из списка') ||
        document.getElementById("behalf").innerHTML.includes('Не выбрано')){
        document.getElementById("behalf").style.borderColor = '#FF0000'
        k += 1
    }
    if (document.getElementById("status").innerHTML.includes('Выберите из списка') ||
        document.getElementById("status").innerHTML.includes('Не выбрано')){
        document.getElementById("status").style.borderColor = '#FF0000'
        k += 1
    }
    return k
}
