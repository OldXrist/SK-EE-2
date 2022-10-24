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

function Cards(dt, i){
    let lim = i+14;
    let arr = [];
    for (i; i < lim; i++){
        arr.push(dt[i])
    }


    let date1 = dateParse(arr[1]) + " " + timeParse(arr[1])
    let date2 = dateParse(arr[2]) + ' - ' + dateParse(arr[3])
    console.log(arr)
    document.getElementById("table").innerHTML += "<div class=\"table_item\">\n" +
        "                <h3 class=\"table_h\">"+ arr[0]+ arr[9]+"</h3>\n" +
        "                <ul class=\"table_data\">\n" +
        "                    <li class=\"thin_text\">Организатор</li>\n" +
        "                    <li>"+arr[11]+arr[12]+arr[13]+"</li>\n" +
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
}

$.get("http://localhost:8080/Sobr/MREEServlet", function (data){
    let d = data.split("\n")

    let k = 0;
    Cards(d, k)
    k+=14
    Cards(d, k)
    k+=14
    Cards(d, k)
    k+=14
    Cards(d, k)
})