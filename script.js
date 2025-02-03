// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const cartList = document.getElementById("cart-list");
const productList = document.getElementById("product-list");
// Cart data
let cart = [];
// Render product list
// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });

  // Add event listeners to "Add to Cart" buttons
  const addToCartButtons = document.getElementsByClassName("add-to-cart-btn");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
      addToCart(this.dataset.id);
    });
  }
}

// Render cart list
function renderCart() {
  // Clear the current cart display
  cartList.innerHTML = '';

  // Create a new list item for each product in the cart
  cart.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price}`;
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
  const product = products.find((product) => product.id == productId);
  cart.push(product);
  renderCart();

  // Store the cart data in session storage
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Remove item from cart
function removeFromCart(productId) {
  // Create a new array that includes all products except the one with the given id
  cart = cart.filter((product) => product.id != productId);

  // Update the cart display
  renderCart();

  // Update the cart in session storage
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Clear cart
function clearCart() {
  // Clear the cart array
  cart = [];

  // Update the cart display
  renderCart();

  // Clear the cart from session storage
  sessionStorage.removeItem('cart');
}

function initialRender() {
  // Load the cart data from session storage
  const storedCart = sessionStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }

  renderProducts();
  renderCart();
}

initialRender();
