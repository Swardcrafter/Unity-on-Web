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
				"Main: ": 'color'
			}
		};
	}

	Update() {
		// console.log(this.gameObject.components.TransformComponent.position);
	}
}