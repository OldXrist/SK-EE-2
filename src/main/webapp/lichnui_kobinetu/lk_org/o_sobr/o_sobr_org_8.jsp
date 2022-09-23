<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../../style/shared.css">
    <link rel="stylesheet" type="text/css" href="../../../style/test2.css">
    <link rel="stylesheet" type="text/css" href="../../../style/test.css">
    <link rel="stylesheet" type="text/css" href="../../../style/o_sobr_org_8.css">
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

<div id="player"></div>

<script>
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: 'yT9SwyJ19Ok',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        event.target.playVideo();
    }

    var done = false;
    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
            done = true;
        }
    }
    function stopVideo() {
        player.stopVideo();
    }
</script>

<div class="chat">
    <div id="wrapper">
        <div id="menu">

            <div style="clear:both"></div>
        </div>

        <div id="chatbox"></div>

        <form name="message" action="">
            <input name="usermsg" class="grim" type="text" id="usermsg" size="63" />
            <input name="submitmsg"  type="submit"  id="submitmsg" value="Send" />
        </form>
    </div>
</div>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
<script type="text/javascript">
    // jQuery Document
    $(document).ready(function(){

    });
</script>

<div class="container">
    <div class="content">
        <table class="users">
            <tr>
                <th>35</th>
                <th>21/26</th>
                <th>9/9</th>
            </tr>
            <tr>
                <td>всего участников<br>собрания<br>&nbsp;</td>
                <td>присутствующие на<br>собрании с правом<br>голоса</td>
                <td>присутствующие на<br>собрании без права<br>голоса</td>
            </tr>
        </table>

        <p class="heading_1">Собрание кредиторов: 1014-очное</p>

        <div class="info">
            <p>Информация о собрании кредиторов</p>
            <div class="hl"></div>
            <ul class="left">
                <li>Организатор</li>
                <li>Должник</li>
                <li>Начало собрания</li>
                <li>Продолжительность</li>
            </ul>
            <ul class="right">
                <li>Иванов Иван Иванович</li>
                <li>Петров Петр Петрович</li>
                <li>01.01.2022 00:00</li>
                <li>00:00:00</li>
            </ul>
            <button class="open">Открыть карточку собрания</button>
        </div>

        <ul class="add_q">
            <li>Голосование</li>
            <li><button class="add_btn">Добавить вопрос</button></li>
        </ul>

        <p class="heading_2">Основные вопросы</p>

        <div class="q_count">
            <ul class="left">
                <li>00:30&nbsp;</li>
                <li class="status">Завершено</li>
            </ul>
            <ul class="right">
                <li>Проголосовало: <b>26/26</b></li>
            </ul>
            <div class="hl"></div>
            <p class="q_text">Вопрос 1: Об отражении в отчете финансового управляющего сведений о достотаточности имущества должника для покрытия расходов по дел о банкротстве</p>
            <button class="vote_active">Подсчитать голоса</button>
        </div>

        <div class="q_extend">
            <ul class="left">
                <li>00:30&nbsp;</li>
                <li class="status">Завершено</li>
            </ul>
            <ul class="right">
                <li>Проголосовало: <b>21/26</b></li>
            </ul>
            <div class="hl"></div>
            <p class="q_text">Вопрос 2: Об отражении в отчете финансового управляющего сведений о достотаточности имущества должника для покрытия расходов по дел о банкротстве</p>
            <button class="org_btn">Увеличить время голосования</button>
        </div>

        <div class="q_end">
            <ul class="left">
                <li>00:30&nbsp;</li>
                <li class="status_w8">Ожидает</li>
            </ul>
            <ul class="right">
                <li>Проголосовало: <b>21/26</b></li>
            </ul>
            <div class="hl"></div>
            <p class="q_text">Вопрос 3: Об отражении в отчете финансового управляющего сведений о достотаточности имущества должника для покрытия расходов по дел о банкротстве</p>
            <button class="org_btn">Завершить голосование</button>
        </div>

        <div class="q_soon">
            <ul class="left">
                <li>00:30&nbsp;</li>
                <li class="status_w8">Ожидает</li>
            </ul>
            <ul class="right">
                <li>Проголосовало: <b>0/26</b></li>
            </ul>
            <div class="hl"></div>
            <p class="q_text">Вопрос 3: Об отражении в отчете финансового управляющего сведений о достотаточности имущества должника для покрытия расходов по дел о банкротстве</p>
            <button class="org_btn">Начать голосование</button>
        </div>

        <div class="base_bg"></div>
        <div class="base">
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
<script>
    setInterval(function () {
        var now = new Date();
        var clock = document.getElementById("clock");
        clock.innerHTML = now.toLocaleTimeString();
    }, 1000);
</script>
<script src="../../../jquery/jquery-3.6.0.js"></script>
<script href="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js" type="text/javascript"></script>
<script href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
