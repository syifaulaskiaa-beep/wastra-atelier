/* =========================================================
   WASTRA ATELIER — script.js
   Data, rendering, dan seluruh logika interaktif butik.
========================================================= */

/* ---------------- IKON (SVG inline, tanpa dependensi luar) ---------------- */
const SVG = {
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>`,
  bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="8" width="16" height="12" rx="1"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13,5 20,12 13,19"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="1" y="7" width="13" height="9"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="6" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>`,
  badgeCheck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><polyline points="8,12 11,15 16,9"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 4v6h6"/><path d="M20 20v-6h-6"/><path d="M4.5 15a8 8 0 0 0 14.5 3.5M19.5 9A8 8 0 0 0 5 5.5"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="10" cy="10" r="6"/><line x1="15" y1="15" x2="20" y2="20"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,12 9,17 20,6"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/></svg>`,
  minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><line x1="4" y1="12" x2="20" y2="12"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="5,8 12,15 19,8"/></svg>`,
  chevronUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="5,15 12,8 19,15"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.5 7-11a7 7 0 0 0-14 0c0 4.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.3"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2C10.5 19 4 12.5 4 5a2 2 0 0 1 2-2z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="1"/><polyline points="3,6 12,13 21,6"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="7" x2="12" y2="12"/><line x1="12" y1="12" x2="16" y2="14"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M4 12a8 8 0 1 1 3 6.2L4 20l1.5-3.6A7.9 7.9 0 0 1 4 12z"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/></svg>`,
};
function heartSVG(filled) {
  return `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7.5-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2 4.5-9.5 9-9.5 9z" fill="${filled ? "currentColor" : "none"}"/></svg>`;
}

/* ---------------- DATA PRODUK ---------------- */
const COLOR_POOL = [
  { name: "Hijau Hutan", hex: "#16302B" },
  { name: "Gading", hex: "#EFE7D8" },
  { name: "Marun", hex: "#7A2E2E" },
  { name: "Kuning Kunyit", hex: "#B8963E" },
  { name: "Cokelat Tanah", hex: "#5C4A2E" },
  { name: "Hitam", hex: "#1A1512" },
];
const colorsFor = (id) => [COLOR_POOL[id % 6], COLOR_POOL[(id + 2) % 6]];
const stockFor = (id) => [14, 8, 4, 22, 3, 17, 6, 30, 9, 2][id % 10];
const soldFor = (id) => 40 + ((id * 17) % 260);
const reviewCountFor = (id) => 30 + ((id * 13) % 200);

const REVIEW_POOL = [
  { name: "Dinda", text: "Bahannya adem banget dan jahitannya rapi, sesuai foto." },
  { name: "Made Ayu", text: "Suka banget sama motifnya, dapat banyak pujian pas dipakai kondangan." },
  { name: "Rizky Amelia", text: "Pengiriman cepat, packaging aman, kualitas jauh di atas harga." },
  { name: "Salsa", text: "Ukurannya pas sesuai size chart, potongannya flattering." },
  { name: "Nadia", text: "Sudah beli 3 kali di sini, konsisten bagus terus." },
  { name: "Putri Wulan", text: "Warnanya lebih cantik langsung dibanding foto, recommended." },
];
const reviewsFor = (id) => [
  { ...REVIEW_POOL[id % 6], rating: 5, date: "2 minggu lalu" },
  { ...REVIEW_POOL[(id + 3) % 6], rating: 4, date: "1 bulan lalu" },
];

