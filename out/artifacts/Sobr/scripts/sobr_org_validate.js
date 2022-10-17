function Validate () {

    let k = 0;

    if (document.getElementById("date_sobr").value.length === 0 ||
        document.getElementById("date_sobr").value.length !== 10) {
        document.getElementById("date_sobr").style.borderColor = 'red';
        k += 1;
        console.log(k)
    }
    if (document.getElementById("time").value.length === 0 ||
        document.getElementById("time").value.length !== 5) {
        document.getElementById("time").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("povestka").value.length === 0) {
        document.getElementById("povestka").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("date_z").value.length === 0 ||
        document.getElementById("date_z").value.length !== 10) {
        document.getElementById("date_z").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("time_z").value.length === 0 ||
        document.getElementById("time_z").value.length !== 5) {
        document.getElementById("time_z").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("date_b").value.length === 0 ||
        document.getElementById("date_b").value.length !== 10) {
        document.getElementById("date_b").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("time_b").value.length === 0 ||
        document.getElementById("time_b").value.length !== 5) {
        document.getElementById("time_b").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("date_z2").value.length === 0 ||
        document.getElementById("date_z2").value.length !== 10) {
        document.getElementById("date_z2").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("time_z2").value.length === 0 ||
        document.getElementById("time_z2").value.length !== 5) {
        document.getElementById("time_z2").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("date_b2").value.length === 0 ||
        document.getElementById("date_b2").value.length !== 10) {
        document.getElementById("date_b2").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("time_b2").value.length === 0 ||
        document.getElementById("time_b2").value.length !== 5) {
        document.getElementById("time_b2").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("date_p").value.length === 0 ||
        document.getElementById("date_p").value.length !== 10) {
        document.getElementById("date_p").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("time_p").value.length === 0 ||
        document.getElementById("time_p").value.length !== 5) {
        document.getElementById("time_p").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("obem_sobr") !== null) {
        if (document.getElementById("obem_sobr").placeholder === "Выбрать количество") {
            document.getElementById("obem_sobr").style.borderColor = 'red';
            k += 1;
        }
    }
    if (document.getElementById("efrsb").value.length === 0) {
        document.getElementById("efrsb").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("date_razm").value.length === 0 ||
        document.getElementById("date_razm").value.length !== 10) {
        document.getElementById("date_razm").style.borderColor = 'red';
        k += 1;
    }
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
    if (k > 0) {
        console.log('error')
    }
}