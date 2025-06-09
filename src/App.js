

import { createSlide } from "./Components/createSlide.js";
import { Slider } from "./Components/Slider.js";

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Create slides
  const slidesContainer = document.querySelector('.carousel-container');
  const slider = new Slider();
  
  slider.slides.forEach((slideItem, index) => {
    const slideElement = createSlide(slideItem, index + 1);
    slidesContainer.appendChild(slideElement);
  });

  // Get all elements
  const allSlides = [
    document.querySelector('.slide1'),
    document.querySelector('.slide2'),
    document.querySelector('.slide3')
  ];
  
  const circles = [
    document.querySelector('.circle1'),
    document.querySelector('.circle2'),
    document.querySelector('.circle3')
  ];


 
  const forwardBtn = document.querySelector('.Forward');
  const backwardBtn = document.querySelector('.Backward');
  
  let currentSlide = 0;
  let slideTimeOut;

  // Initialize first slide
  function initialize() {
    showSlide(0);
    startSlideShow();// start  the  slide show
  }


  // start  slide show
  function startSlideShow(){
    clearTimeout(slideTimeOut);// clear  any existing timeout
    slideTimeOut=setTimeout(nextSlide,5000);
  }

  // Show specific slide
  function showSlide(index) {
    // Hide all slides
    allSlides.forEach(slide => {
      slide.style.display = 'none';
      slide.classList.remove('active');
    });
    
    // Show selected slide
    allSlides[index].style.display = 'flex';
    allSlides[index].classList.add('active');
    
    // Update circles
    circles.forEach((circle, i) => {
      circle.style.backgroundColor = i === index ? 'black' : 'white';
    });
    
    currentSlide = index;

    // restart  the  timer  after manual  navigation
    startSlideShow();
  }

  // Next slide
  function nextSlide() {
    const next = (currentSlide + 1) % allSlides.length;
    showSlide(next);
  }

  // Previous slide
  function prevSlide() {
    const prev = (currentSlide - 1 + allSlides.length) % allSlides.length;
    showSlide(prev);
  }

  // Initialize
  initialize();

  // Add click events to circles
  circles.forEach((circle, index) => {
    circle.addEventListener('click', () => showSlide(index));
  });



  // Add click events to arrows
  forwardBtn.addEventListener('click', nextSlide);
  backwardBtn.addEventListener('click', prevSlide);
});
 
    
  
