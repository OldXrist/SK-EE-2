$.get("/ZAPPServlet", function (data){
    console.log(data)

    let d = data.split('\n')
    let role = d[0]
    if (role.includes("ЮЛ")){
        document.getElementById("uData").innerHTML +=
            "      <ul class=\"fader\">\n" +
            "        <li>Полное наименование</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[1] +" class=\"oneline\" disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"fader\">\n" +
            "        <li>Юридический адрес</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[2] +" class=\"oneline\" disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"fader\">\n" +
            "        <li>Почтовый адрес</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[3] +" class=\"oneline\" disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline fader\">\n" +
            "        <li>СНИЛС</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[4] +" + disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline second fader\">\n" +
            "        <li>Код ОГРН</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[5] +" + disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline fader\">\n" +
            "        <li>Телефон</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[6] +" class=\"phone\" disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline second fader\">\n" +
            "        <li>Электронная почта</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[7] +" + disabled/></li>\n" +
            "      </ul>\n"
        $(".base").animate({
            marginTop: '1870px'
        })
        $(".base_bg").animate({
            marginTop: '1870px'
        })

    } else if (role.includes("ФЛ")){
        document.getElementById("uData").innerHTML +=
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
        document.getElementById("uData").innerHTML +=
            "      <ul class=\"inline_4 fader\">\n" +
            "        <li>Фамилия</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[1] +" + disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline_4 second_4 fader\">\n" +
            "        <li>Имя</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[2] +" + disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline_3 fader\">\n" +
            "        <li>Отчество</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[3] +" + disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline_4 fader\">\n" +
            "        <li>Серия</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[4] +" + disabled class=\"ser\"/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline_4 second_4 fader\">\n" +
            "        <li>Номер</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[5] +" + disabled class=\"num\"/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline_3 fader\">\n" +
            "        <li>Дата выдачи</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[6] +" + disabled class=\"date\"/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"fader\">\n" +
            "        <li>Кем выдан</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[7] +" + disabled class=\"oneline\"/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline_4 fader\">\n" +
            "        <li>ИНН</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[8] +" + disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline_4 second_4 fader\">\n" +
            "        <li>СНИЛС</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[9] +" + disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline_3 fader\">\n" +
            "        <li>Код ОГРНИП</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[10] +" + disabled/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"fader\">\n" +
            "        <li>Почтовый адрес</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[11] +" + disabled class=\"oneline\"/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline fader\">\n" +
            "        <li>Телефон*</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[12] +" + disabled class=\"phone\"/></li>\n" +
            "      </ul>\n" +
            "      <ul class=\"inline second fader\">\n" +
            "        <li>Электронная почта*</li>\n" +
            "        <li><input type=\"text\" placeholder="+ d[13] +"  disabled/></li>\n" +
            "      </ul>\n"
    }
})