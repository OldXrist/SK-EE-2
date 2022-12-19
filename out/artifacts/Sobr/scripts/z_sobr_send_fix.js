let loc = window.location.href
let snum = loc.split('=')
console.log(snum[1])

let sk = snum[1]

if (snum[1] !== '1'){
    sk = snum[1].split('&')[0]
}

let send = {
    sk: sk
}

document.getElementById('number').innerText += ' ' + snum[1]