$.post('/indexStatsServlet', function (data){
    let d = data.split("\n")

    document.getElementById('participants').innerHTML += `<b>${d[0]}</b>`
    document.getElementById('orgs').innerHTML += `<b>${d[1]}</b>`
    document.getElementById('meetings-complete').innerHTML += `<b>${d[2]}</b>`
})

function goTO(page){
    let next = 0
    let i = 1
    while (document.getElementById('meeting-'+i) !== null){
        document.getElementById('meeting-'+i).style.display = 'none'
        i++
    }
    for (let i = 1; i < 6; i++){
        let first = 1+5*(page - 1)
        if (next < first + 4) {
            next = first + i
        }
        if (document.getElementById('meeting-' + next) !== null) {
            document.getElementById('meeting-' + next).style.display = ''
        }
        if(document.getElementById('meeting-' + first) !== null){
            document.getElementById('meeting-' + first).style.display = ''
        }
    }
}

function page(id){

    let i = 1

    while (document.getElementById('page_'+i) !== null){
        document.getElementById('page_'+i).style.color = '#104781'
        document.getElementById('page_'+i).style.background = '#ffffff'
        i++
    }

    if (id.split('_')[0] === 'page') {
        document.getElementById(id).style.color = '#ffffff'
        document.getElementById(id).style.background = '#104781'
    }

    if (id.split('_')[0] === 'next') {
        let x = parseInt(id.split('_')[1])
        let n = 1
        document.getElementById('next_'+x).style.display = 'none'
        while(document.getElementById('page_'+n) !== null){
            document.getElementById('page_'+n).style.display = 'none'
            n++
        }
        for (let i = 1; i < 3; i++){
            let next = x+i
            if (document.getElementById("page_" + next) !== null) {
                document.getElementById("page_" + next).style.display = ''
            }
        }
        let newNext = x + 3
        let lastPrev = x - 3
        if (document.getElementById("prev_" + lastPrev) !== null) {
            document.getElementById("prev_" + lastPrev).style.display = 'none'
        }
        if (document.getElementById('prev_'+x) !== null) {
            document.getElementById('prev_' + x).style.display = ''
        }
        if (document.getElementById('next_'+newNext) !== null) {
            document.getElementById('next_' + newNext).style.display = ''
        }
        if (document.getElementById('page_'+x) !== null) {
            document.getElementById('page_' + x).style.display = ''
        }
        /*
        let x = parseInt(id.split('_')[1])
        document.getElementById(id).style.display = 'none'
        document.getElementById('prev_'+x).style.display = ''
        document.getElementById('page_'+x).style.display = ''
        for (let i = 1; i < 4; i++){
            let prev = x-i
            let next = x+i
            document.getElementById("page_" + prev).style.display = 'none'
            if (document.getElementById("page_" + next) !== null) {
                document.getElementById("page_" + next).style.display = ''
            }
        }
         */
    } else if (id.split('_')[0] === 'prev'){
        let x = parseInt(id.split('_')[1])
        let n = 1
        document.getElementById('prev_'+x).style.display = 'none'
        while(document.getElementById('page_'+n) !== null){
            document.getElementById('page_'+n).style.display = 'none'
            n++
        }
        for (let i = 1; i < 4; i++){
            let prev = x-i
            if (document.getElementById("page_" + prev) !== null) {
                document.getElementById("page_" + prev).style.display = ''
            }
        }
        let lastNext = x + 3
        let newPrev = x - 3
        if (document.getElementById("next_" + lastNext) !== null) {
            document.getElementById("next_" + lastNext).style.display = 'none'
        }
        document.getElementById('next_'+x).style.display = ''
        if (document.getElementById('prev_'+newPrev) !== null) {
            document.getElementById('prev_' + newPrev).style.display = ''
        }
        document.getElementById('page_'+x).style.display = 'none'
    }

    let pageNum = parseInt(id.split('_')[1])
    let prefix = id.split('_')[0]

    if (prefix === 'page'){
        goTO(pageNum)
    } else if (prefix === 'next'){
        goTO(pageNum)
        document.getElementById('page_' + pageNum).style.color = '#ffffff'
        document.getElementById('page_' + pageNum).style.background = '#104781'
    } else {
        goTO(pageNum - 1)
        let n = pageNum - 1
        document.getElementById('page_' + n).style.color = '#ffffff'
        document.getElementById('page_' + n).style.background = '#104781'
    }
}

function dateParse (x){
    let dateTime = x.split(" ");
    let date = dateTime[0]
    let dA = date.split('-')

    return dA[2] + '.' + dA[1] + '.' + dA[0]
}

function timeParse (x){
    let dateTime = x.split(" ");
    let time = dateTime[1]
    let tA = time.split(':')

    return tA[0] + ':' + tA[1]
}

