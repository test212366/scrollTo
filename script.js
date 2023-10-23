

function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth',

	})
}


const button = document.querySelector('.button')
const textToScroll = document.querySelector('.elem-text')


button.addEventListener('click', () => {
	scrollTo(textToScroll)
})
