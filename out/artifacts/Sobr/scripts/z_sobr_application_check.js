$.get('/Sobr/CheckApplicationServlet', send, function (data){
    console.log(data)

    if (data !== ''){
        $(".ep").animate({
            opacity: '0.3'
        })
        $(".wait").fadeIn()
        document.getElementById('wait').scrollIntoView()
        document.getElementById('save').disabled = true
        document.getElementById('sign').disabled = true
    }
})