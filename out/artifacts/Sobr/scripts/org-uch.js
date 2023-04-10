let elem2 = document.getElementById("elemo2");

$.get("/Serorguch", function (data) {

    elem2.innerHTML = (data)

    console.log(elem2)

})