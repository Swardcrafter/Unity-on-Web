document.addEventListener('click', function(e) {
	// e.preventDefault(); // Prevent the default context menu
	const elements = document.querySelectorAll('.context-menu');

	elements.forEach(function(element, index) {
		element.style.display = 'none';
	});

	if (e.target.classList.contains('editor-hierarchy')) {
        UnloadObjects();
    } else if (e.target.classList.contains('editor-hierarchy-card')) {
        LoadObject(e.target);
    }
}, false);



function LoadObject(target, event) {
	UnloadObjects();

	let target_name = target.querySelector('p').innerText;


	let gameObject = MainGameManager.get_gameObject_index(MainGameManager.get_gameObject_name(target_name));


	const inspector = document.querySelectorAll('.editor-inspector')[0];

	const object_name = document.createElement('p');

	object_name.className = 'editor-inspector-objectname';
	object_name.innerText = target_name;

	inspector.appendChild(object_name);


	for (const [key, value] of Object.entries(gameObject.components)) {
		// Looping Components

		const component_element = document.createElement('div');

		component_element.className = 'editor-inspector-component';

		inspector.appendChild(component_element);


		const component_name = document.createElement('p');

		component_name.className = 'editor-inspector-component-name';
		component_name.innerText = value.constructor.name;

		component_element.appendChild(component_name);



		for(const [key2, value2] of Object.entries(value.sections)) {
			// Looping through Selections
			const section = document.createElement('div');

			section.className = 'editor-inspector-component-var';

			component_element.appendChild(section);

			const section_title = document.createElement('p');
			section_title.className = 'editor-inspector-component-var-text';
			section_title.innerText = key2;

			section.appendChild(section_title);


			const input_group = document.createElement('div');

			input_group.className = 'editor-inspector-component-var-input-group';

			section.appendChild(input_group);

			for(const [key3, value3] of Object.entries(value.sections[key2])) {
				// Looping through values

				// <p class="editor-inspector-component-var-text">X:</p>
				
				const value_text = document.createElement('p');

				value_text.className = 'editor-inspector-component-var-text';
				value_text.innerText = key3;

				input_group.appendChild(value_text);
				
				// <input type="number" class="editor-inspector-component-var-input" value="0">
				
				const value_input = document.createElement('input');


				value_input.className = 'editor-inspector-component-var-input';
				value_input.type = value3;
				value_input.value = value.sections_values[key2][key3];

				value_input.addEventListener('change', function (event) {
					// This code will run whenever the input value changes
					const inputValue = event.target.value;

					const value_name = value.sections_variable_names[key2][key3];

					value[value_name] = inputValue;

					// console.log(`${inputValue}\n${value_name}\n${value[value_name]}`);

					value.sections_values[key2][key3] = value[value_name];
				});

				input_group.appendChild(value_input);
			}
		}
	}
}


function UnloadObjects() {
	/* editor-inspector */

	const editor_inspector = document.querySelectorAll(".editor-inspector")[0];

	while (editor_inspector.firstChild) {
		editor_inspector.removeChild(editor_inspector.firstChild);
	}
}