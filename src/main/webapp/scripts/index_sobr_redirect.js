function Redirect(id) {
    $.get("http://localhost:8080/Sobr/CHECKTYPEServlet", function (data) {
        console.log(data)
        let url
        if (data.includes('организатор')) {
            url = 'http://localhost:8080/Sobr/lichnui_kobinetu/lk_org/z_sobr/z_sobr_org_2.html'
        } else url = 'http://localhost:8080/Sobr/lichnui_kobinetu/lk_uch/z_sobr/z_sobr_uch_2.html'
        let link = new URL(url)
        let card = document.getElementById(id).querySelector('.table_h').innerHTML
        let num = card.split('\n')
        link.searchParams.append('sk', num[0])
        console.log(link.href)
        window.location.href = link.href
    })
}
