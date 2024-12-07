let index = 0;
const slides = document.querySelectorAll(".slide");
const arrows = document.querySelectorAll(".arrow");

function showSlide(n) {
slides.forEach((slide,i) => slide.classList.toggle("active",i === n));
const color = index===0 ? "#F08700":"#A41623";
arrows.forEach(arrow => arrow.style.color = color);
}

function slideChange(n) {
index = (index + n + slides.length)%slides.length;
showSlide(index);
}
showSlide(index);