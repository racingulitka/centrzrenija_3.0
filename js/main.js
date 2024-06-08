const options = {
	root:null,
	rootMargin:'-50px',
	threshold:0.5,
}

const observerH2 = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting){
			entry.target.style.opacity = 1;
			entry.target.style.translate = '0% 0%';
		}
	});
}, options);

const h2 = document.querySelectorAll('h2')
h2.forEach(item => {
	observerH2.observe(item)
})

const observerDoctorBlock = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.style.scale = 1
			entry.target.style.opacity = 1
		}
	})
}, options)

const doctorContainerItems = document.querySelectorAll(".doctor-container-item")


doctorContainerItems.forEach(item => {
	observerDoctorBlock.observe(item)
})

const observerEquipmentBlock = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.style.scale = 1
			entry.target.style.opacity = 1
		}
	})
}, options)

const equipmentFlexItems = document.querySelectorAll(".equipment-flex-container")


equipmentFlexItems.forEach(item => {
	observerEquipmentBlock.observe(item)
})