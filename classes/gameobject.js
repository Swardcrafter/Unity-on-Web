class GameObject {
	constructor(name, id) {
		this.components = [];
		this.name = name;
		this.id = id;
	}


	update_components() {
		for(var index=0, component; component = this.components[index]; index++) {
			component.Update();
		}
	}
}