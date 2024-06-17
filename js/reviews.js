const reviewFlex = document.querySelector('.reviews-flexContainer')

const reviewsArr = [
	{
		id:1,
		name:'Наташка',
		rate:5,
		date:'31 августа 2022',
		text:'Квалифицированный врач, очень быстро находит подход к детям, причем любого возраста) Спасибо вам за вашу работу!',
	},

	{
		id:2,
		name:'Оксана Фомина',
		rate:5,
		date:'26 ноября 2022',
		text:'Хороший врач',
	},

	{
		id:3,
		name:'Света',
		rate:5,
		date:'24 января 2023',
		text:'Очень понравилось! Диагностика зрения на высшем уровне!!!',
	},

	{
		id:4,
		name:'Катерина',
		rate:4,
		date:'4 марта 2023',
		text:'Не плохой центр, но расположение такое себе',
	},

	{
		id:5,
		name:'Юлия И.',
		rate:5,
		date:'23 июня 2023',
		text:'Спасибо большое центру зрения, позвонила с другого города т.к. у нас нет окулиста, записать мужа на прием (у мужа 1.5 недели болел глаз), дак нас приняли на следующий день и без записи, достали 2 окалины. Спасибо вам большое.',
	},

	{
		id:6,
		name:'Алина',
		rate:5,
		date:'9 августа 2023',
		text:'Очень понравился врач. Квалифицированный специалист, хороший подход к детям. Теперь обращаться будем только сюда.',
	},

	{
		id:7,
		name:'Елена Русакова',
		rate:5,
		date:'16 октября 2023',
		text:'Была приятно удивлена, что у нас работают такие хорошие специалисты. Перезвонили, чтобы предложить время для посещения. Консультация очень помогла)))',
	},

	{
		id:8,
		name:'Галина Устимова',
		rate:5,
		date:'21 марта 2024',
		text:'Всем рекомендую, замечательный персонал, есть УЗИ, хорошее оборудование, прошла обследование, получила рекомендации, спасибо большое',
	},
]

const addReview = () => {
	reviewsArr.reverse().map(item => {
		return(
			reviewFlex.insertAdjacentHTML('afterbegin', `
				<div class='reviews-flexContainer-card'>
					<div class='reviews-flexContainer-card-mainInfo'>
						<p class='reviews-flexContainer-card-mainInfo-name'>${item.name}</p>
						<div class='reviews-flexContainer-card-mainInfo-rateBlock'>
							<div class='reviews-flexContainer-card-mainInfo-rateBlock-rate'>
								<img src= ${item.rate>=1 ? './assets/starFilled.svg' : './assets/starUnfilled.svg'} class='reviews-flexContainer-card-mainInfo-rateBlock-rate-star' />
								<img src= ${item.rate>=2 ? './assets/starFilled.svg' : './assets/starUnfilled.svg'} class='reviews-flexContainer-card-mainInfo-rateBlock-rate-star' />
								<img src= ${item.rate>=3 ? './assets/starFilled.svg' : './assets/starUnfilled.svg'} class='reviews-flexContainer-card-mainInfo-rateBlock-rate-star' />
								<img src= ${item.rate>=4 ? './assets/starFilled.svg' : './assets/starUnfilled.svg'} class='reviews-flexContainer-card-mainInfo-rateBlock-rate-star' />
								<img src= ${item.rate>=5 ? './assets/starFilled.svg' : './assets/starUnfilled.svg'} class='reviews-flexContainer-card-mainInfo-rateBlock-rate-star' />
							</div>
							<div class='reviews-flexContainer-card-mainInfo-rateBlock-date'>${item.date}</div>
						</div>
					</div>
					<div class='reviews-flexContainer-card-text'>
						${item.text}
					</div>
					
				</div>
			`)
		)
	})
}

addReview()