function updateJournal() {
    let journal = document.getElementById('journalUpdate').files[0]

    let id = {
        sk: sk
    }

    let formData = new FormData();
    formData.append('file', journal)
    $.post('/AddMeetingNumServlet', id, function () {
        fetch('/journalUpdateServlet', {method: "POST", body: formData})
    })
}