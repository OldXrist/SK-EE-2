
$("input:checkbox").on('click', function() {
    var $box = $(this);
    if ($box.is(":checked")) {
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked", false);
        $box.prop("checked", true);
    } else {
        $box.prop("checked", false);
    }
});

function Cards(dt, i){
    let lim = i+14;
    let arr = [];
    for (i; i < lim; i++){
        arr.push(dt[i])
    }
    console.log(arr[4], arr[10])
    if (arr[4].includes("Юридическое") && arr[10].includes("ЮЛ")){
        document.getElementById("eb").innerHTML += "<ul>\n" +
            "                <li>Текст вопроса №1</li>\n " +
            "           </ul>\n     " +
            "       <table class=\"vote\">\n         " +
            "       <tr class=\"bord\">\n            " +
            "        <td>За</td>\n                " +
            "    <td>Против</td>\n    " +
            "                <td>Воздержался</td>\n     " +
            "           </tr>\n     " +
            "           <tr>\n              " +
            "                <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[1][]\" /></td>\n" +
            "                <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[1][]\" /></td>\n" +
            "                <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[1][]\" /></td>\n" +
            "                <td class=\"bn\"><button class=\"vote_btn\">Голосовать</button></td>\n  " +
            "            </tr>\n       " +
            "     </table>\n    " +
            "        <ul>\n            " +
            "    <li>Текст вопроса №2</li>\n      " +
            "      </ul>\n" +
            "            <table class=\"vote\">\n  " +
            "              <tr class=\"bord\">\n     " +
            "               <td>За</td>\n          " +
            "          <td>Против</td>\n            " +
            "        <td>Воздержался</td>\n           " +
            "     </tr>\n       " +
            "         <tr>\n       " +
            "             <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[2][]\" /></td>\n" +
            "             <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[2][]\" /></td>\n" +
            "             <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[2][]\" /></td>\n" +
            "                <td class=\"bn\"><button class=\"vote_btn\">Голосовать</button></td>\n  " +
            "              </tr>\n         " +
            "   </table>\n        " +
            "    <ul>\n             " +
            "   <li>Текст вопроса №3</li>\n     " +
            "       </ul>\n      " +
            "      <table class=\"vote\">\n         " +
            "       <tr class=\"bord\">\n       " +
            "             <td>За</td>\n          " +
            "          <td>Против</td>\n          " +
            "          <td>Воздержался</td>\n      " +
            "          </tr>\n        " +
            "        <tr>\n            " +
            "           <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[3][]\" /></td>\n" +
            "           <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[3][]\" /></td>\n" +
            "           <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[3][]\" /></td>\n" +
            "           <td class=\"bn\"><button class=\"vote_btn\">Голосовать</button></td>\n " +
            "             </tr>\n " +
            "       </table>"+
            "    <ul>\n             " +
            "   <li>Текст вопроса №4</li>\n     " +
            "       </ul>\n      " +
            "      <table class=\"vote\">\n         " +
            "       <tr class=\"bord\">\n       " +
            "             <td>За</td>\n          " +
            "          <td>Против</td>\n          " +
            "          <td>Воздержался</td>\n      " +
            "          </tr>\n        " +
            "        <tr>\n            " +
            "           <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[4][]\" /></td>\n" +
            "           <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[4][]\" /></td>\n" +
            "           <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[4][]\" /></td>\n" +
            "             <td class=\"bn\"><button class=\"vote_btn\">Голосовать</button></td>\n " +
            "               </tr>\n " +
            "           </table>"+
            "    <ul>\n             " +
            "   <li>Текст вопроса №5</li>\n     " +
            "       </ul>\n      " +
            "      <table class=\"vote\">\n         " +
            "       <tr class=\"bord\">\n       " +
            "             <td>За</td>\n          " +
            "          <td>Против</td>\n          " +
            "          <td>Воздержался</td>\n      " +
            "          </tr>\n        " +
            "        <tr>\n            " +
            "           <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[5][]\" /></td>\n" +
            "           <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[5][]\" /></td>\n" +
            "           <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[5][]\" /></td>\n" +
            "           <td class=\"bn\"><button class=\"vote_btn\">Голосовать</button></td>\n " +
            "               </tr>\n " +
            "           </table>"+
            "    <ul>\n             " +
            "   <li>Текст вопроса №6</li>\n     " +
            "       </ul>\n      " +
            "      <table class=\"vote\">\n         " +
            "       <tr class=\"bord\">\n       " +
            "             <td>За</td>\n          " +
            "          <td>Против</td>\n          " +
            "          <td>Воздержался</td>\n      " +
            "          </tr>\n        " +
            "        <tr>\n            " +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[6][]\" /></td>\n" +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[6][]\" /></td>\n" +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[6][]\" /></td>\n" +
            "                    <td class=\"bn\"><button class=\"vote_btn\">Голосовать</button></td>\n " +
            "               </tr>\n " +
            "           </table>"+
            "    <ul>\n             " +
            "   <li>Текст вопроса №7</li>\n     " +
            "       </ul>\n      " +
            "      <table class=\"vote\">\n         " +
            "       <tr class=\"bord\">\n       " +
            "             <td>За</td>\n          " +
            "          <td>Против</td>\n          " +
            "          <td>Воздержался</td>\n      " +
            "          </tr>\n        " +
            "        <tr>\n            " +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[7][]\" /></td>\n" +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[7][]\" /></td>\n" +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[7][]\" /></td>\n" +
            "                    <td class=\"bn\"><button class=\"vote_btn\">Голосовать</button></td>\n " +
            "               </tr>\n " +
            "           </table>"+
            "    <ul>\n             " +
            "   <li>Текст вопроса №8</li>\n     " +
            "       </ul>\n      " +
            "      <table class=\"vote\">\n         " +
            "       <tr class=\"bord\">\n       " +
            "             <td>За</td>\n          " +
            "          <td>Против</td>\n          " +
            "          <td>Воздержался</td>\n      " +
            "          </tr>\n        " +
            "        <tr>\n            " +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[8][]\" /></td>\n" +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[8][]\" /></td>\n" +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[8][]\" /></td>\n" +
            "                    <td class=\"bn\"><button class=\"vote_btn\">Голосовать</button></td>\n " +
            "               </tr>\n " +
            "           </table>"+
            "    <ul>\n             " +
            "   <li>Текст вопроса №9</li>\n     " +
            "       </ul>\n      " +
            "      <table class=\"vote\">\n         " +
            "       <tr class=\"bord\">\n       " +
            "             <td>За</td>\n          " +
            "          <td>Против</td>\n          " +
            "          <td>Воздержался</td>\n      " +
            "          </tr>\n        " +
            "        <tr>\n            " +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[9][]\" /></td>\n" +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[9][]\" /></td>\n" +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[9][]\" /></td>\n" +
            "                    <td class=\"bn\"><button class=\"vote_btn\">Голосовать</button></td>\n " +
            "               </tr>\n " +
            "           </table>"+
            "    <ul>\n             " +
            "   <li>Текст вопроса №10</li>\n     " +
            "       </ul>\n      " +
            "      <table class=\"vote\">\n     " +
            "       <tr class=\"bord\">\n       " +
            "             <td>За</td>\n          " +
            "          <td>Против</td>\n          " +
            "          <td>Воздержался</td>\n      " +
            "          </tr>\n        " +
            "        <tr>\n            " +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[10][]\" /></td>\n" +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[10][]\" /></td>\n" +
            "        <td class=\"nobord\"><input type=\"checkbox\" class=\"radio\" value=\"1\" name=\"fooby[10][]\" /></td>\n" +
            "                    <td class=\"bn\"><button class=\"vote_btn\">Голосовать</button></td>\n " +
            "               </tr>\n " +
            "           </table>"
    }
}

$.get("http://localhost:8080/Sobr/QServlet", function (data){
    let d = data.split("\n")
    let m = 1;
    let k = 0;
    Cards(d, k, m)
    m += 1
    k+=14
    Cards(d, k, m)
    m += 1
    k+=14
    Cards(d, k, m)
    m += 1
    k+=14
    Cards(d, k, m)
})