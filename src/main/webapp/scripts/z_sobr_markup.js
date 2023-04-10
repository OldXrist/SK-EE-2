for (let i = 1; i < 6; i++){
    document.getElementById("sobrP"+i).href += "?sk=" + sk
}

$.get("/ORGServlet", send, function (data){
    console.log(data)

    let d = data.split("\n")
    let roleOgr = d[0]
    if (roleOgr.includes("ЮЛ")){
        document.getElementById("org").innerHTML += "<div class=\"inline first\">\n" +
            "                <label for=\"unn\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                <input type=\"text\" class=\"fInput\" id=\"unn\" value="+d[1]+" disabled>\n" +
            "            </div>\n" +
            "            <div class=\"inline second\">\n" +
            "                <label for=\"ogrn\" class=\"txt_obsh\">ОГРН*</label>\n" +
            "                <input type=\"text\" class=\"sInput\" id=\"ogrn\" value="+d[2]+" disabled>\n" +
            "            </div>\n" +
            "            <div>\n" +
            "                <label for=\"naim_org\" class=\"txt_obsh\">Наименование организации*</label>\n" +
            "                <input type=\"text\" class=\"oneline\" id=\"naim_org\" value="+d[3]+" disabled>\n" +
            "            </div>\n" +
            "            <div>\n" +
            "                <label for=\"qr_adres\" class=\"txt_obsh\">Юридический адрес*</label>\n" +
            "                <input type=\"text\" class=\"oneline\" id=\"qr_adres\" value="+d[4]+" disabled>\n" +
            "            </div>\n" +
            "            <div>\n" +
            "                <label for=\"pocht_adres\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                <input type=\"text\" class=\"oneline\" id=\"pocht_adres\" value="+d[5]+" disabled>\n" +
            "            </div>"

    } else if (roleOgr.includes("ФЛ")){
        document.getElementById("org").innerHTML += "<div class='inline'>\n" +
            "                    <label for=\"familOrg\" class=\"txt_obsh\">Фамилия*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"familOrg\" value="+d[1]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"nameOrg\" class=\"txt_obsh\">Имя*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"nameOrg\" value="+d[2]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"otchOrg\" class=\"txt_obsh\">Отчество*</label>\n" +
            "                    <input type=\"text\" class=\"three third\" id=\"otchOrg\" value="+d[3]+" disabled>\n" +
            "                </div>\n" +
            "                <div>\n" +
            "                    <label for=\"pochtOrg\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                    <input type=\"text\" class=\"oneline\" id=\"pochtOrg\" value="+d[4]+" disabled>\n" +
            "                </div>\n" +
            "                <div class=\"inline first\">\n" +
            "                    <label for=\"innOrg\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                    <input type=\"text\" class=\"fInput\" id=\"innOrg\" value="+d[5]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"inline second\">\n" +
            "                    <label for=\"snilsOrg\" class=\"txt_obsh\">СНИЛС*</label>\n" +
            "                    <input type=\"text\" class=\"sInput\" id=\"snilsOrg\" value="+d[6]+" disabled>\n" +
            "                </div>"

    } else if (roleOgr.includes("ИП")){
        document.getElementById("org").innerHTML += "<div class='inline'>\n" +
            "                    <label for=\"familOrg2\" class=\"txt_obsh\">Фамилия*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"familOrg2\" value="+d[1]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"nameOrg2\" class=\"txt_obsh\">Имя*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"nameOrg2\" value="+d[2]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"otchOrg2\" class=\"txt_obsh\">Отчество*</label>\n" +
            "                    <input type=\"text\" class=\"three third\" id=\"otchOrg2\" value="+d[3]+" disabled>\n" +
            "                </div>\n" +
            "                <div>\n" +
            "                    <label for=\"postOrg2\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                    <input type=\"text\" class=\"oneline\" id=\"postOrg2\" value="+d[4]+" disabled>\n" +
            "                </div>\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"innOrg2\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"innOrg2\" value="+d[5]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"snilsOrg2\" class=\"txt_obsh\">СНИЛС*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"snilsOrg2\" value="+d[6]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"ogrnipOrg\" class=\"txt_obsh\">Код ОГРНИП*</label>\n" +
            "                    <input type=\"text\" class=\"three third\" id=\"ogrnipOrg\" value="+d[7]+" disabled>\n" +
            "                </div>"

    } else if (roleOgr.includes("АУ")){
        document.getElementById("org").innerHTML += "<div class='inline'>\n" +
            "                    <label for=\"familOrg3\" class=\"txt_obsh\">Фамилия*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"familOrg3\" value="+d[1]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"nameOrg3\" class=\"txt_obsh\">Имя*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"nameOrg3\" value="+d[2]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"otchOrg3\" class=\"txt_obsh\">Отчество*</label>\n" +
            "                    <input type=\"text\" class=\"three third\" id=\"otchOrg3\" value="+d[3]+" disabled>\n" +
            "                </div>\n" +
            "                <div>\n" +
            "                    <label for=\"postOrg3\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                    <input type=\"text\" class='oneline' id=\"postOrg3\" value="+d[4]+" disabled>\n" +
            "                </div>\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"innOrg3\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"innOrg3\" value="+d[5]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"snilsOrg3\" class=\"txt_obsh\">СНИЛС*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"snilsOrg3\" value="+d[6]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"auOrg\" class=\"txt_obsh\">Регистрационный номер АУ*</label>\n" +
            "                    <input disabled type=\"text\" class=\"three third\" id=\"auOrg\" value=" + d[7] + ">\n" +
            "                </div>"
    }
})



