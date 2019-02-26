document.addEventListener("keydown", function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"`);
    if (!audio) return; //stops function if key not audio
    audio.currentTime = 0; //allows user to play other keys while current key still playing
    audio.play();
    key.classList.add('playing'); //adds animation by adding class already in CSS
});

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));