const RAW_PRODUCTS = [
  { id: 1, name: "Gaun Senja Batik", category: "Gaun", price: 1250000, rating: 4.8, sizes: ["S","M","L","XL"], isBestSeller: true, image: "images/gaun senja batik.jpg", desc: "Gaun midi berbahan katun batik cap tangan, dipotong dengan siluet longgar yang jatuh lembut di badan. Cocok untuk acara sore hingga malam." },
  { id: 2, name: "Gaun Linen Pantai", category: "Gaun", price: 890000, rating: 4.6, sizes: ["S","M","L"], image: "images/gaun linen pantai.jpg", desc: "Linen alami dengan tenunan renggang yang sejuk dipakai, detail kancing kayu di bagian depan." },
  { id: 3, name: "Gaun Malam Beludru", category: "Gaun", price: 1650000, originalPrice: 1950000, rating: 4.9, sizes: ["S","M","L","XL"], isBestSeller: true, image: "images/gaun malam beludru.jpg", desc: "Gaun malam beludru dengan potongan off-shoulder dan detail kancing kuningan di punggung." },
  { id: 4, name: "Gaun Kaftan Sutra", category: "Gaun", price: 1150000, rating: 4.7, sizes: ["S","M","L","XL"], isNew: true, image: "images/gaun kaftan sutra.jpg", desc: "Kaftan sutra dengan bordir tangan di kerah, longgar dan sejuk untuk cuaca tropis." },
  { id: 5, name: "Atasan Kutubaru Modern", category: "Atasan", price: 450000, rating: 4.9, sizes: ["S","M","L","XL"], isBestSeller: true, image: "images/atasan kutubaru modern.jpg", desc: "Reinterpretasi kutubaru klasik dengan potongan crop modern dan bordir tangan di kerah." },
  { id: 6, name: "Atasan Sutra Krem", category: "Atasan", price: 620000, rating: 4.5, sizes: ["S","M","L"], image: "images/atasan sutra krem.jpg", desc: "Blus sutra dengan jatuhnya kain yang halus, lengan balon dan manset kancing mutiara." },
  { id: 7, name: "Blouse Renda Ivory", category: "Atasan", price: 395000, rating: 4.5, sizes: ["S","M","L"], image: "images/blouse renda ivory.jpg", desc: "Blus dengan panel renda di kerah dan pergelangan, dipadukan katun voile lembut." },
  { id: 8, name: "Atasan Tenun Ikat", category: "Atasan", price: 510000, rating: 4.6, sizes: ["S","M","L","XL"], isNew: true, image: "images/atasan tenun ikat.jpg", desc: "Atasan lengan panjang dari tenun ikat, ringan dan cocok untuk kerja maupun santai." },
  { id: 9, name: "Rok Lilit Tenun", category: "Rok", price: 550000, rating: 4.7, sizes: ["S","M","L","XL"], image: "images/rok lilit tenun.jpg", desc: "Rok lilit dari tenun ikat, dapat disesuaikan lingkar pinggangnya dengan tali samping." },
  { id: 10, name: "Rok Plisket Ivory", category: "Rok", price: 480000, rating: 4.4, sizes: ["S","M","L"], image: "images/rok plisket ivory.jpg", desc: "Rok plisket ringan dengan gerak kain yang anggun saat melangkah." },
  { id: 11, name: "Rok Span Batik", category: "Rok", price: 495000, rating: 4.6, sizes: ["S","M","L","XL"], isNew: true, image: "images/rok span batik.jpg", desc: "Rok span motif batik dengan belahan belakang, pas untuk acara formal kantor." },
  { id: 12, name: "Rok Maxi Linen", category: "Rok", price: 610000, rating: 4.5, sizes: ["S","M","L"], image: "images/rok maxi linen.jpg", desc: "Rok maxi linen dengan karet pinggang nyaman dan saku tersembunyi di kedua sisi." },
  { id: 13, name: "Outer Kimono Songket", category: "Outer", price: 980000, rating: 4.9, sizes: ["S","M","L","XL"], isNew: true, isBestSeller: true, image: "images/outer kimono songket.jpg", desc: "Outer panjang bermotif songket tenun, dilapisi katun ringan agar nyaman sepanjang hari." },
  { id: 14, name: "Outer Cardigan Rajut", category: "Outer", price: 610000, rating: 4.3, sizes: ["S","M","L"], image: "images/outer cardigan rajut.jpg", desc: "Cardigan rajut tebal dengan kancing tanduk, hangat tanpa terasa berat." },
  { id: 15, name: "Blazer Tenun Klasik", category: "Outer", price: 890000, rating: 4.7, sizes: ["S","M","L","XL"], image: "images/blazer tenun klasik.jpg", desc: "Blazer potongan klasik dari kain tenun, dilengkapi lapisan dalam yang nyaman." },
  { id: 16, name: "Kimono Pantai Ringan", category: "Outer", price: 430000, rating: 4.4, sizes: ["S","M","L"], image: "images/kimono pantai ringan.jpg", desc: "Kimono tipis motif cetak, ringan untuk dibawa liburan pantai." },
  { id: 17, name: "Selendang Sutra Tangan", category: "Aksesoris", price: 320000, rating: 4.8, sizes: ["One Size"], image: "images/selendang sutra tangan.jpg", desc: "Selendang sutra dicelup tangan, motif gradasi senja pesisir." },
  { id: 18, name: "Anting Perak Ukir", category: "Aksesoris", price: 275000, rating: 4.6, sizes: ["One Size"], image: "images/anting perak ukir.jpg", desc: "Anting perak 925 dengan ukiran motif sulur khas pesisir utara." },
  { id: 19, name: "Tas Anyam Pandan", category: "Aksesoris", price: 385000, rating: 4.7, sizes: ["One Size"], isNew: true, image: "images/tas anyaman pandan.jpg", desc: "Tas anyam pandan dengan aksen kulit di pegangan, kuat untuk pemakaian harian." },
  { id: 20, name: "Ikat Pinggang Kulit Ukir", category: "Aksesoris", price: 245000, rating: 4.5, sizes: ["One Size"], image: "images/ikat pinggang kulit ukir.jpg", desc: "Ikat pinggang kulit asli dengan ukiran motif etnik dan gesper kuningan." },
];

