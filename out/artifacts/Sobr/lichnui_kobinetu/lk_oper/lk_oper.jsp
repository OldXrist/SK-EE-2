<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../style/lk_oper.css">
    <link rel="stylesheet" type="text/css" href="../../style/shared.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Оператор ЭТП</title>
</head>
<body>
<div class="menu">
    <ul>
        <li class="logo"><a href="#"><img src="../../img/Logo.svg" /></a></li>
        <li class="nav_item"><a href="../../index">Главная</a></li>
        <li class="nav_item"><a href="../../reestr">Реестр собраний</a></li>
        <li class="nav_item"><a href="../../help/help_1">Помощь</a></li>
        <li class="nav_item"><a href="../../help/contacts">Контакты</a></li>
        <li class="nav_item"><a href="../../login"><button class="nav_btn">Войти</button></a></li>
        <li class="nav_item"><a href="../../signin">Зарегистрироваться</a></li>
    </ul>
</div>


<div class="container">
    <div class="ogl_l">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a class="anti_tekst"  href="#">Главная</a></li>
                <li class="breadcrumb-item">Личный кабинет участника </li>
            </ol>
        </nav>
    </div>

    <p class="lk">Личный кабинет </p>

    <form class="table_oper">

        <p class="oper">Оператор ЭТП</p>
        <div class="linia"></div>
        <p class="ld">Личные данные</p>
        <p class="spisok_org">Список заявок организаторов</p>
        <p class="spisok_uch">Список заявок участников</p>
        <p class="spisok_sobr">Список собраний</p>
        <p class="logs">Журнал изменений</p>

    </form>

    <form class="table_ld">
        <p class="txt_ld">Личные данные</p>
        <div class="famil">
            <label for="nam" class="txt_obsh">Фамилия*</label>
            <input type="text" class="forms4" id="nam" placeholder="Иванова">
        </div>
        <div class="name">
            <label for="nam" class="txt_obsh">Имя*</label>
            <input type="text" class="forms4" id="nam" placeholder="Иванова">
        </div>
        <div class="otch">
            <label for="nam" class="txt_obsh">Отчество*</label>
            <input type="text" class="forms4" id="nam" placeholder="Андреевна">
        </div>
        <div class="telefon">
            <label for="nam" class="txt_obsh">Телефон*</label>
            <input type="text" class="forms4" id="nam" placeholder="+7 (900) 000-12-34">
        </div>
        <div class="email">
            <label for="nam" class="txt_obsh">Электронная почта*</label>
            <input type="text" class="forms4" id="nam" placeholder="ivanova12@mail.ru">
        </div>
        <div class="email2">
            <label for="nam" class="txt_obsh">Повторите адрес электронной почты*</label>
            <input type="text" class="forms4" id="nam" placeholder="ivanova12@mail.ru">
        </div>
        <p class="txt_log">Логин и смена пароля</p>
        <div class="login">
            <label for="nam" class="txt_obsh">Логин</label>
            <input type="text" class="forms4" id="nam" placeholder="Operator1">
        </div>
        <div class="new_pas">
            <label for="nam" class="txt_obsh">Новый пароль</label>
            <input type="text" class="forms4" id="nam" placeholder="********">
        </div>
        <div class="new_pas2">
            <label for="nam" class="txt_obsh">Повторите новый пароль</label>
            <input type="text" class="forms4" id="nam" placeholder="********">
        </div>
        <button type="button" class="knopka">Сохранить изменения</button>
        <button type="button" class="knopka2">Отменить</button>
    </form>


    <div class="container">
        <div class="content">
            <div class="base_bglk"></div>
            <div class="baselk">
                <ul>
                    <li class="base_logo"><a href="#"><img src="../../img/Logo.svg" /></a></li>
                    <li class="base_item1"><a>Выйти</a></li>
                </ul>
                <ul class="base_links">
                    <li class="base_item2">Главная</li>
                    <li class="base_item2">Реестр собраний</li>
                    <li class="base_item2">Помощь</li>
                    <li class="base_item2">Контакты</li>
                </ul>
                <p class="copyright">© 2011-2022 Оператор торговой площадки - ООО «ТендерСтандарт». Все права защищены.</p>
            </div>
        </div>
    </div>


    <div class="table">
        <div class="table_item"></div>
    </div>
    <script src="../../jquery/jquery-3.6.0.js"></script>
    <script href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
