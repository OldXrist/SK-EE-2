function Validate_login(){

    let k = 0;

    if(document.getElementById("email").value.length === 0){
        document.getElementById("email").style.borderColor = 'red';
        k += 1;
    }
    if(document.getElementById("pwd").value.length === 0){
        document.getElementById("pwd").style.borderColor = 'red';
        k += 1;
    }
    if (k > 0){
        console.log('error')
    } else {
        let creds = {
            email: document.getElementById("email").value,
            pwd: document.getElementById("pwd").value
        }


        $.post("http://localhost:8080/Sobr/AUTHServ", creds, function (data) {
            console.log(creds);
            console.log(data);
            console.log(document.cookie)
            if (data !== "") {
               // window.location.assign("http://localhost:8080/Sobr/index2.html");
            } else {
                $(".err").show()
                document.getElementById("email").style.borderColor = 'red'
                document.getElementById("pwd").style.borderColor = 'red'
            }
        });
    }
}