
const UI_ELEMENTS = {
  prevButton: document.querySelector('.btn__prev'),
  nextButton: document.querySelector('.btn__next'),
  sliderItems: document.querySelectorAll('.slider-img'),
  dots: document.querySelectorAll('.paginator-item'),
}

let index = 0;

function slideAndDotActive(numbIndex) {
  activeSlide(numbIndex);
  activeDot(numbIndex);
}

function activeSlide (n) {
  UI_ELEMENTS.sliderItems.forEach(img => {
    img.classList.remove('active');
  })
  UI_ELEMENTS.sliderItems[n].classList.add('active');
}


function activeDot (n) {
  UI_ELEMENTS.dots.forEach(dot => {
    dot.classList.remove('active')
  })
  UI_ELEMENTS.dots[n].classList.add('active')
}

function nextSlide() {
  if(index === UI_ELEMENTS.sliderItems.length -1) {
    index = 0;
    slideAndDotActive(index);
  } else {
    index++;
    slideAndDotActive(index);
  }
}

function prevSlide() {
  if(index === 0) {
    index = UI_ELEMENTS.sliderItems.length -1
    slideAndDotActive(index);
  }  else {
    index--;
    slideAndDotActive(index);
  }
}

UI_ELEMENTS.dots.forEach((el,dotIndex) => {
  el.addEventListener('click', () => {
    index = dotIndex;
    slideAndDotActive(index);
  })
})

UI_ELEMENTS.nextButton.addEventListener('click',nextSlide)
UI_ELEMENTS.prevButton.addEventListener('click',prevSlide)
