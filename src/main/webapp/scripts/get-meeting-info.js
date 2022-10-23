$(document).ready(function () {
    $(".nav_login").hide();
    $("#logout_btn").hide();
    $(".logout").hide();

    $.post("http://localhost:8080/Sobr/GetMeetingInfo", function (result) {
        if (result) {
            console.log(result);

            var meetingNumber = document.getElementById("meeting-number");
            meetingNumber.innerText('test');
        } else {
            alert('error data');
        }
    });
});

//clock
setInterval(function () {
    var now = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);