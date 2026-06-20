// ===== PRODUCT DATA =====
const products = [
  // Electronics
  { id: 1, name: "Samsung Galaxy S23 Ultra 5G (12GB RAM, 256GB)", emoji: "📱", category: "Electronics", price: 99999, mrp: 134999, rating: 4.5, reviews: 18432, desc: "Flagship Android smartphone with 200MP camera and S-Pen.", features: ["200MP Rear Camera", "6.8\" Dynamic AMOLED Display", "5000mAh Battery", "Built-in S Pen", "Snapdragon 8 Gen 2"], prime: true },
  { id: 2, name: "Apple MacBook Air M2 (8GB, 256GB SSD)", emoji: "💻", category: "Electronics", price: 89990, mrp: 119900, rating: 4.8, reviews: 9021, desc: "Ultra-thin laptop powered by Apple's M2 chip for all-day performance.", features: ["Apple M2 Chip", "13.6-inch Liquid Retina Display", "18-hour battery life", "8GB Unified Memory", "MagSafe Charging"], prime: true },
  { id: 3, name: "Sony WH-1000XM5 Noise Cancelling Headphones", emoji: "🎧", category: "Electronics", price: 22990, mrp: 29990, rating: 4.7, reviews: 7654, desc: "Industry-leading noise cancellation with 30-hour battery.", features: ["30hr Battery", "Multi-device pairing", "HD Voice Calls", "Quick Charge", "Lightweight 250g"], prime: true },
  { id: 4, name: "LG 139cm (55\") 4K OLED Smart TV", emoji: "📺", category: "Electronics", price: 89990, mrp: 139990, rating: 4.6, reviews: 3210, desc: "Perfect blacks and infinite contrast ratio with OLED panel.", features: ["4K OLED Display", "WebOS Smart TV", "Dolby Vision & Atmos", "ThinQ AI", "120Hz Refresh Rate"], prime: false },
  { id: 5, name: "Logitech MX Master 3 Wireless Mouse", emoji: "🖱️", category: "Electronics", price: 7695, mrp: 9495, rating: 4.6, reviews: 4203, desc: "Advanced wireless mouse with MagSpeed scroll and ergonomic design.", features: ["MagSpeed Electromagnetic Scrolling", "8000 DPI Sensor", "USB-C Fast Charging", "7 Programmable Buttons", "Works on glass"], prime: true },
  { id: 6, name: "Canon EOS R50 Mirrorless Camera", emoji: "📷", category: "Electronics", price: 64999, mrp: 79999, rating: 4.5, reviews: 1122, desc: "Compact mirrorless camera with AI-powered subject detection.", features: ["24.2MP APS-C Sensor", "4K Video", "DIGIC X Processor", "Dual Pixel AF", "Wi-Fi & Bluetooth"], prime: true },

  // Clothing
  { id: 7, name: "Levi's Men's 511 Slim Fit Jeans", emoji: "👖", category: "Clothing", price: 2499, mrp: 3999, rating: 4.3, reviews: 22100, desc: "Classic slim fit jeans crafted from premium denim with stretch comfort.", features: ["Slim Fit", "Stretch Denim", "5-Pocket Styling", "Machine Washable", "Available in 6 colors"], prime: true },
  { id: 8, name: "Nike Dri-FIT Running T-Shirt", emoji: "👕", category: "Clothing", price: 1295, mrp: 1995, rating: 4.4, reviews: 15300, desc: "Lightweight sweat-wicking fabric keeps you dry and comfortable.", features: ["Dri-FIT Technology", "Lightweight Fabric", "Standard Fit", "Reflective Design", "Machine Washable"], prime: true },
  { id: 9, name: "Adidas Women's Ultraboost 22 Running Shoes", emoji: "👟", category: "Clothing", price: 12999, mrp: 17999, rating: 4.6, reviews: 8210, desc: "Energy-returning Boost cushioning for long-distance comfort.", features: ["Boost Midsole", "Primeknit+ Upper", "Continental Rubber Outsole", "8mm Drop", "Recycled Materials"], prime: true },
  { id: 10, name: "Manyavar Men's Ethnic Kurta Set", emoji: "🧥", category: "Clothing", price: 2799, mrp: 3999, rating: 4.2, reviews: 5600, desc: "Elegant festive kurta with churidar for weddings and celebrations.", features: ["Premium Cotton Blend", "Intricate Embroidery", "Full Set (Kurta + Churidar)", "Dry Clean Recommended", "Sizes S-XXL"], prime: false },

  // Home
  { id: 11, name: "Prestige Svachh 5L Pressure Cooker", emoji: "🥘", category: "Home", price: 1299, mrp: 2099, rating: 4.4, reviews: 31200, desc: "India's favourite pressure cooker with spill-control lid.", features: ["5-Litre Capacity", "Spill Control Lid", "Induction Compatible", "Anti-bulge Base", "ISI Certified"], prime: true },
  { id: 12, name: "Dyson V12 Detect Slim Cordless Vacuum", emoji: "🧹", category: "Home", price: 52900, mrp: 62900, rating: 4.7, reviews: 1890, desc: "Laser reveals hidden dust while piezo sensor auto-adjusts suction.", features: ["Laser Dust Detection", "Piezo Sensor", "60-min Battery", "HEPA Filtration", "5 cleaning modes"], prime: true },
  { id: 13, name: "Philips Air Fryer HD9200/90 (4.1L)", emoji: "🍟", category: "Home", price: 6495, mrp: 9999, rating: 4.5, reviews: 12400, desc: "Rapid Air Technology for up to 90% less fat when frying.", features: ["4.1L Capacity", "Rapid Air Technology", "1400W", "Easy Clean Drawer", "Timer up to 30 min"], prime: true },
  { id: 14, name: "Wakefit Orthopaedic Memory Foam Pillow", emoji: "🛏️", category: "Home", price: 899, mrp: 1499, rating: 4.3, reviews: 42300, desc: "Contoured design for proper neck alignment and deep sleep.", features: ["Memory Foam Fill", "Contoured Shape", "Removable Cover", "Washable", "100-night trial"], prime: true },

  // Books
  { id: 15, name: "Atomic Habits by James Clear", emoji: "📗", category: "Books", price: 399, mrp: 699, rating: 4.8, reviews: 89400, desc: "A proven framework for getting 1% better every day and building lasting habits.", features: ["Bestseller #1", "Paperback 320 pages", "Publisher: Penguin", "Language: English", "Practical exercises"], prime: true },
  { id: 16, name: "The Alchemist by Paulo Coelho", emoji: "📕", category: "Books", price: 199, mrp: 350, rating: 4.7, reviews: 67800, desc: "A magical story about following your dream and listening to your heart.", features: ["International Bestseller", "Paperback 208 pages", "Publisher: HarperCollins", "Available in Hindi too", "Collector's Edition Available"], prime: true },
  { id: 17, name: "Wings of Fire – APJ Abdul Kalam", emoji: "📘", category: "Books", price: 149, mrp: 299, rating: 4.9, reviews: 103200, desc: "Autobiography of India's Missile Man and President APJ Abdul Kalam.", features: ["Autobiography", "Paperback 197 pages", "Publisher: Universities Press", "Inspirational Read", "School recommended"], prime: true },

  // Toys
  { id: 18, name: "LEGO Technic Bugatti Chiron (3599 pieces)", emoji: "🏎️", category: "Toys", price: 24999, mrp: 34999, rating: 4.9, reviews: 4450, desc: "Authentic 1:8 scale Bugatti Chiron with working W16 engine.", features: ["3599 Pieces", "1:8 Scale Model", "Working Gearbox", "Aerodynamic Spoiler", "Age 16+"], prime: true },
  { id: 19, name: "Funskool Monopoly Classic Board Game", emoji: "🎲", category: "Toys", price: 649, mrp: 999, rating: 4.3, reviews: 28700, desc: "The classic property trading game for the whole family.", features: ["2-6 Players", "Age 8+", "Playing Time ~3 hrs", "Includes 8 tokens", "Hindi & English edition"], prime: true },
  { id: 20, name: "Hot Wheels 20-Car Gift Pack", emoji: "🚗", category: "Toys", price: 999, mrp: 1699, rating: 4.6, reviews: 15600, desc: "20 die-cast Hot Wheels cars, each 1:64 scale — perfect gift pack.", features: ["20 Cars Included", "1:64 Scale", "Die-cast Metal", "Age 3+", "Styles may vary"], prime: true },
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('amazonCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('amazonWishlist')) || [];
let orders = JSON.parse(localStorage.getItem('amazonOrders')) || [];
let currentFilter = 'All';
let currentSlide = 0;
let sliderInterval;
let currentProductId = null;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  initSlider();
  updateCartCount();
  startFlashTimer();
});

