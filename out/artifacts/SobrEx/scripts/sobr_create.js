function dateFormat(date, time) {
    let n = date.split('.')
    let newd = ""

    for (let i = 2; i > -1; i--) {
        newd += n[i]
        if (i !== 0) {
            newd += '-'
        }
    }
    time += ":00"
    return newd + "T" + time
}

function qDelete(id) {
    document.getElementById(id).parentElement.parentElement.remove()

    $(".nim_cod").animate({
        top: "-=50px"
    });
    $(".knopka4").animate({
        top: "-=50px"
    });
    $(".knopka5").animate({
        top: "-=50px"
    });
    $(".knopka3").animate({
        top: "-=50px"
    });
    $(".table_fio").animate({
        top: "-=50px"
    });
    $(".base").animate({
        top: "-=50px"
    });
    $(".base_bg").animate({
        top: "-=50px"
    });
    $(".table_org").animate({
        height: "-=50px"
    })
}

function qAdd() {
    if (document.getElementById("enter_q").value !== "") {
        let quest = document.getElementById("enter_q").value
        qObj['key' + n] = quest
        n++
        qObj.num = n
        let markup = "<tr><td>" + quest + "<img id='cross' onclick='qDelete(this.id)' src='../../../img/cross.png' style='position: absolute; left: 1000px;'/> </td></tr>"
        $(".q_tbl tbody").append(markup)
        document.getElementById("enter_q").value = null

        $(".nim_cod").animate({
            top: "+=50px"
        });
        $(".knopka4").animate({
            top: "+=50px"
        });
        $(".knopka5").animate({
            top: "+=50px"
        });
        $(".knopka3").animate({
            top: "+=50px"
        });
        $(".table_fio").animate({
            top: "+=50px"
        });
        $(".base").animate({
            top: "+=50px"
        });
        $(".base_bg").animate({
            top: "+=50px"
        });
        $(".table_org").animate({
            height: "+=50px"
        })
    }
    return qObj
}

function zmail() {

    if (document.getElementById("nim_cod").value !== "") {
        let mail = document.getElementById("nim_cod").value
        console.log(i)
        email['zmail' + i] = mail
        i++
        email.num = i
        console.log(email)

        let newrow = `<tr><td id="zmail${i}">${mail}</td></tr>`
        $(".table_fio tbody").append(newrow)
        document.getElementById("nim_cod").value = null
        $(".knopka4").animate({
            top: "+=50px"
        });
        $(".knopka5").animate({
            top: "+=50px"
        });
        $(".base").animate({
            top: "+=50px"
        });
        $(".base_bg").animate({
            top: "+=50px"
        });
        $(".table_org").animate({
            height: "+=50px"
        })
    }
    return email
}

function Mailing() {
    var table = document.getElementById("emails-table");
    var rowsCount = table.rows.length;

    for (i = 1; i < rowsCount; i++) {
        let inputData = {
            email: document.getElementById(`zmail${i}`).textContent,
            subject: 'Тест'
        }

        $.post("/Sobr/EmailSender", inputData, function (data) {
        });
    }
}

