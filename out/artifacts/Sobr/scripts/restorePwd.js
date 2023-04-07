function sendReset(){
    let email = document.getElementById('email').value

    if (email !== ''){
        let send = {
            email: email
        }

        $.post('/pwdChangeServlet', send, function (data){
            console.log(data)
        })
    }
}