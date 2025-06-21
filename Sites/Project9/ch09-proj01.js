const files = ['Nature-8399','River-655','Waterfall-941','Wave-2737'];
const aside = document.querySelector('aside');
const video = document.getElementById('vidPlayer');
const source = video.querySelector('source');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const progressFilled = document.getElementById('progressFilled');

// Create clickable thumbnails
files.forEach(file => {
  const img = document.createElement('img');
  img.src = `images/${file}.jpg`;
  img.alt = file;
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    source.src = `videos/${file}.mp4`;
    video.load();       // Reload video with new source
    video.play();       // Auto-play on click
    playButton.textContent = symbolPause;
  });
  aside.appendChild(img);
});


stopButton.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
  playButton.textContent = symbolPlay;
  progressFilled.style.flexBasis = '0%';
});


const skipButtons = document.querySelectorAll('[data-skip]');
skipButtons.forEach(button => {
  button.addEventListener('click', () => {
    video.currentTime += parseFloat(button.dataset.skip);
  });
});



playButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playButton.textContent = symbolPause;
  } else {
    video.pause();
    playButton.textContent = symbolPlay;
  }
});




video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
});



const volumeSlider = document.getElementById('volume');
volumeSlider.addEventListener('input', () => {
  video.volume = volumeSlider.value;
});
