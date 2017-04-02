
$(document).ready(function() {
var currentTemp ;
var forecastThree=''; 
var dataPosition=''; 
$.getJSON('https://api.wunderground.com/api/973fe4bb2a476502/geolookup/conditions/forecast/alerts/q/autoip.json',function(json){
currentTemp = json.current_observation.temp_c;

var forecastPosition;
var feelsLikeC= json.current_observation.feelslike_c;
var feelsLikeF= json.current_observation.feelslike_f;
var windDirection= json.current_observation.wind_dir;
var weather=json.current_observation.weather;
var humidity= json.current_observation.relative_humidity;
var visabilitiKm=json.current_observation.visibility_km;
var visabilitiM=json.current_observation.visibility_mi;
var windDirection=json.current_observation.wind_dir;
var windSpeed=json.current_observation.wind_kph;
var currentLocation= json.location.city;


var forcastDay1=json.forecast.txt_forecast.forecastday[2].title;
var forcastDay2=json.forecast.txt_forecast.forecastday[4].title;
var forcastDay3=json.forecast.txt_forecast.forecastday[6].title;

var forcastDay1Icon=json.forecast.txt_forecast.forecastday[2].icon_url;
var forcastDay2Icon=json.forecast.txt_forecast.forecastday[4].icon_url;
var forcastDay3Icon=json.forecast.txt_forecast.forecastday[6].icon_url;



var forcastDay1metric=json.forecast.txt_forecast.forecastday[2].fcttext_metric;
var forcastDay2metric=json.forecast.txt_forecast.forecastday[4].fcttext_metric;

var forcastDay3metric=json.forecast.txt_forecast.forecastday[6].fcttext_metric;

var forcastDay1fcttext=json.forecast.txt_forecast.forecastday[2].fcttext;
var forcastDay2fcttext=json.forecast.txt_forecast.forecastday[4].fcttext;
var forcastDay3fcttext=json.forecast.txt_forecast.forecastday[6].fcttext;






if (currentTemp>=40)
dataPosition= '#plusForty';
else if(currentTemp>=30)
dataPosition= '#plusThirty';
else if(currentTemp>=20)
dataPosition= $("#plusTwenty");
else if(currentTemp>=10)
dataPosition= '#plusTen';
else if(currentTemp>=0)
dataPosition= '#zeroDegre';
else if(currentTemp<=10)
dataPosition= '#minusTen';
else if(currentTemp<=20)
dataPosition= '#minusTwenty';
else 
Alert('Internet connection ERROR');



$(dataPosition).removeClass("initial-set");
$(dataPosition).addClass("active");

$(dataPosition).children(".three-days-forecast").html('<i style="display:block;" class="fa fa-calendar" aria-hidden="true"</i><div class="go-forecast"><i  style="display:block; font-size: 0.5em; margin-top:10px; " class="fa fa-chevron-circle-down" aria-hidden="true"></i></div>');


$(dataPosition).children(".icon-city-wrap").children(".icon-img").html('<div class="weatherIcon"><img src=' + '"'+json.current_observation.icon_url +'"'+ 'style=" width:50px; height:50px; margin-bottom:11px;"></div>');

$(dataPosition).children(".icon-city-wrap").children(".icon-img").append('<span style="font-size: 0.5em;margin-left: 10px;">'+weather+'<span>');

$(dataPosition).children(".icon-city-wrap").children(".Current-location").html('<i style="margin-right:10px; opacity:0.5;" class="fa fa-map-marker" aria-hidden="true"></i>'+currentLocation);

$(dataPosition).children(".temperature-wrap").children(".current-temperature").html(currentTemp+ '<span style="font-size:40% !important;"> °C</span>');

$(dataPosition).children(".temperature-wrap").children(".feels-like").html( '<span style="font-style: italic;font-size:0.5em;">feels like: </span><span style="font-style:italic !important;font-size:0.5em !important;"><span style="margin-left:5px;">'+feelsLikeC+ '</span></span><span style="font-style:italic !important;font-size:0.5em !important;">°C</span>');

$(dataPosition).children(".wind-humidity-wrap").children(".wind").html('<span style="font-size:0.6em!important;">wind: '+windDirection+' | '+'</span><span style="font-weight:bold;">  '+windSpeed+'</span>kph');

$(dataPosition).children(".wind-humidity-wrap").children(".humidity").html('<i class="fa fa-tint" style="transform: rotate(20deg);opacity:0.5;" aria-hidden="true"></i><span style="font-size:0.6em!important; margin-left:10px;">humidity:</span><span style="margin-left:5px;">'+humidity+'</span>');



if (currentTemp>=40)
forecastPosition= '#forcast-plusForty';
else if(currentTemp>=30)
forecastPosition= '#forcast-plusThirty';
else if(currentTemp>=20)
forecastPosition= ("#forcast-plusTwenty");
else if(currentTemp>=10)
forecastPosition= '#forcast-plusTen';
else if(currentTemp>=0)
forecastPosition= '#forcast-zeroDegre';
else if(currentTemp<=10)
forecastPosition= '#forcast-minusTen';
else if(currentTemp<=20)
forecastPosition= '#forcast-minusTwenty';
else 
Alert('Internet connection ERROR');


$(forecastPosition).children(".day-wrap").children(".forcast-icon").html('<div class="weatherIcon"><img  src=' + '"'+  forcastDay1Icon +'"'+ 'style=" width:40px; height:40px;"></div>');

$(forecastPosition).children(".day-wrap").children(".forcast-icon-second").html('<div class="weatherIcon "><img src=' + '"'+  forcastDay2Icon +'"'+ 'style=" width:40px; height:40px;"></div>');


$(forecastPosition).children(".day-wrap").children(".forcast-icon-third").html('<div class="weatherIcon "><img src=' + '"'+  forcastDay3Icon +'"'+ 'style="  width:40px; height:40px;"></div>');


$(forecastPosition).children(".day-wrap").children(".forecasted-day").html('<span style=" display: inline;"> '+ forcastDay1+'</span>');

$(forecastPosition).children(".day-wrap").children(".forecasted-day-second").html('<span style=" display: inline;"> '+forcastDay2+'</span>');

$(forecastPosition).children(".day-wrap").children(".forecasted-day-third").html('<span style="display: inline;"> '+forcastDay3 +'</span>');


$(forecastPosition).children(".day-wrap").children(".min-max-first").html('<span>'+forcastDay1metric+'</span>');

$(forecastPosition).children(".day-wrap").children(".min-max-second").html('<span >'+forcastDay2metric+'</span>');

$(forecastPosition).children(".day-wrap").children(".min-max-third").html('<span >'+forcastDay3metric+'</span>');   


forecastThree = $(forecastPosition);
forecastThree.css({
'display':'none',
'height': '52vh',
'width':'100%',	

'z-index': '2'
});


});


$(".three-days-forecast").click(function(){ 

forecastThree.slideToggle();



});





});