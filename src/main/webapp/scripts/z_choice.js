let send = {
    sk: snum[1]
}

$.get('/QServlet', send, function (data){
    console.log(data)

    let d = data.split("\n")

    for (let i = 0; i < d.length - 1; i++){
        document.getElementById("ep").innerHTML +=
            "            <ul>\n" +
            "                <li style='width: 1040px'>" + d[i] + "</li>\n" +
            "            </ul>\n"

        $(".base").animate({
            marginTop: '+=50px'
        }, 0);
        $(".base_bg").animate({
            marginTop: '+=50px'
        }, 0);
    }
})