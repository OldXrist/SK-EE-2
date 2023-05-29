$(document).ready(function (){
    $('#footer').load('/footer-2.html')
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
                $("#footer-logout").show()
                $(".mobile-header-logout").show()
                $("#footer-login").hide()
                $(".footer-login").hide()
                document.getElementById("lk").innerHTML = data.split('\n')[0]
            }
        })
    })

    $.post('/indexStatsServlet', function (data){
        let d = data.split("\n")

        document.getElementById('participants').innerHTML += `<b>${d[0]}</b>`
        document.getElementById('orgs').innerHTML += `<b>${d[1]}</b>`
        document.getElementById('meetings-complete').innerHTML += `<b>${d[2]}</b>`
    })
})
