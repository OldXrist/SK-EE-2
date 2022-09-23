<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../../style/shared.css">
    <link rel="stylesheet" type="text/css" href="../../../style/z_sobr_org_5.5.css">
    <link rel="stylesheet" type="text/css" href="../../../style/zaivka.css">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Заочное собрание</title>
</head>
<body>
<div class="menu">
    <ul>
        <li class="logo"><a href="../../../help/contacts"><img src="../../../img/Logo.svg" /></a></li>
        <li class="nav_item"><a href="../../../index">Главная</a></li>
        <li class="nav_item"><a href="../../../reestr">Реестр собраний</a></li>
        <li class="nav_item"><a href="../../../help/help_1">Помощь</a></li>
        <li class="nav_item"><a href="../../../help/contacts">Контакты</a></li>
        <li class="nav_item"><a href="../../../lichnui_kobinetu/lk_uch/lk_uch_ip2/lk_uch_ip2"><p class="nav_login">Зинаида И.</p></a></li>
        <li class="nav_item"><a href="../../../signin"><span id="clock" style="color:#ffffff;"></span></a></li>
        <li class="nav_item"><a href="../../../help/contacts"><img src="../../../img/logout%201%20(Traced).png" /></a></li>
    </ul>
</div>
<div class="container">
    <div class="content">

        <div class="ogl">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a class="anti_tekst"  href="/index">Главная</a></li>
                    <li class="breadcrumb-item"><a class="anti_tekst"  href="#">Личный кабинет участника</a></li>
                    <li class="breadcrumb-item"><a class="anti_tekst"  href="#">Организация собраний</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Карточка собрания</li>
                </ol>
            </nav>
        </div>

        <p class="heading">Заявка №14898</p>

        <form class="zaiavra">
            <p class="inf_od_zaiav">Информация об участнике собрания</p>
            <div class="unn_zaiv">
                <label for="inn" class="txt_obsh">ИНН</label>
                <input type="text" class="forms4" id="inn" placeholder="000000000000">
            </div>
            <div class="snils_zaiv">
                <label for="inn" class="txt_obsh">СНИЛС</label>
                <input type="text" class="forms4" id="inn" placeholder="000 000 000 00">
            </div>
            <div class="ogrnip_ziav">
                <label for="inn" class="txt_obsh">ОГРНИП</label>
                <input type="text" class="forms5" id="inn" placeholder="000 000 000 00">
            </div>
            <div class="famil_ziav">
                <label for="inn" class="txt_obsh">Фамилия</label>
                <input type="text" class="forms4" id="inn" placeholder="Афанасьева">
            </div>
            <div class="naim_ziav">
                <label for="inn" class="txt_obsh">Имя</label>
                <input type="text" class="forms4" id="inn" placeholder="Елена">
            </div>
            <div class="otch_ziav">
                <label for="inn" class="txt_obsh">Отчество</label>
                <input type="text" class="forms5" id="inn" placeholder="Евгеньевна">
            </div>
            <div class="pocht_adres_zaiv">
                <label for="inn" class="txt_obsh">Почтовый адрес</label>
                <input type="text" class="forms2" id="inn" placeholder="346918, г. Ростов-на-Дону, ул.">
            </div>
            <div class="telefon_zaiv">
                <label for="inn" class="txt_obsh">Телефон</label>
                <input type="text" class="forms" id="inn" placeholder="+7 (900) 000-12-34">
            </div>
            <div class="email_zaiv">
                <label for="inn" class="txt_obsh">Электронная почта</label>
                <input type="text" class="forms3" id="inn" placeholder="ivanov12@mail.ru">
            </div>

            <p class="doks_zaiv">Прикрепленные документы участника</p>

            <div class="doks_txt_zaiv">
                <label for="inn" class="txt_obsh"></label>
                <input type="text" class="forms2" id="inn" placeholder="Документ, удостоверяющий личность">
            </div>
            <div class="doks_txt2_zaiv">
                <label for="inn" class="txt_obsh"></label>
                <input type="text" class="forms2" id="inn" placeholder="Документы, подтверждающие полномочия руководителя или иного лица на осуществление действий от имени заявителя">
            </div>

            <p class="status_zaiv">Статус заявки участника</p>

            <div class="na_rasmotr_zaiv">
                <label for="inn" class="txt_obsh"></label>
                <input type="text" class="forms4" id="inn" placeholder="на рассмотрении">
            </div>

            <button class="prin_zaiv">Принять заявку</button>
            <button class="otklon_zaiv">Отклонить заявку</button>

        </form>

        <div class="base_bg"></div>
        <div class="base">
            <ul>
                <li class="base_logo"><a href="#"><img src="../../../img/Logo.svg" /></a></li>
                <li class="base_item1"><a>Выйти</a></li>
            </ul>
            <ul class="base_links">
                <li class="base_item2"><a class="footer_txt" href="../../../index" >Главная</a></li>
                <li class="base_item2"><a class="footer_txt" href="../../../reestr">Реестр собраний</a></li>
                <li class="base_item2"><a class="footer_txt" href="../../../help/help_1">Помощь</a></li>
                <li class="base_item2"><a class="footer_txt" href="../../../help/contacts">Контакты</a></li>
            </ul>
            <p class="copyright">© 2011-2022 Оператор торговой площадки - ООО «ТендерСтандарт». Все права защищены.</p>
        </div>
    </div>
</div>
<script>
    setInterval(function () {
        var now = new Date();
        var clock = document.getElementById("clock");
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
</script>
<script src="../../../jquery/jquery-3.6.0.js"></script>
<script href="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js" type="text/javascript"></script>
<script href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
