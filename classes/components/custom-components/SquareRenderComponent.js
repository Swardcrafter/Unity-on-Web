class SquareRenderComponent extends Component {
	constructor(gameObject, color='black') {
		super(gameObject);

		this.color = color;


		this.sections = {
			"Color: ": {
				"Main: ": "color"
			}
		};

		this.sections_values = {
			"Color: ": {
				"Main: ": this.color
			}
		};

		this.sections_variable_names = {
			"Color: ": {
				"Main: ": ['color']
			}
		};
	}

	Update() {
		const canvas = document.querySelectorAll('.editor-gameview')[0];

		const ctx = canvas.getContext('2d');

		ctx.fillStyle = this.color;
		ctx.globalCompositeOperation = "source-over";

		const position = this.gameObject.components.TransformComponent.position;
		const scale = this.gameObject.components.TransformComponent.scale;

		ctx.fillRect(position.x, position.y, scale.x, scale.y);

		console.log(this.color);
	}
}