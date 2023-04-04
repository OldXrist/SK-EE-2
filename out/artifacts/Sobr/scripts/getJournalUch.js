$.post('/getJournalPathServlet', send, function (data){
    console.log(data)
    if (!data.includes('null')) {
        document.getElementById('journalDownload').href = '../../..' + data.split('ROOT')[1]
    } else {
        document.getElementById('journalDownload').disabled = true
        document.getElementById('journalDownload').style.opacity = '0.3'
    }
})