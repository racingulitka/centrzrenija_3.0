
window.onload = function() {
	const aboutUs = document.getElementById("aboutUs");
	const open1 = document.getElementById('open');
	const map = document.getElementById('map');
	const contacts = document.getElementById('contacts');
};

function getAboutUs(){
	if (getComputedStyle(aboutUs).transform == "matrix(1, 0, 0, 1, 0, 0)" || getComputedStyle(aboutUs).transform == "none"){
		aboutUs.style.cssText = "transform:rotateX(180deg);";
	} else {
		aboutUs.style.cssText = "transform:rotateX(0deg);";
	}
}

function getOpen(){
	if (getComputedStyle(open1).transform == "matrix(1, 0, 0, 1, 0, 0)" || getComputedStyle(open1).transform == "none"){
		open1.style.cssText = "transform:rotateY(180deg);";
	} else {
		open1.style.cssText = "transform:rotateY(0deg);";
	}
}

function getMap(){
	if (getComputedStyle(map).transform == "matrix(1, 0, 0, 1, 0, 0)" || getComputedStyle(map).transform == "none"){
		map.style.cssText = "transform:rotateY(180deg);";
	} else {
		map.style.cssText = "transform:rotateY(0deg);";
	}
}

function getContacts(){
	if (getComputedStyle(contacts).transform == "matrix(1, 0, 0, 1, 0, 0)" || getComputedStyle(contacts).transform == "none"){
		contacts.style.cssText = "transform:rotateX(180deg);";
	} else {
		contacts.style.cssText = "transform:rotateX(0deg);";
	}
}
