<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../../style/shared.css">
    <link rel="stylesheet" type="text/css" href="../../../style/lk.css">
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
                <li class="breadcrumb-item active" aria-current="page"><p class="ld">Личные данные</p></li>
                <li class="breadcrumb-item"><a href="lk2_org_ip"><p class="org_sobr">Организация собраний</p></a></li>
                <li class="breadcrumb-item"><a href="lk3_org_ip"><p class="chern_zaiav">Черновики заявок</p></a></li>
            </ol>
        </nav>

        <img class="logout-1-traced"
             src="../../../img/logout%201%20(Traced).png"/>
        <p class="login">Светлана И.</p>
        <div class="poloska"></div>

    </form>

    <form class="table2">

        <p class="ld2">Личные данные</p>

        <div class="famil">
            <label for="fam" class="txt_obsh">Фамилия*</label>
            <input type="text" class="forms4" id="fam" placeholder="Иванова">
        </div>
        <div class="name">
            <label for="nam" class="txt_obsh">Имя*</label>
            <input type="text" class="forms4" id="nam" placeholder="Светлана">
        </div>
        <div class="otch">
            <label for="otch" class="txt_obsh">Отчество*</label>
            <input type="text" class="forms5" id="otch" placeholder="Андреевна">
        </div>
        <div class="pocht_adres">
            <label for="pocht_adres" class="txt_obsh">Почтовый адрес*</label>
            <input type="text" class="forms2" id="pocht_adres" placeholder="111116. г. Москва, а/я №87">
        </div>
        <div class="unn2">
            <label for="unn" class="txt_obsh">ИНН*</label>
            <input type="text" class="forms4" id="unn" placeholder="11111111">
        </div>
        <div class="snils2">
            <label for="snils" class="txt_obsh">СНИЛС*</label>
            <input type="text" class="forms4" id="snils" placeholder="123 456 789 00">
        </div>
        <div class="ogrnip">
            <label for="ogrnip" class="txt_obsh">ОГРНИП*</label>
            <input type="text" class="forms5" id="ogrnip" placeholder="123 456 789 00">
        </div>
        <div class="telefon">
            <label for="telefon" class="txt_obsh">Телефон*</label>
            <input type="text" class="forms" id="telefon" placeholder="+7 (900) 000-12-34">
        </div>
        <div class="email">
            <label for="email" class="txt_obsh">Электронная почта*</label>
            <input type="text" class="forms3" id="email" placeholder="ivanova12@mail.ru">
        </div>

        <p class="izm_pas">Изменить пароль</p>

        <div class="new_pas">
            <label for="new_pas" class="txt_obsh">Новый пароль</label>
            <input type="text" class="forms" id="new_pas" placeholder="********">
        </div>
        <div class="new_pas2">
            <label for="new_pas2" class="txt_obsh">Повторите новый пароль</label>
            <input type="text" class="forms3" id="new_pas2" placeholder="********">
        </div>

        <p class="pass">Паспортные данные</p>

        <div class="seria">
            <label for="seria" class="txt_obsh">Серия*</label>
            <input type="text" class="forms4" id="seria" placeholder="00 00">
        </div>
        <div class="nomer">
            <label for="nomer" class="txt_obsh">Номер*</label>
            <input type="text" class="forms4" id="nomer" placeholder="000 000">
        </div>
        <div class="data">
            <label for="data" class="txt_obsh">Дата выдачи*</label>
            <input type="text" class="forms5" id="data" placeholder="01.01.0000">
        </div>
        <div class="kem_vidan">
            <label for="kem_vidan" class="txt_obsh">Кем выдан*</label>
            <input type="text" class="forms2" id="kem_vidan" placeholder="Кем выдан">
        </div>

        <p class="doks">Документы</p>

        <div class="doks_txt">Перечень документов, которые необходимо приложить к заявке, указан в Регламенте работы сервиса
            <p></p>
            Максимальный объём загружаемого файла 15 Мб. Документ должен быть в формате pdf или jpg
        </div>

        <img src="../../../img/add%201%20(Traced).svg" class="dor"/>
        <p class="prek_dok">Прикрепить документ</p>
        <button type="button" class="knopka">Сохранить и подписать изменения ЭП</button>


    </form>
</div>

<div class="container">
    <div class="content">
        <div class="base_bglk"></div>
        <div class="baselk">
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
