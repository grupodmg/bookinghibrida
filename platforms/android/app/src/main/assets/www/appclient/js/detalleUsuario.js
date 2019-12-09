function cargarTipoIdentificacion() 
{
    httpConnect("http://192.168.0.12:88/tipid", null, "GET", function (r) 
    {
        var html = "<option value=''>[Seleccione opcion]</option>";
        for(var i = 0; i < r.data.length; i++)
        {
            var tid = r.data[i];
            html += "<option value='"+tid.tidId+"'>"+tid.tipNombre+"</option>";
        }
        $("#fkTipoIdentificacion").html(html);
    });
}

function cargarDetalle() {
    var id = getParameterByName("id");
    httpConnect("http://192.168.0.12:88/usuario/" + id, null, "GET",function(r){
        if(r.status!==200){
            alert(r.message);
            window.location.replace("?p=listarUsuario");
        }
        $("#usuId").val(r.data.usuId);
        $("#usuIdentificacion").val(r.data.usuIdentificacion);
        $("#usuNombres").val(r.data.usuNombres);
        $("#usuGenero").val(r.data.usuGenero);
        $("#usuCorreo").val(r.data.usuCorreo);
        $("#usuTelefono").val(r.data.usuTelefono);
        $("#usuAvatar").val(r.data.usuAvatar);
    },function(e){
        alert(e);
        window.location.replace("?p=listarUsuario");
    });
}

$(function () {
    cargarTipoIdentificacion();
    cargarDetalle();
    $("#frmUpdate").submit(function(){
        var entidad = new Object();
        entidad.usuIdentificacion = $("#usuIdentificacion").val();
        entidad.usuNombres = $("#usuNombres").val();
        entidad.usuGenero = $("#usuGenero").val();
        entidad.usuCorreo = $("#usuCorreo").val();
        entidad.usuTelefono = $("#usuTelefono").val();
        entidad.usuAvatar = $("#usuAvatar").val();
        var jentidad = JSON.stringify(entidad);
        
            var id=$("#id").val();
        httpConnect("http://192.168.0.12:88/usuario/"+id,jentidad,"PUT",function(r){
            alert(r.message+"-"+r.data.nombre);
            window.location.replace("?p=listarUsuario");
        });
        return false;
    });
});