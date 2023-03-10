function goTOo(page){
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
        goTOo(pageNum)
    } else if (prefix === 'next'){
        goTOo(pageNum)
        document.getElementById('page_' + pageNum).style.color = '#ffffff'
        document.getElementById('page_' + pageNum).style.background = '#104781'
    } else {
        goTOo(pageNum - 1)
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

function Cards1(dt, i, m) {
    m = "c" + m
    let lim
    if (dt[0].includes('ЮЛ')){
        lim = i + 5;
    } else lim = i + 7;
    let arr = [];
    for (i; i < lim; i++) {
        arr.push(dt[i])
    }

    let date = dateParse(arr[2]) + " " + timeParse(arr[2])

    if (arr[1].includes('На рассмотрении')) {
        if (arr[0].includes("ЮЛ")) {
            console.log(arr)
            document.getElementById("table").innerHTML +=
                "           <div class=\"table_item\" id=" + m + ">\n" +
                "                <th class=\"table_h\">№ " + arr[5] + "</th>\n" +
                "                <a id=" + "app_" + arr[5] + " class=\"txtr edit\" onclick='applicationRedirect(this.id)'>Редактировать</a>\n" +
                "                <div class=\"table_data\">\n" +
                "                    <th class=\"thin_text\">Кредитор</th>\n" +
                "                    <th>" + arr[3] + "</th>\n" +
                "                </div>\n" +
                "                <div class=\"table_data\">\n" +
                "                    <th class=\"thin_text\">Дата и время</th>\n" +
                "                    <th>" + date + "</th>\n" +
                "                </div>\n" +
                "                <div class=\"table_data\">\n" +
                "                    <th class=\"thin_text\">Статус</th>\n" +
                "                    <th>" + arr[1] + "</th>\n" +
                "                </div>\n" +
                "                <div class=\"table_data\">\n" +
                "                    <th class=\"thin_text\">Адрес</th>\n" +
                "                    <th>" + arr[4] + "</th>\n" +
                "                </div>\n" +
                "            </div>"

        } else {
            console.log(arr)
            document.getElementById("table").innerHTML +=
                "           <div class=\"table_item\" id=" + m + ">\n" +
                "                <th class=\"table_h\">№ " + arr[6] + "</th>\n" +
                "                <a id=" + "app_" + arr[6] + " class=\"txtr edit\" onclick='applicationRedirect(this.id)'>Редактировать</a>\n" +
                "                <div class=\"table_data\">\n" +
                "                    <th class=\"thin_text\">Кредитор</th>\n" +
                "                    <th>" + arr[3] + " " + arr[4] + " " + arr[5] + "</th>\n" +
                "                </div>\n" +
                "                <div class=\"table_data\">\n" +
                "                    <th class=\"thin_text\">Дата и время</th>\n" +
                "                    <th>" + date + "</th>\n" +
                "                </div>\n" +
                "                <div class=\"table_data\">\n" +
                "                    <th class=\"thin_text\">Статус</th>\n" +
                "                    <th>" + arr[1] + "</th>\n" +
                "                </div>\n" +
                "            </div>"
        }
    } else {
        if (arr[0].includes("ЮЛ")) {
            console.log(arr)
            document.getElementById("table").innerHTML +=
                "           <div class=\"table_item\" id=" + m + ">\n" +
                "                <th class=\"table_h\">№ " + arr[4] + "</th>\n" +
                "                <div class=\"table_data\">\n" +
                "                    <th class=\"thin_text\">Кредитор</th>\n" +
                "                    <th>" + arr[3] + "</th>\n" +
                "                </div>\n" +
                "                <div class=\"table_data\">\n" +
                "                    <th class=\"thin_text\">Дата и время</th>\n" +
                "                    <th>" + date + "</th>\n" +
                "                </div>\n" +
                "                <div class=\"table_data\">\n" +
                "                    <th class=\"thin_text\">Статус</th>\n" +
                "                    <th>" + arr[1] + "</th>\n" +
                "                </div>\n" +
                "            </div>"

        } else {
            console.log(arr)
            document.getElementById("table").innerHTML +=
                "           <div class=\"table_item\" id=" + m + ">\n" +
                "                <th class=\"table_h\">№ " + arr[6] + "</th>\n" +
                "                <div class=\"table_data\">\n" +
                "                    <th class=\"thin_text\">Кредитор</th>\n" +
                "                    <th>" + arr[3] + " " + arr[4] + " " + arr[5] + "</th>\n" +
                "                </div>\n" +
                "                <div class=\"table_data\">\n" +
                "                    <th class=\"thin_text\">Дата и время</th>\n" +
                "                    <th>" + date + "</th>\n" +
                "                </div>\n" +
                "                <div class=\"table_data\">\n" +
                "                    <th class=\"thin_text\">Статус</th>\n" +
                "                    <th>" + arr[1] + "</th>\n" +
                "                </div>\n" +
                "            </div>"
        }
    }
}

let loc1 = window.location.href
let snum1 = loc1.split('=')

let send = {
    sk: snum1[1]
}

$.get("/XLSXServlet", send,  function (data){

    console.log(data)
    let d = data.split("\n")

    let countCards1 = null
    for(let i = 0; i < d.length; ++i){
        if (d[i].includes('ИП') || d[i].includes('ФЛ') || d[i].includes('АУ') || d[i].includes('ЮЛ')){
            countCards1++
        }
    }

    console.log(countCards1)

    let pageNum = countCards1/4
    console.log(pageNum)
    let k = 0
    for (let i = 1; i < countCards1 + 1; i++) {
        Cards1(d, k, i)
        console.log(d[k])
        if (d[k].includes('ЮЛ')){
            k += 5
        } else k += 7
    }

    let pageLim = 4

    for (let i  =  6; i < countCards1; i++){
        document.getElementById('c'+i).style.display = 'none'
    }


    switch (true){
        case pageNum <= 1:
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
