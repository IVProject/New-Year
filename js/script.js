const countdownElement = document.getElementById('countdown');
const videoElement = document.getElementById('new-year-video');
const mainContent = document.getElementById('main-content');

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function updateCountdownText(totalSeconds){ 
    const hours = formatTime(Math.floor(totalSeconds / 3600) % 24);
    const minutes = formatTime(Math.floor(totalSeconds / 60) % 60);
    const seconds = formatTime(Math.floor(totalSeconds) % 60);

    countdownElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const totalSeconds = (newYear - now) / 1000;

    updateCountdownText(totalSeconds);
    console.log(totalSeconds)
    if (totalSeconds <= 22 && !videoElement.played.length) {
        mainContent.style.display = 'none';
        videoElement.style.display = 'block';

        videoElement.play();
    }
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height = Math.random() * 10 + 'px';

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 50);
setInterval(updateCountdown, 1000);
