/*
http://fipeapi.appspot.com/
https://webdesignemfoco.com/cursos/php/api-fipe-2
https://webdesignemfoco.com/cursos/php/api-fipe-1
https://www.youtube.com/watch?v=TjFebGtoEPw&t=151s
*/

(function readyJS(win, doc){
    //Get Root
    function getRoot() {
        return win.location.protocol+"//"+doc.location.hostname+"/";
    }
     //Function ajax
        function ajaxFunction(action,brandId="",vehicleId="")
        {
            $.ajax({
                url: getRoot()+"api-fipe/controller/controllerFipe.php?action="+action+brandId+vehicleId+"",
                type:"post",
                dataType:"json",
                success:function (response) {
                    const responseJson=JSON.parse(response);
                    for(let i=0; i < responseJson.length; i++){
                        $("#"+action).append("<option value='"+responseJson[i].id+"'>"+responseJson[i].name+"</option>");
                    }
                }
            });
        }
        //Get brand
        function getBrand()
        {
            ajaxFunction("brand");
            $("#brand").on("change",function(){
                $("#vehicles").show();
                getVehicles($(this).val());
            });
        }

        //Get Vehicles
        function getVehicles(brandId)
        {
            ajaxFunction("vehicles","&brandId="+brandId);
            $("#vehicles").on("change",function(){
                $("#year").show();
                getYear(brandId,$(this).val());
            });
        }

        //Get Year
        function getYear(brandId,vehicleId)
        {
            ajaxFunction("year","&brandId="+brandId,"&vehicleId="+vehicleId);
        }
      getBrand();
  
  })(window,document);