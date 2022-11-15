$.get("http://localhost:8080/Sobr/CHECKTYPEServlet", send, function (data){
    console.log(data)

    if (!data.includes('организатор')){
        window.location.href = '/Sobr/404.html'
    }
})