let send = {
    sk: snum[1]
}

function CreateProtocol(){
    $.get("/Sobr/ProtocolCreateServlet", send, function () {
        console.log('protocol created')

        let link = document.getElementById('link')
        link.style.display = 'none'
        link.href = '../../../protocols/Protocol_' + snum[1] + '.doc'
        link.click();
    })
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

            $.post('/Sobr/ProtocolUpdateServlet', newProt, function (data) {
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