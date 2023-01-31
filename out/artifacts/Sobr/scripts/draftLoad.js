let draftLink = window.location.href
if (draftLink.includes('draft')){
    let draftURL = (new URL(document.location)).searchParams
    let send  = {
        num: draftURL.get('draft')
    }

    $.post('/Sobr/DraftDataServlet', send, function (data){
        console.log(data)

        let d = data.split('\n')

        if (!d[0].includes('null')){
            $(".nofade1 li a").text(d[0])
        } else console.log('1 -', d[0])
        if (!d[1].includes('null')){
            $(".nofade2 li a").text(d[1])
        } else console.log('2 -', d[1])
        if (d[2].includes('null')){

            let file = d[2].split("\\")[2]
            console.log(file)
            let markup = "<tr><td>" + file + "<img src='../../../img/cross.png' style='position: absolute; left: 1050px;'/> </td></tr>"

            $(".docs_tbl tbody").append(markup)
            $(".docs_tbl").fadeIn('fast')
            $(".base").animate({
                marginTop: "+=65px"
            });
            $(".base_bg").animate({
                marginTop: "+=65px"
            });
            $(".add_docs img").show()
            $("#doc").hide()
            $(".add_docs a").show()
        } else console.log('3 -', d[2])
    })
}