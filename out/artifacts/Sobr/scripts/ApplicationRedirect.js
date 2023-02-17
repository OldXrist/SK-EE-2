function applicationRedirect(id){
    //let url = new URL('http://www.sk.tenderstandart.ru/lichnui_kobinetu/lk_org/z_sobr/z_sobr_org_5.5.html') //TODO: Поменять на sk.tenderstandart
    let url = new URL('http://localhost:8080/lichnui_kobinetu/lk_org/z_sobr/z_sobr_org_5.5.html')
    let app = id.split('_')[1]
    console.log(app)
    let sk = window.location.href.split('sk=')[1]
    console.log(sk)
    url.searchParams.append('sk', sk)
    url.searchParams.append('app', app)
    console.log(url.href)
    window.location.href = url.href
}