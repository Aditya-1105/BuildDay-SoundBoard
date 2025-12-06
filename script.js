// 1. Select elements
const buttons = document.querySelectorAll('.sound-btn');
const volumeSlider = document.getElementById('volume-slider');
const muteBtn = document.getElementById('mute-btn');

// 2. Global Volume State
let currentVolume = 0.5;
let isMuted = false;

// 3. Add click listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        playSound(soundFile);
    });
});

// 4. Play Function
function playSound(fileName) {
    const audio = new Audio(`sounds/${fileName}`);
    if (isMuted) {
        audio.volume = 0;
    } else {
        audio.volume = currentVolume;
    }
    audio.play();
}

// 5. Volume Slider
volumeSlider.addEventListener('input', (e) => {
    currentVolume = e.target.value;
    if (isMuted && currentVolume > 0) {
        isMuted = false;
        muteBtn.textContent = "🔊 Mute";
    }
});

// 6. Mute Toggle
muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    if (isMuted) {
        muteBtn.textContent = "🔇 Unmute";
    } else {
        muteBtn.textContent = "🔊 Mute";
    }
});