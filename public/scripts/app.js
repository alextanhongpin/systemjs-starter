

import Colors from './atom/_colors.js';

import './atom/_colors.css';

function init() {
	console.log(Colors)
	document.body.innerHTML = '<div class="red">Hello world</div>';
}

init();