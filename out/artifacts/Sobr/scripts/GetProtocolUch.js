function Download() {
    $.get('/ProtocolCheckServlet', send, function (data) {
        console.log(data)

        let downloadURL = '../../..' + data.split('ROOT')[1]
        let link = document.getElementById('link')
        link.style.display = 'none'
        link.href = downloadURL
        link.click();
    })
}