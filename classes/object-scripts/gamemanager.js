class GameManager {
	constructor() {
		this.game_objects = [];
		this.frameRate = 60;
		this.lastFrameTime = 0;
		this.deltaTime = 0;
		this.playing = false;
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

	get_gameObject_name(name) {
		let end_gameObject = null;
		for(var index=0, gameObject; gameObject = this.game_objects[index]; index++) {
			if(gameObject.name == name) {
				end_gameObject = gameObject;
			}
		}
    
		if (end_gameObject) {
			return end_gameObject.id;
		} else {
			console.error(`No GameObject with the name "${name}" found.`);
			return null; // You can return a default value or handle the error as needed.
		}
	}

	get_gameObject_index(index) {
		return this.game_objects[index];
	}



	start_loop() {
		const currentTime = performance.now(); // Get current timestamp in milliseconds
		this.deltaTime += (currentTime - this.lastFrameTime) / 1000; // Convert to seconds

		const canvas = document.querySelectorAll('.editor-gameview')[0];
		const ctx = canvas.getContext('2d');

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		if (this.deltaTime >= 1 / this.frameRate) {
			for (let index = 0; index < this.game_objects.length; index++) {
				if(this.playing == true) {
					this.game_objects[index].update_components();
				}
			}
			this.deltaTime -= 1 / this.frameRate;
		}

		this.lastFrameTime = currentTime;

		// Use requestAnimationFrame to call Run_Main_Loop on the next frame
		requestAnimationFrame(this.start_loop.bind(this));
	}
}