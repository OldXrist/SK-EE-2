$("html").click(function (){
    document.getElementById('captcha').style.borderColor = "white"
})

var onloadCallback = function() {
    grecaptcha.render('captcha', {
        'sitekey': '6Lfq_lUlAAAAAMA60GUsFMPdi8P_TRu-Q4W5g6G3'
    })
};

function sendFeedback(){
    let k = 0


    let ids = ['topic', 'desc', 'phone', 'email']

    for (let i = 0; i < ids.length; i++){
        k += validateFeedback(ids[i])
    }

    console.log(grecaptcha.getResponse())

    if (grecaptcha.getResponse() === ''){
        k++
        document.getElementById('captcha').style.border = '1px solid red'
    }

    if (k === 0){
        let file = new FormData()
        let files = document.getElementById('file').files
        if (files[0] !== null){
            file.append('file', files[0])
        }

        let send = {
            topic: document.getElementById('topic').value,
            desc: document.getElementById('desc').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
        }

        $.post('/feedbackUtilsServlet', send, function (){
            fetch('/feedbackFileServlet', {method: "POST", body: file}).then(r => {
                $.post('/feedbackServlet', function (){
                })
            })
        })
    }
}

function validateFeedback(id){
    let field = document.getElementById(id)

    if (field.value === ""){
        field.style.borderColor = 'red'
        return 1
    } else return 0
}
