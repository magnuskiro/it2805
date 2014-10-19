
var startTime = new Date();
var running = false;

function reset(){
    console.log("reset");
    if(running){
        startTime = new Date();
    }
}

function toggle(){
    if(running){
        console.log("stop");
        running = false;
    } else{
        console.log("start");
        startTime = new Date();
        running = true;
    }
}

function updateTime(){
    if(running){
        var now = new Date();
        var time = new Date(now-startTime);
        console.log(time.toTimeString());
        document.getElementById("display-area").innerHTML = (time.getHours()-1)+":"+time.getMinutes()+":"+time.getSeconds()+"."+time.getMilliseconds();
    }
}

function Init () {
    var buttons = ["toggle-button", "reset-button"];

    document.getElementById(buttons[0]).addEventListener ("mousedown", function () {toggle()}, false);
    document.getElementById(buttons[1]).addEventListener ("mousedown", function () {reset()}, false);
    console.log("init complete");
}

setInterval ("updateTime()", 1000 );