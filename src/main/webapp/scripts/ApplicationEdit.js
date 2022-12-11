let loc = window.location.href
let sk = loc.split('&')[0].split('=')
console.log(sk[1])

let send = {
    sk: sk[1]
}

function Accept(){
    let sknum = window.location.href.split('?')[1].split('=')[1].split('&')[0]
    let url = new URL('http://localhost:8080/Sobr/lichnui_kobinetu/lk_org/z_sobr/z_sobr_org_5.html')

    let status = {
        appId: window.location.href.split('&')[1].split('=')[1],
        status: "Допущена"
    }

    $.get('http://localhost:8080/Sobr/ApplicationUpdServlet', status)

    url.searchParams.append('sk', sknum)
    window.location.href = url.href
}

function Decline(){
    let sknum = window.location.href.split('?')[1].split('=')[1].split('&')[0]
    let url = new URL('http://localhost:8080/Sobr/lichnui_kobinetu/lk_org/z_sobr/z_sobr_org_5.html')

    let status = {
        appId: window.location.href.split('&')[1].split('=')[1],
        status: "Отклонена"
    }

    $.get('http://localhost:8080/Sobr/ApplicationUpdServlet', status)

    url.searchParams.append('sk', sknum)
    window.location.href = url.href
}

let locc = window.location.href
let appId = locc.split('&')[1].split('=')
console.log(appId[1])

let appID = {
    appId: appId[1]
}

$.get('http://localhost:8080/Sobr/ApplicationEditServlet', appID, function (data){
    console.log(data)

    let d = data.split('\n')
    let role = d[1]

    document.getElementById('number').innerText += appId[1]

    if (role.includes("ЮЛ")){
        document.getElementById("table").innerHTML += "Здесь разметка для ЮЛ"

    } else if (role.includes("ФЛ")){
        document.getElementById("table").innerHTML += "Здесь разметка для ФЛ"


    } else if (role.includes("ИП")){
        document.getElementById("table").innerHTML += "Здесь разметка для ИП"

    }
})