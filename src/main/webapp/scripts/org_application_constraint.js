$.get("/CheckOrgServlet", function (data){
    console.log(data)

    if (!data.includes('организатор')){
        window.location.href = '/404.html'
    }
})