function performAjaxSubmit() {
    var sampleFile = document.getElementById("file").files[0];
    var formdata = new FormData();
    formdata.append("sampleFile", sampleFile);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/Sobr/AUTHServ", true);
    xhr.send(formdata);
    xhr.onload = function(e) {
        if (this.status === 200) {
            alert(this.responseText);
        }
    };
}