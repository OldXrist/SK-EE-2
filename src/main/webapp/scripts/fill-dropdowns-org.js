var membersResult;

$(document).ready(function () {
    $(".tbl").hide()
    $(".hide").hide();

    let url = location.href;
    let meetingNumber = url.slice(url.lastIndexOf('=') + 1, url.length)
    let inputData = {number: meetingNumber}

    $.post("/Sobr/GetQuestionsServlet", inputData, function (result) {
        console.log(result);

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
            template += '<span class="custom-select-trigger-1">' + $(this).attr("placeholder") + '</span>';
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
                    <td class="fio">${memberName}<a href="#"><img src="../../../img/download.svg"/></a></td>
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
    //заполняем чекбоксы
    for (var i = 0; i < membersResult.length; i++) {
        if(membersResult[i][0] == 'ЮЛ'){
            if(membersResult[i][2] == 'true'){
                document.getElementById(`#${i}0`).checked = true;
            }
            else{
                document.getElementById(`#${i}0`).checked = false;
            }

            if(membersResult[i][3] == 'true'){
                document.getElementById(`#${i}1`).checked = true;
            }
            else{
                document.getElementById(`#${i}1`).checked = false;
            }

            if(membersResult[i][4] == 'true'){
                document.getElementById(`#${i}2`).checked = true;
            }
            else{
                document.getElementById(`#${i}2`).checked = false;
            }
        }
        else{
            if(membersResult[i][4] == 'true'){
                $(`#${i}0`).prop('checked', true);
            }
            else{
                $(`#${i}0`).prop('checked', false);
            }

            if(membersResult[i][5] == 'true'){
                $(`#${i}1`).prop('checked', true);
            }
            else{
                $(`#${i}1`).prop('checked', false);
            }

            if(membersResult[i][6] == 'true'){
                $(`#${i}2`).prop('checked', true);
            }
            else{
                $(`#${i}2`).prop('checked', false);
            }
        }
    }

    //скрываем ненужные строки таблицы в зависимости от выбора участника
    var selectedValue = document.getElementById("select-val-2").textContent;
    if (selectedValue === 'Всех участников') {
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
            if (selectedValue == membersResult[i][1] || selectedValue == membersResult[i][1] + ' ' + membersResult[i][2] + ' ' + membersResult[i][3]) {
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

