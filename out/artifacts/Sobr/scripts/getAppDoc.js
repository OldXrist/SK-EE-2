let loc = window.location.href

let meetingNum = loc.split('=')[1].split('&')[0]
let appId = loc.split('&')[1].split('=')[1]

let snd = {
    appId: appId
}

function getDoc(){
    $.get('/Sobr/GetEmailServlet', snd, function (data){
        let btn = document.getElementById('dbtn')
        let email = data.trim()
        let meeting  = 'meeting' + meetingNum

        btn.href = '../../../meetings/' + meeting + '/' + email + '/Доверенность.doc'
        console.log(btn.href)
        btn.click()
    })
}
