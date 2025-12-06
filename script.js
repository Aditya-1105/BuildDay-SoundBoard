const buttons = document.querySelectorAll('.sound-btn');
const volumeSlider = document.getElementById('volume-slider');
const muteBtn = document.getElementById('mute-btn');

let currentVolume = 0.5;
let isMuted = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        playSound(soundFile);
    });
});

function playSound(fileName) {
    const audio = new Audio(`sounds/${fileName}`);
    if (isMuted) {
        audio.volume = 0;
    } else {
        audio.volume = currentVolume;
    }
    audio.play();
}

volumeSlider.addEventListener('input', (e) => {
    currentVolume = e.target.value;
    if (isMuted && currentVolume > 0) {
        isMuted = false;
        muteBtn.textContent = "🔊 Mute";
    }
});

muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    if (isMuted) {
        muteBtn.textContent = "🔇 Unmute";
    } else {
        muteBtn.textContent = "🔊 Mute";
    }
});