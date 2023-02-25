window.addEventListener('load', function(){
	new Glider(document.querySelector('.carr'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.ind',
		arrows: {
			prev: '.flec-lef',
			next: '.flec-rig'
		},
		responsive: [
			{
				breakpoint: 550,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				}
			},{
				breakpoint: 800,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				}
			},{
				breakpoint: 1024,
				settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
				}
			}
			]
	});
});


window.addEventListener('load', function(){
	new Glider(document.querySelector('.carr2'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.ind2',
		arrows: {
			prev: '.flec-lef2',
			next: '.flec-rig2'
		},
		responsive: [
			{
				breakpoint: 550,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				}
			},{
				breakpoint: 800,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				}
			},{
				breakpoint: 1024,
				settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
				}
			}
			]
	});
});


window.addEventListener('load', function(){
	new Glider(document.querySelector('.carr3'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.ind3',
		arrows: {
			prev: '.flec-lef3',
			next: '.flec-rig3'
		},
		responsive: [
			{
				breakpoint: 550,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				}
			},{
				breakpoint: 800,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				}
			},{
				breakpoint: 1024,
				settings: {
				slidesToShow: 5,
				slidesToScroll: 5,
				}
			}
			]
	});
});
