/*
let obj = {
    sk: snum[1]
}
 */

$.get('/Sobr/CheckSobrStatusServlet', send, function (data){
    console.log(data)
    if (data.includes('Отменено') || data.includes('Завершено') || data.includes('Не состоялось')){
        if (window.location.href.includes('z_sobr_org_2')){
            $('.knopka4').remove()
            $('.knopka5').remove()
        } else if (window.location.href.includes('z_sobr_org_4')){
            $('#signProt').remove()
            $('#protUpd').remove()
            $('#changeProt').remove()
        } else if (window.location.href.includes('z_sobr_org_5.5')){
            window.location.href = "/Sobr/404.html"
            console.log('PENA')
        } else if (window.location.href.includes('z_sobr_org_5')){
            $('.edit').remove()
        } else if (window.location.href.includes('z_sobr_uch_2')){
            $('#apply_btn').remove()
        } else if (window.location.href.includes('z_sobr_uch_3')){
            for (let i = 0; i < 10; i++) {
                if (document.getElementById("tbl_" + i) !== null) {
                    document.getElementById("tbl_" + i).remove()
                    $(".base").animate({
                        marginTop: '-=170px'
                    }, 0);
                    $(".base_bg").animate({
                        marginTop: '-=170px'
                    }, 0);
                    document.getElementsByClassName("qText")[i].style.width = '1040px'
                }
            }
            document.getElementById("finalVote").remove()
        }
    }
})