let meetingURL = new URL(window.location.href).searchParams.get('meeting')
document.getElementById('video').src = meetingURL