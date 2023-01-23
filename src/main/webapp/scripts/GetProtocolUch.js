let send = {
    sk: snum[1]
}

function Download() {
    let link = document.getElementById('link')
    link.style.display = 'none'
    link.href = "../../../protocols/Протокол собрания кредиторов №" + snum[1] + '.doc'
    link.click();
}