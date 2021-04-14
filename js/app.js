// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('../libs/wow.min')
import WOW from '../libs/wow.min.js'

document.addEventListener('DOMContentLoaded', () => {

	const wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		live: true
	});

	wow.init()

})
