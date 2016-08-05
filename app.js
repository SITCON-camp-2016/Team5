var express = require("express");

//var calc = require("./calc.js");

var app = express();
var fs = require("fs");

var xml2js = require('xml2js').parseString;
var request = require('request');
var fs = require('fs');

app.use("/static", express.static(__dirname));

app.get("/", function (req, res1) {
    // res.send("Hello~" + calc.add(8,9))
    // res.send(fs.readFileSync(".index.html","UTF-8"));
    // res.sendFile(__dirname + "/index.html");


    request('http://www.c-bike.com.tw/xml/stationlistopendata.aspx', function (error, res, body) {
        xml2js(body, function (err, result) {
            var ary = [];
            for (var i = 0; i < 184; i++) {
                var station45_name = result.BIKEStationData.BIKEStation[0].Station[i].StationName;
                var station45_lat = result.BIKEStationData.BIKEStation[0].Station[i].StationLat;
                var station45_lon = result.BIKEStationData.BIKEStation[0].Station[i].StationLon;
                var station45_nowhave = result.BIKEStationData.BIKEStation[0].Station[i].StationNums1;
                var station45_nowcanban = result.BIKEStationData.BIKEStation[0].Station[i].StationNums2;

                var one = {
                    name: station45_name
                    , map: "https://www.google.com.tw/maps/place/22%C2%B040'37.2%22N+120%C2%B018'23.3%22E/@" + station45_lat.toString() + "," + station45_lon.toString() + "120.3042948,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d22.6769955!4d120.3064835?hl=zh-TW"
                    , nch: station45_nowhave
                    , ncb: station45_nowcanban
                };
                console.log("ID: " + i);
                console.log(station45_name.toString());
                console.log("https://www.google.com.tw/maps/place/22%C2%B040'37.2%22N+120%C2%B018'23.3%22E/@" + station45_lat.toString() + "," + station45_lon.toString() + "120.3042948,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d22.6769955!4d120.3064835?hl=zh-TW");
                console.log("nch: " + station45_nowhave.toString());
                console.log("ncb: " + station45_nowcanban.toString());
                console.log();
                ary.push(one);
            }
            res1.json(ary);
        });

    });


});

//app.get("/test", function (req, res) {
//    res.write("Hello~" + calc.add(8, 9))
//    res.write("Yes ,this is a test");
//    res.end();
//});
// app.get("/test",function(req,res){

// }

// > 1024
app.listen(2322, function (err) {
    console.log("Listening on port 2322");
});