function Create() {
    let status = "На рассмотрении"
    let dolzh = document.getElementById("tip_dolzh").placeholder
    let sobrDT = dateFormat(document.getElementById("date_sobr").value, document.getElementById("time").value)
    let sobrDz = dateFormat(document.getElementById("date_z").value, document.getElementById("time_z").value)
    let sobrDz2 = dateFormat(document.getElementById("date_z2").value, document.getElementById("time_z2").value)
    let sobrDb = dateFormat(document.getElementById("date_b").value, document.getElementById("time_b").value)
    let sobrDb2 = dateFormat(document.getElementById("date_b2").value, document.getElementById("time_b2").value)
    let sobrDp = dateFormat(document.getElementById("date_p").value, document.getElementById("time_p").value)
    let obem = null

    let e = document.getElementById("date_razm").value.split('.')
    let efrsbDate = ""
    for (let i = 2; i > -1; i--) {
        efrsbDate += e[i]
        if (i !== 0) {
            efrsbDate += '-'

        }
    }

    if (dolzh === "Юридическое лицо") {
        let sobr = {
            dateSobr: sobrDT,
            povestka: document.getElementById("povestka").value,
            dateZ: sobrDz,
            dateZ2: sobrDz2,
            dateB: sobrDb,
            dateB2: sobrDb2,
            dateP: sobrDp,
            vol: obem,
            efrsb: document.getElementById("efrsb").value,
            efrsbDate: efrsbDate,
            court: document.getElementById("naim_abr_sud").value,
            caseNum: document.getElementById("nomer_dela").value,
            baseForSobr: document.getElementById("osn_dlia_sobr").value,
            typeDol: document.getElementById("tip_dolzh").placeholder,
            emailOrg: document.getElementById("email").value,
            polnNaim: document.getElementById("poln_naim").value,
            urAdr: document.getElementById("qr_adrs").value,
            post: document.getElementById("pocht3").value,
            inn: document.getElementById("unn4").value,
            ogrn: document.getElementById("ogrn3").value,
            status: status,
            participants: document.getElementById("participants").value
        }

        console.log(sobr)

        $.post("/Sobr/ZServlet", sobr, function () {
            console.log(sobr)


            let email = zmail()
            console.log(email)

            $.get("/Sobr/MailServlet", email, function () {
                console.log(email)

                let send = qAdd()
                console.log(send)

                $.get('/Sobr/QuestionsServlet', send, function () {
                    console.log("questions added!")
                })
            })
        })
    } else if (dolzh === "Физическое лицо") {
        let sobr = {
            dateSobr: sobrDT,
            povestka: document.getElementById("povestka").value,
            dateZ: sobrDz,
            dateZ2: sobrDz2,
            dateB: sobrDb,
            dateB2: sobrDb2,
            dateP: sobrDp,
            vol: obem,
            efrsb: document.getElementById("efrsb").value,
            efrsbDate: efrsbDate,
            court: document.getElementById("naim_abr_sud").value,
            caseNum: document.getElementById("nomer_dela").value,
            baseForSobr: document.getElementById("osn_dlia_sobr").value,
            typeDol: document.getElementById("tip_dolzh").placeholder,
            emailOrg: document.getElementById("email").value,
            famil: document.getElementById("famil").value,
            name: document.getElementById("name").value,
            otch: document.getElementById("otch").value,
            post: document.getElementById("pocht").value,
            inn: document.getElementById("inn").value,
            snils: document.getElementById("snils").value,
            status: status,
            participants: document.getElementById("participants").value

        }

        console.log(sobr)

        $.post("/Sobr/ZServlet", sobr, function () {
            console.log(sobr)

            let email = zmail()
            console.log(email)

            $.get("/Sobr/MailServlet", email, function () {
                console.log(email)

                let send = qAdd()
                console.log(send)

                $.get('/Sobr/QuestionsServlet', send, function () {
                    console.log("questions added!")
                })
            })
        })
    } else if (dolzh === "Индивидуальный предприниматель") {
        let sobr = {
            dateSobr: sobrDT,
            povestka: document.getElementById("povestka").value,
            dateZ: sobrDz,
            dateZ2: sobrDz2,
            dateB: sobrDb,
            dateB2: sobrDb2,
            dateP: sobrDp,
            vol: obem,
            efrsb: document.getElementById("efrsb").value,
            efrsbDate: efrsbDate,
            court: document.getElementById("naim_abr_sud").value,
            caseNum: document.getElementById("nomer_dela").value,
            baseForSobr: document.getElementById("osn_dlia_sobr").value,
            typeDol: document.getElementById("tip_dolzh").placeholder,
            emailOrg: document.getElementById("email").value,
            famil: document.getElementById("famil2").value,
            name: document.getElementById("name2").value,
            otch: document.getElementById("otch2").value,
            post: document.getElementById("pocht2").value,
            inn: document.getElementById("inn2").value,
            snils: document.getElementById("snils2").value,
            ogrnip: document.getElementById("ogrnip").value,
            status: status,
            participants: document.getElementById("participants").value
        }

        console.log(sobr)

        $.post("/Sobr/ZServlet", sobr, function () {
            console.log(sobr)

            let email = zmail()
            console.log(email)

            $.get("/Sobr/MailServlet", email, function () {
                console.log(email)

                let send = qAdd()
                console.log(send)

                $.get('/Sobr/QuestionsServlet', send, function () {
                    console.log("questions added!")
                })
            })
        })
    }
}

