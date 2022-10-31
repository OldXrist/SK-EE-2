function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

let loc = window.location.href
let snum = loc.split('=')
console.log(snum[1])

let send = {
    sk: snum[1]
}

let orgObj = {
}

document.getElementById('')

$.get("http://localhost:8080/Sobr/DEBTServlet", send, function (data){
    console.log(data)

    let d = data.split("\n")
    orgObj.type = d[d.length-2]
    orgObj.email = d[d.length - 3]
})

console.log(orgObj)

$.get("http://localhost:8080/Sobr/ORGServlet", orgObj, function (data){
    console.log(data)
    let d = data.split("\n")
    let role = d[d.length-2]
    if (role.includes("ЮЛ")){
        document.getElementById("org").innerHTML += "<div class=\"inline first\">\n" +
            "                <label for=\"unn\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                <input type=\"text\" class=\"fInput\" id=\"unn\" placeholder=\"11111111\" disabled>\n" +
            "            </div>\n" +
            "            <div class=\"inline second\">\n" +
            "                <label for=\"ogrn\" class=\"txt_obsh\">ОГРН*</label>\n" +
            "                <input type=\"text\" class=\"sInput\" id=\"ogrn\" placeholder=\"000 000 000 00\" disabled>\n" +
            "            </div>\n" +
            "            <div>\n" +
            "                <label for=\"naim_org\" class=\"txt_obsh\">Наименование организации*</label>\n" +
            "                <input type=\"text\" class=\"oneline\" id=\"naim_org\" placeholder=\"Полное наименование\" disabled>\n" +
            "            </div>\n" +
            "            <div>\n" +
            "                <label for=\"qr_adres\" class=\"txt_obsh\">Юридический адрес*</label>\n" +
            "                <input type=\"text\" class=\"oneline\" id=\"qr_adres\" placeholder=\"Юридический адрес\" disabled>\n" +
            "            </div>\n" +
            "            <div>\n" +
            "                <label for=\"pocht_adres\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                <input type=\"text\" class=\"oneline\" id=\"pocht_adres\" placeholder=\"Почтовый адрес\" disabled>\n" +
            "            </div>"
        document.getElementById("unn").value = d[0]
        document.getElementById("ogrn").value = d[1]
        document.getElementById("naim_org").value = d[2]
        document.getElementById("qr_adres").value = d[3]
        document.getElementById("pocht_adres").value = d[4]
        document.getElementById("phone").value = d[5]
        document.getElementById("email").value = d[6]

    } else if (role.includes("ФЛ")){
        document.getElementById("org").innerHTML += "<div class='inline'>\n" +
            "                    <label for=\"familOrg\" class=\"txt_obsh\">Фамилия*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"familOrg\" placeholder=\"Фамилия\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"nameOrg\" class=\"txt_obsh\">Имя*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"nameOrg\" placeholder=\"Имя\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"otchOrg\" class=\"txt_obsh\">Отчество*</label>\n" +
            "                    <input type=\"text\" class=\"three third\" id=\"otchOrg\" placeholder=\"Отчество\" disabled>\n" +
            "                </div>\n" +
            "                <div>\n" +
            "                    <label for=\"pochtOrg\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                    <input type=\"text\" class=\"oneline\" id=\"pochtOrg\" placeholder=\"Почтовый адрес\" disabled>\n" +
            "                </div>\n" +
            "                <div class=\"inline first\">\n" +
            "                    <label for=\"innOrg\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                    <input type=\"text\" class=\"fInput\" id=\"innOrg\" placeholder=\"000000000000\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"inline second\">\n" +
            "                    <label for=\"snilsOrg\" class=\"txt_obsh\">СНИЛС*</label>\n" +
            "                    <input type=\"text\" class=\"sInput\" id=\"snilsOrg\" placeholder=\"000 000 000 00\" disabled>\n" +
            "                </div>"
        document.getElementById("familOrg").value = d[0]
        document.getElementById("nameOrg").value = d[1]
        document.getElementById("otchOrg").value = d[2]
        document.getElementById("pochtOrg").value = d[3]
        document.getElementById("innOrg").value = d[4]
        document.getElementById("snilsOrg").value = d[5]
        document.getElementById("phone").value = d[6]
        document.getElementById("email").value = d[7]

    } else if (role.includes("ИП")){
        document.getElementById("org").innerHTML += "<div class='inline'>\n" +
            "                    <label for=\"familOrg2\" class=\"txt_obsh\">Фамилия*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"familOrg2\" placeholder=\"Фамилия\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"nameOrg2\" class=\"txt_obsh\">Имя*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"nameOrg2\" placeholder=\"Имя\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"otchOrg2\" class=\"txt_obsh\">Отчество*</label>\n" +
            "                    <input type=\"text\" class=\"three third\" id=\"otchOrg2\" placeholder=\"Отчество\" disabled>\n" +
            "                </div>\n" +
            "                <div>\n" +
            "                    <label for=\"postOrg2\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                    <input type=\"text\" class=\"oneline\" id=\"postOrg2\" placeholder=\"Почтовый адрес\" disabled>\n" +
            "                </div>\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"innOrg2\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"innOrg2\" placeholder=\"000000000000\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"snilsOrg2\" class=\"txt_obsh\">СНИЛС*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"snilsOrg2\" placeholder=\"000 000 000 00\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"ogrnipOrg\" class=\"txt_obsh\">Код ОГРНИП*</label>\n" +
            "                    <input type=\"text\" class=\"three third\" id=\"ogrnipOrg\" placeholder=\"000000000000000\" disabled>\n" +
            "                </div>"
        document.getElementById("familOrg2").value = d[0]
        document.getElementById("nameOrg2").value = d[1]
        document.getElementById("otchOrg2").value = d[2]
        document.getElementById("postOrg2").value = d[3]
        document.getElementById("innOrg2").value = d[4]
        document.getElementById("snilsOrg2").value = d[5]
        document.getElementById("ogrnipOrg").value = d[6]
        document.getElementById("phone").value = d[7]
        document.getElementById("email").value = d[8]

    } else if (role.includes("АУ")){
        document.getElementById("org").innerHTML += "<div class='inline'>\n" +
            "                    <label for=\"familOrg3\" class=\"txt_obsh\">Фамилия*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"familOrg3\" placeholder=\"Фамилия\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"nameOrg3\" class=\"txt_obsh\">Имя*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"nameOrg3\" placeholder=\"Имя\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"otchOrg3\" class=\"txt_obsh\">Отчество*</label>\n" +
            "                    <input type=\"text\" class=\"three third\" id=\"otchOrg3\" placeholder=\"Отчество\" disabled>\n" +
            "                </div>\n" +
            "                <div>\n" +
            "                    <label for=\"postOrg3\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                    <input type=\"text\" class='oneline' id=\"postOrg3\" placeholder=\"Почтовый адрес\" disabled>\n" +
            "                </div>\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"innOrg3\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"innOrg3\" placeholder=\"000000000000\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"snilsOrg3\" class=\"txt_obsh\">СНИЛС*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"snilsOrg3\" placeholder=\"000 000 000 00\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"auOrg\" class=\"txt_obsh\">Регистрационный номер АУ*</label>\n" +
            "                    <input type=\"text\" class=\"three third\" id=\"auOrg\" placeholder=\"000 000\" disabled>\n" +
            "                </div>"

        document.getElementById("familOrg3").value = d[0]
        document.getElementById("nameOrg3").value = d[1]
        document.getElementById("otchOrg3").value = d[2]
        document.getElementById("postOrg3").value = d[3]
        document.getElementById("innOrg3").value = d[4]
        document.getElementById("snilsOrg3").value = d[5]
        document.getElementById("auOrg").value = d[6]
        document.getElementById("phone").value = d[7]
        document.getElementById("email").value = d[8]

    }
})



