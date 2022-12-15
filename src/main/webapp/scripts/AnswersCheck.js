$.get('/Sobr/AnswersCheckServlet', send, function (data) {
    console.log(data)

    if (data === 'null') {
        for (let i = 0; i < 10; i++) {
            if (document.getElementById("tbl_" + i) !== null) {
                document.getElementById("tbl_" + i).remove()
            }
        }
        document.getElementById("finalVote").remove()
    }
})
