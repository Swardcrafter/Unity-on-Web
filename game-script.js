const MainGameManager = new GameManager();

const play_button = document.querySelectorAll('.play-button')[0];
const stop_button = document.querySelectorAll('.stop-button')[0];

const canvas = document.querySelectorAll('.editor-gameview')[0];

canvas.width = canvas.clientWidth; // Set canvas width to match its CSS width
canvas.height = canvas.clientHeight; // Set canvas height to match its CSS height


play_button.addEventListener('click', function() {
	MainGameManager.playing = true;
	console.log(canvas);
});
  
stop_button.addEventListener('click', function() {
	MainGameManager.playing = false;
	console.log(canvas);
});


MainGameManager.start_loop();