// ===== PAGE NAVIGATION =====
function showPage(page) {
  const pages = ['home', 'product', 'cart', 'orders', 'wishlist', 'checkout'];
  pages.forEach(p => {
    document.getElementById(p + 'Page').classList.add('hidden');
  });
  document.getElementById(page + 'Page').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'cart') renderCart();
  if (page === 'orders') renderOrders();
  if (page === 'wishlist') renderWishlist();
  if (page === 'checkout') renderCheckoutSummary();
}

// ===== SLIDER =====
function initSlider() {
  const dots = document.getElementById('sliderDots');
  const slides = document.querySelectorAll('.slide');
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dots.appendChild(dot);
  });
  sliderInterval = setInterval(() => moveSlide(1), 4000);
}

function moveSlide(dir) {
  const slides = document.querySelectorAll('.slide');
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  goToSlide(currentSlide);
}

function goToSlide(n) {
  currentSlide = n;
  document.getElementById('slider').style.transform = `translateX(-${n * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === n));
}

// ===== FLASH TIMER =====
function startFlashTimer() {
  let endTime = Date.now() + 3 * 60 * 60 * 1000 + 23 * 60 * 1000 + 45 * 1000;
  function update() {
    const left = endTime - Date.now();
    if (left <= 0) { endTime = Date.now() + 4 * 60 * 60 * 1000; }
    const h = String(Math.floor(left / 3600000)).padStart(2, '0');
    const m = String(Math.floor((left % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((left % 60000) / 1000)).padStart(2, '0');
    const el = document.getElementById('flashTimer');
    if (el) el.textContent = `${h}:${m}:${s}`;
  }
  update();
  setInterval(update, 1000);
}

// ===== RENDER PRODUCTS =====
function renderProducts(list, title) {
  const grid = document.getElementById('productsGrid');
  const titleEl = document.getElementById('productsTitle');
  if (title) titleEl.textContent = title;
  grid.innerHTML = '';
  if (list.length === 0) {
    grid.innerHTML = '<div class="empty-state"><i class="fas fa-search"></i><p>No products found. Try a different search.</p></div>';
    return;
  }
  list.forEach(p => {
    const inWishlist = wishlist.some(w => w.id === p.id);
    const discount = Math.round((1 - p.price / p.mrp) * 100);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      ${discount > 20 ? `<div class="product-badge">${discount}% off</div>` : ''}
      <button class="wishlist-btn ${inWishlist ? 'active' : ''}" onclick="toggleWishlist(event, ${p.id})">
        <i class="fa${inWishlist ? 's' : 'r'} fa-heart"></i>
      </button>
      <div class="product-emoji">${p.emoji}</div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${getStars(p.rating)}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price">
          <span class="price-current">₹${p.price.toLocaleString()}</span>
          <span class="price-mrp">₹${p.mrp.toLocaleString()}</span>
          <span class="price-discount">${discount}% off</span>
        </div>
        ${p.prime ? '<div class="prime-tag">✦ Prime</div>' : '<div class="delivery-tag">Free delivery</div>'}
      </div>
      <button class="card-add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
    `;
    card.querySelector('.product-emoji').onclick = () => openProduct(p.id);
    card.querySelector('.product-info').onclick = () => openProduct(p.id);
    card.querySelector('.product-name').onclick = () => openProduct(p.id);
    grid.appendChild(card);
  });
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// ===== FILTER & SORT =====
function filterCategory(cat) {
  currentFilter = cat;
  let filtered = cat === 'All' ? products : products.filter(p => p.category === cat);
  const title = cat === 'All' ? 'All Products' : cat;
  renderProducts(filtered, title);
  showPage('home');
  document.getElementById('sortSelect').value = 'default';
  document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
}

