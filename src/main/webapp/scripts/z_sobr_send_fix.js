let loc = window.location.href
let snum = loc.split('=')
console.log(snum[1])

let send = {
    sk: snum[1]
}

document.getElementById('number').innerText += ' ' + snum[1]