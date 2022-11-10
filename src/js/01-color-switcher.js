const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

stopBtn.disabled = true;

function getRandomHexColor() {
    return document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;        
};

startBtn.addEventListener('click', onStartClick); 

function onStartClick() {
    timerId = setInterval(() => {
        getRandomHexColor();
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;  
};

stopBtn.addEventListener('click', onStopClick);

function onStopClick() {
    clearInterval(timerId);
    
    startBtn.disabled = false;
    stopBtn.disabled = true;
};

