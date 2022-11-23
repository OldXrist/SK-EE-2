$(document).ready(function () {
    $(".nav_login").hide();
    $("#clock").hide();
    $("#logout_btn").hide();
    $(".logout").hide();

    $.post("http://localhost:8080/Sobr/GetSystemSettings", function (result) {
        console.log(result);
        let issuer = document.getElementById("issuer");
        let senderEmail = document.getElementById("sender-email");
        let smtpHost = document.getElementById("smtp-host");
        let smtpPort = document.getElementById("smtp-port");
        let smtpUsername = document.getElementById("smtp-username");
        let smtpPassword = document.getElementById("smtp-password");
        let attempts = document.getElementById("attempts");
        let url = document.getElementById("url");
        let forbiddenOids = document.getElementById("forbidden-oids");
        let cert = document.getElementById("cert");
        let phone = document.getElementById("phone");
        let companies = document.getElementById("companies");
        let siteName1 = document.getElementById("site-name1");
        let recovery = document.getElementById("recovery");
        let siteName2 = document.getElementById("site-name2");
        let isCheckOid = document.getElementById("check-oid");
        let isCheckCert = document.getElementById("check-cert");
        let invoicePeriod = document.getElementById("invoice-period");
        let operatingMode = document.getElementById("operating-mode");
        let footer = document.getElementById("footer");
        let documents = document.getElementById("documents");
        let sizeLimit1 = document.getElementById("size-limit1");
        let sizeLimit2 = document.getElementById("size-limit2");
        let efrsb1 = document.getElementById("efrsb1");
        let efrsb2 = document.getElementById("efrsb2");
        let efrsbLogin = document.getElementById("efrsb-login");
        let efrsbPassword = document.getElementById("efrsb-password");

        issuer.value = result[1];
        senderEmail.value = result[2];
        smtpHost.value = result[3];
        smtpPort.value = result[4];
        smtpUsername.value = result[5];
        smtpPassword.value = result[6];
        attempts.value = result[7];
        url.value = result[8];
        forbiddenOids.value = result[9];
        cert.value = result[10];
        phone.value = result[11];
        companies.value = result[12];
        siteName1.value = result[13];
        recovery.value = result[14];
        siteName2.value = result[15];
        isCheckOid.checked = result[16] == 'true' ? true : false;
        isCheckCert.checked = result[17] == 'true' ? true : false;
        invoicePeriod.value = result[18];
        operatingMode.value = result[19];
        footer.value = result[20];
        documents.value = result[21];
        sizeLimit1.value = result[22];
        sizeLimit2.value = result[23];
        efrsb1.value = result[24];
        efrsb2.value = result[25];
        efrsbLogin.value = result[26];
        efrsbPassword.value = result[27];
    });
});

//clock
setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);

//validation
function ValidateSystemSettings() {
    let issuer = document.getElementById("issuer");
    let senderEmail = document.getElementById("sender-email");
    let smtpHost = document.getElementById("smtp-host");
    let smtpPort = document.getElementById("smtp-port");
    let smtpUsername = document.getElementById("smtp-username");
    let smtpPassword = document.getElementById("smtp-password");
    let attempts = document.getElementById("attempts");
    let url = document.getElementById("url");
    let forbiddenOids = document.getElementById("forbidden-oids");
    let cert = document.getElementById("cert");
    let phone = document.getElementById("phone");
    let companies = document.getElementById("companies");
    let siteName1 = document.getElementById("site-name1");
    let recovery = document.getElementById("recovery");
    let siteName2 = document.getElementById("site-name2");
    let isCheckOid = document.getElementById("check-oid");
    let isCheckCert = document.getElementById("check-cert");
    let invoicePeriod = document.getElementById("invoice-period");
    let operatingMode = document.getElementById("operating-mode");
    let footer = document.getElementById("footer");
    let documents = document.getElementById("documents");
    let sizeLimit1 = document.getElementById("size-limit1");
    let sizeLimit2 = document.getElementById("size-limit2");
    let efrsb1 = document.getElementById("efrsb1");
    let efrsb2 = document.getElementById("efrsb2");
    let efrsbLogin = document.getElementById("efrsb-login");
    let efrsbPassword = document.getElementById("efrsb-password");

    let settings = {
        issuer: issuer.value,
        senderEmail: senderEmail.value,
        smtpHost: smtpHost.value,
        smtpPort: smtpPort.value,
        smtpUsername: smtpUsername.value,
        smtpPassword: smtpPassword.value,
        attempts: attempts.value,
        url: url.value,
        forbiddenOids: forbiddenOids.value,
        cert: cert.value,
        phone: phone.value,
        companies: companies.value,
        siteName1: siteName1.value,
        recovery: recovery.value,
        siteName2: siteName2.value,
        isCheckOid: isCheckOid.checked.toLocaleString(),
        isCheckCert: isCheckCert.checked.toLocaleString(),
        invoicePeriod: invoicePeriod.value,
        operatingMode: operatingMode.value,
        footer: footer.value,
        documents: documents.value,
        sizeLimit1: sizeLimit1.value,
        sizeLimit2: sizeLimit2.value,
        efrsb1: efrsb1.value,
        efrsb2: efrsb2.value,
        efrsbLogin: efrsbLogin.value,
        efrsbPassword: efrsbPassword.value
    }

    $.post("http://localhost:8080/Sobr/ChangeSystemSettings", settings, function (data) {
        if (data == "") {
            alert("Данные успешно сохранены!");
        } else {
            alert(data);
        }
    });
}

function SendTestMessage() {

}