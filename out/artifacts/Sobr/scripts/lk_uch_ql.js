$.get("/LKQLServlet", function (data) {
    console.log(data)

    let d = data.split("\n")
    document.getElementById("poln_naim").placeholder = d[2]
    document.getElementById("qr_adrs").placeholder = d[3]
    document.getElementById("pocht_adres").placeholder = d[4]
    document.getElementById("unn").placeholder = d[0]
    document.getElementById("ogrn").placeholder = d[1]
    document.getElementById("phone").placeholder = d[5]
    document.getElementById("email").placeholder = d[6]
})

function Update_data(){
    let update_req = {}

    if (document.getElementById("poln_naim").value !== ""){
        update_req = Object.assign(update_req,{qr_adrs: document.getElementById("poln_naim").value})
    }
    if (document.getElementById("qr_adrs").value !== ""){
        update_req = Object.assign(update_req,{qr_adrs: document.getElementById("qr_adrs").value})
    }
    if (document.getElementById("pocht_adres").value !== ""){
        update_req = Object.assign(update_req,{pocht_adres: document.getElementById("pocht_adres").value})
    }
    if (document.getElementById("unn").value !== ""){
        update_req = Object.assign(update_req,{unn: document.getElementById("unn").value})
    }
    if (document.getElementById("ogrn").value !== ""){
        update_req = Object.assign(update_req,{ogrn: document.getElementById("ogrn").value})
    }
    if (document.getElementById("phone").value !== ""){
        update_req = Object.assign(update_req,{phone: document.getElementById("phone").value})
    }
    if (document.getElementById("email").value !== ""){
        update_req = Object.assign(update_req,{email: document.getElementById("email").value})
    }
    console.log(update_req)
}