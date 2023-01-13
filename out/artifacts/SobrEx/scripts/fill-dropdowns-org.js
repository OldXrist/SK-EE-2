var questionsResult;
var membersResult;

let send = {
    sk: snum[1]
}

$(document).ready(function () {
    $(".tbl").hide()
    $(".hide").hide();

    let url = location.href;
    let meetingNumber = url.slice(url.lastIndexOf('=') + 1, url.length)
    let inputData = {
        meetingNumber: meetingNumber,
    }

    $.post("/Sobr/GetQuestionsServlet", inputData, function (result) {
        console.log(result);
        questionsResult = result;

        //сначала заполняет options
        var select = document.getElementById('sources-1');
        for (var i = 0; i < result.length; i++) {
            select.innerHTML += '<option value="' + result[i] + '">' + result[i] + '</option>';
        }

        //далее рендерим кастомный select и заполняем данными из options
        var click = 0;
        $(".custom-select-1").each(function () {
            console.log('selection');
            var classes = $(this).attr("class"),
                id = $(this).attr("id"),
                name = $(this).attr("name");
            var template = '<div class="' + classes + '">';
            template += '<span class="custom-select-trigger-1" id="select-val-1">' + $(this).attr("placeholder") + '</span>';
            template += '<div class="custom-options-1">';
            $("#sources-1").find("option").each(function () {
                template += '<span class="custom-option-1 ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
            });
            template += '</div></div>';

            $(this).wrap('<div class="custom-select-wrapper-1"></div>');
            $(this).hide();
            $(this).after(template);
        });
        $(".custom-option-1:first-of-type").hover(function () {
            $(this).parents(".custom-options-1").addClass("option-hover-1");
        }, function () {
            $(this).parents(".custom-options-1").removeClass("option-hover-1");
        });
        $(".custom-select-trigger-1").on("click", function () {
            if (click == 1) {
                $("#members-dropdown").show();
                click--;
            } else if (click == 0) {
                $("#members-dropdown").hide();
                click++;
            }
            $('html').one('click', function () {
                $(".custom-select-1").removeClass("opened-1");
            });
            $(this).parents(".custom-select-1").toggleClass("opened-1");

            event.stopPropagation();
        });
        $(".custom-option-1").on("click", function () {
            $("#members-dropdown").show();
            click = 0;
            $(this).parents(".custom-select-wrapper-1").find("select").val($(this).data("value"));
            $(this).parents(".custom-options-1").find(".custom-option-1").removeClass("selection");
            $(this).addClass("selection");
            $(this).parents(".custom-select-1").removeClass("opened-1");
            $(this).parents(".custom-select-1").find(".custom-select-trigger-1").text($(this).text());
            $(".show").show();
            $(".hide").hide();
            ClearCheckboxValues();
        });
    });


    $.post("/Sobr/GetMembersServlet", inputData, function (result) {
        console.log(result);
        membersResult = result;

        //сначала заполняет options
        var select = document.getElementById('sources-2');
        var table = document.getElementById('members-table');
        for (var i = 0; i < result.length; i++) {
            var memberName = result[i][0] == 'ЮЛ' ? result[i][1] : result[i][1] + ' ' + result[i][2] + ' ' + result[i][3];
            select.innerHTML += `<option id="opt-${i}">${memberName}</option>`;
            table.innerHTML +=
                `<tr id="tr-${i}">
                    <td><div class="fio">${memberName}<a href="#"><img src="../../../img/download.svg"/></a></div></td>
                    <td><input type="checkbox" id="${i}0" /></td>
                    <td><input type="checkbox" id="${i}1"/></td>
                    <td><input type="checkbox" id="${i}2"/></td>
                </tr>`
        }

        //далее рендерим кастомный select и заполняем данными из options
        $(".custom-select-2").each(function () {
            var classes = $(this).attr("class"),
                id = $(this).attr("id"),
                name = $(this).attr("name");
            var template = '<div class="' + classes + '">';
            template += '<span class="custom-select-trigger-2" id="select-val-2">' + $(this).attr("placeholder") + '</span>';
            template += '<div class="custom-options-2">';
            $("#sources-2").find("option").each(function () {
                template += '<span class="custom-option-2 ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
            });
            template += '</div></div>';

            $(this).wrap('<div class="custom-select-wrapper-2"></div>');
            $(this).hide();
            $(this).after(template);
        });
        $(".custom-option-2:first-of-type").hover(function () {
            $(this).parents(".custom-options-2").addClass("option-hover-2");
        }, function () {
            $(this).parents(".custom-options-2").removeClass("option-hover-2");
        });
        $(".custom-select-trigger-2").on("click", function () {
            $('html').one('click', function () {
                $(".custom-select-2").removeClass("opened-2");
            });
            $(this).parents(".custom-select-2").toggleClass("opened-2");

            event.stopPropagation();
        });
        $(".custom-option-2").on("click", function () {
            $(this).parents(".custom-select-wrapper-2").find("select").val($(this).data("value"));
            $(this).parents(".custom-options-2").find(".custom-option-2").removeClass("selection");
            $(this).addClass("selection");
            $(this).parents(".custom-select-2").removeClass("opened-2");
            $(this).parents(".custom-select-2").find(".custom-select-trigger-2").text($(this).text());
            $(".show").show();
            $(".hide").hide();
        });
    });
});

