class GameManager {
	constructor() {
		this.game_objects = [];
		this.frameRate = 60;
		this.lastFrameTime = 0;
		this.deltaTime = 0;
	}

	add_gameObject(name) {
		this.game_objects.push(new GameObject(
			name,
			this.game_objects.length
		));
	}

	remove_gameObject(index) {
		this.game_objects = this.game_objects.splice(index, 1);

		for(var index=0, gameObject; gameObject = this.game_objects[index]; index++) {
			gameObject.index = index;
		}
	}

	rename_gameObject(index, name) {
		this.game_objects[index].name = name;
	}



	start_loop() {
		const currentTime = performance.now(); // Get current timestamp in milliseconds
		this.deltaTime += (currentTime - this.lastFrameTime) / 1000; // Convert to seconds

		if (this.deltaTime >= 1 / this.frameRate) {
			for (let index = 0; index < this.game_objects.length; index++) {
				this.game_objects[index].update_components();
			}
			this.deltaTime -= 1 / this.frameRate;
		}

		this.lastFrameTime = currentTime;

		// Use requestAnimationFrame to call Run_Main_Loop on the next frame
		requestAnimationFrame(this.start_loop.bind(this));
	}
}