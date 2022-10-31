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

function Cards(dt, i, m){
    let lim = i+14;
    let arr = [];
    for (i; i < lim; i++){
        arr.push(dt[i])
    }

    let date1 = dateParse(arr[1]) + " " + timeParse(arr[1])
    let date2 = dateParse(arr[2]) + ' - ' + dateParse(arr[3])
    console.log(arr[4], arr[10])
    if (arr[4].includes("Юридическое") && arr[10].includes("ЮЛ")){
        document.getElementById("table").innerHTML += "<div id = "+m+" class=\"table_item\">\n" +
            "                <h3 class=\"table_h\">"+ arr[0]+ arr[9]+"</h3>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Организатор</li>\n" +
            "                    <li>"+arr[11]+"</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Должник</li>\n" +
            "                    <li>"+arr[8]+"</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Статус</li>\n" +
            "                    <li>Отменено Органзатором</li>\n" +
            "                </ul>\n" +
            "                <div class=\"vl\"></div>\n" +
            "                <div class=\"date\">\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Дата проведения собрания</li>\n" +
            "                        <li>"+date1+"</li>\n" +
            "                    </ul>\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Даты приема заявок</li>\n" +
            "                        <li>"+date2+"</li>\n" +
            "                    </ul>\n" +
            "                </div>\n" +
            "            </div>"
    } else if (arr[4].includes("Юридическое") && !arr[10].includes("ЮЛ")){
        document.getElementById("table").innerHTML += "<div id = "+m+" class=\"table_item\">\n" +
            "                <h3 class=\"table_h\">"+ arr[0]+ arr[9]+"</h3>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Организатор</li>\n" +
            "                    <li>"+arr[11]+arr[12]+arr[13]+"</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Должник</li>\n" +
            "                    <li>"+arr[8]+"</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Статус</li>\n" +
            "                    <li>Отменено Органзатором</li>\n" +
            "                </ul>\n" +
            "                <div class=\"vl\"></div>\n" +
            "                <div class=\"date\">\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Дата проведения собрания</li>\n" +
            "                        <li>"+date1+"</li>\n" +
            "                    </ul>\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Даты приема заявок</li>\n" +
            "                        <li>"+date2+"</li>\n" +
            "                    </ul>\n" +
            "                </div>\n" +
            "            </div>"
    } else if (!arr[4].includes("Юридическое") && arr[10].includes("ЮЛ")){
        document.getElementById("table").innerHTML += "<div id = "+m+" class=\"table_item\">\n" +
            "                <h3 class=\"table_h\">"+ arr[0]+ arr[9]+"</h3>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Организатор</li>\n" +
            "                    <li>"+arr[11]+"</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Должник</li>\n" +
            "                    <li>"+arr[5]+arr[6]+arr[7]+"</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Статус</li>\n" +
            "                    <li>Отменено Органзатором</li>\n" +
            "                </ul>\n" +
            "                <div class=\"vl\"></div>\n" +
            "                <div class=\"date\">\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Дата проведения собрания</li>\n" +
            "                        <li>"+date1+"</li>\n" +
            "                    </ul>\n" +
            "                    <ul class=\"datetime\">\n" +
            "                        <li class=\"thin_text\">Даты приема заявок</li>\n" +
            "                        <li>"+date2+"</li>\n" +
            "                    </ul>\n" +
            "                </div>\n" +
            "            </div>"
    } else {
        document.getElementById("table").innerHTML += "<div id = "+m+" class=\"table_item\" onclick='Redirect(this.id)'>\n" +
            "                <h3 class=\"table_h\">" + arr[0] + arr[9] + "</h3>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Организатор</li>\n" +
            "                    <li>" + arr[11] + arr[12] + arr[13] + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Должник</li>\n" +
            "                    <li>" + arr[5] + arr[6] + arr[7] + "</li>\n" +
            "                </ul>\n" +
            "                <ul class=\"table_data\">\n" +
            "                    <li class=\"thin_text\">Статус</li>\n" +
            "                    <li>Отменено Органзатором</li>\n" +
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
            "                </div>\n" +
            "            </div>"
    }
}

$.get("http://localhost:8080/Sobr/MREEServlet", function (data){
    let d = data.split("\n")
    let m = 1;
    let k = 0;
    Cards(d, k, m)
    m += 1
    k+=14
    Cards(d, k, m)
    m += 1
    k+=14
    Cards(d, k, m)
    m += 1
    k+=14
    Cards(d, k, m)
})