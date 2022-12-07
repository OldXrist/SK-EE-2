let obj = {
    sk: snum[1]
}

$.get('http://localhost:8080/Sobr/CheckSobrStatusServlet', obj, function (data){
    console.log(data)
    if (data.includes('Отменено') || data.includes('Завершено')){
        if (window.location.href.includes('z_sobr_org_2')){
            $('.knopka4').hide()
            $('.knopka5').hide()
        }
    }
})