const PRODUCTS = RAW_PRODUCTS.map((p) => ({
  ...p,
  colors: colorsFor(p.id),
  stock: stockFor(p.id),
  sold: soldFor(p.id),
  reviews: reviewCountFor(p.id),
  reviewsList: reviewsFor(p.id),
  tag: p.isNew ? "Baru" : p.isBestSeller ? "Terlaris" : p.originalPrice ? "Diskon" : null,
}));

const CATEGORIES = ["Semua", "Gaun", "Atasan", "Rok", "Outer", "Aksesoris"];
const PRICE_RANGES = [
  { key: "semua", label: "Semua Harga", test: () => true },
  { key: "lt500", label: "Di bawah Rp500rb", test: (p) => p.price < 500000 },
  { key: "500-1jt", label: "Rp500rb – Rp1jt", test: (p) => p.price >= 500000 && p.price <= 1000000 },
  { key: "1-2jt", label: "Rp1jt – Rp2jt", test: (p) => p.price > 1000000 && p.price <= 2000000 },
  { key: "gt2jt", label: "Di atas Rp2jt", test: (p) => p.price > 2000000 },
];
const FAQS = [
  { q: "Berapa lama waktu pengiriman?", a: "Pengiriman reguler memakan waktu 2–4 hari kerja, sedangkan express sampai dalam 1 hari kerja untuk area Jabodetabek." },
  { q: "Apakah bisa retur atau tukar ukuran?", a: "Bisa, kami menerima retur dan penukaran ukuran dalam 7 hari sejak barang diterima selama label belum dilepas." },
  { q: "Apakah produk dibuat oleh perajin lokal?", a: "Ya, seluruh koleksi ditenun dan dijahit oleh mitra perajin kami di Jawa dan Sumba." },
  { q: "Metode pembayaran apa saja yang tersedia?", a: "Kami menerima transfer bank, e-wallet, dan pembayaran di tempat (COD) untuk area tertentu." },
  { q: "Bagaimana cara memilih ukuran yang tepat?", a: "Setiap produk memiliki panduan ukuran S–XL yang mengikuti standar lingkar dada dan pinggang lokal. Hubungi kami via WhatsApp bila ragu." },
];

/* ---------------- STATE ---------------- */
const state = {
  search: "",
  category: "Semua",
  priceRange: "semua",
  sortBy: "rekomendasi",
  visibleCount: 8,
  wishlist: [],
  cart: [], // {id, size, colorName, qty}
  recentlyViewed: [],
  selectedProduct: null,
  selectedSize: null,
  selectedColorName: null,
  modalQty: 1,
  modalTab: "deskripsi",
  promo: null,
  shippingMethod: "reguler",
  paymentMethod: "Transfer Bank",
};

/* ---------------- UTIL ---------------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const byId = (id) => PRODUCTS.find((p) => p.id === id);
function formatIDR(n) { return "Rp" + Math.round(n).toLocaleString("id-ID"); }
function slug(cat) { return cat.toLowerCase(); }
function starsHTML(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}
let toastSeq = 0;
function showToast(text) {
  const id = ++toastSeq;
  const el = document.createElement("div");
  el.className = "toast";
  el.id = "toast-" + id;
  el.innerHTML = `<span class="icon" style="width:14px;height:14px;color:var(--gold-light)">${SVG.sparkle}</span> ${text}`;
  $("#toastContainer").appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

/* ---------------- SWATCH (gambar produk asli, fallback ke placeholder) ---------------- */
function swatchHTML({ category, tag, large, stock, showWishlist, id, wished, tint, image }) {
  const tintStyle = tint ? ` style="background: linear-gradient(155deg, ${tint} 0%, ${tint} 45%, var(--gold-light) 100%)"` : "";
  const letter = category[0];
  const imageTag = image ? `<img src="${image}" alt="${category}" class="swatch-photo" loading="lazy">` : "";
  return `
    <div class="swatch swatch--${slug(category)} ${large ? "swatch--large" : ""}"${image ? "" : tintStyle}>
      ${imageTag}
      ${image ? "" : `<span class="swatch-letter">${letter}</span>`}
      ${tag ? `<span class="swatch-tag">${tag}</span>` : ""}
      ${stock !== undefined && stock <= 5 ? `<span class="swatch-stock">Sisa ${stock}</span>` : ""}
      ${showWishlist ? `<button class="swatch-wishlist" data-action="toggle-wishlist" data-id="${id}"><span class="icon" style="width:15px;height:15px;color:var(--maroon)">${heartSVG(wished)}</span></button>` : ""}
    </div>`;
}

