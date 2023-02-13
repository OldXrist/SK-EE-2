$.get("/CHECKTYPEServlet", send, function (data){
    console.log(data)

    if (!data.includes('y')){
        window.location.href = '/404.html'
    }
})