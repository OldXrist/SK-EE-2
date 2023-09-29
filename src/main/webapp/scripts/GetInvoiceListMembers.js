$(document).ready(function () {
    $(".nav_login").hide();
    $("#clock").hide();
    $("#logout_btn").hide();
    $(".logout").hide();
    $(".sort_drop").hide();
    $(".decline").hide();

    $.post("/GetInvoiceListMembers", function (result) {
        if (result) {
            console.log(result);
            for (var i = 0; i < result.length; i++) {
                var invoiceNumber = i+1;
                var organizerEmail = result[i][0].toString();
                var organizerName = result[i].length > 4 ? result[i][3] + ' ' + result[i][4] + ' ' + result[i][5] : result[i][3];
                var regDate = new Date(result[i][2]).toLocaleString();

                var invoiceContainer = document.getElementById("invoice-container");
                if(result[i][1] == 'null')
                {
                    invoiceContainer.innerHTML +=
                        `<div class="meeting">
                        <div class="meeting-left-side">
                            <div class="top-side">
                                <div class="m-name" id = "m-name">
                                    <a href="application.html?email=${organizerEmail}" class=\"heading-name\">Заявка № ${invoiceNumber}</a>
                                </div>
                            </div>
                            <div class="bottom-side">
                                <div class="m-organizer">
                                    <span class="heading">Кредитор</span>
                                    <span class="info">${organizerName}</span>
                                </div>
                                <div class="m-debtor">
                                    <span class="heading">Дата и время</span>
                                    <span class="info">${regDate}</span>
                                </div>
                                <div class="m-status">
                                    <span class="heading">Статус</span>
                                    <span class="info">На рассмотрении</span>
                                </div>
                            </div>
                        </div>
                        <div class="meeting-right-side-v2">
                            <button type="button" class="accept_button" onclick="AcceptInvoice('${organizerEmail}')">Принять</button>
                            <button type="button" class="decline_button" onclick="DeclineInvoice('${organizerEmail}')">Отклонить</button>
                        </div>
                    </div>`;
                }
                else if (result[i][1] == 'true'){
                    invoiceContainer.innerHTML +=
                        `<div class="meeting">
                        <div class="meeting-left-side">
                            <div class="top-side">
                                <div class="m-name" id = "m-name">
                                    <a href="application.html?email=${organizerEmail}" class=\"heading-name\">Заявка № ${invoiceNumber}</a>
                                </div>
                            </div>
                            <div class="bottom-side">
                                <div class="m-organizer">
                                    <span class="heading">Организатор</span>
                                    <span class="info">${organizerName}</span>
                                </div>
                                <div class="m-debtor">
                                    <span class="heading">Дата и время</span>
                                    <span class="info">${regDate}</span>
                                </div>
                                <div class="m-status">
                                    <span class="heading">Статус</span>
                                    <span class="info">Допущена</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                }
                else if (result[i][1] == 'false'){
                    invoiceContainer.innerHTML +=
                        `<div class="meeting">
                        <div class="meeting-left-side">
                            <div class="top-side">
                                <div class="m-name" id = "m-name">
                                    <a href="application.html?email=${organizerEmail}" class=\"heading-name\">Заявка № ${invoiceNumber}</a>
                                </div>
                            </div>
                            <div class="bottom-side">
                                <div class="m-organizer">
                                    <span class="heading">Организатор</span>
                                    <span class="info">${organizerName}</span>
                                </div>
                                <div class="m-debtor">
                                    <span class="heading">Дата и время</span>
                                    <span class="info">${regDate}</span>
                                </div>
                                <div class="m-status">
                                    <span class="heading">Статус</span>
                                    <span class="info">Отклонена</span>
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

function AcceptInvoice(email) {
    //поменять статус заявки
    let info = {
        email: email,
        meetingStatus: 'true',
    }
    $.post("/ChangeInvoiceStatus", info);

    //отправить письмо
    let inputData = {
        email: email,
        subject: 'Заявка допущена'
    }
    $.post("/EmailSender", inputData, function (data) {
        if (data == "") {
            alert("Заявка принята!");
        } else {
            alert(data);
        }
    });
    location.reload();
}


function DeclineInvoice(email) {
    //поменять статус заявки
    let info = {
        email: email,
        meetingStatus: 'false',
    }
    $.post("/ChangeInvoiceStatus", info);

    //отправить письмо
    let inputData = {
        email: email,
        subject: 'Заявка отклонена'
    }
    $.post("/EmailSender", inputData, function (data) {
        if (data == "") {
            alert("Заявка отклонена!");
        } else {
            alert(data);
        }
    });
    location.reload();
}

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


