class TransformComponent extends Component {
	constructor(gameObject) {
		super(gameObject);

		this.position = {
			"x": 10,
			"y": 10
		};

		this.scale = {
			"x": 100,
			"y": 100
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
				"X: ": ['position', 'x'],
				"Y: ": ['position', 'y']
			},
			"Scale: ": {
				"X: ": ['scale', 'x'],
				"Y: ": ['scale', 'y']
			}
		}
	}

	Update() {

	}
}