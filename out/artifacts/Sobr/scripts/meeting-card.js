$(document).ready(function () {
    $(".nav_login").hide();
    $("#logout_btn").hide();
    $(".logout").hide();

    const meetingNumber = document.getElementById("meeting-number");
    meetingNumber.innerText = 'Карточка собрания: ' + window.localStorage.number;
    let text = window.localStorage.number;
    let number = text.substring(text.length - 7, text.length) === 'Заочное' ? text.slice(0, text.length - 8) : text.slice(0, text.length - 6);
    let inputData1 = { num: number}

    $.post("http://localhost:8080/Sobr/GetMeetingInfo", inputData1, function (result) {
        if (result) {
            console.log(result);
            var orgFullname = document.getElementById("org-fullname");
            var orgStatus = document.getElementById("org-status");
            var frsNumber = document.getElementById("frs-number");
            var sroName = document.getElementById("sro-name");
            var orgPhone = document.getElementById("org-phone");
            var orgEmail = document.getElementById("org-email");
            var efrsbNumber = document.getElementById("efrsb-number");
            var debtorFullname = document.getElementById("debtor-fullname");
            var debtorShortname = document.getElementById("debtor-shortname");
            var debtorInn = document.getElementById("debtor-inn");
            var debtorOgrn = document.getElementById("debtor-ogrn");
            var courtName = document.getElementById("court-name");
            var caseNumber = document.getElementById("case-number");
            var basis = document.getElementById("basis");
            var identityDocs = document.getElementById("identity-docs");
            var credentialsDocs = document.getElementById("credentials-docs");

            orgFullname.value = result[0] === 'ЮЛ' ? result[11] : result[11] + ' ' + result[12] + ' ' + result[13];
            switch (result[0]) {
                case "АУ": orgStatus.value = 'Арбитражный управляющий';
                    break;
                case "ФЛ": orgStatus.value = 'Физическое лицо';
                    break;
                case "ИП": orgStatus.value = 'Индивидуальный предприниматель';
                    break;
                case "ЮЛ": orgStatus.value = 'Юридическое лицо';
                    break;
            }
            frsNumber.value = result[0] === 'АУ' ? result[16] : '';
            sroName.value = result[0] === 'АУ' ? result[17] : '';
            orgPhone.value = result[0] === 'ЮЛ' ? result[12] : result[14];
            orgEmail.value = result[0] === 'ЮЛ' ? result[13] : result[15];
            efrsbNumber.value = result[2];
            debtorFullname.value = result[3] + ' ' + result[4] + ' ' + result[5];
            debtorShortname.value = result[3];
            debtorInn.value = result[6];
            debtorOgrn.value = result[7];
            courtName.value = result[8];
            caseNumber.value = result[9];
            basis.value = result[10];
            // basis.identityDocs = '';
            // basis.credentialsDocs = '';
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

//сохранить изменения в карточке
function SaveChangesToMeetingInfo() {
    var text2 = window.localStorage.number;
    var number2 = text2.substring(text.length - 7, text.length) === 'Заочное' ? text.slice(0, text.length - 8) : text.slice(0, text.length - 6);
    var orgFullName = document.getElementById("org-fullname");
    var orgStatus = document.getElementById("org-status");
    var frsNumber = document.getElementById("frs-number");
    var sroName = document.getElementById("sro-name");
    var orgPhone = document.getElementById("org-phone");
    var orgEmail = document.getElementById("org-email");
    var efrsbNumber = document.getElementById("efrsb-number");
    var debtorFullname = document.getElementById("debtor-fullname");
    var debtorShortname = document.getElementById("debtor-shortname");
    var debtorInn = document.getElementById("debtor-inn");
    var debtorOgrn = document.getElementById("debtor-ogrn");
    var courtName = document.getElementById("court-name");
    var caseNumber = document.getElementById("case-number");
    var basis = document.getElementById("basis");
    var identityDocs = document.getElementById("identity-docs");
    var credentialsDocs = document.getElementById("credentials-docs");

    let inputData2 = {
        _meetingNumber: number2,
        _orgFullName: orgFullName,
        _orgStatus: orgStatus,
        _frsNumber: frsNumber,
        _sroName: sroName,
        _orgPhone: orgPhone,
        _orgEmail: orgEmail,

        _efrsbNumber: efrsbNumber,
        _debtorFullname: debtorFullname,
        _debtorShortname: debtorShortname,
        _debtorInn: debtorInn,
        _debtorOgrn: debtorOgrn,
        _courtName: courtName,
        _caseNumber: caseNumber,
        _basis: basis
    }

    $.post("http://localhost:8080/Sobr/ChangeMeetingInfo", inputData2, function (result) {
        if (result) {

        }
    });
    alert(111);
}
