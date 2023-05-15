function UpdateProtocol(){
    let file = document.getElementById('protUpd').files[0]
    console.log(file)

    if (file !== null) {
        let id = {
            sk: sk
        }

        let formData = new FormData();
        formData.append('file', file)
        $.post('/AddMeetingNumServlet', id, function () {
            fetch('/ProtocolUpdateServlet', {method: "POST", body: formData})
        })
    }
}

$.get('/CheckSobrStatusServlet', send, function (data){
    console.log(data)

    if (data.includes('Завершено')){
        document.getElementById('createProtocol').onclick = function CreateProtocol(){
            $.get("/ProtocolCreateServlet", send, function (data) {
                console.log(data)
                document.getElementById('downloadProtocol').href = '/archive' + data
            })
        }
    } else {
        document.getElementById('createProtocol').disabled = true
    }
})