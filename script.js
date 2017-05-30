var seconds = document.getElementById("seconds"),
    minutes = document.getElementById("minutes"),
    hours = document.getElementById("hours");



helper.animate(seconds,function(el){
    var secondNow = new Date().getSeconds();
    helper.changeCss(seconds,"transform: rotate("+[180+secondNow*6]+"deg)");
},500);

helper.animate(minutes,function(el){
    var minuteNow = new Date().getMinutes();
    helper.changeCss(minutes,"transform: rotate("+[180+minuteNow*6]+"deg)");
},500);

helper.animate(hours,function(el){
    var hourNow = new Date().getHours();
    helper.changeCss(hours,"transform: rotate("+[180+hourNow*12]+"deg)");
},500);


