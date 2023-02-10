function regDocsUpload(){
    let formData = new FormData();
    let files = document.getElementById('doc').files
    let docCount = document.getElementById('doc').files.length

    for (let i = 0; i < docCount; i++) {
        formData.append('file'+i, files[i])
    }

    fetch('/RegDocsServlet', {method: "POST", body: formData})
}