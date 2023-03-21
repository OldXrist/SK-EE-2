let meetingURL = new URL(window.location.href).searchParams.get('meeting')
document.getElementById('video').src = meetingURL

/*
window.setInterval(function() {
    let elem = document.getElementsByClassName('sc-llYSUQ')[0];
    if (elem) {
        elem.remove();
    }
}, 1000)

 */
