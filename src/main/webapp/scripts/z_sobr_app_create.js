function Create(){

    let uchStatus = document.getElementById("status").innerText
    let behalf = document.getElementById("behalf").innerText

    let application = {
        snum: sk,
        status: uchStatus,
        beh: behalf,
        appStatus: "На рассмотрении"
    }

    $.post("/NEWAPPServlet", application, function (){
        console.log(application)
    })
}

function CreateDraft(){

    let uchStatus = document.getElementById("status").innerText
    let behalf = document.getElementById("behalf").innerText

    let applicationDraft = {
        snum: sk,
        status: uchStatus,
        beh: behalf,
        appStatus: "Черновик"
    }

    $.post("/NEWAPPServlet", applicationDraft, function (){
        console.log(applicationDraft)
    })
}