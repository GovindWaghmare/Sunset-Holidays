let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentIndex);
  });
  document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function changeSlide(direction) {
  showSlide(currentIndex + direction);
}

// Auto-play slider (optional)
setInterval(() => {
  changeSlide(1);
}, 5000);

document.addEventListener('DOMContentLoaded', () => showSlide(currentIndex));



function openPopup(image) {
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popupImage");

  popupImage.src = image.src; // Set the popup image source to the clicked image source
  popup.style.display = "flex"; // Show the popup
}

// Function to close the popup
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; // Hide the popup
}