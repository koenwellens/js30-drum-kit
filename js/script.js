(function(w) {
  function playAudio(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    
    if(!audio) {
      return;
    }
    
    audio.currentTime = 0;
    audio.play();
  }
  
  function toggleKey(keyCode) {
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    
    if(!key) {
      return;
    }
    
    key.classList.add('playing');
    setTimeout(function() {
      key.classList.remove('playing');
    }, 0.07);
  }
  
  function removeTransition(e) {
    if(e.propertyName !== 'transition') {
      return;
    }
    
    // This is the element with 'key' as class
    this.classList.remove('playing');
  }
  
  w.addEventListener('keydown', function(e) {
    playAudio(e.keyCode);
    toggleKey(e.keyCode);
  });
  
  const keys = document.querySelectorAll('.key');
  
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
})(window);
