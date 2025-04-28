const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;

// Створюємо крапки
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider() {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');

  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlider();
  }
});

// Оновлення
updateSlider();