function sortProducts() {
  const val = document.getElementById('sortSelect').value;
  let list = currentFilter === 'All' ? [...products] : products.filter(p => p.category === currentFilter);
  if (val === 'price-low') list.sort((a, b) => a.price - b.price);
  else if (val === 'price-high') list.sort((a, b) => b.price - a.price);
  else if (val === 'rating') list.sort((a, b) => b.rating - a.rating);
  renderProducts(list);
}

// ===== SEARCH =====
function doSearch() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const cat = document.getElementById('searchCategory').value;
  document.getElementById('searchSuggestions').innerHTML = '';
  if (!query) { filterCategory(cat === 'All' ? 'All' : cat); return; }
  let filtered = products.filter(p => {
    const matchCat = cat === 'All' || p.category === cat;
    const matchQuery = p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
    return matchCat && matchQuery;
  });
  renderProducts(filtered, `Results for "${query}"`);
  showPage('home');
  document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
}

function liveSearch() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const suggestions = document.getElementById('searchSuggestions');
  if (!query) { suggestions.innerHTML = ''; return; }
  const matches = products.filter(p => p.name.toLowerCase().includes(query)).slice(0, 5);
  suggestions.innerHTML = matches.map(p => `
    <div class="suggestion-item" onclick="selectSuggestion('${p.name.replace(/'/g,"\\'")}')">
      <i class="fas fa-search"></i> ${p.name}
    </div>
  `).join('');
}

