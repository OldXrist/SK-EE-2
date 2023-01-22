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
    $(".cert").hide()
    $(".cross").hide()
    document.getElementById("certs").innerHTML += "<div class=\"loading\">\n" +
        "                <p>Загрузка...</p>\n" +
        "                <div class=\"loader\">\n" +
        "                    <span style=\"background:#104781;\"></span>\n" +
        "                    <span style=\"background:#104781;\"></span>\n" +
        "                    <span style=\"background:#104781;\"></span>\n" +
        "                    <span style=\"background:#104781;\"></span>\n" +
        "                </div>\n" +
        "            </div>"
    window.cryptoPro.createHash(message)
        .then(function (messageHash){
            window.cryptoPro.createDetachedSignature(print, messageHash)
                .then(function (signature){
                    console.log(signature)
                    Create()
                    Mailing()
                    $(".signature").hide()
                    $(".wait").fadeIn()
                    document.getElementById('wait').scrollIntoView()
                })
                .catch(function (error){
                    console.log(error.message)
                })
        })
}
$(document).ready(function (){
    $(".signature").hide()
})

function Signature() {
    $(document).ready(function () {
            $(".signature").fadeIn()
            $(".table_org").animate({
                opacity: '0.3'
            })
            if (document.getElementById("certs").innerHTML === "") {
                window.cryptoPro.getUserCertificates()
                    .then(function (certificate) {
                        console.log(certificate)
                        for (let i = 0; i < certificate.length; i++) {
                            document.getElementById("certs").innerHTML += "<div id='" + i + "' onclick='Sign(this.id)' class=\"cert\">\n" +
                                "                <img src=\"../../../img/doc.svg\">\n" +
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
        $(".cross").click(function () {
            $(".signature").fadeOut()
            $(".table_org").animate({
                opacity: '1'
            })
        })
}

function Sign1(id){
    let message = "Sign this"
    let tp = document.getElementById("print"+ id).value
    let print = tp.replace('/', '').trim()
    console.log(print)
    $(".cert").hide()
    $(".cross").hide()
    document.getElementById("certs").innerHTML += "<div class=\"loading\">\n" +
        "                <p>Загрузка...</p>\n" +
        "                <div class=\"loader\">\n" +
        "                    <span style=\"background:#104781;\"></span>\n" +
        "                    <span style=\"background:#104781;\"></span>\n" +
        "                    <span style=\"background:#104781;\"></span>\n" +
        "                    <span style=\"background:#104781;\"></span>\n" +
        "                </div>\n" +
        "            </div>"
    window.cryptoPro.createHash(message)
        .then(function (messageHash){
            window.cryptoPro.createDetachedSignature(print, messageHash)
                .then(function (signature){
                    console.log(signature)
                    Create1()
                    $(".signature").hide()
                    $(".wait").fadeIn()
                    document.getElementById('wait').scrollIntoView()
                })
                .catch(function (error){
                    alert(error)
                })
        })
}
$(document).ready(function (){
    $(".signature").hide()
})

function Signature1() {
    $(document).ready(function () {
        $(".signature").fadeIn()
        $(".table_org").animate({
            opacity: '0.3'
        })
        if (document.getElementById("certs").innerHTML === "") {
            window.cryptoPro.getUserCertificates()
                .then(function (certificate) {
                    console.log(certificate)
                    for (let i = 0; i < certificate.length; i++) {
                        document.getElementById("certs").innerHTML += "<div id='" + i + "' onclick='Sign1(this.id)' class=\"cert\">\n" +
                            "                <img src=\"../../../img/doc.svg\">\n" +
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
    $(".cross").click(function () {
        $(".signature").fadeOut()
        $(".table_org").animate({
            opacity: '1'
        })
    })
}