/* ---------------- KARTU PRODUK ---------------- */
function productCardHTML(p, compact) {
  return `
    <div class="product-card ${compact ? "compact" : ""}">
      <div class="card-image" data-action="open-product" data-id="${p.id}">
        ${swatchHTML({ category: p.category, tag: p.tag, stock: p.stock, showWishlist: true, id: p.id, wished: state.wishlist.includes(p.id), image: p.image })}
      </div>
      <button class="card-text" data-action="open-product" data-id="${p.id}" style="text-align:left;width:100%">
        <p class="card-category">${p.category}</p>
        <p class="card-name">${p.name}</p>
        <div class="card-rating"><span class="stars">${starsHTML(p.rating)}</span><span class="card-review-count">(${p.reviews})</span></div>
        <div class="card-price-row">
          <span class="card-price">${formatIDR(p.price)}</span>
          ${p.originalPrice ? `<span class="card-price-original">${formatIDR(p.originalPrice)}</span>` : ""}
        </div>
        <p class="card-sold">Terjual ${p.sold}+</p>
      </button>
    </div>`;
}

function renderCarousel(containerId, list) {
  $(containerId).innerHTML = list.map((p) => productCardHTML(p, true)).join("");
}

/* ---------------- FILTER + GRID ---------------- */
function getFiltered() {
  const range = PRICE_RANGES.find((r) => r.key === state.priceRange);
  let list = PRODUCTS.filter(
    (p) => (state.category === "Semua" || p.category === state.category) &&
      p.name.toLowerCase().includes(state.search.toLowerCase()) && range.test(p)
  );
  if (state.sortBy === "harga-rendah") list = list.slice().sort((a, b) => a.price - b.price);
  if (state.sortBy === "harga-tinggi") list = list.slice().sort((a, b) => b.price - a.price);
  if (state.sortBy === "rating") list = list.slice().sort((a, b) => b.rating - a.rating);
  if (state.sortBy === "terlaris") list = list.slice().sort((a, b) => b.sold - a.sold);
  return list;
}

function renderGrid() {
  const filtered = getFiltered();
  const visible = filtered.slice(0, state.visibleCount);
  $("#resultCount").textContent = `${filtered.length} produk ditemukan`;
  $("#productGrid").innerHTML = visible.map((p) => productCardHTML(p, false)).join("");
  $("#emptyState").hidden = filtered.length !== 0;
  $("#productGrid").hidden = filtered.length === 0;
  const loadMoreBtn = $("#loadMoreBtn");
  if (state.visibleCount < filtered.length) {
    loadMoreBtn.hidden = false;
    loadMoreBtn.textContent = `Muat Lebih Banyak (${filtered.length - state.visibleCount} lagi)`;
  } else {
    loadMoreBtn.hidden = true;
  }
}

function renderCategoryFilters() {
  $("#categoryFilters").innerHTML = CATEGORIES.map(
    (cat) => `<button class="cat-btn ${cat === state.category ? "active" : ""}" data-action="set-category" data-cat="${cat}">${cat}</button>`
  ).join("");
}

function renderRecentlyViewed() {
  const products = state.recentlyViewed.map(byId).filter(Boolean);
  $("#recentlyViewedSection").hidden = products.length === 0;
  if (products.length) renderCarousel("#recentlyViewedList", products);
}

/* ---------------- WISHLIST ---------------- */
function toggleWishlist(id) {
  const has = state.wishlist.includes(id);
  state.wishlist = has ? state.wishlist.filter((x) => x !== id) : [...state.wishlist, id];
  showToast(has ? "Dihapus dari favorit" : "Ditambahkan ke favorit");
  updateCounts();
  renderGrid();
  renderWishlistDrawer();
  if (state.selectedProduct) renderProductModal();
}

function renderWishlistDrawer() {
  const list = state.wishlist.map(byId).filter(Boolean);
  const container = $("#wishlistList");
  if (list.length === 0) {
    container.innerHTML = `<p class="drawer-empty">Belum ada favorit tersimpan.</p>`;
    return;
  }
  container.innerHTML = list.map((p) => `
    <div class="cart-line">
      <div class="swatch swatch--${slug(p.category)}"><span class="swatch-letter">${p.category[0]}</span></div>
      <div class="cart-line-info">
        <p class="cart-line-name">${p.name}</p>
        <p class="cart-line-price" style="color:var(--forest)">${formatIDR(p.price)}</p>
        <button class="remove-btn" style="text-decoration:underline;color:var(--forest);font-size:12px" data-action="wishlist-add-cart" data-id="${p.id}">Tambah ke tas</button>
      </div>
      <button class="remove-btn" data-action="toggle-wishlist" data-id="${p.id}"><span class="icon" style="width:16px;height:16px">${SVG.trash}</span></button>
    </div>`).join("");
}

