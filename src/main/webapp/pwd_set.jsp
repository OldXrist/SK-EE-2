<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="style/shared.css">
  <link rel="stylesheet" type="text/css" href="style/pwd_change.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  <title>Установка пароля</title>
</head>
<body>
<div class="menu">
  <ul>
    <li class="logo"><a href="#"><img src="img/Logo.svg" /></a></li>
    <li class="nav_item"><a href="index">Главная</a></li>
    <li class="nav_item"><a href="reestr">Реестр собраний</a></li>
    <li class="nav_item"><a href="help/help_1">Помощь</a></li>
    <li class="nav_item"><a href="help/contacts">Контакты</a></li>
    <li class="nav_item"><a href="login"> <button class="nav_btn">Войти</button></a></li>
    <li class="nav_item"><a href="signin">Зарегистрироваться</a></li>
  </ul>
</div>
<div class="container">
  <div class="content">

    <div class="viewport"></div>
    <h2>Установите пароль для личного кабинета</h2>
    <div class="pwd_block">
      <ul>
        <li class="text">Придумайте пароль</li>
        <li><input type="password" placeholder="Пароль" class="form_f"/></li>
        <li class="text">Повторите пароль</li>
        <li><input type="password" placeholder="Пароль" class="form_f"/></li>
        <li><a href="login.html"><input type="submit" value="Сохранить и подписать заявку ЭП" class="sgn_btn"/></a></li>
      </ul>
    </div>

    <div class="base_bg"></div>
    <div class="base">
      <ul>
        <li class="base_logo"><a href="#"><img src="img/Logo.svg" /></a></li>
        <li class="base_item1"><a></a></li>
      </ul>
      <ul class="base_links">
        <li class="base_item2"><a class="footer_txt" href="index" >Главная</a></li>
        <li class="base_item2"><a class="footer_txt" href="reestr">Реестр собраний</a></li>
        <li class="base_item2"><a class="footer_txt" href="help/help_1">Помощь</a></li>
        <li class="base_item2"><a class="footer_txt" href="help/contacts">Контакты</a></li>
      </ul>
      <p class="copyright">© 2011-2022 Оператор торговой площадки - ООО «ТендерСтандарт». Все права защищены.</p>
    </div>
  </div>
</div>
<script src="jquery/jquery-3.6.0.js"></script>
<script href="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js" type="text/javascript"></script>
<script href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
