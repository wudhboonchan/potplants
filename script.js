// DATE //
const offerExpiryDate = new Date();
offerExpiryDate.setDate(offerExpiryDate.getDate() + 7);

const today = new Date();
if (today < offerExpiryDate) {
  document.getElementById('special-offer').style.display = 'block';
  
  // Format the expiry date as DD.MM.YYYY
  const formattedDate = `${String(offerExpiryDate.getDate()).padStart(2, '0')}.${String(offerExpiryDate.getMonth() + 1).padStart(2, '0')}.${offerExpiryDate.getFullYear()}`;
  
  // Select all elements with the class 'expiry-date' and set their text content
  document.querySelectorAll('.expiry-date').forEach(element => {
    element.textContent = formattedDate;
  });
}


// PRODUCTS OBJECTS //
const products = [{
  name: 'Pachira Aquatica',
  image: 'images/pachira-aquatica.png',
  price: 22.50,
  discount: 0.2,
},{
  name:'Fejka',
  image: 'images/fejka.png',
  price: 18.99,
  discount: 0.2,
},{
  name:'Dypsis Lutescens',
  image:'images/dypsis-lutescens.png',
  price: 9.99,
  discount: 0.1,
},{
  name:'Dracaena Massangeana',
  image:'images/dracaena-massangeana.png',
  price: 24.99,
  discount: 0.2,
},{
  name:'Aloe Vera',
  image:'images/aloe-vera.png',
  price:11.99 ,
  discount: 0.15,
},{
  name:'Clausia',
  image:'images/clusia.png',
  price:18.50 ,
  discount: 0.1,
},{
  name:'Strelitzia',
  image:'images/strelitzia.png',
  price:26.50 ,
  discount: 0.15,
},{
  name:'Calathea',
  image:'images/calathea.png',
  price:17.50 ,
  discount: 0.2,
}];


// To generate HTML for each product
const productList = document.getElementById('product-list');
products.forEach((product, index) => {
  // Calculate discounted price
  const discountedPrice = (product.price * (1 - product.discount)).toFixed(2);

  // To create HTML for the product
const productHTML = `
<div class="product-container">
      <div class="product-row">
        <div class="product-each">
          <div class="image-wrapper">
            <img src="${product.image}" alt="${product.name}" width="250" class="product--img">
          </div>
          <div class="text-wrapper">
            <div class="product-name"> ${product.name} </div>
            <div class="price">
              <div class="original-price"> €${product.price.toFixed(2)} </div>
              <div class="discount-rate"> (-${product.discount * 100}%) </div>
              <div class="discount">€${discountedPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
  // Append product HTML to product list
  productList.innerHTML += productHTML;
});


// Show help box after a delay when a product is clicked
let helpBoxTimer; // Timer for showing help box
let hideBoxTimer; // Timer for hiding help box

// Event delegation: Attach click event to the product list container
productList.addEventListener('click', (event) => {
  // Check if the clicked element is a product
  if (event.target.closest('.product-each')) {
    clearTimeout(helpBoxTimer); // Clear any previous timer to avoid multiple popups
    clearTimeout(hideBoxTimer); // Clear hide timer to reset hiding on each click

    // Set a timer to show the help box after 60 seconds
    helpBoxTimer = setTimeout(() => {
      const helpBox = document.getElementById('help-box');
      helpBox.style.display = 'block';
      

      // Set a timer to hide the help box after another 60 seconds
      hideBoxTimer = setTimeout(() => {
        helpBox.style.display = 'none';
      }, 3000);
    },);
  }
});


// IMAGE SLIDER //
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


function changeImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
  }

  document.getElementById('slider-image').src = images[currentImageIndex];
}

document.getElementById('slider-image').src = images[currentImageIndex];