function Validate_reg () {

    let k = 0;

    if (document.getElementById("inn").value.length === 0 ||
        document.getElementById("inn").value.length !== 10 &
        document.getElementById("inn").value.length !== 12) {
        document.getElementById("inn").style.borderColor = 'red';
        k += 1;
        console.log(k)
    }
    if (document.getElementById("ogrn") === null) {
    } else if (document.getElementById("ogrn").value.length === 0 ||
        document.getElementById("ogrn").value.length !== 13) {
        document.getElementById("ogrn").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("poln_naim") === null) {
    } else if (document.getElementById("poln_naim").value.length === 0) {
        document.getElementById("poln_naim").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("naim_org") === null) {
    } else if (document.getElementById("naim_org").value.length === 0) {
        document.getElementById("naim_org").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("ur_addr") === null) {
    } else if (document.getElementById("ur_addr").value.length === 0) {
        document.getElementById("ur_addr").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("pocht_adres").value.length === 0) {
        document.getElementById("pocht_adres").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("phone").value.length === 0) {
        document.getElementById("phone").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("pass").value.length === 0) {
        document.getElementById("pass").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("email").value.length === 0 ||
        !document.getElementById("email").value.includes("@") ||
        document.getElementById("email").value.includes("..")) {
        document.getElementById("email").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("ogrnip") === null) {
    } else if (document.getElementById("ogrnip").value.length === 0 ||
        document.getElementById("ogrnip").value.length !== 15) {
        document.getElementById("ogrnip").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("ser") === null) {
    } else if (document.getElementById("ser").value.length === 0 ||
        document.getElementById("ser").value.length !== 5) {
        document.getElementById("ser").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("num") === null) {
    } else if (document.getElementById("num").value.length === 0 ||
        document.getElementById("num").value.length !== 7) {
        document.getElementById("num").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("vidacha") === null) {
    } else if (document.getElementById("vidacha").value.length === 0) {
        document.getElementById("vidacha").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("kem_vudan") === null) {
    } else if (document.getElementById("kem_vudan").value.length === 0) {
        document.getElementById("kem_vudan").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("famil") === null) {
    } else if (document.getElementById("famil").value.length === 0) {
        document.getElementById("famil").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("name") === null) {
    } else if (document.getElementById("name").value.length === 0) {
        document.getElementById("name").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("otch") === null) {
    } else if (document.getElementById("otch").value.length === 0) {
        document.getElementById("otch").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("snils") === null) {
    } else if (document.getElementById("snils").value.length === 0) {
        document.getElementById("snils").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("reg_nomer_au") === null) {
    } else if (document.getElementById("reg_nomer_au").value.length === 0) {
        document.getElementById("reg_nomer_au").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("data") === null) {
    } else if (document.getElementById("data").value.length === 0) {
        document.getElementById("data").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("pass2").value.length === 0 ||
        document.getElementById("pass2").value !== document.getElementById("pass").value) {
        document.getElementById("pass2").style.borderColor = 'red';
        k += 1;
    }
    if (document.getElementById("email_2").value.length === 0 ||
        document.getElementById("email_2").value !== document.getElementById("email").value ||
        document.getElementById("error").innerText.includes("существует")) {
        document.getElementById("email_2").style.borderColor = 'red';
        document.getElementById('error').innerText = 'Почты не совпадают'
        k += 1;
    } else if (
        document.getElementById("check1").checked === false ||
        document.getElementById("check2").checked === false ||
        document.getElementById("check3").checked === false
    ) {
        k += 1;
    }
    if (k > 0) {
        console.log('error')
    } else {
        const ogl = document.getElementById("ogl").innerHTML;
        const words = ogl.split(' ');
        let t = words[1];
        let type = t.substring(0, (t.length - 1));
        let role = words[2];

        if (role === 'ЮЛ') {
            let user = {
                type_users: type,
                role_users: role,
                unn: document.getElementById("inn").value,
                code_ogrn: document.getElementById("ogrn").value,
                poln_naim: document.getElementById("poln_naim").value,
                qr_adrs: document.getElementById("ur_addr").value,
                pocht_adres: document.getElementById("pocht_adres").value,
                telephon: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                pass: document.getElementById("pass").value,
                reg_date: Date
            };

            $.post("/Sobr/ULServlet", user, function () {
                console.log(user);
                regDocsUpload()
            });

            let inputData = {
                email: document.getElementById("email").value,
                subject: 'Регистрация'
            }

            $.post("/Sobr/EmailSender", inputData, function (data) {
                if (data === "") {
                    alert("Вы успешно зарегестрированы!");
                } else {
                    alert(data);
                }
            });

            $(".wait").fadeIn()
            $(".table1").animate({
                opacity: "0.3"
            });
            document.getElementById("inn").disabled = true
            document.getElementById("ogrn").disabled = true
            document.getElementById("poln_naim").disabled = true
            document.getElementById("ur_addr").disabled = true
            document.getElementById("pocht_adres").disabled = true
            document.getElementById("phone").disabled = true
            document.getElementById("email").disabled = true
            document.getElementById("email_2").disabled = true
            document.getElementById("pass").disabled = true
            document.getElementById("pass2").disabled = true

            document.getElementsByClassName("knopka").disabled = true

        } else if (role === 'ИП'){
            let user = {
                type_users: type,
                role_users: role,
                unn: document.getElementById("inn").value,
                telephon: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                ogrnip: document.getElementById("ogrnip").value,
                famil: document.getElementById("famil").value,
                name: document.getElementById("name").value,
                otch: document.getElementById("otch").value,
                snils: document.getElementById("snils").value,
                data: document.getElementById("data").value,
                pocht_adres: document.getElementById("pocht_adres").value,
                seria: document.getElementById("ser").value,
                nomer: document.getElementById("num").value,
                kem_vidan: document.getElementById("kem_vudan").value,
                pass: document.getElementById("pass").value,
                reg_date: Date
            };
            console.log(user)

            $.post("/Sobr/IPServlet", user, function () {
                console.log(user);
                regDocsUpload()
            });

            let inputData = {
                email: document.getElementById("email").value,
                subject: 'Регистрация'
            }

            $.post("/Sobr/EmailSender", inputData, function (data) {
                if (data === "") {
                    alert("Вы успешно зарегестрированы!");
                } else {
                    alert(data);
                }
            });

            $(".wait").fadeIn()
            $(".table2").animate({
                opacity: "0.3"
            });
            document.getElementById("inn").disabled = true
            document.getElementById("phone").disabled = true
            document.getElementById("email").disabled = true
            document.getElementById("ogrnip").disabled = true
            document.getElementById("famil").disabled = true
            document.getElementById("name").disabled = true
            document.getElementById("otch").disabled = true
            document.getElementById("snils").disabled = true
            document.getElementById("data").disabled = true
            document.getElementById("pocht_adres").disabled = true
            document.getElementById("ser").disabled = true
            document.getElementById("num").disabled = true
            document.getElementById("data").disabled = true
            document.getElementById("email_2").disabled = true
            document.getElementById("pass").disabled = true
            document.getElementById("pass2").disabled = true
            document.getElementsByClassName("knopka2").disabled = true

        } else if (role === 'ФЛ') {
            let user = {
                type_users: type,
                role_users: role,
                unn: document.getElementById("inn").value,
                pocht_adres: document.getElementById("pocht_adres").value,
                telephon: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                famil: document.getElementById("famil").value,
                name: document.getElementById("name").value,
                otch: document.getElementById("otch").value,
                snils: document.getElementById("snils").value,
                data: document.getElementById("data").value,
                seria: document.getElementById("ser").value,
                nomer: document.getElementById("num").value,
                pass: document.getElementById("pass").value,
                kem_vidan: document.getElementById("kem_vudan").value,
                reg_date: Date
            };

            $.post("/Sobr/FLServlet", user, function () {
                console.log(user);
                regDocsUpload()
            });

            let inputData = {
                email: document.getElementById("email").value,
                subject: 'Регистрация'
            }

            $.post("/Sobr/EmailSender", inputData, function (data) {
                if (data === "") {
                    alert("Вы успешно зарегестрированы!");
                } else {
                    alert(data);
                }
            });

            $(".wait").fadeIn()
            $(".table2").animate({
                opacity: "0.3"
            });

            document.getElementById("inn").disabled = true
            document.getElementById("phone").disabled = true
            document.getElementById("email").disabled = true
            document.getElementById("famil").disabled = true
            document.getElementById("name").disabled = true
            document.getElementById("otch").disabled = true
            document.getElementById("snils").disabled = true
            document.getElementById("pocht_adres").disabled = true
            document.getElementById("ser").disabled = true
            // document.getElementById("nomer").disabled = true
            document.getElementById("data").disbled = true
            document.getElementById("kem_vudan").disabled = true
            document.getElementById("email_2").disabled = true
            document.getElementById("pass").disabled = true
            document.getElementById("pass2").disabled = true
            document.getElementsByClassName("knopka2").disabled = true
        } else {
            let user = {
                type_users: type,
                role_users: role,
                unn: document.getElementById("inn").value,
                pocht_adres: document.getElementById("pocht_adres").value,
                telephon: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                famil: document.getElementById("famil").value,
                name: document.getElementById("name").value,
                otch: document.getElementById("otch").value,
                snils: document.getElementById("snils").value,
                seria: document.getElementById("ser").value,
                nomer: document.getElementById("num").value,
                data: document.getElementById("data").value,
                naim_org: document.getElementById("naim_org").value,
                kem_vidan: document.getElementById("kem_vudan").value,
                reg_nomer_au: document.getElementById("reg_nomer_au").value,
                pass: document.getElementById("pass").value,
                reg_date: Date
            };

            $.post("/Sobr/AUServlet", user, function () {
                console.log(user);
                regDocsUpload()
            });

            let inputData = {
                email: document.getElementById("email").value,
                subject: 'Регистрация'
            }

            $.post("/Sobr/EmailSender", inputData, function (data) {
                if (data === "") {
                    alert("Вы успешно зарегестрированы!");
                } else {
                    alert(data);
                }
            });

            $(".wait").fadeIn()
            $(".table2").animate({
                opacity: "0.3"
            });

            document.getElementById("inn").disabled = true
            document.getElementById("phone").disabled = true
            document.getElementById("email").disabled = true
            document.getElementById("famil").disabled = true
            document.getElementById("name").disabled = true
            document.getElementById("otch").disabled = true
            document.getElementById("snils").disabled = true
            document.getElementById("pocht_adres").disabled = true
            document.getElementById("ser").disabled = true
            document.getElementById("num").disabled = true
            document.getElementById("data").disbled = true
            document.getElementById("kem_vudan").disabled = true
            document.getElementById("email_2").disabled = true
            document.getElementById("pass").disabled = true
            document.getElementById("pass2").disabled = true
            document.getElementsByClassName("knopka2").disabled = true
        }
    }
}