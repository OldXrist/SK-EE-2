let loc = window.location.href
let sk = loc.split('&')[0].split('=')
console.log(sk[1])

let send = {
    sk: sk[1]
}

function Accept(){
    let sknum = window.location.href.split('?')[1].split('=')[1].split('&')[0]
    let url = new URL('http://localhost:8080/Sobr/lichnui_kobinetu/lk_org/z_sobr/z_sobr_org_5.html')

    let status = {
        appId: window.location.href.split('&')[1].split('=')[1],
        status: "Допущена"
    }

    $.get('http://localhost:8080/Sobr/ApplicationUpdServlet', status)

    url.searchParams.append('sk', sknum)
    window.location.href = url.href
}

function Decline(){
    let sknum = window.location.href.split('?')[1].split('=')[1].split('&')[0]
    let url = new URL('http://localhost:8080/Sobr/lichnui_kobinetu/lk_org/z_sobr/z_sobr_org_5.html')

    let status = {
        appId: window.location.href.split('&')[1].split('=')[1],
        status: "Отклонена"
    }

    $.get('http://localhost:8080/Sobr/ApplicationUpdServlet', status)

    url.searchParams.append('sk', sknum)
    window.location.href = url.href
}

let locc = window.location.href
let appId = locc.split('&')[1].split('=')
console.log(appId[1])

let appID = {
    appId: appId[1]
}

$.get('http://localhost:8080/Sobr/ApplicationEditServlet', appID, function (data){
    console.log(data)

    let d = data.split('\n')
    let role = d[1]

    document.getElementById('number').innerText += appId[1]

    if (role.includes("ЮЛ")){
        document.getElementById("table").innerHTML +=
            "      <ul class=\"fader\">\n" +
            "        <li>Полное наименование</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[2] +" class=\"oneline\" disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"fader\">\n" +
            "        <li>Юридический адрес</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[3] +" class=\"oneline\" disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"fader\">\n" +
            "        <li>Почтовый адрес</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[4] +" class=\"oneline\" disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline fader\">\n" +
            "        <li>СНИЛС</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[5] +" + disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline second fader\">\n" +
            "        <li>Код ОГРН</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[6] +" + disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline fader\">\n" +
            "        <li>Телефон</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[7] +" class=\"phone\" disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline second fader\">\n" +
            "        <li>Электронная почта</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[8] +" + disabled/></li>\n" +
            "      </ul>\n"

    } else if (role.includes("ФЛ")){
        document.getElementById("table").innerHTML +=
            "      <ul class=\"inline_4 fader\">\n" +
            "        <li>Фамилия</li>\n" +
            "        <li><input type=\"text\" placeholder=\"Иванова\" /></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline_4 second_4 fader\">\n" +
            "        <li>Имя</li>\n" +
            "        <li><input type=\"text\" placeholder=\"Светлана\" /></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline_3 fader\">\n" +
            "        <li>Отчество</li>\n" +
            "        <li><input type=\"text\" placeholder=\"Андреевна\" /></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline_4 fader\">\n" +
            "        <li>Серия</li>\n" +
            "        <li><input type=\"text\" placeholder=\"00 00\" class=\"ser\"/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline_4 second_4 fader\">\n" +
            "        <li>Номер</li>\n" +
            "        <li><input type=\"text\" placeholder=\"000 000\" class=\"num\"/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline_3 fader\">\n" +
            "        <li>Дата выдачи</li>\n" +
            "        <li><input type=\"text\" placeholder=\"01.01.0000\" class=\"date\"/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"fader\">\n" +
            "        <li>Кем выдан</li>\n" +
            "        <li><input type=\"text\" placeholder=\"Тема сообщения\" class=\"oneline\"/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"fader\">\n" +
            "        <li>Почтовый адрес</li>\n" +
            "        <li><input type=\"text\" placeholder=\"Тема сообщения\" class=\"oneline\"/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline fader\">\n" +
            "        <li>ИНН</li>\n" +
            "        <li><input type=\"text\" placeholder=\"+7 (900) 000-00-00\" class=\"phone\"/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline second fader\">\n" +
            "        <li>СНИЛС</li>\n" +
            "        <li><input type=\"text\" placeholder=\"ivanova12@mail.ru\" /></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline fader\">\n" +
            "        <li>Телефон</li>\n" +
            "        <li><input type=\"text\" placeholder=\"+7 (900) 000-00-00\" class=\"phone\"/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline second fader\">\n" +
            "        <li>Электронная почта</li>\n" +
            "        <li><input type=\"text\" placeholder=\"ivanova12@mail.ru\" /></li>\n" +
            "      </ul>\n"

    } else if (role.includes("ИП")){
        document.getElementById("table").innerHTML +=
            "            <div class=\"famil_ziav\">\n" +
            "                <label for=\"famil\" class=\"txt_obsh\">Фамилия</label>\n" +
            "                <input type=\"text\" class=\"forms4\" id=\"famil\" placeholder=\"Афанасьева\">\n" +
            "            </div>\n" +
            "            <div class=\"naim_ziav\">\n" +
            "                <label for=\"name\" class=\"txt_obsh\">Имя</label>\n" +
            "                <input type=\"text\" class=\"forms4\" id=\"name\" placeholder=\"Елена\">\n" +
            "            </div>\n" +
            "            <div class=\"otch_ziav\">\n" +
            "                <label for=\"otch\" class=\"txt_obsh\">Отчество</label>\n" +
            "                <input type=\"text\" class=\"forms5\" id=\"otch\" placeholder=\"Евгеньевна\">\n" +
            "            </div>\n" +
            "            <div class=\"unn_zaiv\">\n" +
            "                <label for=\"inn\" class=\"txt_obsh\">ИНН</label>\n" +
            "                <input type=\"text\" class=\"forms4\" id=\"inn\" placeholder=\"000000000000\">\n" +
            "            </div>\n" +
            "            <div class=\"snils_zaiv\">\n" +
            "                <label for=\"snils\" class=\"txt_obsh\">СНИЛС</label>\n" +
            "                <input type=\"text\" class=\"forms4\" id=\"snils\" placeholder=\"000 000 000 00\">\n" +
            "            </div>\n" +
            "            <div class=\"ogrnip_ziav\">\n" +
            "                <label for=\"ogrnip\" class=\"txt_obsh\">ОГРНИП</label>\n" +
            "                <input type=\"text\" class=\"forms5\" id=\"ogrnip\" placeholder=\"000 000 000 00\">\n" +
            "            </div>\n" +
            "            <div class=\"pocht_adres_zaiv\">\n" +
            "                <label for=\"zip\" class=\"txt_obsh\">Почтовый адрес</label>\n" +
            "                <input type=\"text\" class=\"forms2\" id=\"zip\" placeholder=\"346918, г. Ростов-на-Дону, ул.\">\n" +
            "            </div>\n" +
            "            <div class=\"telefon_zaiv\">\n" +
            "                <label for=\"phone\" class=\"txt_obsh\">Телефон</label>\n" +
            "                <input type=\"text\" class=\"forms\" id=\"phone\" placeholder=\"+7 (900) 000-12-34\">\n" +
            "            </div>\n" +
            "            <div class=\"email_zaiv\">\n" +
            "                <label for=\"email\" class=\"txt_obsh\">Электронная почта</label>\n" +
            "                <input type=\"text\" class=\"forms3\" id=\"email\" placeholder=\"ivanov12@mail.ru\">\n" +
            "            </div>"
    }
})