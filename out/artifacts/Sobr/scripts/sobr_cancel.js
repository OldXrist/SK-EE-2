$(document).ready(function (){
    $('#cancel').hide()
})

$('.knopka5').click(function (){
    $('#cancel').show()
    $('.ep').animate({
        opacity: '0.3'
    })
})

$('.cross').click(function (){
    $('#cancel').hide()
    $('.ep').animate({
        opacity: '1'
    })
})

function confirm(){
    if (document.getElementById('cause').value === ''){
        document.getElementById('cause').style.borderColor = 'red'
    } else {
        let loc = window.location.href
        let snum = loc.split('=')

        let obj = {
            cause: document.getElementById('cause').value,
            sk: snum[1]
        }

        $.get('/Sobr/CancelServlet', obj, function (){
            console.log('success!')
            window.location.reload()
        })
    }
}