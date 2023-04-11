'use strict';

function search(){
  let searchWrapper = document.querySelector('.search-wrapper');
  let searchInput = document.querySelector('.search-input');

document.addEventListener('click', (e) => {
    if (~e.target.className.indexOf('search')) {
      searchWrapper.classList.add('focused');
      searchInput.focus();
    } else {
      searchWrapper.classList.remove('focused');
    }
  })
}
search()

function tabsFn(){

  const tabs = document.querySelectorAll('[data-tab-target]');
  const tabsContent = document.querySelectorAll('[data-tab-content]');

  tabs.forEach(tab => {tab.addEventListener('click', ()=>{
    const target = document.querySelector(tab.dataset.tabTarget)
    tabsContent.forEach(tabsContent =>{
      tabsContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

}
tabsFn();


function masonry(){
    window.onload = () => {
      const grid = document.querySelector('.gallery-images__wrapper');
      const masonry = new Masonry(grid, {
          itemSelector: '.gallery-item',
          gutter: 20,
          originLeft: false,
        
        
      });
  };
};

masonry();

function hoverEfect(){
    $(document).ready(function(){
      jQuery('.gallery-item').hover(
      function(){
      $(this).find(".cover-gallery").fadeIn();
      },
      function(){
          $(this).find(".cover-gallery").fadeOut();
      });
  });
}
hoverEfect();

function scrollEfect(){
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      let hash = this.hash    
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        window.location.hash = hash;
      });
    } 
});
}
scrollEfect()

function scrollUpArrow (){
  $(window).scroll(function() {
    let height = $(window).scrollTop();
    if (height > 400) {
        $('#arrowUp').fadeIn();
    } else {
        $('#arrowUp').fadeOut();
    }
});
$(document).ready(function() {
    $('#arrowUp').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

});
}
scrollUpArrow()