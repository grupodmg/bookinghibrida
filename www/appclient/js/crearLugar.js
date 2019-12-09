$(function(){
    $("#frmCrear").submit(function(){
        var entidadlugar = new Object();        
        entidadlugar.lugNombre = $("#nombre_Lugar").val(); 
        entidadlugar.lugDescripcion = $("#Descripcion_Lugar").val();
        entidadlugar.lugDireccion = $("#Direccion_Lugar").val();             
        entidadlugar.lugLatitud= $("#Latitud_Lugar").val();
        entidadlugar.lugLongitud= $("#Longitud_Lugar").val();         
        entidadlugar.lugTelefono = $("#Telefono_Lugar").val();
        entidadlugar.lugCorreo= $("#Email_Lugar").val();         
        entidadlugar.fkMunicipio= {
            "munId":$("#Id_municipio").val()
        }
        entidadlugar.fkTipoLugar= {
            "tluId":$("#Id_TpLugar").val() 
        }
        
        var Lugentidad = JSON.stringify(entidadlugar);
        
        httpConnect("http://192.168.0.12:88/lugar",Lugentidad,"POST",function(r){
            alert(r.message+"-"+r.data.nombre);
            $("button[type=reset]").click();
        });        
        return false;
    });
});