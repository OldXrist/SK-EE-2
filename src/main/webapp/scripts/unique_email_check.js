function emailCheck(){
    let send = {
        email: document.getElementById('email').value
    }

    $.get('/Sobr/EmailCheckServlet', send, function (data){
        if (data.includes('Почта уже существует')){
            console.log(data)
            document.getElementById('error').innerText = ''
            document.getElementById('error').innerText = data
            document.getElementById("email").style.borderColor = 'red'
            document.getElementById("email_2").style.borderColor = 'red'
            document.getElementById('error').scrollIntoView()
        } else Validate_reg()
    })
}