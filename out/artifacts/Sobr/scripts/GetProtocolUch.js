let send = {
    sk: snum[1]
}

function Download() {
    let link = document.getElementById('link')
    link.style.display = 'none'
    //String fName = "/opt/tomcat/webapps/Sobr/protocols/" + protocolName;
    link.href = '../../../protocols/Протокол собрания кредиторов №' + snum[1] + '.doc'
    link.click();
}