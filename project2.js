const products = [
  {
    name: "Aura White Sneakers",
    price: 4299,
    image: "6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.webp", // White Sneakers
  },
  {
    name: "Aura Black Loafers",
    price: 5999,
    image: "jungly.jpg", // Black Loafers
  },
  {
    name: "Aura Casual Shoes",
    price: 6999,
    image: "1.jpg", // Casual Shoes
  },
  {
    name: "Aura Jungly Army Boots",
    price: 7499,
    image: "jungly.webp", // Jungly Army Boots
  },
  {
    name: "Aura Red Sneakers",
    price: 4299,
    image: "red.jpeg", // Red Sneakers
  },
  {
    name: "Aura Fashion Sneakers",
    price: 5999,
    image: "1 (2).jpg", // Fashion Sneakers
  },
  {
    name: "Aura Party Shoes",
    price: 6999,
    image: "party.jpg", // Party Shoes
  },
  {
    name: "Aura Black Sport Shoes",
    price: 7499,
    image: "1 (1).jpg", // Black Sport Shoes
  },
  {
    name: "Chunky Loafers",
    price: 7499,
    image: "chunky.webp", // Chunky Loafers
  },
  {
    name: "Aura Woven Shoes",
    price: 7499,
    image: "woven.webp", // Woven Shoes
  }
];

let cart = [];

const productGrid = document.getElementById('productGrid');
const cartContainer = document.createElement('div');
cartContainer.className = 'cart-container';
document.body.appendChild(cartContainer);

function updateCart() {
  cartContainer.innerHTML = `
    <h2>Your Cart</h2>
    <div class="cart-items"></div>
    <p>Total Price: Rs. ${calculateTotalPrice()}</p>
  `;

  const cartItemsContainer = cartContainer.querySelector('.cart-items');
  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item';
    itemDiv.innerHTML = `
      <span>${item.name} - Rs. ${item.price}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });
}

function calculateTotalPrice() {
  return cart.reduce((total, item) => total + item.price, 0);
}

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>Rs. ${product.price}</p>
    <button onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">Add to Cart</button>
  `;
  productGrid.appendChild(card);
});
