
window.onload=home_carousel;
window.onload=wrkdg;


function home_carousel(){

var carousel = document.querySelector('.carousel');
var container = carousel.querySelector('.carousel_container');
var prevBtn = carousel.querySelector('.carousel_prev');
var nextBtn = carousel.querySelector('.carousel_next');
var pagination = carousel.querySelector('.carousel_pagination');
var bullets = [].slice.call(carousel.querySelectorAll('.carousel_bullet'));
var totalItems = container.querySelectorAll('.carousel_item').length;
var percent = (100 / totalItems);
var currentIndex = 0;

function next() {
    slideTo(currentIndex + 1);
}

function prev() {
    slideTo(currentIndex - 1);
}

function slideTo(index) {
    index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
    container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
    bullets[currentIndex].classList.remove('active_bullet');
    bullets[index].classList.add('active_bullet');
    currentIndex = index;
}

bullets[currentIndex].classList.add('active_bullet');
prevBtn.addEventListener('click', prev, false);
nextBtn.addEventListener('click', next, false);

pagination.addEventListener('click', function(e) {
    var index = bullets.indexOf(e.target);
    if (index !== -1 && index !== currentIndex) {
        slideTo(index);
    }
}, false);

}

// -----------------------------------------------------------------------------------------
//遛狗景點 wrkdg



function wrkdg(){
var wrk_item = document.querySelectorAll('.wrk_item');
var line_t = document.querySelector('.line_t');
var line_b = document.querySelector('.line_b');

for (i = 0; i < wrk_item.length; i++) {
    console.log(wrk_item[i]);
    wrk_item[i].addEventListener("mouseover", change_add, false);
    wrk_item[i].addEventListener("mouseout", change_remove, false);
}

function change_add(e) {
    console.log(e.currentTarget);
    var wrk_bgdisplay = e.currentTarget.querySelector('.wrk_bgdisplay');
    wrk_bgdisplay.classList.add('wrk_bgdisplay_add');
    line_t.classList.add('lineadd_t');
}

function change_remove(e) {
    console.log(e.currentTarget);
    var wrk_bgdisplay = e.currentTarget.querySelector('.wrk_bgdisplay');
    wrk_bgdisplay.classList.remove('wrk_bgdisplay_add');
    line_t.classList.remove('lineadd_t');
}

}




