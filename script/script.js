// Typerwriter HomePage

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('<span style="color: #DA7E10; background-color:#F9F9F9;padding: 1.25rem 1.25rem 0px 1.25rem;">JUNIOR.</span>')
  .pauseFor(3000)
  .deleteChars(10)
  .typeString('<span style="color: #007744; background-color:#F9F9F9;padding: 1.25rem 1.25rem 0px 1.25rem;">FULL-STACK.</span>')
  .pauseFor(3000)
  .deleteChars(12)
  .typeString('<span style="color: #002FA7;background-color:#F9F9F9;padding: 1.25rem 1.25rem 0px 1.25rem;">CRÉA.</span>')
  .pauseFor(3000)
  .deleteChars(5)
.start();

// Défilez vers le bas

const text = document.querySelector('.scroll-text p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
        `<span style="transform:rotate(${i * 8.2}deg)">${char}</span>`
).join("")

//Slider

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let indicators = document.getElementsByClassName("indicator");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < indicators.length; i++) {
    indicators[i].className = indicators[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  indicators[slideIndex-1].className += " active";
}