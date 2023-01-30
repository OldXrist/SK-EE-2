let draftLink = window.location.href
if (draftLink.includes('draft')){
    let draftNumber = draftLink.split('=')[1]
    let send  = {
        num: draftNumber
    }

    $.post('/Sobr/DraftDataServlet', send, function (data){
        console.log(data)
    })
}