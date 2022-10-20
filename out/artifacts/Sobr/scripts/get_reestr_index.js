$.get("http://localhost:8080/Sobr/MREEServlet", function (data){
    console.log(data)

    let d = data.split("\n")
    console.log(d[0])
})