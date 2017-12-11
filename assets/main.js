//init globals
const ptTimerMinutes = 15;
let initialtime = ptTimerMinutes * 60;
let timeCounter = 0;
let refreshIntervalId;
const audio = new Audio("http://cd.textfiles.com/sbsw/BEEPCHMS/MORSE.WAV");
//draw timer time
redrawTimer(0);

//tofix
// timer gaat naar 24:00:00 wanneer kleiner dan 0
// ================================
function redrawTimer(cnt) {
    let date = new Date(null);
    date.setSeconds(initialtime - cnt); // specify value for SECONDS here
    let result = date.toISOString().substr(11, 8);
    document.getElementById("counterTime").innerHTML = "" + result;
}
// ================================
function onTimer() {
    timeCounter += 1;
    redrawTimer(timeCounter);
    if (timeCounter >= initialtime) {
        audio.play();
        clearInterval(refreshIntervalId);
    }
}
// ================================
function InitPomo() {
    //declare buttons
    let startButton = document.getElementById("startB");
    let stopButton = document.getElementById("stopB");
    let resetButton = document.getElementById("resetB");

    //add actions, event listeners
    startButton.addEventListener(
        "click",
        function() {
            refreshIntervalId = setInterval(onTimer, 1000);
        },
        false
    );
    //
    resetButton.addEventListener(
        "click",
        function() {
            timeCounter = 0;
            redrawTimer(0);
        },
        false
    );
    //
    stopButton.addEventListener(
        "click",
        function() {
            clearInterval(refreshIntervalId);
        },
        false
    );
    //
}