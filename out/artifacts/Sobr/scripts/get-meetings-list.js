$(document).ready(function () {
    $(".nav_login").hide();
    $("#clock").hide();
    $("#logout_btn").hide();
    $(".logout").hide();
    $(".sort_drop").hide();

    $.post("http://localhost:8080/Sobr/GetMeetingsList", function (result) {
        if (result) {
            console.log(result);
            for (var i = 0; i < result.length; i++){
                var meetingNumber = result[i][3];
                var organizerName = result[i].length > 9 ? result[i][7] + " " + result[i][8] + " " + result[i][9] : result[i][7];
                var debtorName = result[i][4] + " " + result[i][5] + " " + result[i][6];
                var startMeetingDate = new Date(result[i][0]).toLocaleString();
                var invoiceDates = new Date(result[i][1]).toLocaleDateString() + " - " + new Date(result[i][2]).toLocaleDateString();
                var type = result[i].length > 9 ? result[i][10] : result[i][8];
                var meetingType = type == 'Z' ? 'Заочное' : 'Очное';
                var meetingsContainer = document.getElementById("m-container");
                meetingsContainer.innerHTML +=
                    `<div class="meeting">
                        <div class="meeting-left-side">
                            <div class="top-side">
                                <div class="m-name">
                                    <a href="meeting-info.html" class="heading-name"><span>${meetingNumber} ${meetingType}</span></a>
                                </div>
                            </div>
                            <div class="bottom-side">
                                <div class="m-organizer">
                                    <span class="heading">Организатор</span>
                                    <span class="info">${organizerName}</span>
                                </div>
                                <div class="m-debtor">
                                    <span class="heading">Должник</span>
                                    <span class="info">${debtorName}</span>
                                </div>
                                <div class="m-status">
                                    <span class="heading">Статус</span>
                                    <span class="info"></span>
                                </div>
                            </div>
                        </div>
                        <div class="vertical-line"></div>
                        <div class="meeting-right-side">
                            <div class="top-side">
                                <div class="m-event-date">
                                    <span class="heading">Дата проведения собрания</span>
                                    <span class="info">${startMeetingDate}</span>
                                </div>
                            </div>
                            <div class="bottom-side">
                                <div class="m-app-accept-date">
                                    <span class="heading">Даты приема заявок</span>
                                    <span class="info">${invoiceDates}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }
        } else {
            alert('error data');
        }
    });
});

$(".arrw").click(function () {
    $(".sort_drop").slideDown()
}).click(function () {
    $(".table_min").animate({
        opacity: "0.3"
    });
}).click(function () {
    $(".arrw").css("transform", "rotate(180deg)")
});

$(".sort_drop").mouseleave(function () {
    $(".sort_drop").slideUp()
}).mouseleave(function () {
    $(".table_min").animate({
        opacity: "1"
    });
}).mouseleave(function () {
    $(".arrw").css("transform", "rotate(360deg)")
});

$(".sort_drop li").click(function () {
    $(".sort_drop").slideToggle()
}).click(function () {
    $(".table_min").animate({
        opacity: "1"
    });
}).click(function () {
    $(".arrw").css("transform", "rotate(360deg)")
})

$(".sort1").click(function () {
    $(".sort_val").text("номеру")
});

$(".sort2").click(function () {
    $(".sort_val").text("дате добавления")
});

$(".sort3").click(function () {
    $(".sort_val").text("статусу")
});

//clock
setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);
