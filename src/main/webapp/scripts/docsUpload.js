function docsUpload(){
    let formData = new FormData();
    let file
    if (document.getElementById('file').files[0] !== null){
        file = document.getElementById('file').files[0]
        formData.append('file', file)
        fetch('/DocsUploadServlet', {method: "POST", body: formData})
    } else console.log("No file")
}