var userinput;
$(document).ready(function () {

    $("#bt1").click(function () {

        getpoke();
    });

})

function getpoke(){
    userinput=25;
    var Json= "http://pokeapi.co/api/v2/pokemon/"+userinput;

    $.getJSON(Json,function (data) {

        //alert(JSON.stringify(data,null," "));
        var pokename = data.name;
        var poketype = data.types[0].name;
        alert(pokename+poketype)
        $("#pokeholder").append(pokename+poketype);

    });
}