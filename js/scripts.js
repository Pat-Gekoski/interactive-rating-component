'use strict'

const button = document.querySelector('.btn')
const radioInputs = document.querySelectorAll('.radio-input')

let rating = null

button.addEventListener('click', (e) => {
   e.preventDefault()
   if (!rating) {
      alert('Please select a rating')
   } else {
		localStorage.setItem('rating', rating)
		window.location.href = 'thankYou.html'
	}
})

radioInputs.forEach(input => input.addEventListener('change', (e) => {
	rating = e.target.value
}))

window.addEventListener('load', (e) => {
	radioInputs.forEach(input => {
		if (input.checked) rating = input.value
	})
})
