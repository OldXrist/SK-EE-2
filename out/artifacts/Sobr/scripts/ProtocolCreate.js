let send = {
    sk: snum[1]
}

function UpdateProtocol(){
        let file = document.getElementById('protUpd').files[0]
        document.getElementById('signProt').disabled = false
        document.getElementById('signProt').style.opacity = '1'
        console.log(file)

        let reader = new FileReader();

        reader.onload = function (e) {

            console.log(reader.result);

            let newProt = {
                text: reader.result,
                sk: snum[1]
            }

            console.log(newProt)

            $.post('/ProtocolUpdateServlet', newProt, function (data) {
                console.log("Updated")
                console.log(data)
            })
        }

        reader.readAsText(file);
}

$("#protUpd").click(function (){
    document.getElementById('signProt').disabled = false
    document.getElementById('signProt').style.opacity = '1'
})

$.get('/CheckSobrStatusServlet', send, function (data){
    console.log(data)

    if (data.includes('Завершено')){
        document.getElementById('createProtocol').onclick = function CreateProtocol(){
            $.get("/ProtocolCreateServlet", send, function (data) {
                console.log('protocol created')
                console.log(data)

                let link = document.getElementById('link')
                link.style.display = 'none'
                link.href = "../../../protocols/Протокол собрания кредиторов №" + snum[1] + '.doc'
                link.click();
            })
        }
    } else {
        document.getElementById('createProtocol').disabled = true
    }
})