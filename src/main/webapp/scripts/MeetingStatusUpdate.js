$(document).ready(function (){
    $.post("/StatusUpdateServlet", function (res){
        console.log(res, "success")
    })
})