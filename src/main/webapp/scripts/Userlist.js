$(document).ready(function (){
    $.post('/UserlistServlet', function (users) {
        console.log(users)
        let u = users.split('\n')
        let k = 0;

        for (let i = 0; i < u.length / 7; i++) {
            document.getElementById('user-table').innerHTML +=
                `<tr>
                    <td>${u[0]}</td>
                    <td>${u[1]}</td>
                    <td>${u[2]}</td>
                    <td>${u[3]}</td>
                    <td>${u[4]}</td>
                    <td>${u[5]}</td>
                    <td>${u[6]}</td>
                </tr>`
            u = u.slice(7)
        }
    })
})