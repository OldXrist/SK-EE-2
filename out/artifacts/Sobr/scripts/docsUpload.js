function docsUpload(){
    let formData = new FormData();
    let file = document.getElementById('file').files[0]

    formData.append('file', file)

    fetch('/Sobr/DocsUploadServlet', {method: "POST", body: formData})
}