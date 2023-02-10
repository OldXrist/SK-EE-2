let mType = (new URL(document.location)).searchParams

if (mType.get('o') !== null){
    document.getElementById('meetingHeading').innerHTML += 'очного собрания'
} else document.getElementById('meetingHeading').innerHTML += 'заочного собрания'