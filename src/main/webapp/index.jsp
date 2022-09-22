<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="style/main.css">
  <link rel="stylesheet" type="text/css" href="style/shared.css">
  <link rel="stylesheet" type="text/css" href="bootstrap-5.2.0/dist/css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="bootstrap-5.2.0/scss/_images.scss">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  <title>ТендерСтандарт</title>
</head>

<body>
<div class="menu">
  <ul>
    <li class="logo"><a href="help/contacts.html"><img src="img/Logo.svg" /></a></li>
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
    <div class="login_container">
      <div class="login_block">
        <h2>Проводим собрания кредиторов в электронном формате</h2>
        <p class="login_text">Организация собраний кредиторов в Online и Offline режимах. Быстрый и удобный способ проведения собрания без лишних затрат</p>
        <button class="signin"><a href="login">Войти</a></button>
        <a class="signup" href="signin">Зарегистрироваться</a>
      </div>
      <div class="info_block">
        <div class="info_item_1">
          <p class="color_text">01 /</p>
          <p class="p_heading">Тех. поддержка</p>
          <p class="main_text">Наша поддержка поможет Вам настроить рабочее место,  а также проконсультирует о порядке проведения собрания на ЭТП</p>
        </div>
        <div class="info_item_2">
          <p class="color_text">02 /</p>
          <p class="p_heading">Автоматизация</p>
          <p class="main_text">Подсчет голосов кредиторов происходит автоматически, также составляются протоколы и рассылаются уведомления участникам собрания</p>
        </div>
        <div class="info_item_3">
          <p class="color_text">03 /</p>
          <p class="p_heading">Видеосвязь и чат</p>
          <p class="main_text">Мы даем возможность провести собрания кредиторов с использованием видеосвязи и чата как для организаторов, так и для участников собрания</p>
        </div>
        <div class="info_item_4">
          <p class="color_text">04 /</p>
          <p class="p_heading">Доступ 24/7</p>
          <p class="main_text">Вся информация о проведенных собраниях хранится в личном кабинете. Вам предоставляется круглосуточный доступ к данной информации</p>
        </div>
      </div>
    </div>

    <p class="heading">Реестр собраний</p>

    <div class="stats">
      <ul>
        <li class="stats_head">Общая статистика</li>
        <li class="stats_item">Участников: <b>0</b></li>
        <li class="stats_item">Организаторов: <b>0</b></li>
        <li class="stats_item">Проведено собраний: <b>0</b></li>
        <li class="stats_item"><a  class="stats_btn"><b>Найти</b><img src="img/lupa.svg" /></a></li>
      </ul>
    </div>

    <form class="dropd">
      <div>
        <p class="drop_h">Поиск собрания</p>
        <img src="img/cross.png" class="cross" />
      </div>
      <ul class="form_gr1">
        <li class="form_text">Номер собрания</li>
        <li><input type="text" placeholder="Номер собрания" class="placeh" /></li>
      </ul>
      <ul class="form_gr2">
        <li class="form_text">Должник</li>
        <li><input type="text" placeholder="Должник" class="placeh"/></li>
      </ul>
      <ul class="form_3">
        <li class="form_text">Организатор собрания (Арбитражный управляющий или кредитор)</li>
        <li><input type="text" placeholder="Организатор собрания (Арбитражный управляющий или кредитор)" class="placeh" /></li>
      </ul>
      <ul class="form_gr3">
        <li class="form_text">Даты приема заявок</li>
        <li class="date_f"><a>с</a><input type="text" placeholder="00.00.0000" class="placeh" /></li>
        <li class="date_f"><a>по</a><input type="text" placeholder="00.00.0000" class="placeh" /></li>
      </ul>
      <ul class="form_gr4 status">
        <li class="form_text">Статус</li>
        <li><input type="text" placeholder="Не выбрано" class="placeh mask_none" /><img src="img/down_arrow.svg" class="drop_arrw1"/></li>
        <ul class="form_drop1">
          <li class="form1">Не выбрано</li>
          <li class="form2">Объявлено</li>
          <li class="form3">Прием заявок</li>
          <li class="form4">Прием заявок завершен</li>
          <li class="form5">Ожидание начала собрания</li>
          <li class="form6">В стадии проведения</li>
          <li class="form7">Подведение итогов</li>
          <li class="form8">Завершено</li>
          <li class="form9">Отменено</li>
          <li class="form10">Не состоялось</li>
          <li class="form11">Черновик</li>
          <li class="form12">Прием бюллетеней</li>
          <li class="form13">Прием бюллетеней завершен</li>
          <li class="form14">Приостановлено</li>
        </ul>
      </ul>
      <ul class="form_gr4 type">
        <li class="form_text">Тип собрания</li>
        <li><input type="text" placeholder="Не выбрано" class="placeh" /><img src="img/down_arrow.svg" class="drop_arrw2"/></li>
        <ul class="form_drop2">
          <li class="form21">Не выбрано</li>
          <li class="form22">Очное</li>
          <li class="form23">Заочное</li>
        </ul>
      </ul>
      <input type="submit" value="Поиск" class="srch_btn" />
    </form>

    <p class="sort">Сортировать по <b class="sort_val">номеру</b><img src="img/down_arrow.svg" class="arrw"/></p>
    <ul class="sort_drop">
      <li class="sort1">номеру</li>
      <li class="sort2">дате добавления</li>
      <li class="sort3">статусу</li>
    </ul>

    <div class="fade"></div>
    <div class="table">
      <div class="table_item">
        <h3 class="table_h">1013 Очное</h3>
        <ul class="table_data">
          <li class="thin_text">Организатор</li>
          <li>ООО «Право-Торг»</li>
        </ul>
        <ul class="table_data">
          <li class="thin_text">Должник</li>
          <li>Бальдяева Юлия Александровна</li>
        </ul>
        <ul class="table_data">
          <li class="thin_text">Статус</li>
          <li>Отменено Органзатором</li>
        </ul>
        <div class="vl"></div>
        <div class="date">
          <ul class="datetime">
            <li class="thin_text">Дата проведения собрания</li>
            <li>29.04.2022 14:00</li>
          </ul>
          <ul class="datetime">
            <li class="thin_text">Даты приема заявок</li>
            <li>14.04.2022 - 28.04.2022 </li>
          </ul>
        </div>
      </div>
      <div class="table_item">
        <h3 class="table_h">1013 Очное</h3>
        <ul class="table_data">
          <li class="thin_text">Организатор</li>
          <li>ООО «Право-Торг»</li>
        </ul>
        <ul class="table_data">
          <li class="thin_text">Должник</li>
          <li>Бальдяева Юлия Александровна</li>
        </ul>
        <ul class="table_data">
          <li class="thin_text">Статус</li>
          <li>Отменено Органзатором</li>
        </ul>
        <div class="vl"></div>
        <div class="date">
          <ul class="datetime">
            <li class="thin_text">Дата проведения собрания</li>
            <li>29.04.2022 14:00</li>
          </ul>
          <ul class="datetime">
            <li class="thin_text">Даты приема заявок</li>
            <li>14.04.2022 - 28.04.2022 </li>
          </ul>
        </div>
      </div>
      <div class="table_item">
        <h3 class="table_h">1013 Очное</h3>
        <ul class="table_data">
          <li class="thin_text">Организатор</li>
          <li>ООО «Право-Торг»</li>
        </ul>
        <ul class="table_data">
          <li class="thin_text">Должник</li>
          <li>Бальдяева Юлия Александровна</li>
        </ul>
        <ul class="table_data">
          <li class="thin_text">Статус</li>
          <li>Отменено Органзатором</li>
        </ul>
        <div class="vl"></div>
        <div class="date">
          <ul class="datetime">
            <li class="thin_text">Дата проведения собрания</li>
            <li>29.04.2022 14:00</li>
          </ul>
          <ul class="datetime">
            <li class="thin_text">Даты приема заявок</li>
            <li>14.04.2022 - 28.04.2022 </li>
          </ul>
        </div>
      </div>
      <div class="table_item">
        <h3 class="table_h">1013 Очное</h3>
        <ul class="table_data">
          <li class="thin_text">Организатор</li>
          <li>ООО «Право-Торг»</li>
        </ul>
        <ul class="table_data">
          <li class="thin_text">Должник</li>
          <li>Бальдяева Юлия Александровна</li>
        </ul>
        <ul class="table_data">
          <li class="thin_text">Статус</li>
          <li>Отменено Органзатором</li>
        </ul>
        <div class="vl"></div>
        <div class="date">
          <ul class="datetime">
            <li class="thin_text">Дата проведения собрания</li>
            <li>29.04.2022 14:00</li>
          </ul>
          <ul class="datetime">
            <li class="thin_text">Даты приема заявок</li>
            <li>14.04.2022 - 28.04.2022 </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="base_bg"></div>
    <div class="base">
      <ul>
        <li class="base_logo"><a href="#"><img src="img/Logo.svg" /></a></li>
        <li class="base_item1"><a href="#"></a></li>
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
<script src="scripts/index.js"></script>
<script>
  $(document).ready(function(){
    $(".copyright").click(function(){
      $(".status li input").val("Прием заявок")
    });
  });
</script>
</body>
</html>

