class SquareRenderComponent extends Component {
	constructor(gameObject, color) {
		super(gameObject);

		this.color = color;
	}

	Update() {
		console.log(this.gameObject.components.TransformComponent.position);
	}
}