$.get('/ProtocolCheckServlet', send, function (data) {
    console.log(data)

    if (data !== '') {
        document.getElementById('downloadProtocol').href = '/archive' + data
    } else {
        document.getElementById('downloadProtocol').style.opacity = '0.3'
        document.getElementById('downloadProtocol').disabled = true
    }
})
