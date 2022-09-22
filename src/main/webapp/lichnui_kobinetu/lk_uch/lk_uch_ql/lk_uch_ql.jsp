<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../../style/lk.css">
    <link rel="stylesheet" type="text/css" href="../../../style/lk_ql.css">
    <link rel="stylesheet" type="text/css" href="../../../style/shared.css">
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
                <li class="breadcrumb-item"><a href="lk2_uch_ql"><p class="org_sobr">Участие в собраниях</p></a></li>
                <li class="breadcrumb-item"><a href="lk3_uch_ql"><p class="chern_zaiav">Черновики заявок</p></a></li>
            </ol>
        </nav>

        <img class="logout-1-traced"
             src="https://static.overlay-tech.com/assets/3373d3e0-dfbb-4718-9044-d75c865a7c23.svg"/>
        <p class="login">Светлана И.</p>
        <div class="poloska"></div>

    </form>

    <form class="table3">

        <p class="ld2">Личные данные</p>

        <div class="poln_naim">
            <label for="fam" class="txt_obsh">Полное наименование*</label>
            <input type="text" class="forms4" id="fam" placeholder="Полное наименование">
        </div>
        <div class="qr_adres">
            <label for="fam1" class="txt_obsh">Юридический адрес*</label>
            <input type="text" class="forms4" id="fam1" placeholder="Юридический адрес">
        </div>
        <div class="pocht_adres2">
            <label for="fam2" class="txt_obsh">Почтовый адрес*</label>
            <input type="text" class="forms4" id="fam2" placeholder="111116. г. Москва, а/я №87">
        </div>
        <div class="unn3">
            <label for="fam3" class="txt_obsh">ИНН*</label>
            <input type="text" class="forms4" id="fam3" placeholder="00000000">
        </div>
        <div class="ogrn3">
            <label for="fam4" class="txt_obsh">Код ОГРН*</label>
            <input type="text" class="forms4" id="fam4" placeholder="000 000 000 00">
        </div>
        <div class="telefon2">
            <label for="fam41" class="txt_obsh">Телефон*</label>
            <input type="text" class="forms4" id="fam41" placeholder="+7 (900) 000-12-34">
        </div>
        <div class="email2">
            <label for="fam5" class="txt_obsh">Электронная почта*</label>
            <input type="text" class="forms4" id="fam5" placeholder="ivanova12@mail.ru">
        </div>

        <p class="izm_pas2">Изменить пароль</p>

        <div class="new_pas_2">
            <label for="fam62" class="txt_obsh">Новый пароль</label>
            <input type="text" class="forms4" id="fam62" placeholder="********">
        </div>
        <div class="new_pas_22">
            <label for="fam6" class="txt_obsh">Повторите новый пароль</label>
            <input type="text" class="forms4" id="fam6" placeholder="********">
        </div>




        <p class="doks2">Документы</p>

        <div class="doks_txt2">Перечень документов, которые необходимо приложить к заявке, указан в Регламенте работы сервиса
            <p></p>
            Максимальный объём загружаемого файла 15 Мб. Документ должен быть в формате pdf или jpg
        </div>

        <img src="../../../img/add%201%20(Traced).svg" class="doks_img2"/>
        <p class="doks_img_txt">Прикрепить документ</p>
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
