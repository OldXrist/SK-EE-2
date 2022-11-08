function dateFormat(date, time){
    let n = date.split('.')
    let newd = ""

    for (let i = 2; i > -1; i--){
        newd += n[i]
        if (i !== 0) {
            newd += '-'
        }
    }
    time += ":00"
    return newd + "T" + time
}

function Create(){
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
    for (let i = 2; i > -1; i--){
        efrsbDate += e[i]
        if (i !== 0) {
            efrsbDate += '-'
        }
    }

    if (dolzh === "Юридическое лицо"){
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

        $.post("http://localhost:8080/Sobr/ZServlet", sobr, function (){
            console.log(sobr)
        })
    } else if (dolzh === "Физическое лицо"){
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

        $.post("http://localhost:8080/Sobr/ZServlet", sobr, function (){
            console.log(sobr)
        })
    } else if (dolzh === "Индивидуальный предприниматель"){
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

        $.post("http://localhost:8080/Sobr/ZServlet", sobr, function (){
            console.log(sobr)
        })
    }
}

function CreateDraft(){
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
    for (let i = 2; i > -1; i--){
        efrsbDate += e[i]
        if (i !== 0) {
            efrsbDate += '-'
        }
    }

    if (dolzh === "Юридическое лицо"){
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

        $.post("http://localhost:8080/Sobr/ZServlet", sobr, function (){
            console.log(sobr)
        })
    } else if (dolzh === "Физическое лицо"){
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

        $.post("http://localhost:8080/Sobr/ZServlet", sobr, function (){
            console.log(sobr)
        })
    } else if (dolzh === "Индивидуальный предприниматель"){
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

        $.post("http://localhost:8080/Sobr/ZServlet", sobr, function (){
            console.log(sobr)
        })
    }
}

function Create1(){
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
    for (let i = 2; i > -1; i--){
        efrsbDate += e[i]
        if (i !== 0) {
            efrsbDate += '-'
        }
    }

    if (dolzh === "Юридическое лицо"){
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

        $.post("http://localhost:8080/Sobr/OServlet", sobr, function (){
            console.log(sobr)
        })
    } else if (dolzh === "Физическое лицо"){
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

        $.post("http://localhost:8080/Sobr/OServlet", sobr, function (){
            console.log(sobr)
        })
    } else if (dolzh === "Индивидуальный предприниматель"){
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

        $.post("http://localhost:8080/Sobr/OServlet", sobr, function (){
            console.log(sobr)
        })
    }
}

function CreateDraft1(){
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
    for (let i = 2; i > -1; i--){
        efrsbDate += e[i]
        if (i !== 0) {
            efrsbDate += '-'
        }
    }

    if (dolzh === "Юридическое лицо"){
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

        $.post("http://localhost:8080/Sobr/OServlet", sobr, function (){
            console.log(sobr)
        })
    } else if (dolzh === "Физическое лицо"){
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

        $.post("http://localhost:8080/Sobr/OServlet", sobr, function (){
            console.log(sobr)
        })
    } else if (dolzh === "Индивидуальный предприниматель"){
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

        $.post("http://localhost:8080/Sobr/OServlet", sobr, function (){
            console.log(sobr)
        })
    }
}