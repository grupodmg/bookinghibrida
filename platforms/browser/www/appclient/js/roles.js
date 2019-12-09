$(function(){

        var url = "http://192.168.0.12:88/rol";

        httpConnect(url,null,"GET",function(r)
        {
           //if(r.status === 200){
               console.log(r);
                for(var i = 0; i < r.data.length; i++)
                {
                    var html = "<div class='col s12 m8 offset-m2 l6 offset-l3'> \
                <div class='card-panel grey lighten-5 z-depth-1'>\
                    <div class='row valign-wrapper'>\
                        <div class='col s2'>\
                            <img src='images/yuna.jpg' alt='' class='circle responsive-img'>\
                            <!-- notice the 'circle' class -->\
                        </div>\
                        <div class='col s10'>\
                            <span class='black-text'>\
                                "+r.data[i].rolNombre+"\
                            </span>\
                        </div>\
                    </div>\
                </div>\
                </div>";
                $("#lista").append(html);
                }
           //}
        });

});