/* ---------------- CART ---------------- */
function cartKey(id, size, colorName) { return `${id}__${size}__${colorName}`; }

function addToCart(product, size, color, qty) {
  const idx = state.cart.findIndex((x) => x.id === product.id && x.size === size && x.colorName === color.name);
  if (idx > -1) state.cart[idx].qty += qty;
  else state.cart.push({ id: product.id, size, colorName: color.name, qty });
  showToast(`${product.name} ditambahkan ke tas`);
  updateCounts();
  renderCartDrawer();
}

function updateCartQty(id, size, colorName, delta) {
  state.cart = state.cart
    .map((item) => (item.id === id && item.size === size && item.colorName === colorName ? { ...item, qty: item.qty + delta } : item))
    .filter((item) => item.qty > 0);
  updateCounts();
  renderCartDrawer();
}

function removeFromCart(id, size, colorName) {
  state.cart = state.cart.filter((item) => !(item.id === id && item.size === size && item.colorName === colorName));
  updateCounts();
  renderCartDrawer();
}

function cartDetailed() {
  return state.cart.map((item) => ({ ...item, product: byId(item.id), color: COLOR_POOL.find((c) => c.name === item.colorName) }));
}
function cartSubtotal() { return cartDetailed().reduce((sum, i) => sum + i.product.price * i.qty, 0); }
function cartCount() { return state.cart.reduce((n, i) => n + i.qty, 0); }
function cartDiscount() { const sub = cartSubtotal(); return state.promo ? Math.round(sub * (state.promo.pct / 100)) : 0; }
function cartShipping() {
  const sub = cartSubtotal();
  if (sub === 0) return 0;
  if (state.shippingMethod === "express") return 35000;
  return sub >= 1000000 ? 0 : 15000;
}
function cartTotal() { return cartSubtotal() - cartDiscount() + cartShipping(); }

function renderCartDrawer() {
  const items = cartDetailed();
  $("#cartDrawerCount").textContent = cartCount();
  const container = $("#cartItems");
  if (items.length === 0) {
    container.innerHTML = `<p class="drawer-empty">Tas belanja Anda masih kosong.</p>`;
    $("#cartSummary").hidden = true;
    return;
  }
  container.innerHTML = items.map((item) => `
    <div class="cart-line">
      <div class="swatch swatch--${slug(item.product.category)}" style="background: linear-gradient(155deg, ${item.color.hex} 0%, ${item.color.hex} 45%, var(--gold-light) 100%)"><span class="swatch-letter">${item.product.category[0]}</span></div>
      <div class="cart-line-info">
        <p class="cart-line-name">${item.product.name}</p>
        <p class="cart-line-meta">${item.colorName} · Ukuran ${item.size}</p>
        <div class="cart-line-row">
          <div class="qty-stepper">
            <button data-action="cart-qty" data-id="${item.id}" data-size="${item.size}" data-color="${item.colorName}" data-delta="-1"><span class="icon" style="width:12px;height:12px">${SVG.minus}</span></button>
            <span>${item.qty}</span>
            <button data-action="cart-qty" data-id="${item.id}" data-size="${item.size}" data-color="${item.colorName}" data-delta="1"><span class="icon" style="width:12px;height:12px">${SVG.plus}</span></button>
          </div>
          <span class="cart-line-price">${formatIDR(item.product.price * item.qty)}</span>
        </div>
      </div>
      <button class="remove-btn" data-action="cart-remove" data-id="${item.id}" data-size="${item.size}" data-color="${item.colorName}"><span class="icon" style="width:16px;height:16px">${SVG.trash}</span></button>
    </div>`).join("");

  const sub = cartSubtotal(), disc = cartDiscount(), ship = cartShipping(), total = cartTotal();
  $("#cartSummary").hidden = false;
  $("#cartSummary").innerHTML = `
    <div class="promo-row">
      <input type="text" id="promoInput" placeholder="Kode promo (coba WASTRA10)" value="${state.promoInputValue || ""}" />
      <button data-action="apply-promo">Pakai</button>
    </div>
    <p class="promo-msg" id="promoMsg"></p>
    <div class="summary-line"><span>Subtotal</span><span>${formatIDR(sub)}</span></div>
    ${state.promo ? `<div class="summary-line"><span>Diskon</span><span>-${formatIDR(disc)}</span></div>` : ""}
    <div class="summary-line"><span>Ongkir</span><span>${ship === 0 ? "Gratis" : formatIDR(ship)}</span></div>
    <div class="summary-total"><span>Total</span><span>${formatIDR(total)}</span></div>
    <button class="btn btn-primary btn-block" data-action="go-checkout">Lanjut ke Checkout</button>
  `;
  if (state.promoError) { $("#promoMsg").textContent = state.promoError; $("#promoMsg").className = "promo-msg promo-error"; }
  if (state.promo) { $("#promoMsg").textContent = `Kode ${state.promo.code} aktif (-${state.promo.pct}%)`; $("#promoMsg").className = "promo-msg promo-ok"; }
}

