$.get("http://localhost:8080/Sobr/CHECKTYPEServlet", send, function (data){
    console.log(data)

    if (!data.includes('y')){
        window.location.href = '/Sobr/404.html'
    }
})