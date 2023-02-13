let send = {
    sk: snum[1]
}

$(document).ready(function (){
    $('.base').animate({
        marginTop: '800px'
    })
    $('.base_bg').animate({
        marginTop: '800px'
    })
})

let bull = {}

function VoteDisable(id){
    document.getElementById(id).disabled = true
    document.getElementById(id).style.opacity = '0.7'
    document.getElementById('За'+id).disabled = true
    document.getElementById('Против'+id).disabled = true
    document.getElementById('Воздержался'+id).disabled = true
}

function Vote(id, obj){
    if (document.getElementById('За'+id).checked){
        obj['answer' + (parseInt(id) + 1)] = 'За'
        VoteDisable(id)
    } else if (document.getElementById('Против'+id).checked){
        obj['answer' + (parseInt(id) + 1)] = 'Против'
        VoteDisable(id)
    } else if (document.getElementById('Воздержался'+id).checked){
        obj['answer' + (parseInt(id) + 1)] = 'Воздержался'
        VoteDisable(id)
    }

    console.log(obj)
}

function FinalVote(obj, sknum){
        obj.sk = sknum

        $.get('/SendAnswersServlet', obj, function (){
            console.log('Success')
        })

        console.log(obj)
}

$.get('/QServlet', send, function (data){
    console.log(data)

    let d = data.split("\n")

    for (let i = 0; i < d.length - 1; i++){
        document.getElementById("ep").innerHTML +=
            "            <ul>\n" +
            "                <li class='qText'>"+ d[i] +"</li>\n" +
            "            </ul>\n" +
            "            <table class=\"vote\" id='tbl_"+ i +"'>\n" +
            "                <tr class=\"bord\">\n" +
            "                    <td>За</td>\n" +
            "                    <td>Против</td>\n" +
            "                    <td>Воздержался</td>\n" +
            "                </tr>\n" +
            "                <tr>\n" +
            "                    <td class=\"nobord\"><input id='За"+ i +"' name='votes"+ i +"' type=\"radio\"></td>\n" +
            "                    <td class=\"nobord\"><input id='Против"+ i +"' name='votes"+ i +"' type=\"radio\"></td>\n" +
            "                    <td class=\"nobord\"><input id='Воздержался"+ i +"' name='votes"+ i +"' type=\"radio\"></td>\n" +
            "                    <td><button type='button' class='vote_btn' id='"+ i +"' onclick='Vote(this.id, bull)'>Голосовать</button></td>\n" +
            "                </tr>\n" +
            "            </table>"

        $(".base").animate({
            marginTop: '+=180px'
        }, 0);
        $(".base_bg").animate({
            marginTop: '+=180px'
        }, 0);
    }

    document.getElementById('ep').innerHTML += "<button id=\"finalVote\" type=\"button\" onclick=\"let k = 0\n" +
        "    let i = 0\n" +
        "    while(document.getElementById(i.toString())){\n" +
        "        if (document.getElementById(i.toString()).disabled !== true){\n" +
        "            k++\n" +
        "        }\n" +
        "        i++\n" +
        "    }\n" +
        "    if (k !== 0){\n" +
        "    } else {\n" +
        "    Signature()" +
        "    }\">Подписать и отправить</button>"

    check()

    $.get('/AnswersCheckServlet', send, function (data) {
        console.log(data)

        if (!data.includes('null')) {
            for (let i = 0; i < 10; i++) {
                if (document.getElementById("tbl_" + i) !== null) {
                    document.getElementById("tbl_" + i).remove()
                    $(".base").animate({
                        marginTop: '-=170px'
                    }, 0);
                    $(".base_bg").animate({
                        marginTop: '-=170px'
                    }, 0);
                    document.getElementsByClassName("qText")[i].style.width = '1040px'
                }
            }
            document.getElementById("finalVote").remove()
            document.getElementById('ep').innerHTML +=
                "<p class=\"attention\">Внимание!</p>\n" +
                "<h6>Для голосования необходимо войти в личный<br> кабинет участника с правом голоса </h6>"
            $(".base").animate({
                marginTop: '+=110px'
            }, 0);
            $(".base_bg").animate({
                marginTop: '+=110px'
            }, 0);
        }
    })
})

