'use strict';

const images = [
	[{
		data: 'landing_pages',
		src: '../img/gallery/landingPage/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: '../img/gallery/landingPage/landing-page2.jpg'
	},{
		data: 'landing_pages',
		src: '../img/gallery/landingPage/landing-page3.jpg'
	},{
		data: 'landing_pages',
		src: '../img/gallery/landingPage/landing-page4.jpg'
	},{
		data: 'landing_pages',
		src: '../img/gallery/landingPage/landing-page5.jpg'
	},{
		data: 'graphic_design',
		src: '../img/gallery/landingPage/landing-page6.jpg'
	},{
		data: 'graphic_design',
		src: '../img/gallery/landingPage/landing-page7.jpg'
	},{
		data: 'graphic_design',
		src: '../img/gallery/landingPage/landing-page7.jpg'
	},{
		data: 'graphic_design',
		src: '../img/gallery/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '../img/gallery/graphic-design2.jpg'
	},{
		data: 'graphic_design',
		src: '../img/gallery/graphic-design3.jpg'
	},{
		data: 'graphic_design',
		src: '../img/gallery/graphic-design4.jpg'
	}],
	[{
		data: 'graphic_design',
		src: '../img/gallery/graphic-design5.jpg'
	},{
		data: 'graphic_design',
		src: '../img/gallery/graphic-design6.jpg'
	},{
		data: 'graphic_design',
		src: '../img/gallery/graphic-design7.jpg'
	},{
		data: 'graphic_design',
		src: '../img/gallery/graphic-design8.jpg'
	},{
		data: 'graphic_design',
		src: '../img/gallery/graphic-design9.jpg'
	},{
		data: 'graphic_design',
		src: '../img/gallery/graphic-design10.jpg'
	},{
		data: 'web_design',
		src: '../img/gallery/web design/web-design1.jpg'
	},{
		data: 'web_design',
		src: '../img/gallery/web design/web-design2.jpg'
	},{
		data: 'web_design',
		src: '../img/gallery/web design/web-design3.jpg'
	},{
		data: 'web_design',
		src: '../img/gallery/web design/web-design4.jpg'
	},{
		data: 'web_design',
		src: '../img/gallery/web design/web-design5.jpg'
	},{
		data: 'web_design',
		src: '../img/gallery/web design/web-design6.jpg'
	},{
		data: 'web_design',
		src: '../img/gallery/web design/web-design7.jpg'
	},{
		data: 'web_design',
		src: '../img/gallery/web design/web-design7.jpg'
	},{
		data: 'Wordpress',
		src: '../img/gallery/wordpress/wordpress1.jpg'
	},{
		data: 'Wordpress',
		src: '../img/gallery/wordpress/wordpress2.jpg'
	},{
		data: 'Wordpress',
		src: '../img/gallery/wordpress/wordpress3.jpg'
	},{
		data: 'Wordpress',
		src: '../img/gallery/wordpress/wordpress4.jpg'
	},{
		data: 'Wordpress',
		src: '../img/gallery/wordpress/wordpress5.jpg'
	},{
		data: 'Wordpress',
		src: '../img/gallery/wordpress/wordpress6.jpg'
	},{
		data: 'Wordpress',
		src: '../img/gallery/wordpress/wordpress7.jpg'
	},{
		data: 'Wordpress',
		src: '../img/gallery/wordpress/wordpress8.jpg'
	},{
		data: 'Wordpress',
		src: '../img/gallery/wordpress/wordpress9.jpg'
	},{
		data: 'Wordpress',
		src: '../img/gallery/wordpress/wordpress10.jpg'
	}]
];

const timerLoader = 3000;


function gallery(){
    let cout = 0;
	const galleryMenu = document.querySelector('.section-amazing__menu');
	const btnLoad = document.querySelector('.btn-load');
	const galleryWrapper = document.querySelector('.section-amazing__gallery');

    galleryMenu.addEventListener('click', (event) => {
		let dataMemu = null;
		const dataGallery = document.querySelectorAll('.section-amazing__gallery-item');

		if ( event.target.nodeName === "BUTTON" ) {
			dataMemu = event.target.getAttribute( 'data-menu' );
		}

		let menuItems = document.querySelectorAll( '[data-menu]' );

		menuItems.forEach( item => {
			if ( item.classList.contains( 'selected' ) ) {
				item.classList.remove( 'selected' );
			}
		} );

		if ( !event.target.classList.contains( 'selected' ) ) {
			event.target.classList.add( 'selected' );
		}

		dataGallery.forEach((item) => {
			if (dataMemu !== item.getAttribute( 'data-gallery' ) && dataMemu !== 'all' ){
				item.style.display = 'none'
			} else {
				item.style.display = 'flex'
			}
		})
	})
    
    btnLoad.addEventListener('click', () => {
        const loader = document.querySelector('.preloader');
        btnLoad.style.display = 'none';
        loader.style.display = 'block';
		// btnLoad.setAttribute('disabled', '')


		setTimeout(() => {
            loader.style.display = 'none'
			btnLoad.style.display = 'block';
			// btnLoad.removeAttribute('disabled')

			images[cout].forEach((image, id) => {
				galleryWrapper.insertAdjacentHTML('beforeend', `
            <li class="section-amazing__gallery-item" data-gallery="${image.data}">
            <img class="section-amazing__image${id+13} images-section" src="${image.src}" alt="Gallery images books">
            <div class="section-amazing__backside">
                <ol class="section-amazing__icons">
                    <li class="section-amazing__icons--background">
                        <svg class="icon-background" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
                        </svg>
                    </li>
                    <li class="section-amazing__icons--square">
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="12" height="11" fill="white"/>
                        </svg>    
                    </li>
                </ol>
                <div class="section-amazing__section-title">
                    <h4 class="section-amazing__title-card">creative design</h4>
                    <p class="section-amazing__subtitle">Web Design</p>
                </div>
            </div>
        </li>
            `)
			})

			cout++

			if ( cout === images.length ){
				btnLoad.remove()
			}
		}, timerLoader)

	});

}
document.addEventListener('DOMContentLoaded', () => {
	gallery();
});