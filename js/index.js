const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel-btn--right');
const prevBtn = document.querySelector('.carousel-btn--left');
const dotNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to each other 
const setSlidePosition = (slides, index) => {
  slides[0].style.left = slideWidth * index + 'px';

}
slides.forEach(setSlidePosition);

//when i click left, move to the left



//when i click right, move to the right
nextBtn.addEventListener('click', e => {
  //move the slide
  const currentSlide = document.querySelector('.current-slide');
  
})
//when i click the nav indicators, move to that image