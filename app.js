let navBtnSlider = document.getElementById('btn-slider');
let navBtn = document.getElementById('button');

let lamp1 = document.getElementById('light-img1');
let lamp2 = document.getElementById('light-img2');

navBtnSlider.addEventListener('click', () => {

    navBtnSlider.classList.toggle('btn-click-slider');
    navBtn.classList.toggle('btn-click');

    lamp1.classList.toggle('on-off-lamp');
    lamp2.classList.toggle('on-off-lamp');
    
});