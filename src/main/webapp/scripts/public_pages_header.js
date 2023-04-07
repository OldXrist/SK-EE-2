$(document).ready(function (){
    $('#footer').load('/footer.html')
    $('#menu').load('/header.html', function (){
        $('#logout_btn').hide()
        $('#clock').hide()
        $.get("/MAINServlet", function (data) {
            console.log(data)
            console.log(typeof data)

            if (data !== "") {
                $(".nouser").hide()
                $("#clock").show()
                $("#logout_btn").show()
                document.getElementById("lk").innerHTML = data.split('\n')[0]
            }

            if (document.getElementById("menu_name") !== null) {
                document.getElementById("menu_name").innerHTML += data.split('\n')[0]
            }
        })
    })
})

