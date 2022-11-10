function Redirect(id) {
    let url = new URL('http://localhost:8080/Sobr/lichnui_kobinetu/lk_uch/z_sobr/z_sobr_uch_2.html')
    let card = document.getElementById(id).querySelector('.table_h').innerHTML
    let num = card.split('\n')
    url.searchParams.append('sk', num[0])
    console.log(url.href)
    window.location.href = url.href
}
