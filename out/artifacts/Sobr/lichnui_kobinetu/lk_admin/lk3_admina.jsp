<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../style/lk_admin.css">
    <link rel="stylesheet" type="text/css" href="../../style/lk3_admin.css">
    <link rel="stylesheet" type="text/css" href="../../style/shared.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Администратор</title>
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

    <form class="table_min">

        <img class="logout-1-traced"
             src="https://static.overlay-tech.com/assets/3373d3e0-dfbb-4718-9044-d75c865a7c23.svg"/>
        <p class="admin">Администратор</p>
        <div class="palka2"></div>
        <p class="licd">Личные данные</p>
        <p  class="shabl"><b>Шаблоны документов</b></p>
        <p class="sistem_obsh">Системные настройки</p>

    </form>


    <form class="table_mega">

        <p class="sistemn">Системные настройки</p>
        <div class="vvod_email">
            <label for="vubr_shabl" class="txt_obsh">Отправить тестовое сообщение</label>
            <input type="email" class="forms" id="vubr_shabl" placeholder="Введите Email">
        </div>
        <button class="knopka3">Отправить</button>
        <div class="okno1">
            <label for="vubr_shabl" class="txt_obsh">Наименование ключа (issuer)*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="ФНС">
        </div>
        <div class="okno2">
            <label for="vubr_shabl" class="txt_obsh">Почта отправителя*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="Почта">
        </div>
        <div class="okno3">
            <label for="vubr_shabl" class="txt_obsh">Smtp Хост*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="Smtp Хост">
        </div>
        <div class="okno4">
            <label for="vubr_shabl" class="txt_obsh">Smtp Порт*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="Smtp Порт">
        </div>
        <div class="okno5">
            <label for="vubr_shabl" class="txt_obsh">Smtp Username*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="Smtp Username">
        </div>
        <div class="okno6">
            <label for="vubr_shabl" class="txt_obsh">Smtp Password*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="Smtp Password">
        </div>
        <div class="okno7">
            <label for="vubr_shabl" class="txt_obsh">Максимальное количество попыток отправления сообщения*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="2">
        </div>
        <div class="okno8">
            <label for="vubr_shabl" class="txt_obsh">URL*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="адрес сайта">
        </div>
        <div class="okno9">
            <label for="vubr_shabl" class="txt_obsh">ForbiddenOids*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="тензор">
        </div>
        <div class="okno10">
            <label for="vubr_shabl" class="txt_obsh">Разрешенные сертификаты*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="Разрешенные сертификаты">
        </div>
        <div class="okno11">
            <label for="vubr_shabl" class="txt_obsh">Телефон в шапке*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="Телефон">
        </div>
        <div class="okno12">
            <label for="vubr_shabl" class="txt_obsh">Companies*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="14587, 45896">
        </div>
        <div class="okno13">
            <label for="vubr_shabl" class="txt_obsh">Имя сайта*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="ТендерСтандарт">
        </div>
        <div class="okno14">
            <label for="vubr_shabl" class="txt_obsh">Тема письма для восстановления пароля*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="Восстановление пароля">
        </div>
        <div class="gal1">
            <input class="kub1" type="checkbox" value="" id="flexCheckDefault">
            <label class="txt_obsh" for="flexCheckDefault">
                Флажок по умолчанию
            </label>
        </div>
        <div class="gal2">
            <input class="kub2" type="checkbox" value="" id="flexCheckDefault">
            <label class="txt_obsh" for="flexCheckDefault">
                Флажок по умолчанию
            </label>
        </div>
        <div class="okno15">
            <label for="vubr_shabl" class="txt_obsh">Имя сайта*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="ООО “ТендерСтандарт”">
        </div>
        <div class="okno16">
            <label for="vubr_shabl" class="txt_obsh">Минимальный период предоставления заявок на участие (рабочих дней)*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="15">
        </div>
        <div class="okno17">
            <label for="vubr_shabl" class="txt_obsh">Режим работы операторов*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="09.00-18.00">
        </div>
        <div class="okno18">
            <label for="vubr_shabl" class="txt_obsh">Footer*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="Интеграция с редактором">
        </div>
        <div class="okno19">
            <label for="vubr_shabl" class="txt_obsh">Документы*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="64787, 45896">
        </div>
        <div class="okno20">
            <label for="vubr_shabl" class="txt_obsh">Ограничение мегабайт для файлов при регистрации*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="10">
        </div>
        <div class="okno21">
            <label for="vubr_shabl" class="txt_obsh">Ограничение мегабайт для файлов при подаче заявки*</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="10">
        </div>
        <div class="okno22">
            <label for="vubr_shabl" class="txt_obsh">Интеграция с ЕФРСБ</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="Интеграция с редактором">
        </div>
        <div class="okno23">
            <label for="vubr_shabl" class="txt_obsh">Интеграция с веб-сервисом</label>
            <input type="text" class="forms2" id="vubr_shabl" placeholder="Интеграция с редактором">
        </div>
        <div class="okno24">
            <label for="vubr_shabl" class="txt_obsh">Логин от веб-сервиса</label>
            <input type="text" class="forms4" id="vubr_shabl" placeholder="Логин">
        </div>
        <div class="okno25">
            <label for="vubr_shabl" class="txt_obsh">Пароль от веб-сервиса</label>
            <input type="text" class="forms4" id="vubr_shabl" placeholder="Пароль">
        </div>
        <button class="knopka5">Сохранить изменения</button>
        <button class="knopka4">Отменить</button>


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
