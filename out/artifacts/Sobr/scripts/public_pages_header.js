$(document).ready(function (){
    $(".nav_login").hide()
    $("#clock").hide()
    $("#logout_btn").hide()
    $(".logout").hide()
})

$.get("/Sobr/MAINServlet", function (data) {
    console.log(data)
    console.log(typeof data)

    if (data !== "") {
        $(".nouser").hide()
        $(".nav_login").show()
        $("#clock").show()
        $("#logout_btn").show()
        $(".logout").show()
        document.getElementById("lk").innerHTML = data.split('\n')[0]
    }

    if (document.getElementById("menu_name") !== null) {
        document.getElementById("menu_name").innerHTML += data.split('\n')[0]
    }
})