//get all the ids
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let meridiem = document.getElementById("meridiem");
let hour1 = document.getElementById("hour1");
let hour2 = document.getElementById("hour2");
let hour3 = document.getElementById("hour3");
let min1 = document.getElementById("min1");
let min2 = document.getElementById("min2");
let min3 = document.getElementById("min3");
let sec1 = document.getElementById("sec1");
let sec2 = document.getElementById("sec2");
let sec3 = document.getElementById("sec3");
let meridiem1 = document.getElementById("meridiem1");
let meridiem2 = document.getElementById("meridiem2");
let meridiem3 = document.getElementById("meridiem3");
// console.log(hour1,min1,sec1)

//function 2
function calcTime(offset) {
    var now = new Date();
    var localTime = now.getTime();
    var localOffset = now.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    var newNow = new Date(utc + offset * 3600000);
    return newNow;
}

//function 1
function myfunction() {
    // Indian time calculation
    indiaNow = calcTime("+5.5");
    secs = indiaNow.getSeconds();
    mins = indiaNow.getMinutes();
    hours = indiaNow.getHours();
    if (hours > 12) {
        hours = hours - 12;
        meridiem.innerHTML = "PM";
    }
    if (hours < 10) {
        hour.innerHTML = "0" + hours;
    } else {
        hour.innerHTML = hours;
    }
    if (mins < 10) {
        min.innerHTML = "0" + mins;
    } else {
        min.innerHTML = mins;
    }
    if (secs <= 9) {
        sec.innerHTML = "0" + secs;
    } else {
        sec.innerHTML = secs;
    }

    // Newyork time calculation
    newYorkNow = calcTime("-5");
    secs1 = newYorkNow.getSeconds();
    mins1 = newYorkNow.getMinutes();
    hours1 = newYorkNow.getHours();
    // console.log(hours1,mins1,secs1)
    if (hours1 > 12) {
        hours1 = hours1 - 12;
        meridiem1.innerHTML = "PM";
    }
    if (hours1 < 10) {
        hour1.innerHTML = "0" + hours1;
    } else {
        hour1.innerHTML = hours1;
    }
    if (mins1 < 10) {
        min1.innerHTML = "0" + mins1;
    } else {
        min1.innerHTML = mins1;
    }
    if (secs <= 9) {
        sec1.innerHTML = "0" + secs;
    } else {
        sec1.innerHTML = secs;
    }

    // London time calculation
    londonNow = calcTime("0");
    secs2 = londonNow.getSeconds();
    mins2 = londonNow.getMinutes();
    hours2 = londonNow.getHours();
    // console.log(hours2,mins2,secs2)
    if (hours2 > 12) {
        hours2 = hours2 - 12;
        meridiem2.innerHTML = "PM";
    }
    if (hours2 < 10) {
        hour2.innerHTML = "0" + hours2;
    } else {
        hour2.innerHTML = hours2;
    }
    if (mins2 < 10) {
        min2.innerHTML = "0" + mins2;
    } else {
        min2.innerHTML = mins2;
    }
    if (secs <= 9) {
        sec2.innerHTML = "0" + secs;
    } else {
        sec2.innerHTML = secs;
    }

    // Japan time calculation
    londonNow = calcTime("+9");
    secs3 = londonNow.getSeconds();
    mins3 = londonNow.getMinutes();
    hours3 = londonNow.getHours();
    if (hours3 > 12) {
        hours3 = hours3 - 12;
        meridiem3.innerHTML = "PM";
    }
    if (hours3 < 10) {
        hour3.innerHTML = "0" + hours3;
    } else {
        hour3.innerHTML = hours3;
    }
    if (mins3 < 10) {
        min3.innerHTML = "0" + mins3;
    } else {
        min3.innerHTML = mins3;
    }
    if (secs <= 9) {
        sec3.innerHTML = "0" + secs;
    } else {
        sec3.innerHTML = secs;
    }
}
// myfunction()
setInterval(myfunction(), 1000); //for instant time update
setInterval(myfunction, 1000); //for upadating each second
