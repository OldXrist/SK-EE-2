<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="../../../style/shared.css">
  <link rel="stylesheet" type="text/css" href="../../../style/z_sobr_uch_2.css">
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
          <li class="breadcrumb-item"><a class="anti_tekst"  href="#">Личный кабинет участника</a></li>
          <li class="breadcrumb-item"><a class="anti_tekst"  href="#">Участие в собраниях</a></li>
          <li class="breadcrumb-item active" aria-current="page">Карточка собрания</li>
        </ol>
      </nav>
    </div>

    <p class="heading">Карточка собрания: 1014-заочное</p>

    <div class="ep">
      <ul class="check fader">
        <li><input type="checkbox"><a class="check_text">Обязуюсь соблюдать требования, указанные в<br>&emsp;&ensp; сообщении о проведении собрания кредиторов*</a></li>
        <li><input type="checkbox"><a class="check_text">Согласен, что в ходе участия в собрании, в случае отсутствия голоса<br>&emsp;&ensp; в бюллетене/ях по истечении установленного времени, такой бюллетень/и считается/ются недействительным/и*</a></li>
        <li><input type="checkbox"><a class="check_text">Согласен на обработку персональных данных, необходимых<br>&emsp;&ensp; для участия и проведения собрания*</a></li>
      </ul>
      <ul class="nofade1">
        <li>Чьи интересы представляете?</li>
        <li class="oneline"><a>Выберите из списка</a></li>
        <img src="../../../img/down_arrow.svg" class="arrw1">
      </ul>
      <ul class="nofade2">
        <li>Статус участника</li>
        <li class="oneline"><a>Выберите из списка</a></li>
        <img src="../../../img/down_arrow.svg" class="arrw2">
      </ul>
      <p class="fader">Паспортные данные</p>
      <ul class="inline_4 fader">
        <li>Фамилия*</li>
        <li><input type="text" placeholder="Иванова" /></li>
      </ul>
      <ul class="inline_4 second_4 fader">
        <li>Имя*</li>
        <li><input type="text" placeholder="Светлана" /></li>
      </ul>
      <ul class="inline_3 fader">
        <li>Отчество*</li>
        <li><input type="text" placeholder="Андреевна" /></li>
      </ul>
      <ul class="inline_4 fader">
        <li>Серия*</li>
        <li><input type="text" placeholder="00 00" class="ser"/></li>
      </ul>
      <ul class="inline_4 second_4 fader">
        <li>Номер*</li>
        <li><input type="text" placeholder="000 000" class="num"/></li>
      </ul>
      <ul class="inline_3 fader">
        <li>Дата выдачи*</li>
        <li><input type="text" placeholder="01.01.0000" class="date"/></li>
      </ul>
      <ul class="fader">
        <li>Кем выдан*</li>
        <li><input type="text" placeholder="Тема сообщения" class="oneline"/></li>
      </ul>
      <ul class="inline_4 fader">
        <li>Телефон*</li>
        <li><input type="text" placeholder="+7 (900) 000-00-00" class="phone"/></li>
      </ul>
      <ul class="inline_4 second_4 fader">
        <li>Электронная почта*</li>
        <li><input type="text" placeholder="ivanova12@mail.ru" /></li>
      </ul>
      <ul class="inline_3 fader">
        <li>Повторите адрес электронной почты*</li>
        <li><input type="text" placeholder="ivanova12@mail.ru" /></li>
      </ul>
      <p class="fader">Прикрепленные документы участника</p>
      <ul class="fader">
        <li class="oneline"><a>Документ, удостоверяющий личность</a><img src="../../../img/cross.svg" class="cross1"></li>
      </ul>
      <ul class="fader">
        <li class="oneline"><a>Документы, подтверждающие полномочия руководителя или иного лица на осуществление действий от имени заявителя</a><img src="../../../img/cross.svg" class="cross2"></li>
        <label for="file"><a class="txtr" href="#">
          Добавить документ</a>
          <input type="file" id="file" />
        </label>
      </ul>
      <ul class="btns fader">
        <li><a class="txtr" href="#"><button class="sign">Подписать заявку электронной подписью</button></a></li>
        <li><a class="txtr" href="#"><button class="save">Сохранить заявку как черновик</button></a></li>
      </ul>
    </div>

    <ul class="int_drop">
      <li class="int1">Не выбрано</li>
      <li class="int2">Представляю свои интересы</li>
      <li class="int3">Участие по доверенности</li>
    </ul>

    <ul class="stat_drop">
      <li class="stat1">Не выбрано</li>
      <li class="stat2">Конкурсный кредитор</li>
      <li class="stat3">Уполномоченные органы, требования которых включены в реестр</li>
      <li class="stat4">Представитель работников должника</li>
      <li class="stat5">Представитель учредителей (участников) должника</li>
      <li class="stat6">Представитель собственника имущества должника - унитарного предприятия</li>
      <li class="stat7">Представитель СРО</li>
      <li class="stat8">Представитель контролирующего органа </li>
      <li class="stat9">Другое</li>
    </ul>

    <div class="base_bg"></div>
    <div class="base">
      <ul>
        <li class="base_logo"><a href="#"><img src="../../../img/Logo.svg" /></a></li>
        <li class="base_item1"><a>Выйти</a></li>
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
<script>
  setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
  }, 1000);
