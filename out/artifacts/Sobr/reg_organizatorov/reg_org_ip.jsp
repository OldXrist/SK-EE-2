<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../style/shared.css">
    <link rel="stylesheet" type="text/css" href="../style/uchql.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>SK_JS</title>
</head>
<body>
<div class="menu">
    <ul>
        <li class="logo"><a href="#"><img src="../img/Logo.svg" /></a></li>
        <li class="nav_item"><a href="/index">Главная</a></li>
        <li class="nav_item"><a href="../reestr">Реестр собраний</a></li>
        <li class="nav_item"><a href="/help/help_1">Помощь</a></li>
        <li class="nav_item"><a href="/help/contacts">Контакты</a></li>
        <li class="nav_item"><a href="../login"><button class="nav_btn">Войти</button></a></li>
        <li class="nav_item"><a href="../signin">Зарегистрироваться</a></li>
    </ul>
</div>

<div class="container">
    <div class="ogl">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a class="anti_tekst"  href="#">Главная</a></li>
                <li class="breadcrumb-item"><a class="anti_tekst"  href="#">Регистрация нового пользователя</a></li>
                <li class="breadcrumb-item active" aria-current="page">Oрганизатора собрания (Индивидуальный предприниматель)</li>
            </ol>
        </nav>
    </div>

    <div class="viewport">
        <div class="login_container">
            <div class="login_block">
                <p class="reg_uch" id="ogl">Регистрация организатора ИП </p>

                <div class="reg_uch_txt">Для регистрации на электронной площадке Вам следует заполнить приведённую ниже форму. По результатам рассмотрения заявления Вам будет направлено уведомление на указанный в форме адрес электронной почты.
                    <p>
                    </p>

                    Внимание! Перед регистрацией Вам следует убедиться, что у вас настроены средства ЭП в соответствии с руководством. Вы регистрируетесь как участник собрания (Индивидуальный предприниматель). </div>



                <p class="zaiav">Заявления</p>

                <div class="gal">
                    <div class="form-check">
                        <input class="kub1" type="checkbox" value="" id="check1">
                        <label class="gal_txt1" for="check1">
                            Прошу зарегистрировать меня в качестве участника собрания кредиторов*
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="kub2" type="checkbox" value="" id="check2">
                        <label class="gal_txt2" for="check2">
                            Настоящим сообщаю об ознакомлении и согласии с правилами, содержащимися в Регламенте электронной площадки*
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="kub3" type="checkbox" value="" id="check3">
                        <label class="gal_txt3" for="check3">
                            Настоящим подтверждаю свое согласие на обработку персональных данных необходимых для регистрации на электронной площадке*                </label>
                    </div>
                </div>

                <form class="table2">

                    <p class="inf_ob_uch">Информация об участнике собрания</p>

                    <div class="unn2">
                        <label for="inn" class="txt_obsh">ИНН*</label>
                        <input type="text" class="forms4" id="inn" placeholder="000000000000">
                    </div>

                    <div class="snils">
                        <label for="snils" class="txt_obsh">СНИЛС*</label>
                        <input type="text" class="forms4" id="snils" placeholder="000 000 000 00">
                    </div>

                    <div class="codorg2">
                        <label for="ogrnip" class="txt_obsh">Код ОГРН*</label>
                        <input type="text" class="forms5" id="ogrnip" placeholder="000000000000000">
                    </div>

                    <div class="famil">
                        <label for="famil" class="txt_obsh">Фамилия*</label>
                        <input type="text" class="forms4" id="famil" placeholder="Фамилия">
                    </div>

                    <div class="name">
                        <label for="name" class="txt_obsh">Имя*</label>
                        <input type="text" class="forms4" id="name" placeholder="Имя">
                    </div>

                    <div class="otch">
                        <label for="otch" class="txt_obsh">Отчество*</label>
                        <input type="text" class="forms5" id="otch" placeholder="Отчество">
                    </div>

                    <div class="pcht_adres2">
                        <label for="pocht_adres" class="txt_obsh">Почтовый адрес*</label>
                        <input type="text" class="forms2" id="pocht_adres" placeholder="Почтовый адрес">
                    </div>
                    <div class="telefon2">
                        <label for="phone" class="txt_obsh">Телефон*</label>
                        <input type="text" class="forms" id="phone" placeholder="+7 (900) 000-12-34">
                    </div>

                    <div class="email2">
                        <label for="email" class="txt_obsh">Электронная почта*</label>
                        <input type="email" class="forms" id="email" placeholder="Электронная почта">
                    </div>

                    <div class="email2_2">
                        <label for="email_2" class="txt_obsh">Повторите адрес электронной почты*</label>
                        <input type="email" class="forms3" id="email_2" placeholder="Повторите адрес электронной почты">
                    </div>

                    <p class="pass">Паспортные данные </p>


                    <div class="seria">
                        <label for="ser" class="txt_obsh">Серия*</label>
                        <input type="text" class="forms4" id="ser" placeholder="00 00">
                    </div>
                    <div class="nomer">
                        <label for="num" class="txt_obsh">Номер*</label>
                        <input type="text" class="forms4" id="num" placeholder="000 000">
                    </div>
                    <div class="data_vidochi">
                        <label for="vidacha" class="txt_obsh">Дата выдачи*</label>
                        <input type="text" class="forms4" id="vidacha" placeholder="01.01.0000">
                    </div>


                    <div class="vidan">
                        <label for="kem_vudan" class="txt_obsh">Кем выдан*</label>
                        <input type="text" class="forms2" id="kem_vudan" placeholder="Кем выдан">
                    </div>

                    <label for="file" class="prikrepit-dokument2 pointer">
                        Добавить документ
                        <input type="file" id="file"/>
                    </label>

                    <div>
                        <img src="../img/add%201%20(Traced).svg" class="doks2_2"/>


                        <button type="button" class="knopka2" onclick="Validate_reg()">Сохранить и подтвердить e-mail</button>'
                    </div>
                    <p class="doks_2">Документы</p>

                    <div class="txt_2">Перечень документов, которые необходимо приложить
                        к заявке, указан в Регламенте работы сервиса
                        <p></p>
                        Максимальный объём загружаемого файла 15 Мб. Документ должен быть в формате pdf или jpg
                    </div>
                </form>
            </div>


            <div class="table">
                <div class="table_item"></div>
            </div>

            <div class="container">
                <div class="content">
                    <div class="base_bg2"></div>
                    <div class="base2">
                        <ul>
                            <li class="base_logo"><a href="#"><img src="../img/Logo.svg" /></a></li>
                            <li class="base_item1"><a></a></li>
                        </ul>
                        <ul class="base_links">
                            <li class="base_item2"><a class="footer_txt" href="../index" >Главная</a></li>
                            <li class="base_item2"><a class="footer_txt" href="../reestr">Реестр собраний</a></li>
                            <li class="base_item2"><a class="footer_txt" href="../help/help_1">Помощь</a></li>
                            <li class="base_item2"><a class="footer_txt" href="../help/contacts">Контакты</a></li>
                        </ul>
                        <p class="copyright">© 2011-2022 Оператор торговой площадки - ООО «ТендерСтандарт». Все права защищены.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="../jquery/jquery-3.6.0.js"></script>
<script src="../scripts/validate_reg.js"></script>
<script href="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js" type="text/javascript"></script>
<script href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
<script>
    $(document).ready(function() {
        $.mask.definitions['0'] = "[0-9]";
        $("#inn").mask("000000000000");
    });

    $(document).ready(function() {
        $.mask.definitions['0'] = "[0-9]";
        $("#ogrnip").mask("000000000000000");
    });

    $(document).ready(function() {
        $.mask.definitions['0'] = "[0-9]";
        $("#phone").mask("+7(000)-000-00-00");
    });

    $(document).ready(function() {
        $.mask.definitions['0'] = "[0-9]";
        $("#ser").mask("00 00");
    });

    $(document).ready(function() {
        $.mask.definitions['0'] = "[0-9]";
        $("#num").mask("000 000");
    });

    $(document).ready(function() {
        $.mask.definitions['0'] = "[0-9]";
        $("#vidacha").mask("00.00.0000");
    });

    $(document).ready(function() {
        $.mask.definitions['0'] = "[0-9]";
        $("#snils").mask("000 000 000 00");
    });
</script>
</body>
</html>