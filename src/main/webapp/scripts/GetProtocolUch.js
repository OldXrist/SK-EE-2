let send = {
    sk: snum[1]
}

$.get('/Sobr/ProtocolCheckServlet', send, function (data) {
    if (data !== '') {
        let link = document.getElementById('link')
        link.style.display = 'none'
        link.href = "../../../protocols/Протокол собрания кредиторов №" + snum[1] + '.doc'
    } else {
        document.getElementById('downloadProtocol').disabled = true
    }
})

function Download() {
    let link = document.getElementById('link')
    link.click();
}