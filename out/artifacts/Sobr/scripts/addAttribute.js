function addAttr(){
    $.get('/AddAttributeServlet', send, function (){
        console.log('attribute added')
        docsUpload()
    })
}