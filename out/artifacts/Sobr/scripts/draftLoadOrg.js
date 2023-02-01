let draftLinkOrg = window.location.href

function fill(val, fieldID){
    if (!val.includes('null')){
        document.getElementById(fieldID).value = val
    }
}

function fillDate(val, dateFieldID, timeFieldID){
    if (!val.includes('null')){
        let rawDate = val.split(' ')[0].split('-')
        let parsedDate = rawDate[2] + '.' + rawDate[1] + '.' + rawDate[0]

        let rawTime = val.split(' ')[1].split(':')
        let parsedTime = rawTime[0] + ':' + rawTime[1]

        document.getElementById(dateFieldID).value = parsedDate
        document.getElementById(timeFieldID).value = parsedTime
    }
}

function fillQuestion(val){
    document.getElementById('enter_q').value = val
    $('.save_btn').click()
}

function fillEmail(val){
    document.getElementById('nim_cod').value = val
    $('.addEmail').click()
}

if (draftLinkOrg.includes('draft')){
    let draftURL = (new URL(document.location)).searchParams
    let send  = {
        num: draftURL.get('draft')
    }

    $.post('/Sobr/DraftDataOrgServlet', send, function (data){
        console.log(data)

        let d = data.split('\n')

        fillDate(d[0], 'date_sobr', 'time')
        fill(d[1], 'povestka')
        fillDate(d[2], 'date_z', 'time_z')
        fillDate(d[3], 'date_z2', 'time_z2')
        fillDate(d[4], 'date_b', 'time_b')
        fillDate(d[5], 'date_b2', 'time_b2')
        fillDate(d[6], 'date_p', 'time_p')
        fill(d[7], 'participants')
        fill(d[8], 'naim_abr_sud')
        fill(d[9], 'nomer_dela')
        fill(d[10], 'osn_dlia_sobr')

        if (!d[11].includes('null')){
            if (d[11].includes('Физическое')){
                $(".tip_dolzh img").click()
                $("#fl").click()
                fill(d[12], 'famil')
                fill(d[13], 'name')
                fill(d[14], 'otch')
                fill(d[15], 'pocht')
                fill(d[16], 'inn')
                fill(d[17], 'snils')
            } else if (d[11].includes('Индивидуальный')){
                $(".tip_dolzh img").click()
                $("#ip").click()
                fill(d[12], 'famil2')
                fill(d[13], 'name2')
                fill(d[14], 'otch2')
                fill(d[15], 'pocht2')
                fill(d[16], 'inn2')
                fill(d[17], 'snils2')
                fill(d[18], 'ogrnip')
            } else {
                $(".tip_dolzh img").click()
                $("#ql").click()
                fill(d[20], 'poln_naim')
                fill(d[21], 'qr_adrs')
                fill(d[15], 'pocht3')
                fill(d[16], 'unn4')
                fill(d[19], 'ogrn3')
            }
        }

        let i = 22
        $('.topik3').click()

        while (!d[i].includes('null') && d[i] !== null && !d[i].includes('emails')){
            fillQuestion(d[i])
            i++
        }

        i++

        while (!d[i].includes('null') && d[i] !== null){
            fillEmail(d[i])
            i++
        }
    })
}