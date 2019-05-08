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