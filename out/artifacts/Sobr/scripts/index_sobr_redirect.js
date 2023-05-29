function Redirect(id) {
    //let url = new URL('http://localhost:8080/lichnui_kobinetu/lk_uch/z_sobr/z_sobr_uch_2.html')
    let url = new URL('https://sk.tenderstandart.ru/lichnui_kobinetu/lk_uch/z_sobr/z_sobr_uch_2.html')
    let num = document.getElementById(id).querySelector('h4').innerText.split(' ')[0]
    console.log(num)
    url.searchParams.append('sk', num)
    console.log(url.href)
    window.location.href = url.href
}
