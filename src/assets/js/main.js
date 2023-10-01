import {burgerMenu} from './functions/burger'

burgerMenu()

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