function CreateDraft() {
    let status = "Черновик"
    let dolzh = document.getElementById("tip_dolzh").placeholder
    let sobrDT = dateFormat(document.getElementById("date_sobr").value, document.getElementById("time").value)
    let sobrDz = dateFormat(document.getElementById("date_z").value, document.getElementById("time_z").value)
    let sobrDz2 = dateFormat(document.getElementById("date_z2").value, document.getElementById("time_z2").value)
    let sobrDb = dateFormat(document.getElementById("date_b").value, document.getElementById("time_b").value)
    let sobrDb2 = dateFormat(document.getElementById("date_b2").value, document.getElementById("time_b2").value)
    let sobrDp = dateFormat(document.getElementById("date_p").value, document.getElementById("time_p").value)
    let obem = null

    let e = document.getElementById("date_razm").value.split('.')
    let efrsbDate = ""
    for (let i = 2; i > -1; i--) {
        efrsbDate += e[i]
        if (i !== 0) {
            efrsbDate += '-'
        }
    }

    if (dolzh === "Юридическое лицо") {
        let sobr = {
            dateSobr: sobrDT,
            povestka: document.getElementById("povestka").value,
            dateZ: sobrDz,
            dateZ2: sobrDz2,
            dateB: sobrDb,
            dateB2: sobrDb2,
            dateP: sobrDp,
            vol: obem,
            efrsb: document.getElementById("efrsb").value,
            efrsbDate: efrsbDate,
            court: document.getElementById("naim_abr_sud").value,
            caseNum: document.getElementById("nomer_dela").value,
            baseForSobr: document.getElementById("osn_dlia_sobr").value,
            typeDol: document.getElementById("tip_dolzh").placeholder,
            emailOrg: document.getElementById("email").value,
            polnNaim: document.getElementById("poln_naim").value,
            urAdr: document.getElementById("qr_adrs").value,
            post: document.getElementById("pocht3").value,
            inn: document.getElementById("unn4").value,
            ogrn: document.getElementById("ogrn3").value,
            status: status
        }

        console.log(sobr)

        let email = zmail()
        console.log(email)

        $.get("/Sobr/MailServlet", email, function () {
            console.log(email)


            $.post("/Sobr/ZServlet", sobr, function () {
                console.log(sobr)
            })
        })
    } else if (dolzh === "Физическое лицо") {
        let sobr = {
            dateSobr: sobrDT,
            povestka: document.getElementById("povestka").value,
            dateZ: sobrDz,
            dateZ2: sobrDz2,
            dateB: sobrDb,
            dateB2: sobrDb2,
            dateP: sobrDp,
            vol: obem,
            efrsb: document.getElementById("efrsb").value,
            efrsbDate: efrsbDate,
            court: document.getElementById("naim_abr_sud").value,
            caseNum: document.getElementById("nomer_dela").value,
            baseForSobr: document.getElementById("osn_dlia_sobr").value,
            typeDol: document.getElementById("tip_dolzh").placeholder,
            emailOrg: document.getElementById("email").value,
            famil: document.getElementById("famil").value,
            name: document.getElementById("name").value,
            otch: document.getElementById("otch").value,
            post: document.getElementById("pocht").value,
            inn: document.getElementById("inn").value,
            snils: document.getElementById("snils").value,
            status: status

        }

        console.log(sobr)

        let email = zmail()
        console.log(email)

        $.get("/Sobr/MailServlet", email, function () {
            console.log(email)


            $.post("/Sobr/ZServlet", sobr, function () {
                console.log(sobr)
            })
        })
    } else if (dolzh === "Индивидуальный предприниматель") {
        let sobr = {
            dateSobr: sobrDT,
            povestka: document.getElementById("povestka").value,
            dateZ: sobrDz,
            dateZ2: sobrDz2,
            dateB: sobrDb,
            dateB2: sobrDb2,
            dateP: sobrDp,
            vol: obem,
            efrsb: document.getElementById("efrsb").value,
            efrsbDate: efrsbDate,
            court: document.getElementById("naim_abr_sud").value,
            caseNum: document.getElementById("nomer_dela").value,
            baseForSobr: document.getElementById("osn_dlia_sobr").value,
            typeDol: document.getElementById("tip_dolzh").placeholder,
            emailOrg: document.getElementById("email").value,
            famil: document.getElementById("famil2").value,
            name: document.getElementById("name2").value,
            otch: document.getElementById("otch2").value,
            post: document.getElementById("pocht2").value,
            inn: document.getElementById("inn2").value,
            snils: document.getElementById("snils2").value,
            ogrnip: document.getElementById("ogrnip").value,
            status: status

        }

        console.log(sobr)

        let email = zmail()
        console.log(email)

        $.get("/Sobr/MailServlet", email, function () {
            console.log(email)


            $.post("/Sobr/ZServlet", sobr, function () {
                console.log(sobr)
            })
        })
    }
}

