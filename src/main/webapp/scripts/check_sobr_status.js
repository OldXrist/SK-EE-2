function check() {
    $.get('/CheckSobrStatusServlet', send, function (data) {
        console.log(data)
        if (data.includes('Отменено') || data.includes('Завершено') || data.includes('Не состоялось')) {
            if (window.location.href.includes('z_sobr_org_2')) {
                $('.knopka4').remove()
                $('.knopka5').remove()
                $('#startMeetingBtn').remove()
            } else if (window.location.href.includes('z_sobr_org_4')) {
                $('#signProt').remove()
                $('#protUpd').remove()
                $('#changeProt').remove()
            } else if (window.location.href.includes('z_sobr_org_5.5')) {
                window.location.href = "/404.html"
            } else if (window.location.href.includes('z_sobr_org_5')) {
                $('.edit').remove()
            } else if (window.location.href.includes('z_sobr_uch_2')) {
                $('#apply_btn').remove()
            } else if (window.location.href.includes('z_sobr_uch_3')) {
                for (let i = 0; i < 10; i++) {
                    if (document.getElementById("tbl_" + i) !== null) {
                        document.getElementById("tbl_" + i).remove()
                        $(".base").animate({
                            marginTop: '-=180px'
                        }, 0);
                        $(".base_bg").animate({
                            marginTop: '-=180px'
                        }, 0);
                        document.getElementsByClassName("qText")[i].style.width = '1040px'
                    }
                }
                if (document.getElementById("finalVote") !== null) {
                    document.getElementById("finalVote").remove()
                }
            }
        } else if (data.includes('В стадии проведения')) {
            if (window.location.href.includes('z_sobr_org_2')) {
                document.getElementById('startMeetingBtn').disabled = false
                document.getElementById('startMeetingBtn').style.opacity = '1'
            }
        } else if (data.includes('На рассмотрении') || data.includes('Приём заявок') || data.includes('Обработка заявок')) {
            if (window.location.href.includes('z_sobr_org_2')) {
                document.getElementById('editMeetingBtn').disabled = false
                document.getElementById('editMeetingBtn').style.opacity = '1'
                document.getElementById('cancelMeetingBtn').disabled = false
                document.getElementById('cancelMeetingBtn').style.opacity = '1'
            }
        }
    })
}