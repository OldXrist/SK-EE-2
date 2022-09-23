<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../style/shared.css">
    <link rel="stylesheet" type="text/css" href="../style/help_3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Обратная связь</title>
</head>
<body>
<div class="menu">
    <ul>
        <li class="logo"><a href="#"><img src="../img/Logo.svg" /></a></li>
        <li class="nav_item"><a href="../index">Главная</a></li>
        <li class="nav_item"><a href="../reestr">Реестр собраний</a></li>
        <li class="nav_item"><a href="../help/help_1">Помощь</a></li>
        <li class="nav_item"><a href="../help/contacts">Контакты</a></li>
        <li class="nav_item"><a href="../login"><button class="nav_btn">Войти</button></a></li>
        <li class="nav_item"><a href="../signin">Зарегистрироваться</a></li>
    </ul>
</div>
<div class="container">
    <div class="content">

        <div class="ogl">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a class="anti_tekst"  href="/index>Главная</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Помощь</li>
                </ol>
            </nav>
        </div>
        <p class="heading">Помощь</p>

        <div class="help_menu">
            <ul>
                <li><a class="anti_tekst"  href="help_1"  >Электронная подпись</a></li>
                <li><a class="anti_tekst"  href="help_2" >Проверка электронной подписи</a></li>
                <li><a class="anti_tekst" href="#"><b>Обратная связь</b></a></li>
                <li><a class="anti_tekst"  href="help_4" >Инструкции по работе с платформой</a></li>
            </ul>
        </div>

        <div class="ep">
            <p>Обратная связь</p>
            <ul>
                <li>Выберите категорию*</li>
                <li class="oneline"><a>Кто будет арбитражным управляющим?</a><img src="../img/down_arrow.svg"></li>
                <li>Тема сообщения*</li>
                <li><input type="text" placeholder="Тема сообщения" class="oneline"/></li>
                <li>Детальное описание*</li>
                <li><input type="text" placeholder="Детальное описание" class="multline"/></li>
            </ul>
            <ul class="inline">
                <li>Телефон*</li>
                <li><input type="text" placeholder="+7 (900) 000-12-34" class="phone"/></li>
            </ul>
            <ul class="inline second">
                <li>Электронная почта*</li>
                <li><input type="text" placeholder="ivanova12@mail.ru"/></li>
            </ul>
            <p>Документы</p>
            <h6>Максимальный объём загружаемого файла 15 Мб. <br>Документ должен быть в формате doc, docx, xls, xlsx, txt, pdf, jpg.</h6>
            <div class="upload">
                <img src="../img/add%201%20(Traced).svg" />
                <label for="file">
                    <u><b>Прикрепить документ</b></u>
                    <input type="file" id="file">
                </label>
            </div>
        </div>

        <div class="capcha">
            <p>Капча</p>
        </div>

        <button class="send_btn">Отправить заявку</button>

        <div class="base_bg"></div>
        <div class="base">
            <ul>
                <li class="base_logo"><a href="#"><img src="../img/Logo.svg" /></a></li>
                <li class="base_item1"><a></a></li>
            </ul>
            <ul class="base_links">
                <li class="base_item2"><a class="footer_txt" href="/index" >Главная</a></li>
                <li class="base_item2"><a class="footer_txt" href="/reestr">Реестр собраний</a></li>
                <li class="base_item2"><a class="footer_txt" href="/help/help_1">Помощь</a></li>
                <li class="base_item2"><a class="footer_txt" href="/help/contacts">Контакты</a></li>
            </ul>
            <p class="copyright">© 2011-2022 Оператор торговой площадки - ООО «ТендерСтандарт». Все права защищены.</p>
        </div>
    </div>
</div>
<script src="../jquery/jquery-3.6.0.js"></script>
<script href="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js" type="text/javascript"></script>
<script href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
<script>
    $(document).ready(function(){
        $.mask.definitions['0'] = "[0-9]";
        $(".phone").mask("+7(000)000-00-00");
    });
</script>
</body>
</html>