function Cards(dt, i, m) {
    let lim = i + 15;
    let arr = [];
    for (i; i < lim; i++) {
        arr.push(dt[i])
    }

    m = 'meeting-' + m

    let date1 = dateParse(arr[1]) + " " + timeParse(arr[1])
    let date2 = dateParse(arr[2]) + ' - ' + dateParse(arr[3])
    console.log(arr[4], arr[10])
    if (arr[4].includes("Юридическое") && arr[10].includes("ЮЛ")) {
        document.getElementById("meetings").innerHTML += `
                <div class="meeting" id="${m}" onclick="Redirect(this.id)">
                    <div class="card-section-1">
                        <h4>${arr[0]} ${arr[9]}</h4>
                        <div class="bottom-info">
                            <div class="meeting-info-col">
                                <h6>Организатор</h6>
                                <p>${arr[11]}</p>
                            </div>

                            <div class="meeting-info-col">
                                <h6>Должник</h6>
                                <p>${arr[8]}</p>
                            </div>

                            <div class="meeting-info-col">
                                <h6>Статус</h6>
                                <p>${arr[12]}</p>
                            </div>
                        </div>
                    </div>

                    <div class="vertical-line"></div>

                    <div class="card-section-2">
                        <div class="meeting-info-col">
                            <h6>Дата проведения собрания</h6>
                            <p>${date1}</p>
                        </div>

                        <div class="meeting-info-col">
                            <h6>Дата приёма заявок</h6>
                            <p>${date2}</p>
                        </div>
                    </div>
                </div>`
    } else if (arr[4].includes("Юридическое") && !arr[10].includes("ЮЛ")){
        document.getElementById("meetings").innerHTML += `
                <div class="meeting" id="${m}" onclick="Redirect(this.id)">
                    <div class="card-section-1">
                        <h4>${arr[0]} ${arr[9]}</h4>
                        <div class="bottom-info">
                            <div class="meeting-info-col">
                                <h6>Организатор</h6>
                                <p>${arr[11]} ${arr[12]} ${arr[13]}</p>
                            </div>

                            <div class="meeting-info-col">
                                <h6>Должник</h6>
                                <p>${arr[8]}</p>
                            </div>

                            <div class="meeting-info-col">
                                <h6>Статус</h6>
                                <p>${arr[14]}</p>
                            </div>
                        </div>
                    </div>

                    <div class="vertical-line"></div>

                    <div class="card-section-2">
                        <div class="meeting-info-col">
                            <h6>Дата проведения собрания</h6>
                            <p>${date1}</p>
                        </div>

                        <div class="meeting-info-col">
                            <h6>Дата приёма заявок</h6>
                            <p>${date2}</p>
                        </div>
                    </div>
                </div>`
    } else if (!arr[4].includes("Юридическое") && arr[10].includes("ЮЛ")){
        document.getElementById("meetings").innerHTML += `
                <div class="meeting" id="${m}" onclick="Redirect(this.id)">
                    <div class="card-section-1">
                        <h4>${arr[0]} ${arr[9]}</h4>
                        <div class="bottom-info">
                            <div class="meeting-info-col">
                                <h6>Организатор</h6>
                                <p>${arr[11]}</p>
                            </div>

                            <div class="meeting-info-col">
                                <h6>Должник</h6>
                                <p>${arr[5]} ${arr[6]} ${arr[7]}</p>
                            </div>

                            <div class="meeting-info-col">
                                <h6>Статус</h6>
                                <p>${arr[14]}</p>
                            </div>
                        </div>
                    </div>

                    <div class="vertical-line"></div>

                    <div class="card-section-2">
                        <div class="meeting-info-col">
                            <h6>Дата проведения собрания</h6>
                            <p>${date1}</p>
                        </div>

                        <div class="meeting-info-col">
                            <h6>Дата приёма заявок</h6>
                            <p>${date2}</p>
                        </div>
                    </div>
                </div>`
    } else {
        document.getElementById("meetings").innerHTML += `
                <div class="meeting" id="${m}" onclick="Redirect(this.id)">
                    <div class="card-section-1">
                        <h4>${arr[0]} ${arr[9]}</h4>
                        <div class="bottom-info">
                            <div class="meeting-info-col">
                                <h6>Организатор</h6>
                                <p>${arr[11]} ${arr[12]} ${arr[13]}</p>
                            </div>

                            <div class="meeting-info-col">
                                <h6>Должник</h6>
                                <p>${arr[5]} ${arr[6]} ${arr[7]}</p>
                            </div>

                            <div class="meeting-info-col">
                                <h6>Статус</h6>
                                <p>${arr[14]}</p>
                            </div>
                        </div>
                    </div>

                    <div class="vertical-line"></div>

                    <div class="card-section-2">
                        <div class="meeting-info-col">
                            <h6>Дата проведения собрания</h6>
                            <p>${date1}</p>
                        </div>

                        <div class="meeting-info-col">
                            <h6>Дата приёма заявок</h6>
                            <p>${date2}</p>
                        </div>
                    </div>
                </div>`
    }
}

