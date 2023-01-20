let menuBtn = document.querySelector('.menu__button');
let menu = document.querySelector('.menu__window');
let menuItems = document.querySelectorAll('.menu__window li');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
menuItems.forEach(function(item) {
    item.addEventListener('click', function(){
     menuBtn.classList.remove('active');
    menu.classList.remove('active');
     })
   })


let offset = 0; 
const sliderImg = document.querySelector('.slider__img');
const sliderNextBtn = document.querySelector('.slider__next');
const sliderPrevBtn = document.querySelector('.slider__prev');


if (window.innerWidth < 768) {
    sliderNextBtn.addEventListener('click', function () {
        offset = offset + 320;
        if (offset > 640) {offset = 0;}
        sliderImg.style.left = -offset + 'px';
    });
    
    sliderPrevBtn.addEventListener('click', function () {
        offset = offset - 320;
        if (offset < 0) {offset = 640;}
        sliderImg.style.left = -offset + 'px';
    });
} else {
    sliderNextBtn.addEventListener('click', function () {
        offset = offset + 700;
        if (offset > 1400) {offset = 0;}
        sliderImg.style.left = -offset + 'px';
    });

    sliderPrevBtn.addEventListener('click', function () {
        offset = offset - 700;
        if (offset < 0) {offset = 1400;}
        sliderImg.style.left = -offset + 'px';
    });
}


