function docsUpload(){
    let formData = new FormData();
    let files = document.getElementById('doc').files

    for (let i = 0; i < files.length; i++) {
        formData.append(`file${i}`, files[i])
    }

    fetch('/Sobr/SobrDocsUploadServlet', {method: "POST", body: formData}).then(r => {
        console.log(r)
    }).catch(error => {
        console.log(error.message)
    })
}