</script>
<script src="../../../jquery/jquery-3.6.0.js"></script>
<script href="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js" type="text/javascript"></script>
<script href="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
<script href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
<script>
  $(document).ready(function(){
    $.mask.definitions['0'] = "[0-9]";
    $(".phone").mask("+7(000)000-00-00");
  });
  $(document).ready(function(){
    $.mask.definitions['0'] = "[0-9]";
    $(".ser").mask("00 00");
  });
  $(document).ready(function(){
    $.mask.definitions['0'] = "[0-9]";
    $(".num").mask("000 000");
  });
  $(document).ready(function(){
    $.mask.definitions['0'] = "[0-3]";
    $.mask.definitions['1'] = "[0-9]";
    $.mask.definitions['2'] = "[0-9]";
    $(".date").mask("01.01.2222");
  });
  $(document).ready(function(){
    $(".int_drop").hide()
  });
  $(document).ready(function(){
    $(".arrw1").click(function(){
      $(".int_drop").slideDown()
    }).click(function(){
      $(".fader").animate({
        opacity: "0.3"
      });
    });
  });
  $(document).ready(function(){
    $(".arrw1").click(function(){
      $(".int_drop").slideDown()
    }).click(function(){
      $(".ep").animate({
        backgroundColor: "#cff7fd"
      });
    });
  });
  $(document).ready(function(){
    $(".int_drop").mouseleave(function(){
      $(".fader").animate({
        opacity: "1"
      });
    }).click(function(){
      $(".fader").animate({
        opacity: "1"
      });
    }).mouseleave(function(){
      $(".int_drop").slideUp()
    }).click(function(){
      $(".int_drop").slideUp()
    });
  });
  $(document).ready(function() {
    $(".int_drop").mouseleave(function () {
      $(".ep").animate({
        backgroundColor: "#BAF3FC"
      });
    }).click(function () {
      $(".ep").animate({
        backgroundColor: "#BAF3FC"
      });
    });
  });
  $(document).ready(function (){
    $(".int1").click(function(){
      $(".nofade1 li a").text("Не выбрано")
    });
  });
  $(document).ready(function (){
    $(".int2").click(function(){
      $(".nofade1 li a").text("Представляю свои интересы")
    });
  });
  $(document).ready(function (){
    $(".int3").click(function(){
      $(".nofade1 li a").text("Участие по доверенности")
    });
  });
  $(document).ready(function(){
    $(".stat_drop").hide()
  });
  $(document).ready(function(){
    $(".arrw2").click(function(){
      $(".stat_drop").slideDown()
    }).click(function(){
      $(".fader").animate({
        opacity: "0.3"
      });
    });
  });
  $(document).ready(function(){
    $(".arrw2").click(function(){
      $(".stat_drop").slideDown()
    }).click(function(){
      $(".ep").animate({
        backgroundColor: "#cff7fd"
      });
    });
  });
  $(document).ready(function(){
    $(".stat_drop").mouseleave(function(){
      $(".fader").animate({
        opacity: "1"
      });
    }).click(function(){
      $(".fader").animate({
        opacity: "1"
      });
    }).mouseleave(function(){
      $(".stat_drop").slideUp()
    }).click(function(){
      $(".stat_drop").slideUp()
    });
  });
  $(document).ready(function() {
    $(".stat_drop").mouseleave(function () {
      $(".ep").animate({
        backgroundColor: "#BAF3FC"
      });
    }).click(function () {
      $(".ep").animate({
        backgroundColor: "#BAF3FC"
      });
    });
  });
  $(document).ready(function (){
    $(".stat1").click(function(){
      $(".nofade2 li a").text("Не выбрано")
    });
  });
  $(document).ready(function (){
    $(".stat2").click(function(){
      $(".nofade2 li a").text("Конкурсный кредитор")
    });
  });
  $(document).ready(function (){
    $(".stat3").click(function(){
      $(".nofade2 li a").text("Уполномоченные органы, требования которых включены в реестр")
    });
  });
  $(document).ready(function (){
    $(".stat4").click(function(){
      $(".nofade2 li a").text("Представитель работников должника")
    });
  });
  $(document).ready(function (){
    $(".stat5").click(function(){
      $(".nofade2 li a").text("Представитель учредителей (участников) должника")
    });
  });
  $(document).ready(function (){
    $(".stat6").click(function(){
      $(".nofade2 li a").text("Представитель собственника имущества должника - унитарного предприятия")
    });
  });
  $(document).ready(function (){
    $(".stat7").click(function(){
      $(".nofade2 li a").text("Представитель СРО")
    });
  });
  $(document).ready(function (){
    $(".stat8").click(function(){
      $(".nofade2 li a").text("Представитель контролирующего органа ")
    });
  });
  $(document).ready(function (){
    $(".stat9").click(function(){
      $(".nofade2 li a").text("Другое")
    });
  });
</script>
</body>
</html>