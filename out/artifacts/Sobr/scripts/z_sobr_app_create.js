function Create(){
    let loc = window.location.href
    let snum = loc.split('=')
    console.log(snum[1])

    let uchStatus = document.getElementById("status").innerText
    let behalf = document.getElementById("behalf").innerText

    let application = {
        snum: snum[1],
        status: uchStatus,
        beh: behalf
    }

    $.post("http://localhost:8080/Sobr/NEWAPPServlet", application, function (){
        console.log(application)
    })
}