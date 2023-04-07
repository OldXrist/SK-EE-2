function goTO(page){
    let next = 0
    let i = 1
    while (document.getElementById('c'+i) !== null){
        document.getElementById('c'+i).style.display = 'none'
        i++
    }
    for (let i = 1; i < 6; i++){
        let first = 1+5*(page - 1)
        console.log('first = '+first)
        if (next < first + 4) {
            next = first + i
        }
        console.log('next = '+next)
        //let prev = first - i
        //console.log('prev = '+prev)
        if (document.getElementById('c' + next) !== null) {
            document.getElementById('c' + next).style.display = ''
        }
        //if (document.getElementById('c' + prev) !== null) {
        //    document.getElementById('c' + prev).style.display = 'none'
        //}
        if (document.getElementById('c' + first) !== null) {
            document.getElementById('c' + first).style.display = ''
        }
    }
}

function page(id){
    //let k = 75 * (parseInt(id.split('_')[1]) - 1)
    //document.getElementById('table').innerHTML = ''
    let i = 1

    while (document.getElementById('page_'+i) !== null){
        document.getElementById('page_'+i).style.color = '#104781'
        document.getElementById('page_'+i).style.background = '#ffffff'
        i++
    }

    if (id.split('_')[0] === 'page') {
        document.getElementById(id).style.color = '#ffffff'
        document.getElementById(id).style.background = '#104781'
    }

    if (id.split('_')[0] === 'next') {
        let x = parseInt(id.split('_')[1])
        let n = 1
        document.getElementById('next_'+x).style.display = 'none'
        while(document.getElementById('page_'+n) !== null){
            document.getElementById('page_'+n).style.display = 'none'
            n++
        }
        for (let i = 1; i < 3; i++){
            let next = x+i
            if (document.getElementById("page_" + next) !== null) {
                document.getElementById("page_" + next).style.display = ''
            }
        }
        let newNext = x + 3
        let lastPrev = x - 3
        if (document.getElementById("prev_" + lastPrev) !== null) {
            document.getElementById("prev_" + lastPrev).style.display = 'none'
        }
        if (document.getElementById('prev_'+x) !== null) {
            document.getElementById('prev_' + x).style.display = ''
        }
        if (document.getElementById('next_'+newNext) !== null) {
            document.getElementById('next_' + newNext).style.display = ''
        }
        if (document.getElementById('page_'+x) !== null) {
            document.getElementById('page_' + x).style.display = ''
        }
        /*
        let x = parseInt(id.split('_')[1])
        document.getElementById(id).style.display = 'none'
        document.getElementById('prev_'+x).style.display = ''
        document.getElementById('page_'+x).style.display = ''
        for (let i = 1; i < 4; i++){
            let prev = x-i
            let next = x+i
            document.getElementById("page_" + prev).style.display = 'none'
            if (document.getElementById("page_" + next) !== null) {
                document.getElementById("page_" + next).style.display = ''
            }
        }
         */
    } else if (id.split('_')[0] === 'prev'){
        let x = parseInt(id.split('_')[1])
        let n = 1
        document.getElementById('prev_'+x).style.display = 'none'
        while(document.getElementById('page_'+n) !== null){
            document.getElementById('page_'+n).style.display = 'none'
            n++
        }
        for (let i = 1; i < 4; i++){
            let prev = x-i
            if (document.getElementById("page_" + prev) !== null) {
                document.getElementById("page_" + prev).style.display = ''
            }
        }
        let lastNext = x + 3
        let newPrev = x - 3
        if (document.getElementById("next_" + lastNext) !== null) {
            document.getElementById("next_" + lastNext).style.display = 'none'
        }
        document.getElementById('next_'+x).style.display = ''
        if (document.getElementById('prev_'+newPrev) !== null) {
            document.getElementById('prev_' + newPrev).style.display = ''
        }
        document.getElementById('page_'+x).style.display = 'none'
        /*
        let x = parseInt(id.split('_')[1])
        document.getElementById(id).style.display = 'none'
        document.getElementById('next_'+x).style.display = ''
        document.getElementById('page_'+x).style.display = 'none'
        for (let i = 1; i < 4; i++){
            let prev = x-i
            let next = x+i
            document.getElementById("page_" + prev).style.display = ''
            if (document.getElementById("page_" + next) !== null) {
                document.getElementById("page_" + next).style.display = 'none'
            }
        }

         */
    }
    /*
        $.get("http://localhost:8080/Sobr/LKUCHServlet", function (data){
            let d = data.split("\n")
            if (document.getElementById('table').innerHTML === '') {
                for (let i = 1; i < 6; i++) {
                    Cards(d, k, i)
                    k += 15
                }
            }
        })
     */
    let pageNum = parseInt(id.split('_')[1])
    let prefix = id.split('_')[0]

    if (prefix === 'page'){
        goTO(pageNum)
    } else if (prefix === 'next'){
        goTO(pageNum)
        document.getElementById('page_' + pageNum).style.color = '#ffffff'
        document.getElementById('page_' + pageNum).style.background = '#104781'
    } else {
        goTO(pageNum - 1)
        let n = pageNum - 1
        document.getElementById('page_' + n).style.color = '#ffffff'
        document.getElementById('page_' + n).style.background = '#104781'
    }
}

function dateParse (x){
    let dateTime = x.split(" ");
    let date = dateTime[0]
    let dA = date.split('-')

    return dA[2] + '.' + dA[1] + '.' + dA[0]
}

function timeParse (x){
    let dateTime = x.split(" ");
    let time = dateTime[1]
    let tA = time.split(':')

    return tA[0] + ':' + tA[1]
}

function Cards(dt, i, m) {
    m = "c" + m
    let lim = i + 7;
    let arr = [];
    for (i; i < lim; i++) {
        arr.push(dt[i])
    }

    let date = dateParse(arr[2]) + " " + timeParse(arr[2])

    if (arr[0].includes("ЮЛ")) {
        document.getElementById("table").innerHTML +=
            "           <div class=\"table_item\" id=" + m + ">\n" +
            "                <h3 class=\"table_h\">№ " + arr[6] + "</h3>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Кредитор</li>\n" +
            "                    <li>" + arr[3] + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Дата и время</li>\n" +
            "                    <li>" + date + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Статус</li>\n" +
            "                    <li>" + arr[1] + "</li>\n" +
            "                </ul>\n" +
            "            </div>"

    } else {
        document.getElementById("table").innerHTML +=
            "           <div class=\"table_item\" id=" + m + ">\n" +
            "                <h3 class=\"table_h\">№ " + arr[6] + "</h3>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Кредитор</li>\n" +
            "                    <li>" + arr[3] + arr[4] + arr[5] + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Дата и время</li>\n" +
            "                    <li>" + date + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Статус</li>\n" +
            "                    <li>" + arr[1] + "</li>\n" +
            "                </ul>\n" +
            "            </div>"
    }
}

$.get("/ZAPPRServlet", send,  function (data){

    console.log(data)
    let d = data.split("\n")
    let pageNum = Math.ceil(d.length / 7 / 5)
    console.log(pageNum)
    let k = 0
    for (let i = 1; i < Math.ceil(d.length / 7); i++) {
        Cards(d, k, i)
        k += 7
    }

    let pageLim = 4

    for (let i  =  6; i < Math.ceil(d.length / 7); i++){
        document.getElementById('c'+i).style.display = 'none'
    }


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
                    console.log(x)
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
})
