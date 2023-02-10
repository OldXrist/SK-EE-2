$.get('/AnswersCheckServlet', send, function (data) {
    console.log(data)

    if (!data.includes('null')) {
        for (let i = 0; i < 10; i++) {
            if (document.getElementById("tbl_" + i) !== null) {
                document.getElementById("tbl_" + i).remove()
            }
        }
        if (document.getElementById("finalVote") !== null) {
            document.getElementById("finalVote").remove()
        }
    }
})
