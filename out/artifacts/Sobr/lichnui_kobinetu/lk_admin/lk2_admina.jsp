<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="../../style/lk_admin.css">
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

  <form class="table_mal">

    <p class="shabl_doks">Шаблоны документов</p>
    <div class="vubr_shabl">
      <label for="vubr_shabl" class="txt_obsh">Выберите шаблон</label>
      <input type="text" class="forms2" id="vubr_shabl" placeholder="не выбрано">
    </div>

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