function applyPromo() {
  const input = $("#promoInput");
  const code = input.value.trim().toUpperCase();
  state.promoInputValue = input.value;
  if (code === "WASTRA10") {
    state.promo = { code, pct: 10 };
    state.promoError = "";
    showToast("Kode promo berhasil dipakai");
  } else {
    state.promo = null;
    state.promoError = "Kode tidak ditemukan";
  }
  renderCartDrawer();
}

/* ---------------- COUNTS ---------------- */
function updateCounts() {
  const wEl = $("#wishlistCount"), cEl = $("#cartCount");
  wEl.hidden = state.wishlist.length === 0; wEl.textContent = state.wishlist.length;
  cEl.hidden = cartCount() === 0; cEl.textContent = cartCount();
}

/* ---------------- MODAL PRODUK ---------------- */
function openProduct(id) {
  const p = byId(id);
  state.selectedProduct = p;
  state.selectedSize = p.sizes[0];
  state.selectedColorName = p.colors[0].name;
  state.modalQty = 1;
  state.modalTab = "deskripsi";
  state.recentlyViewed = [id, ...state.recentlyViewed.filter((x) => x !== id)].slice(0, 4);
  renderProductModal();
  $("#productOverlay").hidden = false;
  $("#productModal").hidden = false;
  renderRecentlyViewed();
}
function closeProduct() {
  $("#productOverlay").hidden = true;
  $("#productModal").hidden = true;
  state.selectedProduct = null;
}

function renderProductModal() {
  const p = state.selectedProduct;
  if (!p) return;
  const color = COLOR_POOL.find((c) => c.name === state.selectedColorName);
  const related = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 3);

  const tabContent = state.modalTab === "deskripsi"
    ? `<p class="pm-desc">${p.desc}</p>`
    : `<div style="margin-bottom:24px">${p.reviewsList.map((r) => `
        <div class="review-item">
          <div class="review-top"><span class="review-name">${r.name}</span><span class="review-date">${r.date}</span></div>
          <span class="stars" style="font-size:11px">${starsHTML(r.rating)}</span>
          <p class="review-text">${r.text}</p>
        </div>`).join("")}</div>`;

  $("#productModalContent").innerHTML = `
    <div class="pm-image">${swatchHTML({ category: p.category, tag: p.tag, large: true, tint: color.hex, image: p.image })}</div>
    <div class="pm-body">
      <button class="icon-btn pm-close" data-action="close-product"><span class="icon">${SVG.x}</span></button>
      <p class="pm-category">${p.category}</p>
      <h2 class="pm-name">${p.name}</h2>
      <div class="pm-rating-row"><span class="stars">${starsHTML(p.rating)}</span><span>${p.rating} (${p.reviews} ulasan) · Terjual ${p.sold}+</span></div>
      <p class="pm-stock" style="color:${p.stock <= 5 ? "var(--maroon)" : "var(--muted)"}">${p.stock <= 5 ? `Stok tersisa ${p.stock}` : "Stok tersedia"}</p>
      <div class="pm-price-row"><span class="pm-price">${formatIDR(p.price)}</span>${p.originalPrice ? `<span class="pm-price-original">${formatIDR(p.originalPrice)}</span>` : ""}</div>

      <p class="pm-label">Warna: ${color.name}</p>
      <div class="color-dots">
        ${p.colors.map((c) => `<button class="color-dot ${c.name === color.name ? "active" : ""}" style="background:${c.hex}" data-action="select-color" data-name="${c.name}"></button>`).join("")}
      </div>

      <p class="pm-label">Ukuran</p>
      <div class="size-options">
        ${p.sizes.map((s) => `<button class="size-btn ${s === state.selectedSize ? "active" : ""}" data-action="select-size" data-size="${s}">${s}</button>`).join("")}
      </div>

      <p class="pm-label">Jumlah</p>
      <div class="qty-stepper pm-qty">
        <button data-action="modal-qty" data-delta="-1"><span class="icon" style="width:13px;height:13px">${SVG.minus}</span></button>
        <span>${state.modalQty}</span>
        <button data-action="modal-qty" data-delta="1"><span class="icon" style="width:13px;height:13px">${SVG.plus}</span></button>
      </div>

      <button class="btn btn-primary btn-block" style="margin-bottom:24px" data-action="confirm-add-cart">
        <span class="icon" style="width:16px;height:16px">${SVG.bag}</span> Tambah ke Tas
      </button>

      <div class="pm-tabs">
        <button class="pm-tab ${state.modalTab === "deskripsi" ? "active" : ""}" data-action="modal-tab" data-tab="deskripsi">Deskripsi</button>
        <button class="pm-tab ${state.modalTab === "ulasan" ? "active" : ""}" data-action="modal-tab" data-tab="ulasan">Ulasan</button>
      </div>
      ${tabContent}

      ${related.length ? `
        <p class="pm-label">Produk Terkait</p>
        <div class="related-grid">
          ${related.map((rp) => `
            <button class="related-item" data-action="open-product" data-id="${rp.id}" style="text-align:left">
              <div class="swatch swatch--${slug(rp.category)}"><span class="swatch-letter" style="font-size:1.6rem">${rp.category[0]}</span></div>
              <p>${rp.name}</p>
              <p class="related-price">${formatIDR(rp.price)}</p>
            </button>`).join("")}
        </div>` : ""}
    </div>
  `;
}

