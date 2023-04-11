'use strict';


let loadBtn = document.getElementById("load-btn");
const moreGallery = document.querySelectorAll('.hide-gallery');
const timer = 2000;


loadBtn.addEventListener('click', ()=>{
    const loader = document.querySelector('.load-container');
    loadBtn.style.display = "none";
    loader.style.display = 'block'

setTimeout(()=>{
    moreGallery.forEach(item => {
    item.classList.remove("hide-gallery");
    });
        
    const grid = document.querySelector('.gallery-images__wrapper');
    const masonry = new Masonry(grid, {
        itemSelector: '.gallery-item',
        gutter: 20,
        originLeft: false,        
    });       
        
    loader.style.display = 'none'
        
}, timer);
});