$.get("http://localhost:8080/Sobr/LKAUServlet", function (data) {
    console.log(data)

    let d = data.split("\n")
    document.getElementById("famil").placeholder = d[4]
    document.getElementById("name").placeholder = d[5]
    document.getElementById("otch").placeholder = d[6]
    document.getElementById("pocht_adres").placeholder = d[1]
    document.getElementById("unn").placeholder = d[0]
    document.getElementById("snils").placeholder = d[7]
    document.getElementById("telefon").placeholder = d[2]
    document.getElementById("email").placeholder = d[3]
    document.getElementById("seria").placeholder = d[8]
    document.getElementById("nomer").placeholder = d[9]
    document.getElementById("data").placeholder = d[13]
    document.getElementById("kem_vidan").placeholder = d[11]
    document.getElementById("reg_nomer_au").placeholder = d[12]
})

function Update_data(){
    let update_req = {}

    if (document.getElementById("famil").value !== ""){
        update_req = Object.assign(update_req,{famil: document.getElementById("famil").value})
    }
    if (document.getElementById("name").value !== ""){
        update_req = Object.assign(update_req,{name: document.getElementById("name").value})
    }
    if (document.getElementById("otch").value !== ""){
        update_req = Object.assign(update_req,{otch: document.getElementById("otch").value})
    }
    if (document.getElementById("pocht_adres").value !== ""){
        update_req = Object.assign(update_req,{pocht_adres: document.getElementById("pocht_adres").value})
    }
    if (document.getElementById("telefon").value !== ""){
        update_req = Object.assign(update_req,{telefon: document.getElementById("telefon").value})
    }
    if (document.getElementById("email").value !== ""){
        update_req = Object.assign(update_req,{email: document.getElementById("email").value})
    }
    if (document.getElementById("seria").value !== ""){
        update_req = Object.assign(update_req,{seria: document.getElementById("seria").value})
    }
    if (document.getElementById("nomer").value !== ""){
        update_req = Object.assign(update_req,{nomer: document.getElementById("nomer").value})
    }
    if (document.getElementById("data").value !== ""){
        update_req = Object.assign(update_req,{data: document.getElementById("data").value})
    }
    if (document.getElementById("kem_vidan").value !== ""){
        update_req = Object.assign(update_req,{kem_vidan: document.getElementById("kem_vidan").value})
    }
    if (document.getElementById("naim_org").value !== ""){
        update_req = Object.assign(update_req,{naim_org: document.getElementById("naim_org").value})
    }
    if (document.getElementById("reg_nomer_au").value !== ""){
        update_req = Object.assign(update_req,{reg_nomer_au: document.getElementById("reg_nomer_au").value})
    }
    console.log(update_req)
}