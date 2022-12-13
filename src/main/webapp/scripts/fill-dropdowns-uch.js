let send = {
    sk: snum[1]
}

$(document).ready(function () {
    $(".tbl").hide();

    $(".show").click(function () {
        $(".tbl").slideDown()
    }).click(function () {
        $(".show").hide()
    }).click(function () {
        $(".base_bg").animate({
            marginTop: "1287px"
        });
        $(".base").animate({
            marginTop: "1287px"
        });
    });

    $(".hide").click(function () {
        $(".tbl").slideUp()
    }).click(function () {
        $(".show").fadeIn()
    }).click(function () {
        $(".base_bg").animate({
            marginTop: "960px"
        });
        $(".base").animate({
            marginTop: "960px"
        });
    });

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

        //сначала заполняет options
        var select = document.getElementById('sources-2');
        for (var i = 0; i < result.length; i++) {
            select.innerHTML += '<option value="' + result[i][0] + ' ' + result[i][1] + ' ' + result[i][2] + '">' + result[i][0] + ' ' + result[i][1] + ' ' + result[i][2] + '</option>';
        }

        //далее рендерим кастомный select и заполняем данными из options
        $(".custom-select-2").each(function () {
            var classes = $(this).attr("class"),
                id = $(this).attr("id"),
                name = $(this).attr("name");
            var template = '<div class="' + classes + '">';
            template += '<span class="custom-select-trigger-2">' + $(this).attr("placeholder") + '</span>';
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
        });
    });
});

//clock
setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);