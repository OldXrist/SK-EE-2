$(document).ready(function () {
    $(".nav_login").hide();
    $("#clock").hide();
    $("#logout_btn").hide();
    $(".logout").hide();

    $.post("/Sobr/GetAdminCredentials", function (result) {
        console.log(result);
        let lastName = document.getElementById("last-name");
        let firstName = document.getElementById("first-name");
        let middleName = document.getElementById("middle-name");
        let phone = document.getElementById("phone");
        let email = document.getElementById("email");
        let repeatEmail = document.getElementById("repeat-email");
        let login = document.getElementById("login");
        let password = document.getElementById("password");
        let repeatPassword = document.getElementById("repeat-password")

        lastName.value = result[3];
        firstName.value = result[1];
        middleName.value = result[2];
        phone.value = result[4];
        email.value = result[5];
        repeatEmail.value = result[5];
        login.value = result[6];
        password.value = result[7];
        repeatPassword.value = result[7];
    });
});

//clock
setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);

//validation
function ValidateAdminCredentials() {
    let isValidate = true;
    let lastName = document.getElementById("last-name");
    let firstName = document.getElementById("first-name");
    let middleName = document.getElementById("middle-name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let repeatEmail = document.getElementById("repeat-email");
    let login = document.getElementById("login");
    let password = document.getElementById("password");
    let repeatPassword = document.getElementById("repeat-password");

    if(lastName.value.length === 0){
        lastName.style.borderColor = 'red';
        isValidate = false;
    }
    if (firstName.value.length === 0){
        firstName.style.borderColor = 'red';
        isValidate = false;
    }
    if (middleName.value.length === 0){
        middleName.style.borderColor = 'red';
        isValidate = false;
    }
    if (phone.value.length === 0){
        phone.style.borderColor = 'red';
        isValidate = false;
    }
    if (email.value.length === 0){
        email.style.borderColor = 'red';
        isValidate = false;
    }
    if (repeatEmail.value.length === 0){
        repeatEmail.style.borderColor = 'red';
        isValidate = false;
    }
    if (login.value.length === 0){
        login.style.borderColor = 'red';
        isValidate = false;
    }
    if (password.value.length === 0){
        password.style.borderColor = 'red';
        isValidate = false;
    }
    if (repeatPassword.value.length === 0){
        repeatPassword.style.borderColor = 'red';
        isValidate = false;
    }
    if (email.value != repeatEmail.value){
        email.style.borderColor = 'red';
        repeatEmail.style.borderColor = 'red';
        isValidate = false;
        alert("?????????????????????? ?????????? ???????????? ??????????????????");
    }
    if (password.value != repeatPassword.value){
        password.style.borderColor = 'red';
        repeatPassword.style.borderColor = 'red';
        isValidate = false;
        alert("???????????? ?????????? ??????????????????");
    }

    if (!isValidate) {
        console.log('error validation');
    }
    else {
        let adminData = {
            lastName: lastName.value,
            firstName: firstName.value,
            middleName: middleName.value,
            phone: phone.value,
            email: email.value,
            login: login.value,
            password: password.value
        }

        $.post("/Sobr/ChangeAdminCredentialsServlet", adminData, function (data) {
            if (data == "") {
                alert("???????????? ?????????????? ??????????????????!");
                lastName.style.borderColor = '#E6F5F7';
                firstName.style.borderColor = '#E6F5F7';
                middleName.style.borderColor = '#E6F5F7';
                phone.style.borderColor = '#E6F5F7';
                email.style.borderColor = '#E6F5F7';
                repeatEmail.style.borderColor = '#E6F5F7';
                login.style.borderColor = '#E6F5F7';
                password.style.borderColor = '#E6F5F7';
                repeatPassword.style.borderColor = '#E6F5F7';
            } else {
                alert(data);
            }
        });
    }
}