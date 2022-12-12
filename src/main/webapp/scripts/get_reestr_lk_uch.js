function goTO(page){
    let next = 0
    let i = 1
    while (document.getElementById('c'+i) !== null){
        document.getElementById('c'+i).style.display = 'none'
        i++
    }
    for (let i = 1; i < 6; i++){
        let first = 1+5*(page - 1)
        if (next < first + 4) {
            next = first + i
        }
        if (document.getElementById('c' + next) !== null) {
            document.getElementById('c' + next).style.display = ''
        }
        document.getElementById('c' + first).style.display = ''
    }
}

function page(id){

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
        document.getElementById('prev_'+x).style.display = ''
        document.getElementById('next_'+newNext).style.display = ''
        document.getElementById('page_'+x).style.display = ''
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
    }

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
    let lim = i + 15;
    let arr = [];
    for (i; i < lim; i++) {
        arr.push(dt[i])
    }

    let date1 = dateParse(arr[1]) + " " + timeParse(arr[1])
    let date2 = dateParse(arr[2]) + ' - ' + dateParse(arr[3])
    console.log(arr[4], arr[10])
    if (arr[4].includes("Юридическое") && arr[10].includes("ЮЛ")) {
        document.getElementById("table").innerHTML += "<div id = " + m + " class=\"table_item\" onclick='Redirect(this.id)'/>\n" +
            "                <h3 class=\"table_h\"><b>" + arr[0] + arr[9] + "</h3>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Организатор</li>\n" +
            "                    <li>" + arr[11] + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data debtor\">\n" +
            "                    <li class=\"thin_text\">Должник</li>\n" +
            "                    <li>" + arr[8] + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data status\">\n" +
            "                    <li class=\"thin_text\">Статус</li>\n" +
            "                    <li>"+ arr[14] +"</li>\n" +
            "                </ul>\n" +
            "                <div class=\"vl\"></div>\n" +
            "                <div class=\"date\">\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Дата проведения собрания</li>\n" +
            "                        <li>" + date1 + "</li>\n" +
            "                    </ul>\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Даты приема заявок</li>\n" +
            "                        <li>" + date2 + "</li>\n" +
            "                    </ul>\n" +
            "</div>\n" +
            "</div>"

    } else if (arr[4].includes("Юридическое") && !arr[10].includes("ЮЛ")) {
        document.getElementById("table").innerHTML += "<div id = " + m + " class=\"table_item\" onclick='Redirect(this.id)'/>\n" +
            "                <h3 class=\"table_h\"><b>" + arr[0] + arr[9] + "</h3>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Организатор</li>\n" +
            "                    <li>" + arr[11] + arr[12] + arr[13] + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data debtor\">\n" +
            "                    <li class=\"thin_text\">Должник</li>\n" +
            "                    <li>" + arr[8] + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data status\">\n" +
            "                    <li class=\"thin_text\">Статус</li>\n" +
            "                    <li>"+ arr[14] +"</li>\n" +
            "                </ul>\n" +
            "                <div class=\"vl\"></div>\n" +
            "                <div class=\"date\">\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Дата проведения собрания</li>\n" +
            "                        <li>" + date1 + "</li>\n" +
            "                    </ul>\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Даты приема заявок</li>\n" +
            "                        <li>" + date2 + "</li>\n" +
            "                    </ul>\n" +
            "</div>\n" +
            "            </div>"

    } else if (!arr[4].includes("Юридическое") && arr[10].includes("ЮЛ")) {
        document.getElementById("table").innerHTML += "<div id = " + m + " class=\"table_item\" onclick='Redirect(this.id)'/>\n" +
            "                <h3 class=\"table_h\"><b>" + arr[0] + arr[9] + "</h3>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Организатор</li>\n" +
            "                    <li>" + arr[11] + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data debtor\">\n" +
            "                    <li class=\"thin_text\">Должник</li>\n" +
            "                    <li>" + arr[5] + arr[6] + arr[7] + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data status\">\n" +
            "                    <li class=\"thin_text\">Статус</li>\n" +
            "                    <li>"+ arr[14] +"</li>\n" +
            "                </ul>\n" +
            "                <div class=\"vl\"></div>\n" +
            "                <div class=\"date\">\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Дата проведения собрания</li>\n" +
            "                        <li>" + date1 + "</li>\n" +
            "                    </ul>\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Даты приема заявок</li>\n" +
            "                        <li>" + date2 + "</li>\n" +
            "                    </ul>\n" +
            "                    </div>\n" +
            "               </div>"

    } else {
        document.getElementById("table").innerHTML += "<div id = " + m + " class=\"table_item\" onclick='Redirect(this.id)'>\n" +
            "                <h3 class=\"table_h\"><b>" + arr[0] + arr[9] + "</h3>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Организатор</li>\n" +
            "                    <li>" + arr[11] + arr[12] + arr[13] + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data debtor\">\n" +
            "                    <li class=\"thin_text\">Должник</li>\n" +
            "                    <li>" + arr[5] + arr[6] + arr[7] + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data status\">\n" +
            "                    <li class=\"thin_text\">Статус</li>\n" +
            "                    <li>"+ arr[14] +"</li>\n" +
            "                </ul>\n" +
            "                <div class=\"vl\"></div>\n" +
            "                <div class=\"date\">\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Дата проведения собрания</li>\n" +
            "                        <li>" + date1 + "</li>\n" +
            "                    </ul>\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Даты приема заявок</li>\n" +
            "                        <li>" + date2 + "</li>\n" +
            "                    </ul>\n" +
            "</div>\n" +
            "            </div>"
    }
}

$.get("http://localhost:8080/Sobr/LKUCHServlet", function (data){

    console.log(data)
    let d = data.split("\n")
    let pageNum = Math.ceil(d.length / 15 / 5)
    console.log(pageNum)
    let k = 0
    for (let i = 1; i < Math.ceil(d.length / 15); i++) {
        Cards(d, k, i)
        k += 15
    }

    let pageLim = 4

    for (let i  =  6; i < Math.ceil(d.length / 15); i++){
        document.getElementById('c'+i).style.display = 'none'
    }


    switch (true){
        case pageNum === 1:
            break;
        case pageNum < pageLim:
            for (let i = 1; i < pageLim; i++){
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
})
