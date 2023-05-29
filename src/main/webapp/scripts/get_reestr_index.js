function dateParse (x){
    if (x !== undefined) {
        let dateTime = x.split(" ");
        let date = dateTime[0]
        let dA = date.split('-')

        return dA[2] + '.' + dA[1] + '.' + dA[0]
    }
}

function timeParse (x){
    if (x !== undefined) {
        let dateTime = x.split(" ");
        let time = dateTime[1]
        let tA = time.split(':')

        return tA[0] + ':' + tA[1]
    }
}

function Cards(dt, i, m){
    let lim = i + 15;
    let arr = [];
    for (i; i < lim; i++){
        arr.push(dt[i])
    }

    m = 'meeting-' + m

    let date1 = dateParse(arr[1]) + " " + timeParse(arr[1])
    let date2 = dateParse(arr[2]) + ' - ' + dateParse(arr[3])
    //console.log(arr[4], arr[10])
    if (arr[4].includes("Юридическое") && arr[10].includes("ЮЛ")){
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

$.get("/MREEServlet", function (data){

    console.log(data)
    if (data !== "") {
        let d = data.split("\n")
        let k = 0;
        for (let i = 1; i < 5; i++) {
            Cards(d, k, i)
            k += 15
        }
    }
})
