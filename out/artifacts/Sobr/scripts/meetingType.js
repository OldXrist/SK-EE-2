function checkMeetType() {
    $.get('/GetMeetingTypeServlet', send, function (data) {

        console.log(data)
        document.getElementById('number').innerHTML += sk + ' - ' + data

        if (data.includes('Очное')) {
            if (window.location.href.includes('z_sobr_org_2')) {
                $("#startMeetingBtn").show()

                $(".knopka4").css({
                    marginLeft: '0',
                    width: '250px',
                    background: '#BAF3FC',
                    border: '1px solid #00345F'
                })

                $(".knopka5").css({
                    width: '250px'
                })
            }
            if (window.location.href.includes('z_sobr_uch_3')) {
                $('.qText').css({
                    width: '1040px'
                })
                $('.attention').remove()
                $("h6").remove()
                $('.vote').remove()
                $('#finalVote').remove()
            }
        }
    })
}