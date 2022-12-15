$.get("/Sobr/DEBTServlet", send, function (data) {
    console.log(data)

    let d = data.split("\n")
    let roleDebt = d[3]

    document.getElementById('number').innerHTML += snum[1] + " - заочное"
    document.getElementById('court').value = d[0]
    document.getElementById('caseNum').value = d[1]
    document.getElementById('osn').value = d[2]
    document.getElementById('court').disabled = true
    document.getElementById('caseNum').disabled = true
    document.getElementById('osn').disabled = true

    if (roleDebt.includes("Юридическое")){
        document.getElementById("debtor").innerHTML += "<ul>\n" +
            "                    <li>Полное наименование</li>\n" +
            "                    <li><input type=\"text\" value="+d[11]+" class=\"oneline\" disabled/></li>\n" +
            "                </ul>\n" +
            "                <ul>\n" +
            "                    <li>Юридический адрес</li>\n" +
            "                    <li><input type=\"text\" value="+d[12]+" class=\"oneline\" disabled/></li>\n" +
            "                </ul>\n" +
            "                <ul>\n" +
            "                    <li>Почтовый адрес</li>\n" +
            "                    <li><input type=\"text\" value="+d[7]+" class=\"oneline\" disabled/></li>\n" +
            "                </ul>\n" +
            "                <ul class=\"inline first\">\n" +
            "                    <li>ИНН</li>\n" +
            "                    <li><input type=\"text\" disabled value="+d[8]+"/></li>\n" +
            "                </ul>\n" +
            "                <ul class=\"inline second\">\n" +
            "                    <li>ОГРН</li>\n" +
            "                    <li><input type=\"text\" value="+d[13]+" class=\"ogrn\" disabled/></li>\n" +
            "                </ul>"
        $('.base').animate({
            marginTop: '+=50px'
        });
        $('.base_bg').animate({
            marginTop: '+=50px'
        });
    } else if (roleDebt.includes("Физическое")){
        document.getElementById("debtor").innerHTML += "<div class='inline'>\n" +
            "                    <label for=\"familOrg\" class=\"txt_obsh\">Фамилия*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"familOrg\" value="+d[4]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"nameOrg\" class=\"txt_obsh\">Имя*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"nameOrg\" value="+d[5]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"otchOrg\" class=\"txt_obsh\">Отчество*</label>\n" +
            "                    <input type=\"text\" class=\"three third\" id=\"otchOrg\" value="+d[6]+" disabled>\n" +
            "                </div>\n" +
            "                <div>\n" +
            "                    <label for=\"pochtOrg\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                    <input type=\"text\" class=\"oneline\" id=\"pochtOrg\" value="+d[7]+" disabled>\n" +
            "                </div>\n" +
            "                <div class=\"inline first\">\n" +
            "                    <label for=\"innOrg\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                    <input type=\"text\" class=\"fInput\" id=\"innOrg\" value="+d[8]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class=\"inline second\">\n" +
            "                    <label for=\"snilsOrg\" class=\"txt_obsh\">СНИЛС*</label>\n" +
            "                    <input type=\"text\" class=\"sInput\" id=\"snilsOrg\" value="+d[9]+" disabled>\n" +
            "                </div>"
        document.getElementById("debtor").style.marginTop = '-20px'
        document.getElementById("debtor").style.marginBottom = '50px'
    } else if (roleDebt.includes("Индивидуальный")){
        document.getElementById("debtor").innerHTML += "<div class='inline'>\n" +
            "                    <label for=\"familOrg2\" class=\"txt_obsh\">Фамилия*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"familOrg2\" value="+d[4]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"nameOrg2\" class=\"txt_obsh\">Имя*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"nameOrg2\" value="+d[5]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"otchOrg2\" class=\"txt_obsh\">Отчество*</label>\n" +
            "                    <input type=\"text\" class=\"three third\" id=\"otchOrg2\" value="+d[6]+" disabled>\n" +
            "                </div>\n" +
            "                <div>\n" +
            "                    <label for=\"postOrg2\" class=\"txt_obsh\">Почтовый адрес*</label>\n" +
            "                    <input type=\"text\" class=\"oneline\" id=\"postOrg2\" value="+d[7]+" disabled>\n" +
            "                </div>\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"innOrg2\" class=\"txt_obsh\">ИНН*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"innOrg2\" value="+d[8]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"snilsOrg2\" class=\"txt_obsh\">СНИЛС*</label>\n" +
            "                    <input type=\"text\" class=\"three\" id=\"snilsOrg2\" value="+d[9]+" disabled>\n" +
            "                </div>\n" +
            "\n" +
            "                <div class='inline'>\n" +
            "                    <label for=\"ogrnipOrg\" class=\"txt_obsh\">Код ОГРНИП*</label>\n" +
            "                    <input type=\"text\" class=\"three third\" id=\"ogrnipOrg\" value="+d[10]+" disabled>\n" +
            "                </div>"
        document.getElementById("debtor").style.marginTop = '-20px'
        document.getElementById("debtor").style.marginBottom = '50px'
    }
})