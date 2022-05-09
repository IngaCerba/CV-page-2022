const root = document.documentElement;

const displayedCarouselSlideElements = getComputedStyle(root).getPropertyValue("--number-of-displayed-carousel-slide-elements");

const carouselSlide = document.querySelector(".carousel_slide");

root.style.setProperty("--number-of-carousel-slide-elements", carouselSlide.children.length );