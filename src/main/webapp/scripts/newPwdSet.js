function matching(){
    let set = document.getElementById('set')
    let repeat = document.getElementById('repeat')

    if (set.value !== repeat.value || set.value === '' || repeat.value === ''){
        set.style.borderColor = 'red'
        repeat.style.borderColor = 'red'
        return false
    } else return true
}

function confirmChange(){
    if (matching()){
        let params = (new URL(document.location)).searchParams
        let send = {
            pwd: document.getElementById('set').value,
            email: params.get('email'),
            checksum: params.get('checksum')
        }

        console.log(send)

        $.post('/pwdSetServlet', send, function (){
            window.location.href = '/login.html'
        })
    }
}