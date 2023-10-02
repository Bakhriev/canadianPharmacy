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
burgerMenu()

// For Mobile Dropdown --Start--
const dropdowns = document.querySelectorAll('.menu')
dropdowns.forEach(dropdown => {
	const subMenu = dropdown.querySelector('.sub-menu')
	dropdown.addEventListener('click', toggleSubMenu)
})
function toggleSubMenu() {
	const subMenu = this.querySelector('.sub-menu')
	subMenu.style.maxHeight = subMenu.style.maxHeight
		? ''
		: subMenu.scrollHeight + 'px'
}
// For Mobile Dropdown --End--

// Swiper
let slidesPerCol = 4

if (window.innerWidth < 768) {
	slidesPerCol = 2
}

var swiper = new Swiper('.swiper-1', {
	slidesPerView: 1,
	slidesPerColumn: slidesPerCol,
	spaceBetween: 30,
	slidesPerColumnFill: 'column',

	pagination: {
		el: '.products-pagination',
	},
})

const searchOpenBtn = document.querySelector('[data-search-open-btn]')
const searchCloseBtn = document.querySelector('[data-search-close-btn]')
const searchMenu = document.querySelector('[data-search-block]')
const body = document.querySelector('body')

searchOpenBtn.addEventListener('click', () => {
	searchMenu.classList.add('active')
	body.classList.add('disable-scroll')
})

searchCloseBtn.addEventListener('click', () => {
	searchMenu.classList.remove('active')
	body.classList.remove('disable-scroll')
})
