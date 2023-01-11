$(document).ready(function () {

    let loc = window.location.href
    let sk = loc.split('&')[0].split('=')
    console.log(sk[1])

    let send = {
        sk: sk[1]
    }


    let locc = window.location.href
    let appId = locc.split('&')[1].split('=')
    console.log(appId[1])

    let appID = {
        appId: appId[1]
    }


    $.get('/Sobr/ApplicationEditServlet', appID, function (data) {
        console.log(data)

        let d = data.split('\n')
        let role = d[1]

        document.getElementById('number').innerText += appId[1]

        var memberFlInn = document.getElementById("member-fl-inn");
        var memberFlSnils = document.getElementById("member-fl-snils");
        var memberFlSecondName = document.getElementById("member-fl-second-name");
        var memberFlFirstName = document.getElementById("member-fl-first-name");
        var memberFlMiddleName = document.getElementById("member-fl-middle-name");
        var memberFlPostAddress = document.getElementById("member-fl-post-adress");
        var memberFlPhone = document.getElementById("member-fl-phone");
        var memberFlEmail = document.getElementById("member-fl-email");

        var memberIpInn = document.getElementById("member-ip-inn");
        var memberIpSnils = document.getElementById("member-ip-snils");
        var memberIpOgrnip = document.getElementById("member-ip-ogrnip");
        var memberIpSecondName = document.getElementById("member-ip-second-name");
        var memberIpFirstName = document.getElementById("member-ip-first-name");
        var memberIpMiddleName = document.getElementById("member-ip-middle-name");
        var memberIpPostAddress = document.getElementById("member-ip-post-adress");
        var memberIpPhone = document.getElementById("member-ip-phone");
        var memberIpEmail = document.getElementById("member-ip-email");

        var memberUlInn = document.getElementById("member-ul-inn");
        var memberUlOgrn = document.getElementById("member-ul-ogrn");
        var memberUlCompanyFullname = document.getElementById("member-ul-company-fullname");
        var memberUlPostAddress = document.getElementById("member-ul-post-adress");
        var memberUlUrAddress = document.getElementById("member-ul-ur-adress");
        var memberUlPhone = document.getElementById("member-ul-phone");
        var memberUlEmail = document.getElementById("member-ul-email");

        var status = document.getElementById("status");
        var authority = document.getElementById("sources-1");

        var memberFlInfo = document.getElementById("member-fl-info");
        var memberIpInfo = document.getElementById("member-ip-info");
        var memberUlInfo = document.getElementById("member-ul-info");

        status.value = d[3];

        if (role.includes("ФЛ")) {
            memberFlInfo.hidden = false;
            memberFlInn.value = d[12];
            memberFlSnils.value = d[13];
            memberFlSecondName.value = d[4];
            memberFlFirstName.value = d[5];
            memberFlMiddleName.value = d[6];
            memberFlPostAddress.value = d[11];
            memberFlPhone.value = d[14];
            memberFlEmail.value = d[2];

        } else if (role.includes("ИП")) {
            memberIpInfo.hidden = false;
            memberIpInn.value = d[11];
            memberIpSnils.value = d[12];
            memberIpOgrnip.value = d[13];
            memberIpSecondName.value = d[4];
            memberIpFirstName.value = d[5];
            memberIpMiddleName.value = d[6];
            memberIpPostAddress.value = d[14];
            memberIpPhone.value = d[15];
            memberIpEmail.value = d[2];

        } else if (role.includes("ЮЛ")) {
            memberUlInfo.hidden = false;
            memberUlInn.value = d[7];
            memberUlOgrn.value = d[8];
            memberUlCompanyFullname.value = d[4];
            memberUlPostAddress.value = d[6];
            memberUlUrAddress.value = d[5];
            memberUlPhone.value = d[9];
            memberUlEmail.value = d[2];
        }
    })
});

function Accept() {
    if (document.getElementById('option').innerText !== 'Не выбрано') {
        let sknum = window.location.href.split('?')[1].split('=')[1].split('&')[0]
        let url = new URL('http://www.sk.tenderstandart.ru:8080/Sobr/lichnui_kobinetu/lk_org/z_sobr/z_sobr_org_5.html') //TODO: Поменять на sk.tenderstandart

        let status = {
            appId: window.location.href.split('&')[1].split('=')[1],
            status: "Допущена",
            canVote: document.getElementById('option').innerText
        }
        console.log(document.getElementById('option').innerText)
        $.get('/Sobr/ApplicationUpdServlet', status)

        url.searchParams.append('sk', sknum)
        window.location.href = url.href
    } else {
        document.getElementById('error').style.border = '2px solid red'
        document.getElementById('error').style.borderRadius = '10px'
    }
}

function White(id){
    document.getElementById(id).style.border = 'none'
}

function Decline() {
    let sknum = window.location.href.split('?')[1].split('=')[1].split('&')[0]
    let url = new URL('/Sobr/lichnui_kobinetu/lk_org/z_sobr/z_sobr_org_5.html')

    let status = {
        appId: window.location.href.split('&')[1].split('=')[1],
        status: "Отклонена"
    }

    $.get('/Sobr/ApplicationUpdServlet', status)

    url.searchParams.append('sk', sknum)
    window.location.href = url.href
}

//clock
setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);


//рендерим кастомный select и заполняем данными из options
$(".custom-select-1").each(function () {
    console.log('selection');
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
    var template = '<div class="' + classes + '" id="error" onclick="White(this.id)">';
    template += '<span class="custom-select-trigger-1" id="option">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options-1">';
    $(this).find("option").each(function () {
        template += '<span class="custom-option-1 ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';
    $(this).hide();
    $(this).after(template);
});
$(".custom-option-1:first-of-type").hover(function () {
    $(this).parents(".custom-options-1").addClass("option-hover-1");
}, function () {
    $(this).parents(".custom-options-1").removeClass("option-hover-1");
});
$(".custom-select-trigger-1").on("click", function () {
    $('html').one('click', function () {
        $(".custom-select-1").removeClass("opened-1");
    });
    $(this).parents(".custom-select-1").toggleClass("opened-1");
    event.stopPropagation();
});
$(".custom-option-1").on("click", function () {
    $(this).parents(".custom-select-wrapper-1").find("select").val($(this).data("value"));
    $(this).parents(".custom-options-1").find(".custom-option-1").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select-1").removeClass("opened-1");
    $(this).parents(".custom-select-1").find(".custom-select-trigger-1").text($(this).text());
});