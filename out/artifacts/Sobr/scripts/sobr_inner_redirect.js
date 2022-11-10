let loc = window.location.href
let snum = loc.split('=')
document.getElementById('number').innerHTML += snum[1] + " - заочное"

for (let i = 1; i < 6; i++){
    document.getElementById("sobrP"+i).href += "?sk=" + snum[1]
}

