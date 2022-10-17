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
    if (document.getElementById("obem_sobr").value.length === 0) {
        document.getElementById("obem_sobr").style.borderColor = 'red';
        k += 1;
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
    if (document.getElementById("snils").value.length === 0) {
        document.getElementById("snils").style.borderColor = 'red';
        k += 1;
    }

}