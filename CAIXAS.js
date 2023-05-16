function replaceName(image)
{
    namejs.src=image;
}
function replaceCart(image)
{
    cart.src=image;
}
function replaceProfile(image)
{
    profile.src=image;
}

document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;
  
    function showSlide(index) {
      if (index < 0 || index >= totalItems) {
        return;
      }
  
      carouselContainer.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
    }
  
    function showNextSlide() {
      showSlide(currentIndex + 1);
    }
  
    function showPrevSlide() {
      showSlide(currentIndex - 1);
    }
  
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);
  });