$('#file').on('change', function (){
    let file = document.getElementById('file').files[0]
    document.getElementById('fileLabel').innerText = file.name
})