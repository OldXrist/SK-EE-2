let loc = window.location.href
let snum = loc.split('=')
document.getElementById('number').innerHTML += snum[1] + " - заочное"

let send = {
    sk: snum[1]
}

$.get("http://localhost:8080/Sobr/CHECKTYPEServlet", send, function (data){
    console.log(data)

    if (data.includes('организатор') && data.includes('y')){
        window.location.href = '/Sobr/lichnui_kobinetu/lk_org/z_sobr/z_sobr_org_2.html' + '?sk='+snum[1]
    }
})