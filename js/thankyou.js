'use strict'

window.addEventListener('load', () => {
	const rating = localStorage.getItem('rating')
	const ratingSpan = document.getElementById('rating')
	if (rating) ratingSpan.innerText = rating
})