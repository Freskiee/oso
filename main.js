import './style.css'

const bearImage = document.getElementById('bearImage');
const bearSound = document.getElementById('bearSound');
const bellyButton = document.getElementById('bellyButton');
let isPlaying = false;

function playSound() {
  if (isPlaying) {
    return;
  }
  
  isPlaying = true;
  bearSound.currentTime = 0;
  bearSound.play().catch(err => {
    console.log('Audio playback failed:', err);
    isPlaying = false;
  });
}

bearSound.addEventListener('ended', () => {
  isPlaying = false;
});

function animateBear() {
  bearImage.classList.add('bounce');
  setTimeout(() => {
    bearImage.classList.remove('bounce');
  }, 200);
}

function animateButton() {
  bellyButton.classList.add('pulse');
  setTimeout(() => {
    bellyButton.classList.remove('pulse');
  }, 300);
}

function handleInteraction(event) {
  event.preventDefault();
  playSound();
  animateBear();
}

function handleButtonClick(event) {
  event.preventDefault();
  event.stopPropagation();
  playSound();
  animateBear();
  animateButton();
}

bearImage.addEventListener('touchstart', handleInteraction, { passive: false });
bearImage.addEventListener('click', handleInteraction);
bellyButton.addEventListener('click', handleButtonClick);
bellyButton.addEventListener('touchstart', handleButtonClick, { passive: false });
