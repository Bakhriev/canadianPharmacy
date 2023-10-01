const burgerMenu = () => {
	const burger = document.querySelector('.burger')
	const navigation = document.querySelector('.header__navigation')
	const overlay = document.querySelector('.overlay')
	const elements = [burger, navigation, overlay]
	const body = document.querySelector('body')

	const toggleActiveClass = () => {
		elements.forEach(element => element.classList.toggle('active'))
		body.classList.toggle('disable-scroll')
	}

	burger.addEventListener('click', toggleActiveClass)

	overlay.addEventListener('click', toggleActiveClass)

	window.addEventListener('resize', () => {
		const {innerWidth} = window
		if (innerWidth > 991.98) {
			elements.forEach(element => element.classList.remove('active'))
			body.classList.remove('disable-scroll')
		}
	})
}

const dropdowns = document.querySelectorAll('[data-dropdown]')

dropdowns.forEach(dropdown => {
	const subMenu = dropdown.querySelector('[data-dropdown-menu]')
	dropdown.addEventListener('click', toggleSubMenu)
})

function toggleSubMenu() {
	const subMenu = this.querySelector('[data-dropdown-menu]')
	subMenu.style.maxHeight = subMenu.style.maxHeight
		? ''
		: subMenu.scrollHeight + 'px'
}

var swiper = new Swiper('.swiper-1', {
	slidesPerView: 'auto',
	spaceBetween: 60,
	pagination: {
		el: '.products-pagination',
		clickable: true,
	},
})
