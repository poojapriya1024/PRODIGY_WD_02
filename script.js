let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');

let hour = 0;
let minute = 0;
let second = 0;
let msec = 0;

// tells if the timer is currently running or not
let timer = false;

startBtn.addEventListener('click', () => {
    timer = true;
    stopWatch();
});

pauseBtn.addEventListener('click', () => {
    timer = false;
});

resetBtn.addEventListener('click', () => {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    msec = 0;

    document.getElementById('hour').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('msec').innerHTML = "00";

    const lapsList = document.getElementById('lapsList');
    lapsList.innerHTML = "";

});

function stopWatch() {
    if (timer) {
        msec++;
    }

    if (msec == 100) {
        second++;
        msec = 0;
    }

    if (second == 60) {
        second = 0;
        minute++;
    }

    if (minute == 60) {
        hour++;
        minute = 0;
        second = 0;
    }

    let hrString = hour < 10 ? "0" + hour : hour;
    let minString = minute < 10 ? "0" + minute : minute;
    let secString = second < 10 ? "0" + second : second;
    let msecString = msec < 10 ? "0" + msec : msec;

    document.getElementById('hour').innerHTML = hrString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('msec').innerHTML = msecString;

    setTimeout(stopWatch, 10);
}

lapBtn.addEventListener('click', () => {
    if (timer) {
        // Capture the current values for lap time
        const lapTime = formatTime(hour, minute, second, msec);
        
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;

        const lapsList = document.getElementById('lapsList');
        lapsList.appendChild(lapItem);
    }
});

function formatTime(hr, min, sec, msec) {
    const hrString = hr < 10 ? "0" + hr : hr;
    const minString = min < 10 ? "0" + min : min;
    const secString = sec < 10 ? "0" + sec : sec;
    const msecString = msec < 10 ? "0" + msec : msec;
    return `${hrString}:${minString}:${secString}.${msecString}`;
}
