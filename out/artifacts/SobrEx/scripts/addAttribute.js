function addAttr(){
    $.get('/Sobr/AddAttributeServlet', send, function (){
        console.log('attribute added')
        docsUpload()
    })
}