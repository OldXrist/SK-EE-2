$.get("http://localhost:8080/Sobr/ORGCARDServlet", function (data){
    console.log(data)

    let d = data.split("\n")
    let role = d[d.length-2]
    //let orgContainer = document.getElementById("org").innerHTML
    console.log(role)
    console.log(typeof role)

    if (role.includes("ЮЛ")){
        document.getElementById("org").innerHTML += "<div class=\"unn\">\n" +
            "                <label for=\"unn\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                <input type=\"text\" class=\"forms\" id=\"unn\" placeholder=\"11111111\" disabled>\n" +
            "            </div>\n" +
            "            <div class=\"ogrn\">\n" +
            "                <label for=\"ogrn\" class=\"txt_obsh\">ОГРН*</label>\n" +
            "                <input type=\"text\" class=\"forms3\" id=\"ogrn\" placeholder=\"000 000 000 00\" disabled>\n" +
            "            </div>\n" +
            "            <div class=\"naim_org\">\n" +
            "                <label for=\"naim_org\" class=\"txt_obsh\">Наименование организации*</label>\n" +
            "                <input type=\"text\" class=\"forms2\" id=\"naim_org\" placeholder=\"Полное наименование\" disabled>\n" +
            "            </div>\n" +
            "            <div class=\"qr_adres\">\n" +
            "                <label for=\"qr_adres\" class=\"txt_obsh\">Юридический адрес*</label>\n" +
            "                <input type=\"text\" class=\"forms2\" id=\"qr_adres\" placeholder=\"Юридический адрес\" disabled>\n" +
            "            </div>\n" +
            "            <div class=\"pocht_adres\">\n" +
            "                <label for=\"pocht_adres\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                <input type=\"text\" class=\"forms2\" id=\"pocht_adres\" placeholder=\"Почтовый адрес\" disabled>\n" +
            "            </div>"
        document.getElementById("unn").value = d[0]
        document.getElementById("ogrn").value = d[1]
        document.getElementById("naim_org").value = d[2]
        document.getElementById("qr_adres").value = d[3]
        document.getElementById("pocht_adres").value = d[4]
        document.getElementById("phone").value = d[5]
        document.getElementById("email").value = d[6]

    } else if (role.includes("ФЛ")){
        document.getElementById("org").innerHTML += "<div class=\"familOrg\">\n" +
            "                    <label for=\"familOrg\" class=\"txt_obsh\">Фамилия*</label>\n" +
            "                    <input type=\"text\" class=\"forms4\" id=\"familOrg\" placeholder=\"Фамилия\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"nameOrg\">\n" +
            "                    <label for=\"nameOrg\" class=\"txt_obsh\">Имя*</label>\n" +
            "                    <input type=\"text\" class=\"forms4\" id=\"nameOrg\" placeholder=\"Имя\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"otchOrg\">\n" +
            "                    <label for=\"otchOrg\" class=\"txt_obsh\">Отчество*</label>\n" +
            "                    <input type=\"text\" class=\"forms9\" id=\"otchOrg\" placeholder=\"Отчество\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "                <div class=\"postOrg\">\n" +
            "                    <label for=\"pochtOrg\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                    <input type=\"text\" class=\"forms2\" id=\"pochtOrg\" placeholder=\"Почтовый адрес\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "                <div class=\"unnOrg\">\n" +
            "                    <label for=\"innOrg\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                    <input type=\"text\" class=\"forms\" id=\"innOrg\" placeholder=\"000000000000\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"codorgOrg\">\n" +
            "                    <label for=\"snilsOrg\" class=\"txt_obsh\">СНИЛС*</label>\n" +
            "                    <input type=\"text\" class=\"forms3\" id=\"snilsOrg\" placeholder=\"000 000 000 00\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>"
        $(".under_org").animate({
            top: "-=100px"
        })
        $(".dolg_drop").animate({
            top: "-=100px"
        })
        $(".add_docs").animate({
            top: "-=100px"
        })
        document.getElementById("familOrg").value = d[0]
        document.getElementById("nameOrg").value = d[1]
        document.getElementById("otchOrg").value = d[2]
        document.getElementById("pochtOrg").value = d[3]
        document.getElementById("innOrg").value = d[4]
        document.getElementById("snilsOrg").value = d[5]
        document.getElementById("phone").value = d[6]
        document.getElementById("email").value = d[7]

    } else if (role.includes("ИП")){
        document.getElementById("org").innerHTML += "<div class=\"familOrg2\">\n" +
            "                    <label for=\"familOrg2\" class=\"txt_obsh\">Фамилия*</label>\n" +
            "                    <input type=\"text\" class=\"forms4\" id=\"familOrg2\" placeholder=\"Фамилия\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"nameOrg2\">\n" +
            "                    <label for=\"nameOrg2\" class=\"txt_obsh\">Имя*</label>\n" +
            "                    <input type=\"text\" class=\"forms4\" id=\"nameOrg2\" placeholder=\"Имя\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"otchOrg2\">\n" +
            "                    <label for=\"otchOrg2\" class=\"txt_obsh\">Отчество*</label>\n" +
            "                    <input type=\"text\" class=\"forms9\" id=\"otchOrg2\" placeholder=\"Отчество\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "                <div class=\"postOrg2\">\n" +
            "                    <label for=\"postOrg2\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                    <input type=\"text\" class=\"forms2\" id=\"postOrg2\" placeholder=\"Почтовый адрес\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "                <div class=\"innOrg2\">\n" +
            "                    <label for=\"innOrg2\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                    <input type=\"text\" class=\"forms4\" id=\"innOrg2\" placeholder=\"000000000000\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"codorgOrg2\">\n" +
            "                    <label for=\"snilsOrg2\" class=\"txt_obsh\">СНИЛС*</label>\n" +
            "                    <input type=\"text\" class=\"forms4\" id=\"snilsOrg2\" placeholder=\"000 000 000 00\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"ogrnipOrg\">\n" +
            "                    <label for=\"ogrnipOrg\" class=\"txt_obsh\">Код ОГРНИП*</label>\n" +
            "                    <input type=\"text\" class=\"forms9\" id=\"ogrnipOrg\" placeholder=\"000000000000000\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>"
        $(".under_org").animate({
            top: "-=100px"
        })
        $(".dolg_drop").animate({
            top: "-=100px"
        })
        $(".add_docs").animate({
            top: "-=100px"
        })
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
        document.getElementById("org").innerHTML += "<div class=\"familOrg2\">\n" +
            "                    <label for=\"familOrg3\" class=\"txt_obsh\">Фамилия*</label>\n" +
            "                    <input type=\"text\" class=\"forms4\" id=\"familOrg3\" placeholder=\"Фамилия\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"nameOrg2\">\n" +
            "                    <label for=\"nameOrg3\" class=\"txt_obsh\">Имя*</label>\n" +
            "                    <input type=\"text\" class=\"forms4\" id=\"nameOrg3\" placeholder=\"Имя\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"otchOrg2\">\n" +
            "                    <label for=\"otchOrg3\" class=\"txt_obsh\">Отчество*</label>\n" +
            "                    <input type=\"text\" class=\"forms9\" id=\"otchOrg3\" placeholder=\"Отчество\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "                <div class=\"postOrg2\">\n" +
            "                    <label for=\"postOrg3\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                    <input type=\"text\" class=\"forms2\" id=\"postOrg3\" placeholder=\"Почтовый адрес\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "                <div class=\"innOrg2\">\n" +
            "                    <label for=\"innOrg3\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                    <input type=\"text\" class=\"forms4\" id=\"innOrg3\" placeholder=\"000000000000\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"codorgOrg2\">\n" +
            "                    <label for=\"snilsOrg3\" class=\"txt_obsh\">СНИЛС*</label>\n" +
            "                    <input type=\"text\" class=\"forms4\" id=\"snilsOrg3\" placeholder=\"000 000 000 00\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"auOrg\">\n" +
            "                    <label for=\"auOrg\" class=\"txt_obsh\">Регистрационный номер АУ*</label>\n" +
            "                    <input type=\"text\" class=\"forms9\" id=\"auOrg\" placeholder=\"000 000\" onfocus=\"White(this.id)\" disabled>\n" +
            "                </div>"
        $(".under_org").animate({
            top: "-=100px"
        })
        $(".dolg_drop").animate({
            top: "-=100px"
        })
        $(".add_docs").animate({
            top: "-=100px"
        })
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