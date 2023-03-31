function UpdateProtocol(){
    let file = document.getElementById('protUpd').files[0]
    document.getElementById('signProt').disabled = false
    document.getElementById('signProt').style.opacity = '1'
    console.log(file)

    let id = {
        sk: sk
    }

    let formData = new FormData();
    formData.append('file', file)
    $.post('/AddMeetingNumServlet', id, function (){
        fetch('/ProtocolUpdateServlet', {method: "POST", body: formData})
    })
}

$("#protUpd").click(function (){
    document.getElementById('signProt').disabled = false
    document.getElementById('signProt').style.opacity = '1'
})

$.get('/CheckSobrStatusServlet', send, function (data){
    console.log(data)

    if (data.includes('Завершено')){
        document.getElementById('createProtocol').onclick = function CreateProtocol(){
            $.get("/ProtocolCreateServlet", send, function (data) {
                console.log(data)

                let downloadURL = '../../..' + data.split('ROOT')[1]
                let link = document.getElementById('link')
                link.style.display = 'none'
                link.href = downloadURL
                link.click();
            })
        }
    } else {
        document.getElementById('createProtocol').disabled = true
    }
})