function Create1() {
    let status = "На рассмотрении"
    let dolzh = document.getElementById("tip_dolzh").placeholder
    let sobrDT = dateFormat(document.getElementById("date_sobr").value, document.getElementById("time").value)
    let sobrDz = dateFormat(document.getElementById("date_z").value, document.getElementById("time_z").value)
    let sobrDz2 = dateFormat(document.getElementById("date_z2").value, document.getElementById("time_z2").value)
    let sobrDb = dateFormat(document.getElementById("date_b").value, document.getElementById("time_b").value)
    let sobrDb2 = dateFormat(document.getElementById("date_b2").value, document.getElementById("time_b2").value)
    let sobrDp = dateFormat(document.getElementById("date_p").value, document.getElementById("time_p").value)
    let obem = null

    let e = document.getElementById("date_razm").value.split('.')
    let efrsbDate = ""
    for (let i = 2; i > -1; i--) {
        efrsbDate += e[i]
        if (i !== 0) {
            efrsbDate += '-'
        }
    }

    if (dolzh === "Юридическое лицо") {
        let sobr = {
            dateSobr: sobrDT,
            povestka: document.getElementById("povestka").value,
            dateZ: sobrDz,
            dateZ2: sobrDz2,
            dateB: sobrDb,
            dateB2: sobrDb2,
            dateP: sobrDp,
            vol: obem,
            efrsb: document.getElementById("efrsb").value,
            efrsbDate: efrsbDate,
            court: document.getElementById("naim_abr_sud").value,
            caseNum: document.getElementById("nomer_dela").value,
            baseForSobr: document.getElementById("osn_dlia_sobr").value,
            typeDol: document.getElementById("tip_dolzh").placeholder,
            emailOrg: document.getElementById("email").value,
            polnNaim: document.getElementById("poln_naim").value,
            urAdr: document.getElementById("qr_adrs").value,
            post: document.getElementById("pocht3").value,
            inn: document.getElementById("unn4").value,
            ogrn: document.getElementById("ogrn3").value,
            status: status
        }

        console.log(sobr)

        let email = zmail()
        console.log(email)

        $.get("/Sobr/MailServlet", email, function () {
            console.log(email)


            $.post("/Sobr/OServlet", sobr, function () {
                console.log(sobr)
            })
        })
    } else if (dolzh === "Физическое лицо") {
        let sobr = {
            dateSobr: sobrDT,
            povestka: document.getElementById("povestka").value,
            dateZ: sobrDz,
            dateZ2: sobrDz2,
            dateB: sobrDb,
            dateB2: sobrDb2,
            dateP: sobrDp,
            vol: obem,
            efrsb: document.getElementById("efrsb").value,
            efrsbDate: efrsbDate,
            court: document.getElementById("naim_abr_sud").value,
            caseNum: document.getElementById("nomer_dela").value,
            baseForSobr: document.getElementById("osn_dlia_sobr").value,
            typeDol: document.getElementById("tip_dolzh").placeholder,
            emailOrg: document.getElementById("email").value,
            famil: document.getElementById("famil").value,
            name: document.getElementById("name").value,
            otch: document.getElementById("otch").value,
            post: document.getElementById("pocht").value,
            inn: document.getElementById("inn").value,
            snils: document.getElementById("snils").value,
            status: status

        }

        console.log(sobr)

        let email = zmail()
        console.log(email)

        $.get("/Sobr/MailServlet", email, function () {
            console.log(email)

            $.post("/Sobr/OServlet", sobr, function () {
                console.log(sobr)
            })
        })
    } else if (dolzh === "Индивидуальный предприниматель") {
        let sobr = {
            dateSobr: sobrDT,
            povestka: document.getElementById("povestka").value,
            dateZ: sobrDz,
            dateZ2: sobrDz2,
            dateB: sobrDb,
            dateB2: sobrDb2,
            dateP: sobrDp,
            vol: obem,
            efrsb: document.getElementById("efrsb").value,
            efrsbDate: efrsbDate,
            court: document.getElementById("naim_abr_sud").value,
            caseNum: document.getElementById("nomer_dela").value,
            baseForSobr: document.getElementById("osn_dlia_sobr").value,
            typeDol: document.getElementById("tip_dolzh").placeholder,
            emailOrg: document.getElementById("email").value,
            famil: document.getElementById("famil2").value,
            name: document.getElementById("name2").value,
            otch: document.getElementById("otch2").value,
            post: document.getElementById("pocht2").value,
            inn: document.getElementById("inn2").value,
            snils: document.getElementById("snils2").value,
            ogrnip: document.getElementById("ogrnip").value,
            status: status

        }

        console.log(sobr)

        let email = zmail()
        console.log(email)

        $.get("/Sobr/MailServlet", email, function () {
            console.log(email)


            $.post("/Sobr/OServlet", sobr, function () {
                console.log(sobr)
            })
        })
    }
}

