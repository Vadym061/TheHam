'use strict';

$(document).ready(function(){
    $('.header__menu-item-link').click(function(){
      $('.header__menu-item-link').removeClass('focuse-active');
      $(this).addClass('focuse-active');
    });
  });



  function burgerMenu(){
    
const headerBurgerMenuIcon = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__menu-list");

    (function clickBurgerMenu() {
        headerBurgerMenuIcon.addEventListener("click", () => {
            headerBurgerMenuIcon.classList.toggle("active")
            if (headerBurgerMenuIcon.classList.contains("active")) {
                document.querySelector(".header__menu-list").classList.add("active")
            } else {
                document.querySelector(".header__menu-list").classList.remove("active")
            }
        })
    }());
    window.addEventListener("click", e => {
        const target = e.target
        if (!target.closest(".header__burger") && !target.closest(".header__menu-list")) {
            burgerMenu.classList.remove("active");
            headerBurgerMenuIcon.classList.remove("active");
        }
    });
}
burgerMenu();