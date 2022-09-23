<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../../style/shared.css">
    <link rel="stylesheet" type="text/css" href="../../../style/z_sobr_uch_3.css">
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
                    <li class="breadcrumb-item"><a class="anti_tekst"  href="#">Личный кабинет организатора</a></li>
                    <li class="breadcrumb-item"><a class="anti_tekst"  href="#">Организация собраний</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Карточка собрания</li>
                </ol>
            </nav>
        </div>

        <p class="heading">Карточка собрания: 1014-заочное</p>

        <div class="stats">
            <ul>
                <li class="stats_item"><a class="txtr" href="z_sobr_org_2">Общая информация</a></li>
                <li class="stats_item"><a><b>Повестка дня</b></a></li>
                <li class="stats_item"><a class="txtr" href="z_sobr_org_4">Документы</a></li>
                <li class="stats_item"><a class="txtr" href="z_sobr_org_5">Заявки</a></li>
                <li class="stats_item"><a class="txtr" href="z_sobr_org_7">Бюллетени</a></li>
            </ul>
        </div>

        <div class="ep">
            <p>Перечень вопросов</p>
            <ul>
                <li>Текст вопроса №1</li>
            </ul>
            <table class="vote">
                <tr class="bord">
                    <td>За</td>
                    <td>Против</td>
                    <td>Воздержался</td>
                </tr>
                <tr>
                    <td class="nobord"><input type="checkbox"></td>
                    <td class="nobord"><input type="checkbox"></td>
                    <td class="nobord"><input type="checkbox"></td>
                    <td class="bn"><button class="vote_btn">Голосовать</button></td>
                </tr>
            </table>
            <ul>
                <li>Текст вопроса №2</li>
            </ul>
            <table class="vote">
                <tr class="bord">
                    <td>За</td>
                    <td>Против</td>
                    <td>Воздержался</td>
                </tr>
                <tr>
                    <td class="nobord"><input type="checkbox"></td>
                    <td class="nobord"><input type="checkbox"></td>
                    <td class="nobord"><input type="checkbox"></td>
                    <td class="bn"><button class="vote_btn">Голосовать</button></td>
                </tr>
            </table>
            <ul>
                <li>Текст вопроса №3</li>
            </ul>
            <table class="vote">
                <tr class="bord">
                    <td>За</td>
                    <td>Против</td>
                    <td>Воздержался</td>
                </tr>
                <tr>
                    <td class="nobord"><input type="checkbox"></td>
                    <td class="nobord"><input type="checkbox"></td>
                    <td class="nobord"><input type="checkbox"></td>
                    <td class="bn"><button class="vote_btn">Голосовать</button></td>
                </tr>
            </table>
        </div>

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