function CreateDraft1() {
    let status = "Черновик"
    let dolzh = document.getElementById("tip_dolzh").placeholder
    let sobrDT = dateFormat(document.getElementById("date_sobr").value, document.getElementById("time").value)
    let sobrDz = dateFormat(document.getElementById("date_z").value, document.getElementById("time_z").value)
    let sobrDz2 = dateFormat(document.getElementById("date_z2").value, document.getElementById("time_z2").value)
    let sobrDb = dateFormat(document.getElementById("date_b").value, document.getElementById("time_b").value)
    let sobrDb2 = dateFormat(document.getElementById("date_b2").value, document.getElementById("time_b2").value)
    let sobrDp = dateFormat(document.getElementById("date_p").value, document.getElementById("time_p").value)
    let obem = document.getElementById("obem_sobr").placeholder.split(' ')[1]

    let e = document.getElementById("date_razm").value.split('.')
    let efrsbDate = ""
    for (let i = 2; i > -1; i--) {
        efrsbDate += e[i]
        if (i !== 0) {
            efrsbDate += '-'
        }
    }

    if (dolzh === "Юридическое лицо") {
        let sobr = {
            dateSobr: sobrDT,
            povestka: document.getElementById("povestka").value,
            dateZ: sobrDz,
            dateZ2: sobrDz2,
            dateB: sobrDb,
            dateB2: sobrDb2,
            dateP: sobrDp,
            vol: obem,
            efrsb: document.getElementById("efrsb").value,
            efrsbDate: efrsbDate,
            court: document.getElementById("naim_abr_sud").value,
            caseNum: document.getElementById("nomer_dela").value,
            baseForSobr: document.getElementById("osn_dlia_sobr").value,
            typeDol: document.getElementById("tip_dolzh").placeholder,
            emailOrg: document.getElementById("email").value,
            polnNaim: document.getElementById("poln_naim").value,
            urAdr: document.getElementById("qr_adrs").value,
            post: document.getElementById("pocht3").value,
            inn: document.getElementById("unn4").value,
            ogrn: document.getElementById("ogrn3").value,
            status: status
        }

        console.log(sobr)

        let email = zmail()
        console.log(email)

        $.get("/Sobr/MailServlet", email, function () {
            console.log(email)


            $.post("/Sobr/OServlet", sobr, function () {
                console.log(sobr)
            })
        })
    } else if (dolzh === "Физическое лицо") {
        let sobr = {
            dateSobr: sobrDT,
            povestka: document.getElementById("povestka").value,
            dateZ: sobrDz,
            dateZ2: sobrDz2,
            dateB: sobrDb,
            dateB2: sobrDb2,
            dateP: sobrDp,
            vol: obem,
            efrsb: document.getElementById("efrsb").value,
            efrsbDate: efrsbDate,
            court: document.getElementById("naim_abr_sud").value,
            caseNum: document.getElementById("nomer_dela").value,
            baseForSobr: document.getElementById("osn_dlia_sobr").value,
            typeDol: document.getElementById("tip_dolzh").placeholder,
            emailOrg: document.getElementById("email").value,
            famil: document.getElementById("famil").value,
            name: document.getElementById("name").value,
            otch: document.getElementById("otch").value,
            post: document.getElementById("pocht").value,
            inn: document.getElementById("inn").value,
            snils: document.getElementById("snils").value,
            status: status

        }

        console.log(sobr)

        let email = zmail()
        console.log(email)

        $.get("/Sobr/MailServlet", email, function () {
            console.log(email)

            $.post("/Sobr/OServlet", sobr, function () {
                console.log(sobr)
            })
        })
    } else if (dolzh === "Индивидуальный предприниматель") {
        let sobr = {
            dateSobr: sobrDT,
            povestka: document.getElementById("povestka").value,
            dateZ: sobrDz,
            dateZ2: sobrDz2,
            dateB: sobrDb,
            dateB2: sobrDb2,
            dateP: sobrDp,
            vol: obem,
            efrsb: document.getElementById("efrsb").value,
            efrsbDate: efrsbDate,
            court: document.getElementById("naim_abr_sud").value,
            caseNum: document.getElementById("nomer_dela").value,
            baseForSobr: document.getElementById("osn_dlia_sobr").value,
            typeDol: document.getElementById("tip_dolzh").placeholder,
            emailOrg: document.getElementById("email").value,
            famil: document.getElementById("famil2").value,
            name: document.getElementById("name2").value,
            otch: document.getElementById("otch2").value,
            post: document.getElementById("pocht2").value,
            inn: document.getElementById("inn2").value,
            snils: document.getElementById("snils2").value,
            ogrnip: document.getElementById("ogrnip").value,
            status: status

        }

        console.log(sobr)

        let email = zmail()
        console.log(email)

        $.get("/Sobr/MailServlet", email, function () {
            console.log(email)

            $.post("/Sobr/OServlet", sobr, function () {
                console.log(sobr)
            })
        })
    }
}
