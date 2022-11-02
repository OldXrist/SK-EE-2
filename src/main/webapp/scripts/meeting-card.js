$(document).ready(function () {
    const meetingNumber = document.getElementById("meeting-number");
    meetingNumber.innerText = 'Карточка собрания: ' + window.localStorage.number;
    let text = window.localStorage.number;
    let number = text.substring(text.length - 7, text.length) === 'Заочное' ? text.slice(0, text.length - 8) : text.slice(0, text.length - 6);
    let inputData = { num: number }

    $.post("http://localhost:8080/Sobr/GetMeetingCard", inputData, function (result) {
        if (result) {
            console.log(result);

            var meetingStartDate = document.getElementById("m-start-date");
            var meetingStartTime = document.getElementById("m-start-time");
            var agenda = document.getElementById("agenda");
            var invoiceStartDate = document.getElementById("invoice-start-date");
            var invoiceStartTime = document.getElementById("invoice-start-time");
            var invoiceEndDate = document.getElementById("invoice-end-date");
            var invoiceEndTime = document.getElementById("invoice-end-time");
            var bulletinStartDate = document.getElementById("bulletin-start-date");
            var bulletinStartTime = document.getElementById("bulletin-start-time");
            var bulletinEndDate = document.getElementById("bulletin-end-date");
            var bulletinEndTime = document.getElementById("bulletin-end-time");
            var protocolSignDate = document.getElementById("protocol-sign-date");
            var protocolSignTime = document.getElementById("protocol-sign-time");
            var orgUlInn = document.getElementById("org-ul-inn");
            var orgUlOgrn = document.getElementById("org-ul-ogrn");
            var orgUlCompanyName = document.getElementById("org-ul-company-name");
            var orgUlUrAdress = document.getElementById("org-ul-ur-adress");
            var orgUlPostAdress = document.getElementById("org-ul-post-adress");
            var orgFlSecondName = document.getElementById("org-fl-second-name");
            var orgFlFirstName = document.getElementById("org-fl-first-name");
            var orgFlMiddleName = document.getElementById("org-fl-middle-name");
            var orgFlPostAdress = document.getElementById("org-fl-post-adress");
            var orgFlInn = document.getElementById("org-fl-inn");
            var orgFlSnils = document.getElementById("org-fl-snils");
            var orgAuSecondName = document.getElementById("org-au-second-name");
            var orgAuFirstName = document.getElementById("org-au-first-name");
            var orgAuMiddleName = document.getElementById("org-au-middle-name");
            var orgAuPostAdress = document.getElementById("org-au-post-adress");
            var orgAuInn = document.getElementById("org-au-inn");
            var orgAuSnils = document.getElementById("org-au-snils");
            var orgAuRegNumber = document.getElementById("org-au-reg-number");
            var orgIpSecondName = document.getElementById("org-ip-second-name");
            var orgIpFirstName = document.getElementById("org-ip-first-name");
            var orgIpMiddleName = document.getElementById("org-ip-middle-name");
            var orgIpPostAdress = document.getElementById("org-ip-post-adress");
            var orgIpInn = document.getElementById("org-ip-inn");
            var orgIpSnils = document.getElementById("org-ip-snils");
            var orgIpOgrnip = document.getElementById("org-ip-ogrnip");
            var efsrbInn = document.getElementById("efsrb-inn");
            var efsrbDate = document.getElementById("efsrb-date");
            var orgPhone = document.getElementById("org-phone");
            var orgEmail = document.getElementById("org-email");
            var courtName = document.getElementById("court-name");
            var caseNumber = document.getElementById("case-number");
            var basis = document.getElementById("basis");
            var debtorType = document.getElementById("debtor-type");
            var debtorFlSecondName = document.getElementById("debtor-fl-second-name");
            var debtorFlFirstName = document.getElementById("debtor-fl-first-name");
            var debtorFlMiddleName = document.getElementById("debtor-fl-middle-name");
            var debtorFlPostAdress = document.getElementById("debtor-fl-post-adress");
            var debtorFlInn = document.getElementById("debtor-fl-inn");
            var debtorFlSnils = document.getElementById("debtor-fl-snils");
            var debtorIpSecondName = document.getElementById("debtor-ip-second-name");
            var debtorIpFirstName = document.getElementById("debtor-ip-first-name");
            var debtorIpMiddleName = document.getElementById("debtor-ip-middle-name");
            var debtorIpPostAdress = document.getElementById("debtor-ip-post-adress");
            var debtorIpInn = document.getElementById("debtor-ip-inn");
            var debtorIpSnils = document.getElementById("debtor-ip-snils");
            var debtorIpOgrnip = document.getElementById("debtor-ip-ogrnip");
            var debtorUlCompanyFullname = document.getElementById("debtor-ul-company-fullname");
            var debtorUlCompanyShortname = document.getElementById("debtor-ul-company-shortname");
            var debtorUlInn = document.getElementById("debtor-ul-inn");
            var debtorUlOgrn = document.getElementById("debtor-ul-ogrn");

            var orgUlInfo = document.getElementById("org-ul-info");
            var orgFlInfo = document.getElementById("org-fl-info");
            var orgAuInfo = document.getElementById("org-au-info");
            var orgIpInfo = document.getElementById("org-ip-info");
            var debtorFlInfo = document.getElementById("debtor-fl-info");
            var debtorIpInfo = document.getElementById("debtor-ip-info");
            var debtorUlInfo = document.getElementById("debtor-ul-info");

            switch (result[0]) {
                case "АУ": orgAuInfo.hidden = false;
                    orgAuSecondName.value = result[25];
                    orgAuFirstName.value = result[26];
                    orgAuMiddleName.value = result[27];
                    orgAuPostAdress.value = result[28];
                    orgAuInn.value = result[29];
                    orgAuSnils.value = result[30];
                    orgAuRegNumber.value = result[31];
                    orgPhone.value = result[32];
                    orgEmail.value = result[1];
                    break;
                case "ФЛ": orgFlInfo.hidden = false;
                    orgFlSecondName.value = result[25];
                    orgFlFirstName.value = result[26];
                    orgFlMiddleName.value = result[27];
                    orgFlPostAdress.value = result[28];
                    orgFlInn.value = result[29];
                    orgFlSnils.value = result[30];
                    orgPhone.value = result[31];
                    orgEmail.value = result[1];
                    break;
                case "ИП": orgIpInfo.hidden = false;
                    orgIpSecondName.value = result[25];
                    orgIpFirstName.value = result[26];
                    orgIpMiddleName.value = result[27];
                    orgIpPostAdress.value = result[28];
                    orgIpInn.value = result[29];
                    orgIpSnils.value = result[30];
                    orgIpOgrnip.value = result[31];
                    orgPhone.value = result[32];
                    orgEmail.value = result[1];
                    break;
                case "ЮЛ": orgUlInfo.hidden = false;
                    orgUlInn.value = result[25];
                    orgUlOgrn.value = result[26];
                    orgUlCompanyName.value = result[27];
                    orgUlUrAdress.value = result[28];
                    orgUlPostAdress.value = result[29];
                    orgPhone.value = result[30];
                    orgEmail.value = result[1];
                    break;
            }

            switch (result[14]) {
                case "Физическое лицо": debtorFlInfo.hidden = false;
                    debtorFlSecondName.value = result[15];
                    debtorFlFirstName.value = result[16];
                    debtorFlMiddleName.value = result[17];
                    debtorFlPostAdress.value = result[18];
                    debtorFlInn.value = result[19];
                    debtorFlSnils.value = result[20];
                    break;
                case "Индивидуальный предприниматель": debtorIpInfo.hidden = false;
                    debtorIpSecondName.value = result[15];
                    debtorIpFirstName.value = result[16];
                    debtorIpMiddleName.value = result[17];
                    debtorIpPostAdress.value = result[18];
                    debtorIpInn.value = result[19];
                    debtorIpSnils.value = result[20];
                    debtorIpOgrnip.value = result[21];
                    break;
                case "Юридическое лицо": debtorUlInfo.hidden = false;
                    debtorUlCompanyFullname.value = result[22];
                    debtorUlCompanyShortname.value = result[22];
                    debtorUlInn.value = result[23];
                    debtorUlOgrn.value = result[24];
                    break;
            }

            meetingStartDate.value = new Date(result[2]).toLocaleDateString();
            meetingStartTime.value = new Date(result[2]).toLocaleTimeString();
            agenda.value = result[3];
            invoiceStartDate.value = new Date(result[4]).toLocaleDateString();
            invoiceStartTime.value = new Date(result[4]).toLocaleTimeString();
            invoiceEndDate.value = new Date(result[5]).toLocaleDateString();
            invoiceEndTime.value = new Date(result[5]).toLocaleTimeString();
            bulletinStartDate.value = new Date(result[6]).toLocaleDateString();
            bulletinStartTime.value = new Date(result[6]).toLocaleTimeString();
            bulletinEndDate.value = new Date(result[7]).toLocaleDateString();
            bulletinEndTime.value = new Date(result[7]).toLocaleTimeString();
            protocolSignDate.value = new Date(result[8]).toLocaleDateString();
            protocolSignTime.value = new Date(result[8]).toLocaleTimeString();
            efsrbInn.value = result[9];
            efsrbDate.value = new Date(result[10]).toLocaleDateString();
            courtName.value = result[11];
            caseNumber.value = result[12];
            basis.value = result[13];
            debtorType.value = result[14];

        } else {
            console.log('error data');
        }
    });
});

