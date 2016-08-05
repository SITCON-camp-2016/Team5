var currentMap;
 
$(function(){
　　initialize();
});
 
function initialize() {
　　// Define a location
　　var latlng = new google.maps.LatLng(22.631386,120.30195100000003);
　　// Define an option of map
　　var myOptions = {
　　　　zoom: 8,
　　　　center: latlng,
　　　　mapTypeId: google.maps.MapTypeId.RoadMap
　　};
　　// Create a map
　　currentMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}