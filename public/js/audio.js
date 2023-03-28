const audio = document.querySelector("audio");
const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
const restartBtn = document.querySelector("#restart");
const volumeSlider = document.querySelector("#volumeSlider");
const durationSlider = document.querySelector("#durationSlider");

playBtn.addEventListener("click", () => {
    audio.play();
});

pauseBtn.addEventListener("click", () => {
    audio.pause();
});

restartBtn.addEventListener("click", () => {
    audio.currentTime = 0;
});

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
});

volumeSlider.addEventListener("wheel", (event) => {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    const currentVolume = parseInt(volumeSlider.value);
    let newVolume = currentVolume + delta * 5; // Change volume by 5 units
    newVolume = Math.min(100, Math.max(0, newVolume)); // Clamp volume between 0 and 100
    volumeSlider.value = newVolume;
    audio.volume = newVolume / 100;
});

durationSlider.addEventListener("mousedown", () => {
    audio.pause();
});

durationSlider.addEventListener("mouseup", () => {
    audio.play();
});

durationSlider.addEventListener("mousemove", (event) => {
    const progress =
        (event.offsetX / durationSlider.clientWidth) * audio.duration;
    audio.currentTime = progress;
});

audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    durationSlider.value = progress;
});