//clock
setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);


function Show() {
    //очищаем чекбоксы
    ClearCheckboxValues();
    //находим номер выбранного вопроса
    var questionNumber;
    for (var i = 0; i < questionsResult.length; i++) {
        var selectedQuestion = document.getElementById("select-val-1").textContent;
        if (questionsResult[i] == selectedQuestion) {
            i++
            questionNumber = i;
        }
    }
    //заполняем чекбоксы
    for (var i = 0; i < membersResult.length; i++) {
        switch (questionNumber) {
            case 1:
                if (membersResult[i][0] == 'ЮЛ')
                    SetCheckboxValue(membersResult[i][2], i);
                else
                    SetCheckboxValue(membersResult[i][4], i);
                break;
            case 2:
                if (membersResult[i][0] == 'ЮЛ')
                    SetCheckboxValue(membersResult[i][3], i);
                else
                    SetCheckboxValue(membersResult[i][5], i);
                break;
            case 3:
                if (membersResult[i][0] == 'ЮЛ')
                    SetCheckboxValue(membersResult[i][4], i);
                else
                    SetCheckboxValue(membersResult[i][6], i);
                break;
            case 4:
                if (membersResult[i][0] == 'ЮЛ')
                    SetCheckboxValue(membersResult[i][5], i);
                else
                    SetCheckboxValue(membersResult[i][7], i);
                break;
            case 5:
                if (membersResult[i][0] == 'ЮЛ')
                    SetCheckboxValue(membersResult[i][6], i);
                else
                    SetCheckboxValue(membersResult[i][8], i);
                break;
            case 6:
                if (membersResult[i][0] == 'ЮЛ')
                    SetCheckboxValue(membersResult[i][7], i);
                else
                    SetCheckboxValue(membersResult[i][9], i);
                break;
            case 7:
                if (membersResult[i][0] == 'ЮЛ')
                    SetCheckboxValue(membersResult[i][8], i);
                else
                    SetCheckboxValue(membersResult[i][10], i);
                break;
            case 8:
                if (membersResult[i][0] == 'ЮЛ')
                    SetCheckboxValue(membersResult[i][9], i);
                else
                    SetCheckboxValue(membersResult[i][11], i);
                break;
            case 9:
                if (membersResult[i][0] == 'ЮЛ')
                    SetCheckboxValue(membersResult[i][10], i);
                else
                    SetCheckboxValue(membersResult[i][12], i);
                break;
            case 10:
                if (membersResult[i][0] == 'ЮЛ')
                    SetCheckboxValue(membersResult[i][11], i);
                else
                    SetCheckboxValue(membersResult[i][13], i);
                break;
        }
    }
    //скрываем ненужные строки таблицы в зависимости от выбора участника
    var selectedMember = document.getElementById("select-val-2").textContent;
    if (selectedMember === 'Всех участников') {
        $(".tbl").slideDown();
        $(".show").hide();
        $(".hide").show();
        for (var i = 0; i < membersResult.length; i++) {
            $(`#tr-${i}`).show();
        }
    } else {
        for (var i = 0; i < membersResult.length; i++) {
            $(`#tr-${i}`).hide();
        }
        for (var i = 0; i < membersResult.length; i++) {
            if (selectedMember == membersResult[i][1] || selectedMember == membersResult[i][1] + ' ' + membersResult[i][2] + ' ' + membersResult[i][3]) {
                $(`#tr-${i}`).show();
                $(".tbl").slideDown();
                $(".show").hide();
                $(".hide").show();
            }
        }
    }
}

function Hide() {
    $(".tbl").slideUp();
    $(".show").show();
    $(".hide").hide();
}

function SetCheckboxValue(value, i) {
    switch (value) {
        case 'За':
            $(`#${i}0`).prop('checked', true);
            break;
        case 'Против':
            $(`#${i}1`).prop('checked', true);
            break;
        case 'Воздержался':
            $(`#${i}2`).prop('checked', true);
            break;
    }
}

function ClearCheckboxValues() {
    for (var i = 0; i < membersResult.length; i++) {
        $(`#${i}0`).prop('checked', false);
        $(`#${i}1`).prop('checked', false);
        $(`#${i}2`).prop('checked', false);
    }
}

