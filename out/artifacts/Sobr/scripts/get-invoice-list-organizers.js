$(document).ready(function () {
    $(".nav_login").hide();
    $("#clock").hide();
    $("#logout_btn").hide();
    $(".logout").hide();
    $(".sort_drop").hide();
    $(".decline").hide();

    $.post("/Sobr/GetInvoiceListOrganizers", function (result) {
        if (result) {
            console.log(result);
            for (var i = 0; i < result.length; i++) {
                var meetingType = result[i][0] == 'Z' ? 'Заочное' : 'Очное';
                var organizerEmail = result[i][1];
                var meetingNumber = result[i][2];
                var organizerName = result[i].length > 7 ? result[i][5] + ' ' + result[i][6] + ' ' + result[i][7] : result[i][5];
                var startMeetingDate = new Date(result[i][3]).toLocaleString();
                var status = result[i][4];
                var meetingsContainer = document.getElementById("m-container");
                if(status == 'На рассмотрении')
                {
                    meetingsContainer.innerHTML +=
                        `<div class="meeting">
                        <div class="meeting-left-side">
                            <div class="top-side">
                                <div class="m-name" id = "m-name">
                                    <span class=\"heading-name\">${meetingNumber} ${meetingType}</span>
                                </div>
                            </div>
                            <div class="bottom-side">
                                <div class="m-organizer">
                                    <span class="heading">Организатор</span>
                                    <span class="info">${organizerName}</span>
                                </div>
                                <div class="m-debtor">
                                    <span class="heading">Дата и время</span>
                                    <span class="info">${startMeetingDate}</span>
                                </div>
                                <div class="m-status">
                                    <span class="heading">Статус</span>
                                    <span class="info">${status}</span>
                                </div>
                            </div>
                        </div>
                        <div class="meeting-right-side-v2">
                            <button type="button" class="accept_button" onclick="AcceptInvoice(${meetingNumber}, '${organizerEmail}')">Принять</button>
                            <button type="button" class="decline_button" onclick="DeclineInvoice(${meetingNumber}, '${organizerEmail}')">Отклонить</button>
                        </div>
                    </div>`;
                }
                else{
                    meetingsContainer.innerHTML +=
                        `<div class="meeting">
                        <div class="meeting-left-side">
                            <div class="top-side">
                                <div class="m-name" id = "m-name">
                                    <span class=\"heading-name\">${meetingNumber} ${meetingType}</span>
                                </div>
                            </div>
                            <div class="bottom-side">
                                <div class="m-organizer">
                                    <span class="heading">Организатор</span>
                                    <span class="info">${organizerName}</span>
                                </div>
                                <div class="m-debtor">
                                    <span class="heading">Дата и время</span>
                                    <span class="info">${startMeetingDate}</span>
                                </div>
                                <div class="m-status">
                                    <span class="heading">Статус</span>
                                    <span class="info">${status}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                }
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
    $(".sort_val").text("на рассмотернии")
});

$(".sort2").click(function () {
    $(".sort_val").text("дате добавления")
});

$(".sort3").click(function () {
    $(".sort_val").text("допущена")
});

$(".sort4").click(function () {
    $(".sort_val").text("отклонена")
});

$(".knopka_otklon").click(function () {
    $(".decline").fadeIn()
}).click(function () {
    $(".table_item").animate({
        opacity: "0.3"
    });
});

$(".decline").mouseleave(function () {
    $(".decline").fadeOut()
}).mouseleave(function () {
    $(".table_item").animate({
        opacity: "1"
    });
});

$(".sort_drop li").click(function () {
    $(".decline_btn").fadeOut()
}).click(function () {
    $(".table_item").animate({
        opacity: "1"
    });
});

//clock
setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);


function AcceptInvoice(number, email) {
    //поменять статус заявки
    let info = {
        meetingNumber: number,
        meetingStatus: 'допущена',
    }
    $.post("/Sobr/ChangeInvoiceStatus", info);

    //отправить письмо
    let inputData = {
        email: email,
        subject: 'Заявка допущена'
    }
    $.post("/Sobr/EmailSender", inputData, function (data) {
        if (data == "") {
            alert("Ваша заявка принята!");
        } else {
            alert(data);
        }
    });
}


function DeclineInvoice(number, email) {
    //поменять статус заявки
    let info = {
        meetingNumber: number,
        meetingStatus: 'отклонена',
    }
    $.post("/Sobr/ChangeInvoiceStatus", info);

    //отправить письмо
    let inputData = {
        email: email,
        subject: 'Заявка отклонена'
    }
    $.post("/Sobr/EmailSender", inputData, function (data) {
        if (data == "") {
            alert("Ваша заявка отклонена!");
        } else {
            alert(data);
        }
    });
}