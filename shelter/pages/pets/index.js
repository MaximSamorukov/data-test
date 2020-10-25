document.querySelector('.burger-wrapper').onclick = function () {
    document.querySelector('.burger').classList.toggle('burger-active');
    document.querySelector('.nav-mobile').classList.toggle('nav-mobile-active');
}