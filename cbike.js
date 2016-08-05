var xml2js = require('xml2js').parseString;
var request = require('request');
var fs = require('fs');
request('http://www.c-bike.com.tw/xml/stationlistopendata.aspx',function (error,res,body){
         xml2js(body,function(err,result){
            //console.log(JSON.stringify(result));a
            var oao=result.BIKEStationData.BIKEStation[0].Station[0].StationName;
            console.log(oao.toString());
         });
});
