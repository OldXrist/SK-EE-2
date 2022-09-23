<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="../style/shared.css">
  <link rel="stylesheet" type="text/css" href="../style/help_1.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  <title>Электронная подпись</title>
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
          <li class="breadcrumb-item"><a class="anti_tekst"  href="/index">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Помощь</li>
        </ol>
      </nav>
    </div>

    <p class="heading">Помощь</p>

    <div class="help_menu">
      <ul>
        <li><a><b>Электронная подпись</b></a></li>
        <li><a class="anti_tekst"  href="help_2">Проверка электронной подписи</a></li>
        <li><a class="anti_tekst"  href="help_3">Обратная связь</a></li>
        <li><a class="anti_tekst"  href="help_4">Инструкции по работе с платформой</a></li>
      </ul>
    </div>

    <div class="ep">
      <p>Электронная подпись</p>
      <h6 class="thin_text">Для участия в электронных торгах участник должен иметь электронную подпись (ЭП). ЭП — это аналог собственноручной подписи, придающий юридическую значимость электронным документам.</h6>
    </div>

    <div class="list">
      <p>Список Авторизованных Удостоверяющих центров</p>
      <ul>
        <li class="thin_text">Для физических лиц, самозанятых и сотрудников ЮЛ, действующих по доверенности:</li>
        <li class="link"><a>Удостоверяющий Центр ООО «Такском»</a></li>
        <li class="link"><a>Удостоверяющий Центр ООО «АйтиКом»</a></li>
      </ul>
    </div>

    <ul class="right_col">
      <li class="thin_text">Для Индивидуальных предпринимателей  и Первых лиц ЮЛ (ООО, АО, ЗАО и т.д.), имеющих право работать без доверенности:</li>
      <li class="link"><a>Федеральная Налоговая Служба (Удостоверяющий центр ФНС России)</a></li>
    </ul>

    <div class="ep_settings">
      <p>Настройка Электронной Подписи</p>
      <h6 class="p_1">Для корректной работы с ЭП необходимо установить на свой компьютер модуль <u><b>Capicom</b></u>, или если у Вас 64-х битная система то <u><b>ЗДЕСЬ</b></u></h6>
      <h6 class="p_2">Так же потребуется установить программу КриптоПро 3.6 (и выше),  и ЭП, приобретенные пользователем в авторизованном удостоверяющем центре (УЦ) - <u><b>Инструкция</b></u></h6>
      <h6 class="p_3">Настроить интернет-браузер согласно <u><b>инструкции</b></u></h6>
      <h6 class="p_4">! Загружая или устанавливая на своем устройстве данную библиотеку, Пользователь соглашается с полным и безоговорочным принятием условий что ЭТП ТендерСтандарт не несёт ответственность за настоящее Соглашение.</h6>
    </div>

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
</body>
</html>
