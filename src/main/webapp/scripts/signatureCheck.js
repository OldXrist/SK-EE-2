function dateParseT (x){
    let dateTime = x.split("T");
    let date = dateTime[0]
    let dA = date.split('-')

    return dA[2] + '.' + dA[1] + '.' + dA[0]
}

function Sign(id){
    let message = "Sign this"
    let tp = document.getElementById("print"+ id).value
    let print = tp.replace('/', '').trim()
    console.log(print)
    $(".signature").hide()
    $(".load").show()
    $(".opaque").animate({
        opacity: '0.3'
    })
    $("#step_1").animate({
        opacity: '1'
    })
    $("#step_2").animate({
        opacity: '1'
    })
    window.cryptoPro.createHash(message)
        .then(function (messageHash){
            window.cryptoPro.createDetachedSignature(print, messageHash)
                .then(function (signature){
                    console.log(signature)
                    $("#step_3").animate({
                        opacity: '1'
                    })
                    $("#step_4").animate({
                        opacity: '1'
                    })
                    $("#loadingStatus").hide()
                    $("#doneStatus").show()
                    $(".crossLoad").show()
                })
                .catch(function (error){
                    console.log(error)
                    let errorStep = document.getElementById("errorStep")
                    errorStep.innerHTML = ""
                    errorStep.innerHTML += error.message.split('(')[0]
                    errorStep.style.color = '#FF0000'
                    $(".crossLoad").show()
                    $("#loadingStatus").hide()
                    $("#errorStatus").show()
                })
        })
}
$(document).ready(function (){
    $(".signature").hide()
    $(".load").hide()
    $(".crossLoad").hide()
    $("#doneStatus").hide()
    $("#errorStatus").hide()
})

function Signature() {
    $(document).ready(function () {
        $(".signature").fadeIn()
        $(".opaque").animate({
            opacity: '0.3'
        })
        if (document.getElementById("certs").innerHTML === "") {
            window.cryptoPro.getUserCertificates()
                .then(function (certificate) {
                    console.log(certificate)
                    for (let i = 0; i < certificate.length; i++) {
                        document.getElementById("certs").innerHTML += "<div id='" + i + "' onclick='Sign(this.id)' class=\"cert\">\n" +
                            "                <img src=\"../img/doc.svg\">\n" +
                            "                <ul>\n" +
                            "                    <input type=\"hidden\" id='print" + i + "' value=" + certificate[i].thumbprint + "/>\n" +
                            "                    <li class=\"cert_bold\">" + certificate[i].name + "</li>\n" +
                            "                    <li class=\"cert_reg\">Издатель: " + certificate[i].issuerName.split(",")[0].split("=")[1] + "</li>\n" +
                            "                    <li class=\"cert_reg\">Срок действия: " + dateParseT(certificate[i].validFrom) + " - " + dateParseT(certificate[i].validTo) + "</li>\n" +
                            "                </ul>\n" +
                            "                <div class=\"hl\"></div>\n" +
                            "            </div>"
                    }
                })
        }
    })
    $(".crossLoad").click(function () {
        $(".load").fadeOut()
        $(".opaque").animate({
            opacity: '1'
        })
        $("#step_1").animate({
            opacity: '0.2'
        })
        $("#step_2").animate({
            opacity: '0.2'
        })
        $("#step_3").animate({
            opacity: '0.2'
        })
        $("#step_4").animate({
            opacity: '0.2'
        })
        $(".crossLoad").hide()
        $("#loadingStatus").show()
        $("#doneStatus").hide()
        $("#errorStatus").hide()
        let errorStep = document.getElementById("errorStep")
        errorStep.innerHTML = ""
        errorStep.innerHTML += "Локальная проверка<br> сертификата"
        errorStep.style.color = '#406C9A'
    })
}