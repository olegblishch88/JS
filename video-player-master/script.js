document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#stop').onclick = stop;
document.querySelector('#speed-up').onclick = speedUp;
document.querySelector('#speed-down').onclick = speedDown;
document.querySelector('#speed-normal').onclick = speedNormal;
document.querySelector('#volume').oninput = videoVolume;

let video = document.querySelector('#video-player');
let display;
let progress = document.querySelector('#progress');

video.ontimeupdate = progressUpdate;
progress.onclick = videoRevind;

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function speedUp() {
    video.play();
    video.playbackRate = 15;
}

function speedDown() {
    video.play();
    video.playbackRate = 0.5;
}
function speedNormal() {
    video.play();
    video.playbackRate = 1;
}
function videoVolume() {
    let v = this.value;
    video.volume = v / 100;
}

function progressUpdate() {
    let duration = video.duration;
    let currentTime = video.currentTime;
    progress.value = 100 * currentTime / duration;
    document.querySelector('#out').innerHTML = video.currentTime;
}

function videoRevind() {
    let width = this.offsetWidth;
    let offsetPosition = event.offsetX;
    this.value = 100 * offsetPosition / width;
    video.pause;
    video.currentTime = video.duration * (offsetPosition / width);
    video.play();
}