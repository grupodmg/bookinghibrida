$(function(){

    $("#btnGuardar").click(function(){
        
        var data = new Object();
        data.rolNombre = $("#rolNombre").val();
        var dataJ = JSON.stringify(data);

        var url = "http://192.168.0.12:88/rol";

        httpConnect(url,dataJ,"POST",function(r){
            alert(r.message);
        });

    });

});