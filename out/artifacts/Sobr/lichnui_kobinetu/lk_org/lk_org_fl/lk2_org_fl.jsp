<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../../../style/shared.css">
    <link rel="stylesheet" type="text/css" href="../../../style/lk.css">
    <link rel="stylesheet" type="text/css" href="../../../style/lk2.css">
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
                <li class="breadcrumb-item"><a href="lk_org_fl"><p class="lk_mal">Личные данные</p></a></li>
                <li class="breadcrumb-item active" aria-current="page"><p class="org_sobr_big">Организация собраний</p></li>
                <li class="breadcrumb-item"><a href="lk3_org_fl"><p class="chern_zaiav">Черновики заявок</p></a></li>
            </ol>
        </nav>

        <img class="logout-1-traced"
             src="https://static.overlay-tech.com/assets/3373d3e0-dfbb-4718-9044-d75c865a7c23.svg"/>
        <p class="login">Светлана И.</p>
        <div class="poloska"></div>

    </form>

    <form class="table_min">
        <p class="org_sobr2">Организация собраний</p>
        <p class="dob_sobr">Добавить собрание</p>
        <img class="plus" src="../../../img/close%201%20(Traced).svg">
        <ul class="add_drop">
            <li class="form21">Не выбрано</li>
            <li class="form22">Очное</li>
            <li class="form23">Заочное</li>
        </ul>
    </form>


    <p class="sort">Сортировать по <b class="sort_val">номеру</b><img src="../../../img/down_arrow.svg" class="arrw"/></p>
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
</div>

<div class="container">
    <div class="content">
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


<script src="../../../jquery/jquery-3.6.0.js"></script>
<script href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
<script>
    $(document).ready(function () {
        $(".sort_drop").hide()
    });
    $(document).ready(function(){
        $(".arrw").click(function(){
            $(".sort_drop").slideDown()
        }).click(function(){
            $(".table").animate({
                opacity: "0.3"
            });
        }).click(function(){
            $(".arrw").css("transform", "rotate(180deg)")
        });
    });
    $(document).ready(function(){
        $(".sort_drop").mouseleave(function(){
            $(".sort_drop").slideUp()
        }).mouseleave(function(){
            $(".table").animate({
                opacity: "1"
            });
        }).mouseleave(function(){
            $(".arrw").css("transform", "rotate(360deg)")
        });
    });
    $(document).ready(function(){
        $(".sort_drop li").click(function(){
            $(".sort_drop").slideToggle()
        }).click(function(){
            $(".table").animate({
                opacity: "1"
            });
        }).click(function(){
            $(".arrw").css("transform", "rotate(360deg)")
        })
    });
    $(document).ready(function(){
        $(".sort1").click(function(){
            $(".sort_val").text("номеру")
        });
    });
    $(document).ready(function(){
        $(".sort2").click(function(){
            $(".sort_val").text("дате добавления")
        });
    });
    $(document).ready(function(){
        $(".sort3").click(function(){
            $(".sort_val").text("статусу")
        });
    });
    $(document).ready(function(){
        $(".add_drop").hide()
    });
    $(document).ready(function(){
        $(".plus").click(function(){
            $(".add_drop").slideDown()
        }).click(function(){
            $(".table").animate({
                opacity: '0.3'
            });
        });
    });
    $(document).ready(function(){
        $(".add_drop li").click(function(){
            $(".add_drop").slideUp()
        }).click(function(){
            $(".table").animate({
                opacity: "1"
            });
        });
    });
    $(document).ready(function(){
        $(".add_drop").mouseleave(function(){
            $(".add_drop").slideUp()
        }).mouseleave(function(){
            $(".table").animate({
                opacity: "1"
            });
        });
    });
</script>



</body>
</html>