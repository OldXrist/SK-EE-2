$(document).ready(function (){
    $(".nav_login").hide()
}).ready(function () {
    $("#clock").hide()
}).ready(function () {
    $("#logout_btn").hide()
}).ready(function (){
    $(".logout").hide()
});

$.get("http://localhost:8080/Sobr/MAINServlet", function (data) {
    console.log(data)
    console.log(typeof data)

    if (data !== "") {
        $(".nouser").hide()
        $(".nav_login").show()
        $("#clock").show()
        $("#logout_btn").show()
        $(".logout").show()
        document.getElementById("lk").innerHTML = data
    }

    if (document.getElementById("menu_name") !== null){
        document.getElementById("menu_name").innerHTML += data
    }
})