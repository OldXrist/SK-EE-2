$.get("/Sobr/CHECKTYPEServlet", send, function (data){
    console.log(data)

    if (!data.includes('y')){
        window.location.href = '/Sobr/404.html'
    }
})