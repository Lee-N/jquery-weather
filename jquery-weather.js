(function ($) {
    $.fn.weather=function (options) {
        var defaults = {
            city: "",
            skin:"sogou",
            tips:true
        };
        var s=this;
        var ops = $.extend(defaults, options);
        var u = "https://tianqiapi.com/api?version=v6&appid=94296478&appsecret=bY9OnPbj&city=" + ops.city;
        $.ajax({
            url: u,
            //dataType: "jsonp",
            //jsonpCallback:"callback",
            success:function (data) {
               methods.render(s,data,ops)
			   
            }
        });
    }

    var methods={
        render:function (s,data,ops) {		
            let air_level="";
            let air=data.air;
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
                     <p>${data.date+" "+data.week}</p>
                     <p><img src="https://www.tianqiapi.com/static/skin/${ops.skin}/${data.wea_img}.png"></p>
                     <div class="tem row">
                      <div class="col-sm-6 col-xs-6">
                       <p>${data.tem}</p>
                     </div>
                    <div class="col-sm-6 col-xs-6 ">
                        <p>℃</p>
                        <p>${data.wea}</p>
                    </div>
                    </div>
                    <p>${data.tem2+"~"+data.tem1+"℃"}</p>
                    <p>${data.win}</p>
                    <p class="${air_level} air_level">${air+" "+data.air_level}</p>
                    <div class="tips ">
                       ${"tips:"+data.air_tips}
                       <span class="bot"></span>
                       <span class="top"></span> 
                    </div>
                  </div>`;
            s.append(html);
            if(!ops.tips)$(".tips").remove();
        }
    };
})(jQuery)