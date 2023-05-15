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

function meetSearchReestr(){
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
            let pageNum = Math.ceil(d.length / 15 / 5)

            let k = 0;
            for (let i = 1; i < Math.ceil(d.length / 15); i++) {
                Cards(d, k, i)
                k += 15
            }
            let pageLim = 4

            for (let i  =  6; i < Math.ceil(d.length / 15); i++){
                if (document.getElementById('c' + i) !== null) {
                    document.getElementById('c' + i).style.display = 'none'
                }
            }

            console.log(pageNum)

            switch (true){
                case pageNum === 1:
                    break;
                case pageNum < pageLim:
                    for (let i = 1; i < pageNum + 1; i++){
                        document.getElementById('pages').innerHTML += `<li class="pages" id=\"page_${i}\" onclick=\"page(this.id)\">${i}</li>`
                    }
                    break;
                case pageNum >= pageLim:
                    let x = 1
                    for (let i = 1; i < pageNum + 1; i++){
                        if (i === x + 3){
                            document.getElementById('pages').innerHTML += `<li class="pages" id=\"prev_${i}\" onclick=\"page(this.id)\">...</li>`
                            document.getElementById('pages').innerHTML += `<li class="pages" id=\"next_${i}\" onclick=\"page(this.id)\">...</li>`
                            document.getElementById('pages').innerHTML += `<li class="pages" id=\"page_${i}\" onclick=\"page(this.id)\">${i}</li>`
                            x += 3
                        } else document.getElementById('pages').innerHTML += `<li class="pages" id=\"page_${i}\" onclick=\"page(this.id)\">${i}</li>`
                    }
                    x = 1
                    for (let i = 4; i < pageNum + 1; i++) {
                        if (i === x + 3) {
                            document.getElementById('prev_'+i).style.display = 'none'
                            document.getElementById('next_'+i).style.display = 'none'
                            document.getElementById("page_" + i).style.display = 'none'
                            x += 3
                        } else document.getElementById("page_" + i).style.display = 'none'
                    }
                    document.getElementById('next_4').style.display = ''
                    break;
            }

            if (document.getElementById('page_1') !== null) {
                document.getElementById('page_1').style.color = '#ffffff'
                document.getElementById('page_1').style.backgroundColor = '#104781'
            }
        }
    })
}