function selectSuggestion(name) {
  document.getElementById('searchInput').value = name;
  document.getElementById('searchSuggestions').innerHTML = '';
  doSearch();
}

// ===== PRODUCT DETAIL =====
function openProduct(id) {
  currentProductId = id;
  const p = products.find(x => x.id === id);
  const inWishlist = wishlist.some(w => w.id === id);
  const discount = Math.round((1 - p.price / p.mrp) * 100);
  document.getElementById('productDetail').innerHTML = `
    <div style="flex-basis:100%">
      <div class="back-btn" onclick="showPage('home')"><i class="fas fa-arrow-left"></i> Back to results</div>
    </div>
    <div class="detail-left">
      <span class="detail-emoji" id="mainEmoji">${p.emoji}</span>
      <div class="detail-thumb-row">
        ${['🔍','📦','✅'].map(e => `<div class="detail-thumb" onclick="document.getElementById('mainEmoji').textContent='${e}'">${e}</div>`).join('')}
      </div>
    </div>
    <div class="detail-right">
      <h1>${p.name}</h1>
      <div class="product-rating">
        <span class="stars" style="font-size:1.2rem">${getStars(p.rating)}</span>
        <span class="rating-count">${p.reviews.toLocaleString()} ratings</span>
        ${p.prime ? '<span class="prime-tag" style="margin-left:10px">✦ Prime</span>' : ''}
      </div>
      <hr style="margin:12px 0;border:none;border-top:1px solid #eee"/>
      <div class="detail-price-block">
        <div class="detail-current">₹${p.price.toLocaleString()}</div>
        <div class="detail-savings">M.R.P.: <s>₹${p.mrp.toLocaleString()}</s> — You Save ₹${(p.mrp - p.price).toLocaleString()} (${discount}%)</div>
      </div>
      <p class="detail-desc">${p.desc}</p>
      <ul class="detail-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <div class="qty-selector">
        <button class="qty-btn" onclick="changeDetailQty(-1)">−</button>
        <span id="detailQty">1</span>
        <button class="qty-btn" onclick="changeDetailQty(1)">+</button>
        <span style="font-size:0.85rem;color:#888">Qty</span>
      </div>
      <div class="detail-actions">
        <button class="btn-cart" onclick="addToCartFromDetail()"><i class="fas fa-cart-plus"></i> Add to Cart</button>
        <button class="btn-buy" onclick="buyNow()">Buy Now</button>
      </div>
      <div style="margin-top:14px">
        <button onclick="toggleWishlistDetail(${id})" id="wishDetailBtn"
          style="background:none;border:1px solid #ccc;border-radius:20px;padding:8px 16px;cursor:pointer;font-size:0.85rem;display:flex;align-items:center;gap:6px">
          <i class="${inWishlist ? 'fas' : 'far'} fa-heart" style="color:#e91e63"></i>
          ${inWishlist ? 'Saved to Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  `;
  showPage('product');
}

