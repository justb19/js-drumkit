console.log("practice log");
window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	console.log(audio);
	if(!audio) returnl //stop the function
});

