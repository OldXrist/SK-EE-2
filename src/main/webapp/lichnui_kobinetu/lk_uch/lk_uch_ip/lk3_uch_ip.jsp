<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../../style/shared.css">
    <link rel="stylesheet" type="text/css" href="../../../style/lk.css">
    <link rel="stylesheet" type="text/css" href="../../../style/lk3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Личный кабинет</title>
</head>
<body>
<div class="menu">
    <ul>
        <li class="logo"><a href="#"><img src="../../../img/Logo.svg" /></a></li>
        <li class="nav_item"><a href="../../../index">Главная</a></li>
        <li class="nav_item"><a href="../../../reestr">Реестр собраний</a></li>
        <li class="nav_item"><a href="../../../help/help_1">Помощь</a></li>
        <li class="nav_item"><a href="../../../help/contacts">Контакты</a></li>
        <li class="nav_item"><a href="../../../login"><button class="nav_btn">Войти</button></a></li>
        <li class="nav_item"><a href="../../../signin">Зарегистрироваться</a></li>
    </ul>
</div>


<div class="container">
    <div class="ogl_l">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a class="anti_tekst"  href="#">Главная</a></li>
                <li class="breadcrumb-item"> Личный кабинет организатора </li>
            </ol>
        </nav>
    </div>

    <p class="txt_lk">Личный кабинет </p>

    <form class="table_lk">

        <nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="lk_uch_ip"><p class="lk_mal">Личные данные</p></a></li>
                <li class="breadcrumb-item"><a href="lk2_uch_ip"><p class="org_sobr">Участие в собраниях</p></a></li>
                <li class="breadcrumb-item active" aria-current="page"><p class="chern_zaiav_big">Черновики заявок</p></a></li>
            </ol>
        </nav>

        <img class="logout-1-traced"
             src="https://static.overlay-tech.com/assets/3373d3e0-dfbb-4718-9044-d75c865a7c23.svg"/>
        <p class="login">Светлана И.</p>
        <div class="poloska"></div>

    </form>

    <form class="table_min">

        <p class="chern_za">Черновики заявок</p>

    </form>

    <form class="table_blue1">
        <p class="del">Удалить</p>
        <p class="red">Редактировать</p>
        <p class="org">Организатор</p>
        <p class="prav">ООО «Право-Торг» </p>
        <p class="dolzh">Должник</p>
        <p class="kent">Бальдяева Юлия Александровна</p>

    </form>

    <form class="table_blue2">
        <p class="del">Удалить</p>
        <p class="red">Редактировать</p>
        <p class="org">Организатор</p>
        <p class="prav">ООО «Право-Торг» </p>
        <p class="dolzh">Должник</p>
        <p class="kent">Бальдяева Юлия Александровна</p>

    </form>
</div>
<div class="container">
    <div class="content">
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


<div class="table">
    <div class="table_item"></div>
</div>
<script src="../../../jquery/jquery-3.6.0.js"></script>
<script href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
