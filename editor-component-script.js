document.addEventListener('click', function(e) {
	e.preventDefault(); // Prevent the default context menu
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
	let target_name = target.querySelector('p').innerText;


	let gameObject = MainGameManager.get_gameObject_index(MainGameManager.get_gameObject_name(target_name));
	console.log(gameObject.components);
}


function UnloadObjects() {
	
}