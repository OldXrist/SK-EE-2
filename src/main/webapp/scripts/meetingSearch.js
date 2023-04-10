function meetSearch(){
    let search = {
        number: document.getElementById('searchNum').value,
        debtor: document.getElementById('searchDebtor').value,
        org: document.getElementById('searchOrg').value,
        from: document.getElementById('searchFrom').value,
        until: document.getElementById('searchUntil').value,
        status: document.getElementById('searchStatus').value,
        type: document.getElementById('searchType').value
    }

    $.get('/SearchMeetingServlet', search, function (data){

        console.log(data)

        document.getElementById('table').innerHTML = ""

        if (data !== '') {
            let d = data.split("\n")
            let k = 0;
            for (let i = 1; i < 5; i++) {
                Cards(d, k, i)
                k += 15
            }
        }
    })
}