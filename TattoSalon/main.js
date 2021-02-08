window.onload = function() {
	function form() {
		const form = document.getElementById('form');
		const error = document.getElementById('error')
		const name = document.getElementById('name');
		const email = document.getElementById('email');
		const phone = document.getElementById('phone');
		form.addEventListener('submit',(e) =>{
			let counter = 0;
			let messages = [];
			if (name.value === '' || name.value == null){
				counter++;
				messages.push(`Name is required`);
			}
			if (email.value === '') {
				counter++;
				messages.push(`Email is required`);
			}
			if (phone.value === '') {
				counter++;
				messages.push(`Phone is required`);
			}
			if (messages.length > 0) {
				e.preventDefault();
				error.innerHTML = messages.join(`!<br>`);
				// if(counter == 1)
					error.style.paddingTop = '22px';
				// if(counter == 2)
					error.style.paddingTop = '15px';
			}
			else {
				alert('Регистрация прошла успешно!')
			}
		});
	}
    //Якори
    function anchors() {
    	const anchors = document.querySelectorAll('a[href]');

    	for (let i = 0; i < anchors.length; i++) {
    		anchors[i].addEventListener("click", (event) =>{
    			event.preventDefault();
    			const blockID = anchors[i].getAttribute('href');
    			document.querySelector(`${blockID}`).scrollIntoView({
    				behavior: "smooth",
    				block: "start"
    			});
    		});
    	}
    }

    function openMenu() {
        document.querySelector('#menu').onclick = function() {
            document.getElementById("menu").classList.toggle('menu_active');
        }
	}
	
	function btnsSlider() {
		const carouselSlide = document.querySelector('.carousel-slide');
		const carouselImages = document.querySelectorAll('.carousel-slide img');
		//Кнопки
		const prevBtn = document.querySelector('#prevBtn');
		const nextBtn = document.querySelector('#nextBtn');
		//Счетчик
		let counter = 0;
		const size = carouselImages[0].clientWidth;
		// carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
	
		nextBtn.addEventListener('click',() =>{
			// if (counter == 7) return;
			carouselSlide.style.transition = " transform 1s ease-in-out";
			counter++;
			carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
			console.log(counter);
		});

	// slaider
	// $('.slider').slick({
	// 	infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1
	// });
	
		prevBtn.addEventListener('click',() =>{
		   if(counter <= 0) return;
			carouselSlide.style.transition = "transform 1s ease-in-out";
			counter--;
			carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
			console.log(counter);
		});
		carouselSlide.addEventListener('transitionend', () => {
			
			if (carouselImages[counter].id === 'firstClone'){
				carouselSlide.style.transition = "transform 1s ease-in-out";
				counter = carouselImages.length - 10 ;
				carouselSlide.style.transform = 'translateX('+ (size * counter) + 'px)';
			}
		});
	}

	btnsSlider();
    openMenu();
	anchors();
	form();

}