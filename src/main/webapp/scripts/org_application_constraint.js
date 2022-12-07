$.get("http://localhost:8080/Sobr/CheckOrgServlet", function (data){
    console.log(data)

    if (!data.includes('организатор')){
        window.location.href = '/Sobr/404.html'
    }
})