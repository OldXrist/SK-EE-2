$.get("/CHECKTYPEServlet", send, function (data){
    console.log(data)

    if (data.includes('y')){
        window.location.href = '/lichnui_kobinetu/lk_org/z_sobr/z_sobr_org_2.html?sk='+sk
    }
})