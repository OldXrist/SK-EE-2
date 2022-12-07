let send = {
    sk: snum[1]
}

function CreateProtocol(){
    $.get("/Sobr/ProtocolCreateServlet", send, function (data){
        console.log(data)
    })
}