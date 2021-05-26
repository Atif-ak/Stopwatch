
let sec = 0;
let min = 0;
let hour = 0;
let displaysec = 0;
let displaymin = 0;
let displayhour = 0;
let timer = null;
let clicked = false;


stopwatch = () => {
    ++sec;
    incresesec();
    incresemin();
    if(sec < 10){
        displaysec = "0" + sec.toString();
    }else
    displaysec = sec;
    if(min < 10){
        displaymin = "0" + min.toString();
    }else{
    displaymin = min;
    }
    if(hour < 10){
        displayhour = "0" + hour.toString();
    }else{
    displayhour = hour;
    }

    document.getElementById("display").innerHTML = displayhour + ":" + displaymin + ":" + displaysec;

}
incresesec = () => {
    if(sec/60 === 1){
        sec -= 60;
        min += 1;
    }
}
incresemin = () =>{
    if(min/60 === 1){
        min -= 60;
        hour += 1;
    }
}

start = () => {
if(clicked == false){
  
timer = window.setInterval(stopwatch, 1000);
clicked = true;
document.querySelector('#started').setAttribute('disabled','true');
document.querySelector('#paused').removeAttribute('disabled');
document.querySelector('#reseted').removeAttribute('disabled');

}
}
pause = () => {
    if(clicked == true){
        window.clearInterval(timer);
        clicked = false;
        document.querySelector('#paused').removeAttribute('value');
        document.querySelector('#paused').setAttribute('value','Continue');
        document.querySelector('#paused').removeAttribute('onclick');
        document.querySelector('#paused').setAttribute('onclick','continued()');
    }
}
function continued(){
    if(clicked == false){
        timer = window.setInterval(stopwatch, 1000);
        clicked = true;
        document.querySelector('#paused').removeAttribute('value');
        document.querySelector('#paused').setAttribute('value','Pause');
        document.querySelector('#paused').removeAttribute('onclick');
        document.querySelector('#paused').setAttribute('onclick','pause()');

    }

}
reset = () =>{
    clicked = false;
    sec = 0;
    min = 0;
    hour = 0;
    document.getElementById('display').innerHTML = "00:00:00";
   window.clearInterval(timer);
   document.querySelector('#started').removeAttribute("disabled");
   document.querySelector('#paused').removeAttribute('value');
   document.querySelector('#paused').setAttribute('value','Pause');
   document.querySelector('#paused').setAttribute('disabled','true');
   document.querySelector('#reseted').setAttribute('disabled', 'true');

    
}