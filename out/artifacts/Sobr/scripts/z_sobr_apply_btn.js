$.get("/Sobr/ApplicationBtnServlet", send, function (data){
    console.log(data)

    if (data.includes('организатор')){
        if (data.includes('y')){
            window.location.href = '/Sobr/lichnui_kobinetu/lk_org/z_sobr/z_sobr_org_2.html' + '?sk='+snum[1]
        } else document.getElementById('apply_btn').innerHTML = ''
    } else if (data.includes('участник')) {
        if (data.includes('y')) {
            document.getElementById('apply_btn').innerHTML = ''
        } else document.getElementById("apply").href = '/Sobr/lichnui_kobinetu/lk_uch/z_sobr/z_sobr_uch_1.html' + '?sk='+snum[1]
    } else document.getElementById('apply').href = '/Sobr/login.html'
})
