import { loadSectionByHash } from './load.js';

window.addEventListener('DOMContentLoaded', loadSectionByHash);
window.addEventListener('hashchange', loadSectionByHash);

function buyNow(id, name, price) {
  const product = { productId: id, productName: name, price: price };
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "pages/connect/orderform.html"; // adjust as needed
}

// Make it global:
window.buyNow = buyNow;
