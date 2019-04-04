(function ($) {
    $.fn.weather=function (options) {
        var defaults = {
            city: "",
            skin:"sogou",
            tips:true
        };
        var s=this;
        var ops = $.extend(defaults, options);
        var u = "https://www.tianqiapi.com/api?city=" + ops.city;
        $.ajax({
            url: u,
            dataType: "jsonp",
            jsonpCallback:"callback",
            success:function (data) {
               methods.render(s,data,ops)
            }
        });
    }

    var methods={
        render:function (s,data,ops) {
            let air_level="";
            let air=data.data[0].air;
            if(air<=50){
                air_level="btn-info"
            }
            else if(air<100){
                air_level="btn-success"
            }
            else if(air<200){
                air_level="btn-warning"
            }
            else{
                air_level="btn-danger"
            }

            html=`<div class="row">
                     <p>${data.city}</p>
                     <p>${data.data[0].date+" "+data.data[0].week}</p>
                     <p><img src="https://cdn.huyahaha.com/tianqiapi/skin/${ops.skin}/${data.data[0].wea_img}.png"></p>
                     <div class="tem row">
                      <div class="col-sm-6 col-xs-6">
                       <p>${data.data[0].tem.substring(0,data.data[0].tem.length-1)}</p>
                     </div>
                    <div class="col-sm-6 col-xs-6 ">
                        <p>℃</p>
                        <p>${data.data[0].wea}</p>
                    </div>
                    </div>
                    <p>${data.data[0].tem2+"~"+data.data[0].tem1}</p>
                    <p>${data.data[0].win[0]}</p>
                    <p class="${air_level} air_level">${air+" "+data.data[0].air_level}</p>
                    <div class="tips ">
                       ${"tips:"+data.data[0].air_tips}
                       <span class="bot"></span>
                       <span class="top"></span> 
                    </div>
                  </div>`;
            s.append(html);
            if(!ops.tips)$(".tips").remove();
        }
    };
})(jQuery)