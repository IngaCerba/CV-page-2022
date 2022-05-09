
const track = document.querySelector('.carousel_slide');
const slides = Array.from(track.children);
const nextButton = document.getElementById('right');
const prevButton = document.getElementById('left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides next to one another

   const setSlidePosition = (slide,index) => {
        slide.style.left = slideWidth * index + 'px';
    };

    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) =>{
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');

    }

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    }


// when i click Left, move slides to the Left

    prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;

        if(prevSlide){
            moveToSlide(track, currentSlide, prevSlide);
            updateDots(currentDot, prevDot); 
        }else{
            moveToSlide(track, currentSlide, slides[slides.length - 1]);
            updateDots(currentDot, dots[dots.length - 1]); 
        }
    })
// when i click right, move slides to the right

    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        const nextDot = currentDot.nextElementSibling;

        if(nextSlide){
            moveToSlide(track, currentSlide, nextSlide);
            updateDots(currentDot, nextDot);
        }else{
            moveToSlide(track, currentSlide, slides[0]);
            updateDots(currentDot, dots[0]); 
        }
    })

// when i click nav indicators, move to the clicked slide
    dotsNav.addEventListener('click', e =>{
        //what indicator was clicked on
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

            const currentSlide = track.querySelector('.current-slide');
            const currentDot = dotsNav.querySelector('.current-slide'); 
            const targetIndex = dots.findIndex(dot => dot ===targetDot);
            const targetSlide= slides[targetIndex];
    
        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
    })

