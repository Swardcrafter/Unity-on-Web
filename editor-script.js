document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Prevent the default context menu
	const elements = document.querySelectorAll('.context-menu');

	elements.forEach(function(element, index) {
		element.style.display = 'none';
	});

    if (e.target.classList.contains('editor-hierarchy')) {
        createContextMenu(e, ['Create'], e.clientX, e.clientY);
    } else if (e.target.classList.contains('editor-hierarchy-card')) {
        createContextMenu(e, ['Create', 'Delete'], e.clientX, e.clientY);
    }
}, false);


function createContextMenu(event, options, x, y) {
    const contextMenu = document.createElement('div');
    contextMenu.className = 'context-menu';
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';

    options.forEach(optionText => {
        const option = document.createElement('div');
        option.className = 'context-menu-option';
        option.textContent = optionText;
        contextMenu.appendChild(option);

        option.addEventListener('click', function() {
            // Handle the click event for the context menu option here
            if(optionText == "Create") {
                createObject();
            } else if(optionText == "Delete") {
                deleteObject(event.target);
            }
            contextMenu.style.display = 'none'; // Hide the context menu after clicking
        });
    });

    document.body.appendChild(contextMenu);

    document.addEventListener('click', function() {
        contextMenu.style.display = 'none'; // Hide the context menu when clicking anywhere else
    });


    event.preventDefault();
}


function createObject() {
    let object_name = prompt('Object name?');

    // Check if an object with the same name already exists
    const existingObjects = document.querySelectorAll('.editor-hierarchy-card .editor-hierarchy-text');
    const nameAlreadyExists = Array.from(existingObjects).some(object => object.innerText.toLowerCase() === object_name.toLowerCase());
    const name_is_nothing = object_name == '';

    if (nameAlreadyExists) {
        alert('An object with the same name already exists. Please pick a new name.');
        createObject();
        return;
    }
    if (name_is_nothing) {
        alert('Pleace put in a name.');
        createObject();
        return;
    }

    let object = document.createElement('div');
    let object_2 = document.createElement('p');

    object_2.className = 'editor-hierarchy-text';
    object_2.innerText = object_name;

    object.className = 'editor-hierarchy-card';
    object.appendChild(object_2);

    document.querySelectorAll('.editor-hierarchy')[0].appendChild(object);
}


function deleteObject(object) {
    object.remove();
}