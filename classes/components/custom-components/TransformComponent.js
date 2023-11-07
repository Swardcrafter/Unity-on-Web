class TransformComponent extends Component {
	constructor(gameObject) {
		super(gameObject);

		this.position = {
			"x": 0,
			"y": 0
		};

		this.scale = {
			"x": 0,
			"y": 0
		};


		this.sections = {
			"Position: ": {
				"X: ": "number",
				"Y: ": "number"
			},
			"Scale: ": {
				"X: ": "number",
				"Y: ": "number"
			}
		};

		this.sections_values = {
			"Position: ": {
				"X: ": this.position['x'],
				"Y: ": this.position['y']
			},
			"Scale: ": {
				"X: ": this.scale['x'],
				"Y: ": this.scale['y']
			}
		};

		this.sections_variable_names = {
			"Position: ": {
				"X: ": 'position["x"]',
				"Y: ": 'position["y"]'
			},
			"Scale: ": {
				"X: ": 'scale["x"]',
				"Y: ": 'scale["y"]'
			}
		}
	}

	Update() {

	}
}