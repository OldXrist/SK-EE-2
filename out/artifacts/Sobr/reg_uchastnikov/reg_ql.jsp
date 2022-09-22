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
                <li class="breadcrumb-item"><a class="anti_tekst" href="../index">Главная</a></li>
                <li class="breadcrumb-item"><a class="anti_tekst" href="#">Регистрация нового пользователя</a></li>
                <li class="breadcrumb-item active" aria-current="page">Участник собрания (Юридическое лицо)</li>
            </ol>
        </nav>
    </div>



    <p class="reg_uch" id="ogl">Регистрация участника ЮЛ</p>


    <div class="reg_uch_txt">Для регистрации на электронной площадке Вам следует заполнить приведённую ниже форму. По результатам рассмотрения заявления Вам будет направлено уведомление на указанный в форме адрес электронной почты.
        <p>
        </p>

        Внимание! Перед регистрацией Вам следует убедиться, что у вас настроены средства ЭП в соответствии с руководством. Вы регистрируетесь как участник собрания (Юридическое лицо). </div>



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

    <form class="table1">

        <p class="inf_ob_uch">Информация об участнике собрания</p>

        <div class="unn">
            <label for="inn" class="txt_obsh">ИНН*</label>
            <input type="text" class="forms" id="inn" placeholder="000000000000000" onfocus="White(this.id)">
        </div>
        <div class="codorg">
            <label for="ogrn" class="txt_obsh">Код ОГРН*</label>
            <input type="text" class="forms3" id="ogrn" placeholder="000000000000000" onfocus="White(this.id)">
        </div>
        <div class="poln_naim">
            <label for="poln_naim" class="txt_obsh">Полное наименование*</label>
            <input type="text" class="forms2" id="poln_naim" placeholder="Полное наименование" onfocus="White(this.id)">
        </div>
        <div class="qr_adres">
            <label for="ur_addr" class="txt_obsh">Юридический адрес*</label>
            <input type="text" class="forms2" id="ur_addr" placeholder="Юридический адрес" onfocus="White(this.id)">
        </div>

        <div class="pcht_adres">
            <label for="pocht_adres" class="txt_obsh">Почтовый адрес*</label>
            <input type="text" class="forms2" id="pocht_adres" placeholder="Почтовый адрес" onfocus="White(this.id)">
        </div>

        <div class="telefon">
            <label for="phone" class="txt_obsh">Телефон*</label>
            <input type="text" class="forms" id="phone" placeholder="+7 (900) 000-12-34" onfocus="White(this.id)">
        </div>


        <div class="email">
            <label for="email" class="txt_obsh">Электронная почта*</label>
            <input type="email" class="forms" id="email" placeholder="Электронная почта" onfocus="White(this.id)">
        </div>

        <div class="email_2">
            <label for="email_2" class="txt_obsh">Повторите адрес электронной почты*</label>
            <input type="email" class="forms3" id="email_2" placeholder="Повторите адрес электронной почты" onfocus="White(this.id)">
        </div>
        <div>
            <img src="../img/add%201%20(Traced).svg" class="doks2"/>
            <table class="docs_tbl">
                <tr>
                    <td>Загруженные файлы</td>
                </tr>
            </table>
            <button type="button" class="knopka" onclick="Validate_reg()">Сохранить и подтвердить e-mail</button>
        </div>

        <p class="prikrepit-dokument pointer">Добавить документ</p>



        <p class="doks">Документы</p>

        <div class="txt">
            Перечень документов, которые необходимо приложить к заявке, указан в Регламенте работы сервиса
            <p></p>
            Максимальный объём загружаемого файла 15 Мб. Документ должен быть в формате pdf или jpg
        </div>


    </form>
    <div class="add_docs">
        <p>Документы участников</p>
        <label for="doc">
            <img src="../img/add%201%20(Traced).svg"/><a>Прикрепить документ</a>
            <input type="file" id="doc"/>
        </label><br>
        <input type="submit" value="Загрузить документ" class="upl"/><br>
        <h6>Отменить</h6>
    </div>
    <div class="wait">
        <h2>Проверка документов</h2>
        <p>Ваши документы отправлены на проверку.<br>Информация о результатах проверки<br>придет Вам на электронную почту</p>
    </div>
</div>
</div>
<div class="table">
    <div class="table_item"></div>
</div>

<div class="container">
    <div class="content">
        <div class="base_bg"></div>
        <div class="base">
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

<script src="../jquery/jquery-3.6.0.js"></script>
<script src="../scripts/validate_reg.js"></script>
<script src="../jquery/jquery.maskedinput.min.js"></script>
<script src="../scripts/reg_docs.js"></script>
<script src="../scripts/white.js"></script>
<script href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
<script>
    $(document).ready(function() {
        $.mask.definitions['0'] = "[0-9]";
        $("#inn").mask("0000000000");
    });

    $(document).ready(function() {
        $.mask.definitions['0'] = "[0-9]";
        $("#ogrn").mask("0000000000000");
    });

    $(document).ready(function() {
        $.mask.definitions['0'] = "[0-9]";
        $("#phone").mask("+7(000)-000-00-00");
    });

    $(document).ready(function (){
        $(".wait").hide()
    });
</script>
</body>
</html>