let detailQty = 1;
function changeDetailQty(d) {
  detailQty = Math.max(1, Math.min(10, detailQty + d));
  document.getElementById('detailQty').textContent = detailQty;
}
function addToCartFromDetail() {
  for (let i = 0; i < detailQty; i++) addToCart(currentProductId, false);
  showToast(`<i class="fas fa-check-circle"></i> Added ${detailQty} item(s) to cart`);
  detailQty = 1;
  if (document.getElementById('detailQty')) document.getElementById('detailQty').textContent = 1;
}
function buyNow() {
  addToCartFromDetail();
  showPage('checkout');
}
function toggleWishlistDetail(id) {
  toggleWishlist({ stopPropagation: () => {} }, id);
  const p = products.find(x => x.id === id);
  const inW = wishlist.some(w => w.id === id);
  const btn = document.getElementById('wishDetailBtn');
  if (btn) {
    btn.innerHTML = `<i class="${inW ? 'fas' : 'far'} fa-heart" style="color:#e91e63"></i> ${inW ? 'Saved to Wishlist' : 'Add to Wishlist'}`;
  }
}

// ===== CART =====
function addToCart(id, showMsg = true) {
  const p = products.find(x => x.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...p, qty: 1 });
  saveCart();
  updateCartCount();
  if (showMsg) showToast(`<i class="fas fa-cart-plus"></i> Added to cart`);
}

function saveCart() {
  localStorage.setItem('amazonCart', JSON.stringify(cart));
}

function updateCartCount() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartCount').textContent = total;
}

function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const summaryEl = document.getElementById('cartSummary');
  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="empty-state"><i class="fas fa-shopping-cart"></i><p>Your cart is empty!</p><button onclick="showPage('home')">Shop Now</button></div>`;
    summaryEl.innerHTML = '';
    return;
  }
  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
        <div style="font-size:0.8rem;color:#888">₹${item.price.toLocaleString()} each</div>
        <div class="cart-item-controls">
          <button class="qty-ctrl" onclick="updateCartQty(${item.id}, -1)">−</button>
          <span style="font-weight:600;min-width:24px;text-align:center">${item.qty}</span>
          <button class="qty-ctrl" onclick="updateCartQty(${item.id}, 1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i> Remove</button>
        </div>
      </div>
    </div>
  `).join('');
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const count = cart.reduce((s, c) => s + c.qty, 0);
  summaryEl.innerHTML = `
    <div class="subtotal">Subtotal (${count} item${count !== 1 ? 's' : ''}): <span>₹${subtotal.toLocaleString()}</span></div>
    <button class="checkout-btn" onclick="showPage('checkout')"><i class="fas fa-lock"></i> Proceed to Checkout</button>
  `;
}

function updateCartQty(id, d) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartCount();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartCount();
  renderCart();
  showToast('<i class="fas fa-trash"></i> Item removed from cart');
}

// ===== WISHLIST =====
function toggleWishlist(e, id) {
  e.stopPropagation();
  const idx = wishlist.findIndex(w => w.id === id);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
    showToast('<i class="far fa-heart"></i> Removed from wishlist');
  } else {
    const p = products.find(x => x.id === id);
    wishlist.push(p);
    showToast('<i class="fas fa-heart" style="color:#e91e63"></i> Saved to wishlist');
  }
  localStorage.setItem('amazonWishlist', JSON.stringify(wishlist));
  renderProducts(currentFilter === 'All' ? products : products.filter(p => p.category === currentFilter));
}

