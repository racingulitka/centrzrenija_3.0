window.onload = () => {

	const hamburger = document.querySelector(".header-desktopMenu")
}

const ulMenu = document.querySelector(".header-desktopMenu")
const hamburger = document.querySelectorAll('.header-hamburgerIcon-stick')
const isMobile = getComputedStyle(document.querySelector('.header-logo')).display === 'none'

let isHamburgerOpen = false

const onHamburgerClick = () =>{
	isHamburgerOpen = !isHamburgerOpen
	if(isMobile){
		if(isHamburgerOpen) {
			ulMenu.style.cssText = 'translate:0% 0%;'
			for(let i = 0; i < hamburger.length; i++){
				hamburger[i].style.background = 'var(--mainBackground)'
			}
			hamburger[0].style.transformOrigin = 'top left'
			hamburger[0].style.rotate = '45deg'
			hamburger[1].style.opacity = 0;
			hamburger[2].style.transformOrigin = 'bottom left'
			hamburger[2].style.rotate = '-45deg'
		} else {
			ulMenu.style.cssText = 'translate:-100% 0%;'
			for(let i = 0; i < hamburger.length; i++){
				hamburger[i].style.cssText = 'background:var(--mainFontColor);'
			}
		}
	}
}