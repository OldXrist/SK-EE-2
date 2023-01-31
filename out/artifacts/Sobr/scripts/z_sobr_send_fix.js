let params = (new URL(document.location)).searchParams

let sk = params.get('sk')

let send = {
    sk: sk
}

document.getElementById('number').innerText += ' ' + sk