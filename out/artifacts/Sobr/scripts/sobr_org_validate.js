function Validate () {
    let k = 0;

    let date = document.getElementById("date_sobr")
    let time = document.getElementById("time")
    let date_z = document.getElementById("date_z")
    let time_z = document.getElementById("time_z")
    let date_z2 = document.getElementById("date_z2")
    let time_z2 = document.getElementById("time_z2")
    let date_b = document.getElementById("date_b")
    let time_b = document.getElementById("time_b")
    let date_b2 = document.getElementById("date_b2")
    let time_b2 = document.getElementById("time_b2")
    let date_p = document.getElementById("date_p")
    let time_p = document.getElementById("time_p")


    if (date.value.length === 0 ||
        date.value.length !== 10) {
        date.style.borderColor = 'red';
        k += 1;
        console.log(k)
    }
    if (time.value.length === 0 ||
        time.value.length !== 5) {
        time.style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("povestka").value.length === 0) {
        document.getElementById("povestka").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("demandSum").value.length === 0) {
        document.getElementById("demandSum").style.borderColor = 'red';
        k += 1;
    }
    if (date_z.value.length === 0 ||
        date_z.value.length !== 10) {
        date_z.style.borderColor = 'red';
        k += 1;
    }
    if (time_z.value.length === 0 ||
        time_z.value.length !== 5) {
        time_z.style.borderColor = 'red';
        k += 1;
    }
    if (date_b.value.length === 0 ||
        date_b.value.length !== 10) {
        date_b.style.borderColor = 'red';
        k += 1;
    }
    if (time_b.value.length === 0 ||
        time_b.value.length !== 5) {
        time_b.style.borderColor = 'red';
        k += 1;
    }
    if (date_z2.value.length === 0 ||
        date_z2.value.length !== 10) {
        date_z2.style.borderColor = 'red';
        k += 1;
    }
    if (time_z2.value.length === 0 ||
        time_z2.value.length !== 5) {
        time_z2.style.borderColor = 'red';
        k += 1;
    }
    if (date_b2.value.length === 0 ||
        date_b2.value.length !== 10) {
        date_b2.style.borderColor = 'red';
        k += 1;
    }
    if (time_b2.value.length === 0 ||
        time_b2.value.length !== 5) {
        time_b2.style.borderColor = 'red';
        k += 1;
    }
    if (date_p.value.length === 0 ||
        date_p.value.length !== 10) {
        date_p.style.borderColor = 'red';
        k += 1;
    }
    if (time_p.value.length === 0 ||
        time_p.value.length !== 5) {
        time_p.style.borderColor = 'red';
        k += 1;
    }
    if (dtValidate(date, time)){
        k++
    }
    if (dtValidate(date_z, time_z)){
        k++
    }
    if (dtValidate(date_z2, time_z2)){
        k++
    }
    if (dtValidate(date_b, time_b)){
        k++
    }
    if (dtValidate(date_b2, time_b2)){
        k++
    }
    if (dtValidate(date_p, time_p)){
        k++
    }
    if ((dtParse(date_b, time_b) - dtParse(date_z2, time_z2)) < 300000){
        date_b.style.borderColor = 'red'
        time_b.style.borderColor = 'red'
    }
    if (document.getElementById("obem_sobr") !== null) {
        if (document.getElementById("obem_sobr").placeholder === "Выбрать количество") {
            document.getElementById("obem_sobr").style.borderColor = 'red';
            k += 1;
        }
    }
    /*
    if (document.getElementById("efrsb").value.length === 0) {
        document.getElementById("efrsb").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("date_razm").value.length === 0 ||
        document.getElementById("date_razm").value.length !== 10) {
        document.getElementById("date_razm").style.borderColor = 'red';
        k += 1;
    }

     */
    if (document.getElementById("naim_abr_sud").value.length === 0) {
        document.getElementById("naim_abr_sud").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("nomer_dela").value.length === 0) {
        document.getElementById("nomer_dela").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("osn_dlia_sobr").value.length === 0) {
        document.getElementById("osn_dlia_sobr").style.borderColor = 'red';
        k += 1;
    }

    let dolzh = document.getElementById("tip_dolzh").placeholder

    if (dolzh === "Не выбрано"){
        document.getElementById("tip_dolzh").style.borderColor = 'red';
        k += 1;
    } else if (dolzh === "Физическое лицо"){
        if (document.getElementById("famil").value.length === 0) {
            document.getElementById("famil").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("name").value.length === 0) {
            document.getElementById("name").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("otch").value.length === 0) {
            document.getElementById("otch").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("snils").value.length === 0 ||
            document.getElementById("snils").value.length !== 14) {
            document.getElementById("snils").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("pocht").value.length === 0) {
            document.getElementById("pocht").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("inn").value.length === 0 ||
            document.getElementById("inn").value.length !== 12) {
            document.getElementById("inn").style.borderColor = 'red';
            k += 1;
        }
    } else if (dolzh === "Юридическое лицо"){
        if (document.getElementById("poln_naim").value.length === 0) {
            document.getElementById("poln_naim").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("qr_adrs").value.length === 0) {
            document.getElementById("qr_adrs").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("pocht3").value.length === 0) {
            document.getElementById("pocht3").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("unn4").value.length === 0 ||
            document.getElementById("unn4").value.length !== 10) {
            document.getElementById("unn4").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("ogrn3").value.length === 0 ||
            document.getElementById("ogrn3").value.length !== 13) {
            document.getElementById("ogrn3").style.borderColor = 'red';
            k += 1;
        }
    } else {
        if (document.getElementById("famil2").value.length === 0) {
            document.getElementById("famil2").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("name2").value.length === 0) {
            document.getElementById("name2").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("otch2").value.length === 0) {
            document.getElementById("otch2").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("pocht2").value.length === 0) {
            document.getElementById("pocht2").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("inn2").value.length === 0 ||
            document.getElementById("inn2").value.length !== 12) {
            document.getElementById("inn2").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("snils2").value.length === 0 ||
            document.getElementById("snils2").value.length !== 14) {
            document.getElementById("snils2").style.borderColor = 'red';
            k += 1;
        }
        if (document.getElementById("ogrnip").value.length === 0 ||
            document.getElementById("ogrnip").value.length !== 15) {
            document.getElementById("ogrnip").style.borderColor = 'red';
            k += 1;
        }

    }
    return k
}

function dtParse(date, time){
    let d = date.split('.')
    return Date.parse(d[2] + "-" + d[1] + "-" + d[0] + "T" + time)
}

function dtValidate(date, time){
    if (dtParse(date.value, time.value) < Date.now() || isNaN(dtParse(date.value, time.value))){
        date.style.borderColor = 'red'
        time.style.borderColor = 'red'
    } else {
        date.style.borderColor = 'white'
        time.style.borderColor = 'white'
    }
    return dtParse(date.value, time.value) < Date.now()
}