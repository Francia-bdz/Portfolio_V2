// Typerwriter HomePage

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('<span style="color: #DA7E10; background-color:#F9F9F9;padding: 2% 2% 0px 2%;">AGILE.</span>')
  .pauseFor(3000)
  .deleteChars(7)
  .typeString('<span style="color: #007744; background-color:#F9F9F9;padding: 2% 2% 0px 2%;">POLYVALENTE.</span>')
  .pauseFor(3000)
  .deleteChars(13)
  .typeString('<span style="color: #002FA7;background-color:#F9F9F9;padding: 2% 2% 0px 2%;">STRATÉGIQUE.</span>')
  .pauseFor(3000)
  .deleteChars(14)
.start();

// Défilez vers le bas

const text = document.querySelector('.scroll-text p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
        `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
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