let elem = document.getElementById("elemo");
$.get("/Seruchorg", function (data) {

    elem.innerHTML = (data)

    console.log(elem)

})