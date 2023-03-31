$.get('/GetMeetingTypeServlet', send, function (data){
    if (data.trim() === 'Очное'){
        $('#startMeetingBtn').show()
        $('#editMeetingBtn').animate({
            width: '250px',
            marginLeft: '45px'
        }, 0)
        $('#cancelMeetingBtn').animate({
            width: '250px',
            marginLeft: '45px'
        }, 0)

        document.getElementById('editMeetingBtn').style.border = '1px solid #00345F'
        document.getElementById('editMeetingBtn').style.backgroundColor = '#BAF3FC'
    }
})

function startMeeting(){
    $('.loading').fadeIn()
    $('#ep').animate({
        opacity: '0.3'
    })

    $.post('/CreateMeetingServlet', send, function (data){
        console.log(data)
        let d = data.split('\n')

        let create = window.open(d[0])

        //window.open(d[0])
        setTimeout(() => {create.close()}, 100)
        setTimeout(() => {
            $('.loading').fadeOut()
            $('#ep').animate({
                opacity: '1'
            })
            window.open(d[1])
        }, 10000)

    })
}