/* ---------------- FAQ ---------------- */
function renderFaq() {
  $("#faqList").innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-index="${i}">
      <button class="faq-question" data-action="toggle-faq" data-index="${i}">
        ${f.q} <span class="icon" style="width:16px;height:16px">${SVG.chevronDown}</span>
      </button>
      <p class="faq-answer">${f.a}</p>
    </div>`).join("");
}
function toggleFaq(index) {
  const item = $(`.faq-item[data-index="${index}"]`);
  const isOpen = item.classList.contains("open");
  $$(".faq-item").forEach((el) => el.classList.remove("open"));
  if (!isOpen) item.classList.add("open");
}

/* ---------------- CHECKOUT ---------------- */
function openCheckout() {
  $("#cartOverlay").hidden = true;
  $("#cartDrawer").classList.remove("open");
  $("#checkoutOverlay").hidden = false;
  $("#checkoutModal").hidden = false;
  $("#checkoutForm").hidden = false;
  $("#checkoutSuccess").hidden = true;
  renderCheckoutOptions();
}
function closeCheckout() {
  $("#checkoutOverlay").hidden = true;
  $("#checkoutModal").hidden = true;
}
function renderCheckoutOptions() {
  const sub = cartSubtotal();
  const shippingChoices = [
    { id: "reguler", label: "Reguler (2–4 hari)", price: sub >= 1000000 ? 0 : 15000 },
    { id: "express", label: "Express (1 hari)", price: 35000 },
  ];
  $("#shippingOptions").innerHTML = shippingChoices.map((m) => `
    <label class="radio-option ${state.shippingMethod === m.id ? "active" : ""}" data-action="set-shipping" data-id="${m.id}">
      <span class="opt-label"><input type="radio" name="shipping" ${state.shippingMethod === m.id ? "checked" : ""} /> ${m.label}</span>
      <span>${m.price === 0 ? "Gratis" : formatIDR(m.price)}</span>
    </label>`).join("");

  const payments = ["Transfer Bank", "E-Wallet", "Bayar di Tempat (COD)"];
  $("#paymentOptions").innerHTML = payments.map((m) => `
    <label class="radio-option ${state.paymentMethod === m ? "active" : ""}" data-action="set-payment" data-id="${m}">
      <span class="opt-label"><input type="radio" name="payment" ${state.paymentMethod === m ? "checked" : ""} /> ${m}</span>
    </label>`).join("");

  $("#checkoutTotal").textContent = formatIDR(cartTotal());
}
function placeOrder(e) {
  e.preventDefault();
  const orderNumber = "WST-" + Math.floor(100000 + Math.random() * 900000);
  $("#orderNumber").textContent = orderNumber;
  $("#checkoutForm").hidden = true;
  $("#checkoutSuccess").hidden = false;
  state.cart = [];
  state.promo = null;
  state.promoError = "";
  updateCounts();
  renderCartDrawer();
}

/* ---------------- EVENT WIRING ---------------- */
function init() {
  // isi ikon statis
  $$("[data-icon]").forEach((el) => {
    const map = { menu: SVG.menu, heart: heartSVG(false), bag: SVG.bag, "arrow-right": SVG.arrowRight, truck: SVG.truck, "badge-check": SVG.badgeCheck, refresh: SVG.refresh, shield: SVG.shield, search: SVG.search, x: SVG.x, check: SVG.check, pin: SVG.pin, phone: SVG.phone, mail: SVG.mail, instagram: SVG.instagram, clock: SVG.clock, whatsapp: SVG.chat };
    el.innerHTML = map[el.dataset.icon] || "";
  });

  // isi price select
  $("#priceSelect").innerHTML = PRICE_RANGES.map((r) => `<option value="${r.key}">${r.label}</option>`).join("");

  renderCategoryFilters();
  renderCarousel("#bestSellerList", PRODUCTS.filter((p) => p.isBestSeller));
  renderCarousel("#newArrivalsList", PRODUCTS.filter((p) => p.isNew));
  renderGrid();
  renderFaq();
  updateCounts();

  // search & filter controls
  $("#searchInput").addEventListener("input", (e) => { state.search = e.target.value; state.visibleCount = 8; renderGrid(); });
  $("#priceSelect").addEventListener("change", (e) => { state.priceRange = e.target.value; state.visibleCount = 8; renderGrid(); });
  $("#sortSelect").addEventListener("change", (e) => { state.sortBy = e.target.value; renderGrid(); });
  $("#loadMoreBtn").addEventListener("click", () => { state.visibleCount += 8; renderGrid(); });

  // mobile nav
  $("#mobileNavToggle").addEventListener("click", () => { $("#mobileNav").hidden = !$("#mobileNav").hidden; });

  // drawers open/close
  $("#openWishlistBtn").addEventListener("click", () => { renderWishlistDrawer(); $("#wishlistOverlay").hidden = false; $("#wishlistDrawer").classList.add("open"); });
  $("#closeWishlistBtn").addEventListener("click", () => { $("#wishlistOverlay").hidden = true; $("#wishlistDrawer").classList.remove("open"); });
  $("#wishlistOverlay").addEventListener("click", () => { $("#wishlistOverlay").hidden = true; $("#wishlistDrawer").classList.remove("open"); });

  $("#openCartBtn").addEventListener("click", () => { renderCartDrawer(); $("#cartOverlay").hidden = false; $("#cartDrawer").classList.add("open"); });
  $("#closeCartBtn").addEventListener("click", () => { $("#cartOverlay").hidden = true; $("#cartDrawer").classList.remove("open"); });
  $("#cartOverlay").addEventListener("click", () => { $("#cartOverlay").hidden = true; $("#cartDrawer").classList.remove("open"); });

  $("#productOverlay").addEventListener("click", closeProduct);
  $("#closeCheckoutBtn").addEventListener("click", closeCheckout);
  $("#checkoutOverlay").addEventListener("click", closeCheckout);
  $("#finishOrderBtn").addEventListener("click", closeCheckout);

  $("#whatsappBtn").addEventListener("click", () => showToast("Membuka WhatsApp..."));

  $("#orderForm").addEventListener("submit", placeOrder);

  $("#newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    $("#newsletterForm").hidden = true;
    $("#newsletterSuccess").hidden = false;
    showToast("Terima kasih sudah berlangganan");
  });

  // event delegation untuk seluruh tombol dinamis
  document.body.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]");
    if (!el) return;
    const action = el.dataset.action;

    if (action === "toggle-wishlist") toggleWishlist(Number(el.dataset.id));
    if (action === "open-product") openProduct(Number(el.dataset.id));
    if (action === "close-product") closeProduct();
    if (action === "set-category") { state.category = el.dataset.cat; state.visibleCount = 8; renderCategoryFilters(); renderGrid(); }
    if (action === "select-color") { state.selectedColorName = el.dataset.name; renderProductModal(); }
    if (action === "select-size") { state.selectedSize = el.dataset.size; renderProductModal(); }
    if (action === "modal-qty") {
      const delta = Number(el.dataset.delta);
      state.modalQty = Math.max(1, Math.min(state.selectedProduct.stock, state.modalQty + delta));
      renderProductModal();
    }
    if (action === "modal-tab") { state.modalTab = el.dataset.tab; renderProductModal(); }
    if (action === "confirm-add-cart") {
      const p = state.selectedProduct;
      const color = COLOR_POOL.find((c) => c.name === state.selectedColorName);
      addToCart(p, state.selectedSize, color, state.modalQty);
      closeProduct();
    }
    if (action === "wishlist-add-cart") {
      const p = byId(Number(el.dataset.id));
      addToCart(p, p.sizes[0], p.colors[0], 1);
    }
    if (action === "cart-qty") updateCartQty(Number(el.dataset.id), el.dataset.size, el.dataset.color, Number(el.dataset.delta));
    if (action === "cart-remove") removeFromCart(Number(el.dataset.id), el.dataset.size, el.dataset.color);
    if (action === "apply-promo") applyPromo();
    if (action === "go-checkout") openCheckout();
    if (action === "toggle-faq") toggleFaq(Number(el.dataset.index));
    if (action === "set-shipping") { state.shippingMethod = el.dataset.id; renderCheckoutOptions(); }
    if (action === "set-payment") { state.paymentMethod = el.dataset.id; renderCheckoutOptions(); }
  });
}

document.addEventListener("DOMContentLoaded", init);