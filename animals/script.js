const pets = [
  {
    id: 1,
    name: "Golden Dog",
    price: 300,
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d"
  },
  {
    id: 2,
    name: "Persian Cat",
    price: 250,
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
  },
  {
    id: 3,
    name: "Parrot",
    price: 150,
    img: "https://images.unsplash.com/photo-1501706362039-c06b2d715385"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("pets-container");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");

// عرض الحيوانات
function renderPets() {
  container.innerHTML = "";

  pets.forEach(pet => {
    container.innerHTML += `
      <div class="card">
        <img src="${pet.img}">
        <div class="card-body">
          <h3>${pet.name}</h3>
          <p>$${pet.price}</p>
          <button onclick="addToCart(${pet.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

// إضافة للسلة
function addToCart(id) {
  const pet = pets.find(p => p.id === id);
  cart.push(pet);

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

// تحديث السلة
function updateCart() {
  cartCount.innerText = cart.length;

  cartItems.innerHTML = "";

  cart.forEach(item => {
    cartItems.innerHTML += `
      <div class="cart-item">
        ${item.name} - $${item.price}
      </div>
    `;
  });
}

// Checkout WhatsApp
function checkout() {
  let message = "I want to buy:\n";
  cart.forEach(item => {
    message += `- ${item.name} ($${item.price})\n`;
  });

  window.open(`https://wa.me/201000000000?text=${encodeURIComponent(message)}`);
}

renderPets();
updateCart();