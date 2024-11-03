const images = [
  'images/007.jpg',
  'images/005.jpg',
  'images/006.jpg',
  'images/001.jpg',
  'images/002.jpg',
  'images/003.jpg',
  'images/004.jpg',
];

let currentImageIndex = 0;

// Function to change image
function changeImage(direction) {
  currentImageIndex += direction;

  // Loop back to the start or end
  if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
  }

  document.getElementById('slider-image').src = images[currentImageIndex];
}

// Set initial image
document.getElementById('slider-image').src = images[currentImageIndex];