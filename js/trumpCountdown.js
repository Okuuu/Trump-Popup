//↓This code is about the popup, it's just a huge concatenation of a big html/css file ↓

jQuery( function( $ ) {
    $("body").append( '<div id="trumpPopup">' +
        '<div id ="text">' +
        'Dear Fellow American, you have to endure Donald Trump as President for still ' +
        '<br>' +
        '<span id="days"></span> Days ' +
        '<span id="hours"></span> hours ' +
        '<span id="minutes"></span> minutes and  ' +
        '<span id="seconds"></span> seconds</div>' +
        '</div>' +
        '</div>' +
        '<style>@import url("https://fonts.googleapis.com/css?family=Raleway");' +
        '#trumpPopup{' +
        'background-image: url("https://media.giphy.com/media/Bnu7lQjaXZUVa/giphy.gif");' +
        'background-repeat: no-repeat;' +
        'opacity: 0.8; width: 730px; height:100%;' +
        '}' +
        '#text{' +
        'position: relative;' +
        'top:20px;' +
        'margin: 0%;' +
        'font-family: "Raleway", sans-serif;' +
        'color: white;' +
        'font-size: 1.5rem;' +
        'text-align: center;' +
        '}' +
        '#text span{' +
        'font-size: 2.5rem;' +
        '}' +
        '</style>')
    $("#trumpPopup").dialog({
        title: '',
        hide : 0,
        modal: true,
        width:700,
        height:500
    })
    $(window).click(function(){
        $('.ui-dialog').hide(400);
        $('.ui-widget-overlay').css('background', 'none');
    })
})


//↓This code is about the clock↓
var deadline = '2020-11-08'; //This is the end time of the countdown, can be change, not sure about the date tho, I just picked the same date as 2016 ... But in 2020 ;p


function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
//↓This code is about the display of the clock↓
function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var timeinterval = setInterval(function(){
        var t = getTimeRemaining(endtime);

        days.innerHTML= t.days;
        hours.innerHTML= t.hours;
        minutes.innerHTML= t.minutes;
        seconds.innerHTML= t.seconds;

        if(t.total<=0){
            clearInterval(timeinterval);
        }
    },1000);
}
initializeClock('clockdiv', deadline);