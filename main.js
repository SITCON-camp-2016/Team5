$("button").on("click", function(){
    $.ajax({
      url: "https://httpbin.org/get",
      data: $('form').serialize(),
      type:"GET",
      dataType: "json",
  })
  .done(function(data){
  	$("div.change").html(data.args)
  })
  .error(function(jqXHR, status){
    console.log(status)
  })
  return false;
})

  var map;
  var marker;
   
  function initialize() 
  {
  //初始化地圖時的定位經緯度設定
    var latlng = new google.maps.LatLng(22.631386,120.30195100000003); 
    //初始化地圖options設定
  var mapOptions = {
      zoom: 10,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  //初始化地圖
    map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
  //加入標記點
  marker = new google.maps.Marker({
      draggable:true,
      position: latlng,
      title:"美麗島站",
      map:map
  }); 
  //增加標記點的mouseup事件
  google.maps.event.addListener(marker, 'mouseup', function() {
    LatLng = marker.getPosition();
    $("#NowLatLng").html("【移動標記點後的位置】緯度：" + LatLng.lat() + "經度：" + LatLng.lng());
  });
  
  }