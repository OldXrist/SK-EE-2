$.get('/ProtocolCheckServlet', send, function (data) {
    if (data !== '') {
        let link = document.getElementById('link')
        link.style.display = 'none'
        link.href = "../../../protocols/Протокол собрания кредиторов №" + sk + '.doc'
    } else {
        document.getElementById('downloadProtocol').disabled = true
    }
})

function Download() {
    let link = document.getElementById('link')
    link.click();
}