function renderWishlist() {
  const grid = document.getElementById('wishlistGrid');
  if (wishlist.length === 0) {
    grid.innerHTML = `<div class="empty-state"><i class="fas fa-heart"></i><p>Your wishlist is empty</p><button onclick="showPage('home')">Start Shopping</button></div>`;
    return;
  }
  grid.innerHTML = '';
  wishlist.forEach(p => {
    const discount = Math.round((1 - p.price / p.mrp) * 100);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <button class="wishlist-btn active" onclick="toggleWishlist(event,${p.id});renderWishlist()">
        <i class="fas fa-heart"></i>
      </button>
      <div class="product-emoji" onclick="openProduct(${p.id})">${p.emoji}</div>
      <div class="product-info" onclick="openProduct(${p.id})">
        <div class="product-name">${p.name}</div>
        <div class="product-price">
          <span class="price-current">₹${p.price.toLocaleString()}</span>
          <span class="price-discount">${discount}% off</span>
        </div>
      </div>
      <button class="card-add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

// ===== CHECKOUT =====
function renderCheckoutSummary() {
  const el = document.getElementById('orderSummaryCheckout');
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const shipping = subtotal > 499 ? 0 : 40;
  const tax = Math.round(subtotal * 0.18);
  el.innerHTML = `
    <h3>Order Summary</h3>
    ${cart.map(c => `
      <div class="summary-row">
        <span>${c.emoji} ${c.name.slice(0, 30)}… ×${c.qty}</span>
        <span>₹${(c.price * c.qty).toLocaleString()}</span>
      </div>
    `).join('')}
    <div class="summary-row"><span>Subtotal</span><span>₹${subtotal.toLocaleString()}</span></div>
    <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? '<span style="color:#007185">Free</span>' : '₹' + shipping}</span></div>
    <div class="summary-row"><span>Tax (GST 18%)</span><span>₹${tax.toLocaleString()}</span></div>
    <div class="summary-row total"><span>Total</span><span>₹${(subtotal + shipping + tax).toLocaleString()}</span></div>
  `;
}

function placeOrder() {
  const name = document.getElementById('name').value.trim();
  const address = document.getElementById('address').value.trim();
  if (!name || !address) { showToast('<i class="fas fa-exclamation-circle"></i> Please fill delivery details'); return; }
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const shipping = subtotal > 499 ? 0 : 40;
  const tax = Math.round(subtotal * 0.18);
  const order = {
    id: 'AMZ' + Date.now(),
    date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    items: [...cart],
    total: subtotal + shipping + tax,
    name, address,
    status: 'Confirmed'
  };
  orders.unshift(order);
  localStorage.setItem('amazonOrders', JSON.stringify(orders));
  cart = [];
  saveCart();
  updateCartCount();
  showToast('<i class="fas fa-check-circle"></i> 🎉 Order placed successfully!');
  setTimeout(() => showPage('orders'), 1000);
}

// ===== ORDERS =====
function renderOrders() {
  const el = document.getElementById('ordersList');
  if (orders.length === 0) {
    el.innerHTML = `<div class="empty-state"><i class="fas fa-box-open"></i><p>No orders yet. Start shopping!</p><button onclick="showPage('home')">Shop Now</button></div>`;
    return;
  }
  el.innerHTML = orders.map(order => `
    <div class="order-card">
      <div class="order-card-header">
        <div><span>Order Placed</span><span>${order.date}</span></div>
        <div><span>Total</span><span>₹${order.total.toLocaleString()}</span></div>
        <div><span>Ship To</span><span>${order.name}</span></div>
        <div><span>Order ID</span><span>${order.id}</span></div>
      </div>
      <div class="order-items-list">
        ${order.items.map(item => `
          <div class="order-item">
            <div class="order-item-emoji">${item.emoji}</div>
            <div class="order-item-info">
              <h4>${item.name}</h4>
              <div>Qty: ${item.qty} · ₹${(item.price * item.qty).toLocaleString()}</div>
              <span class="order-status">✓ ${order.status}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ===== ACCOUNT DROPDOWN =====
function toggleAccount() {
  // handled by CSS hover; this is a backup for mobile
  const dd = document.getElementById('accountDropdown');
  dd.style.display = dd.style.display === 'block' ? 'none' : 'block';
}

// ===== TOAST =====
let toastTimeout;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = msg;
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== CLOSE SUGGESTIONS ON OUTSIDE CLICK =====
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-bar') && !e.target.closest('.search-suggestions')) {
    document.getElementById('searchSuggestions').innerHTML = '';
  }
});
