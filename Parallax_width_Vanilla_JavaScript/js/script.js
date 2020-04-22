let bg = document.getElementById("parallax__bg");
let moon = document.getElementById("parallax__moon");
let mountain = document.getElementById("parallax__mountain");
let road = document.getElementById("parallax__road");
let text = document.getElementById("parallax__text");

window.addEventListener('scroll', function() {
    var value =window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.6 + 'px';
    mountain.style.top = -value * 0 + 'px';
    road.style.top = value * 0.3 + 'px';
    text.style.top = value * 0.8 + 'px';
});