//clock
setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);

//отобразить имя пользователя
$.get("http://localhost:8080/Sobr/MAINServlet", function (data) {
    if (data !== "") {
        document.getElementById("lk").innerHTML = data
    }
})

//сохранить изменения в карточке
function SaveChangesToMeetingInfo() {
    var txt = window.localStorage.number;
    var meetNumber = txt.substring(txt.length - 7, txt.length) === 'Заочное' ? txt.slice(0, txt.length - 8) : txt.slice(0, txt.length - 6);
    var meetingDate = document.getElementById("m-start-date");
    var meetingTime = document.getElementById("m-start-time");
    var agenda = document.getElementById("agenda");
    var invoiceStartDate = document.getElementById("invoice-start-date");
    var invoiceStartTime = document.getElementById("invoice-start-time");
    var invoiceEndDate = document.getElementById("invoice-end-date");
    var invoiceEndTime = document.getElementById("invoice-end-time");
    var bulletinStartDate = document.getElementById("bulletin-start-date");
    var bulletinStartTime = document.getElementById("bulletin-start-time");
    var bulletinEndDate = document.getElementById("bulletin-end-date");
    var bulletinEndTime = document.getElementById("bulletin-end-time");

    var d1 = invoiceStartDate.value;
    var d2 = invoiceEndDate.value;
    var invoiceStart = new Date(d1[6] + d1[7] + d1[8] + d1[9], d1[3] + d1[4], d1[0] + d1[1]);
    var invoiceEnd = new Date(d2[6] + d2[7] + d2[8] + d2[9], d2[3] + d2[4], d2[0] + d2[1]);
    if (invoiceStart >= invoiceEnd) {
        invoiceStartDate.classList.add('invalid');
        invoiceEndDate.classList.add('invalid');
        window.scrollTo(0, 0);
        alert('Некорректные даты заявок на участие!');
    }
    else {
        invoiceStartDate.classList.remove('invalid');
        invoiceEndDate.classList.remove('invalid');
    }

    var d4 = bulletinStartDate.value;
    var d5 = bulletinEndDate.value;
    var bulletinStart = new Date(d4[6] + d4[7] + d4[8] + d4[9], d4[3] + d4[4], d4[0] + d4[1]);
    var bulletinEnd = new Date(d5[6] + d5[7] + d5[8] + d5[9], d5[3] + d5[4], d5[0] + d5[1]);
    if (bulletinStart >= bulletinEnd) {
        bulletinStartDate.classList.add('invalid');
        bulletinEndDate.classList.add('invalid');
        window.scrollTo(0, 0);
        alert('Некорректные даты приема бюллетеней!');
    }
    else {
        bulletinStartDate.classList.remove('invalid');
        bulletinEndDate.classList.remove('invalid');
    }

    var d0 = meetingDate.value;
    var mStart = new Date(d0[6] + d0[7] + d0[8] + d0[9], d0[3] + d0[4], d0[0] + d0[1]);
    if (mStart >= invoiceStart || mStart >= bulletinStart) {
        meetingDate.classList.add('invalid');
        window.scrollTo(0, 0);
        alert('Некорректная дата собрания!');
    }
    else {
        meetingDate.classList.remove('invalid');

        let inputDataForSave = {
            _meetingNumber: meetNumber,
            _agenda: agenda.value,
            _meetingDate: meetingDate.value + ' ' + meetingTime.value,
            _invoiceStartDate: invoiceStartDate.value + ' ' + invoiceStartTime.value,
            _invoiceEndDate: invoiceEndDate.value + ' ' + invoiceEndTime.value,
            _bulletinStartDate: bulletinStartDate.value + ' ' + bulletinStartTime.value,
            _bulletinEndDate: bulletinEndDate.value + ' ' + bulletinEndTime.value
        }

        console.log(inputDataForSave);

        $.post("http://localhost:8080/Sobr/ChangeMeetingCard", inputDataForSave, function (result) {
            if (result == '') {
                alert("Данные изменены успешно!");
                console.log('success write');
            }
            else {
                console.log('error write');
            }
        });
    }
}