$.get("/ReestrServlet", function (data){

    console.log(data)
    let d = data.split("\n")
    let pageNum = Math.ceil(d.length / 15 / 5)
    console.log(pageNum)
    let k = 0
    for (let i = 1; i < Math.ceil(d.length / 15); i++) {
        if (!d[k+1].includes('null')) {
            Cards(d, k, i)
            k += 15
        }
    }

    let pageLim = 4

    for (let i  =  6; i < Math.ceil(d.length / 15); i++){
        if (document.getElementById('meeting-'+i) !== null) {
            document.getElementById('meeting-' + i).style.display = 'none'
        }
    }


    switch (true){
        case pageNum === 1:
            break;
        case pageNum < pageLim:
            for (let i = 1; i < pageNum + 1; i++){
                document.getElementById('pages').innerHTML += `<li class="pages" id=\"page_${i}\" onclick=\"page(this.id)\">${i}</li>`
            }
            break;
        case pageNum >= pageLim:
            let x = 1
            for (let i = 1; i < pageNum + 1; i++){
                if (i === x + 3){
                    document.getElementById('pages').innerHTML += `<li class="pages" id=\"prev_${i}\" onclick=\"page(this.id)\">...</li>`
                    document.getElementById('pages').innerHTML += `<li class="pages" id=\"next_${i}\" onclick=\"page(this.id)\">...</li>`
                    document.getElementById('pages').innerHTML += `<li class="pages" id=\"page_${i}\" onclick=\"page(this.id)\">${i}</li>`
                    x += 3
                } else document.getElementById('pages').innerHTML += `<li class="pages" id=\"page_${i}\" onclick=\"page(this.id)\">${i}</li>`
            }
            x = 1
            for (let i = 4; i < pageNum + 1; i++) {
                if (i === x + 3) {
                    document.getElementById('prev_'+i).style.display = 'none'
                    document.getElementById('next_'+i).style.display = 'none'
                    document.getElementById("page_" + i).style.display = 'none'
                    x += 3
                } else document.getElementById("page_" + i).style.display = 'none'
            }
            document.getElementById('next_4').style.display = ''
            break;
    }

    if (document.getElementById('page_1') !== null) {
        document.getElementById('page_1').style.color = '#ffffff'
        document.getElementById('page_1').style.backgroundColor = '#104781'
    }
})

$(document).ready(function (){
    let sortDrop = $('.sort-dropdown')
    sortDrop.hide()

    $('.sort-text').click(function (){
        if (sortDrop[0].style.display === 'none'){
            sortDrop.slideDown()
            $('#meetings').animate({
                opacity: '0.3'
            })
        } else {
            sortDrop.slideUp()
            $('#meetings').animate({
                opacity: '1'
            })
        }
    })

    $('.sort-dropdown p').click(function (){
        document.getElementById('sort-value').innerHTML = this.innerHTML
        sortDrop.slideUp()
        $('#meetings').animate({
            opacity: '1'
        })
    })

    $('#search').hide()
    $('.search').click(function (){
        $('#search').slideDown()
    })

    $('.dropdown-row-1 img').click(function (){
        $('#search').slideUp()
    })

    $('#meetingStatus').hide()
    $('#meetingType').hide()

    let statusInput = document.getElementById('searchStatus').parentElement
    let typeInput = document.getElementById('searchType').parentElement

    $(statusInput).click(function (){
        if (document.getElementById('meetingStatus').style.display === 'none'){
            $('#meetingStatus').slideDown()
            $('#meetingType').slideUp()
        } else {
            $('#meetingStatus').slideUp()
        }
    })

    $(typeInput).click(function (){
        if (document.getElementById('meetingType').style.display === 'none'){
            $('#meetingType').slideDown()
            $('#meetingStatus').slideUp()
        } else {
            $('#meetingType').slideUp()
        }
    })

    $('#meetingStatus p').click(function (){
        document.getElementById('searchStatus').innerHTML = this.innerHTML
        $('#meetingStatus').slideUp()
    })

    $('#meetingType p').click(function (){
        document.getElementById('searchType').innerHTML = this.innerHTML
        $('#meetingType').slideUp()
    })

    document.addEventListener("click", function(e) {
        if (e.target.closest(".dropdown-select")) {
            return;
        }
        $('#meetingStatus').slideUp()
        $('#meetingType').slideUp()
    });
})
