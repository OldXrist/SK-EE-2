function meetSort(id){

    document.getElementById('table').innerHTML = ""

    let sortParam = {
        param: id
    }

    $.get("/Sobr/SortMeetingsServlet", sortParam, function (data){

        console.log(data)
        let d = data.split("\n")
        let k = 0;
        for (let i = 1; i < 5; i++) {
            Cards(d, k, i)
            if (d[k + 10].includes('ЮЛ')){
                k += 13
            } else k += 15
        }
    })
}