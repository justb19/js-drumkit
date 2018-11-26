function playSound(e) {
  
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
	  if(!audio) return //stops the function altogether
	  audio.currentTime = 0; //Rewinds beat to the start (What does this really do?)
	  audio.play();
	  key.classList.add('playing'); //vanilla js way of jquery's .addClass('')
  }
  
  function removeTransition(e) {
	  if (e.propertyName !== 'transform') return;
	this.classList.remove('playing'); //changes the class of the key that's pressed  
  }
  
   const keys = document.querySelectorAll('.key');
   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
   window.addEventListener('keydown', playSound);