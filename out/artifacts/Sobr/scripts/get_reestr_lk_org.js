function page(id){
    let k = 75 * (parseInt(id.split('_')[1]) - 1)
    document.getElementById('table').innerHTML = ''
    let i = 1
    while (document.getElementById('page_'+i) !== null){
        document.getElementById('page_'+i).style.color = '#104781'
        document.getElementById('page_'+i).style.backgroundColor = '#ffffff'
        i++
    }

    document.getElementById(id).style.color = '#ffffff'
    document.getElementById(id).style.backgroundColor = '#104781'

    $.get("http://localhost:8080/Sobr/LKUCHServlet", function (data){
        let d = data.split("\n")
        for (let i = 1; i < 6; i++) {
            Cards(d, k, i)
            k += 15
        }
    })
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
                "</div>\n" +
                "            </div>"

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
    let pageNum = 3//Math.ceil(d.length / 15 / 5)
    console.log(pageNum)
    let k = 0
    for (let i = 1; i < 6; i++) {
        Cards(d, k, i)
        k += 15
    }

    switch (true){
        case pageNum === 1:
            break;
        case pageNum < 4:
            for (let i = 1; i < pageNum + 1; i++){
                document.getElementById('pages').innerHTML += `<li class="pages" id=\"page_${i}\" onclick=\"page(this.id)\">${i}</li>`
            }
            break;
    }

    document.getElementById('page_1').style.color = '#ffffff'
    document.getElementById('page_1').style.backgroundColor = '#104781'
})
