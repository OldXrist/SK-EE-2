$.get("http://localhost:8080/Sobr/ORGCARDServlet", function (data){
    console.log(data)

    let d = data.split("\n")
    document.getElementById("unn").value = d[0]
    document.getElementById("ogrn").value = d[1]
    document.getElementById("naim_org").value = d[2]
    document.getElementById("qr_adres").value = d[3]
    document.getElementById("pocht_adres").value = d[4]
    document.getElementById("phone").value = d[5]
    document.getElementById("email").value = d[6]

    document.getElementById("unn").disabled = true
    document.getElementById("ogrn").disabled = true
    document.getElementById("naim_org").disabled = true
    document.getElementById("qr_adres").disabled = true
    document.getElementById("pocht_adres").disabled = true
    document.getElementById("phone").disabled = true
    document.getElementById("email").disabled = true
})