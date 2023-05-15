$.post('/journalCreateServlet', send, function (data){
    document.getElementById('journalDownload').href = '/archive' + data
})