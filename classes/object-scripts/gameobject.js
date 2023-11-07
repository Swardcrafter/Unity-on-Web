class GameObject {
	constructor(name, id) {
		this.components = {};
		this.name = name;
		this.id = id;

		this.add_component(TransformComponent);
	}


	update_components() {
		for (const [index, [key, value]] of Object.entries(Object.entries(this.components))) {
			value.Update();
		}
	}

	add_component(component_class, args=[]) {
		this.components[component_class.name] = new component_class(this, ...args);
	}

	remove_component(component_name) {
		delete this.components.component_name;
	}
}