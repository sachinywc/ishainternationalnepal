// /frontend/js/main.js

const youMayAlsoLikeProducts = [
  {
    id: 1,
    name: "Hiksemi E100 256 SSD",
    price: "Rs. 2,500",
    image: "/frontend/assets/product/hiksemi.jpg",
    link: "/frontend/product_page/hiksemi-256.html",
  },
  {
    id: 2,
    name: "Asus VivoBook 15X OLED",
    price: "Rs. 89,500",
    image: "/frontend/assets/product/asus_vivobook_x.jpg",
    link: "/frontend/product_page/asus-vivobook-x.html",
  },
  {
    id: 3,
    name: "Lenovo IdeaPad 3",
    price: "Rs. 76,000",
    image: "/frontend/assets/product/lenovo_ideapad_3.jpg",
    link: "/frontend/product_page/lenovo-ideapad-3.html",
  },
  {
    id: 4,
    name: "Dell Inspiron 15",
    price: "Rs. 84,000",
    image: "/frontend/assets/product/dell insprion main.webp",
    link: "/frontend/product_page/dell-inspiron-15.html",
  },
  {
    id: 5,
    name: "Canon Pixma G3010",
    price: "Rs. 25,000",
    image: "/frontend/assets/product/canon_pixma_g3010.jpg",
    link: "/frontend/product_page/canon-pixma-g3010.html",
  },
  {
    id: 6,
    name: "Epson EcoTank L3210",
    price: "Rs. 28,900",
    image: "/frontend/assets/product/epson_ecotank_l3210.png",
    link: "/frontend/product_page/epson-ecotank-l3210.html",
  },
  {
    id: 7,
    name: "Brother DCP-T420W",
    price: "Rs. 27,000",
    image: "/frontend/assets/product/brother_dcp-t420w.png",
    link: "/frontend/product_page/brother-dcp-t420w.html",
  },
  {
    id: 8,
    name: "Hikvision CCTV Kit",
    price: "Rs. 19,500",
    image: "/frontend/assets/product/hikvision_cctv_kit.jpg",
    link: "/frontend/product_page/hikvision-cctv-kit.html",
  },
  {
    id: 9,
    name: "Core i5 12th Gen",
    price: "Rs. 35,000",
    image: "/frontend/assets/product/core_i5_12th_gen.jpg",
    link: "/frontend/product_page/core-i5-12th-gen.html",
  },
  {
    id: 10,
    name: "Gigabyte B660M",
    price: "Rs. 22,000",
    image: "/frontend/assets/product/gigabyte_b660m.jpg",
    link: "/frontend/product_page/gigabyte-b660m.html",
  },
  {
    id: 11,
    name: "ADATA 16GB RAM",
    price: "Rs. 7,200",
    image: "/frontend/assets/product/adata_16gb_ram.jpg",
    link: "/frontend/product_page/adata-16gb-ram.html",
  },
  {
    id: 12,
    name: "Asus RTX 3060",
    price: "Rs. 49,000",
    image: "/frontend/assets/product/asus_rtx_3060.jpg",
    link: "/frontend/product_page/asus-rtx-3060.html",
  },
];

function renderYouMayAlsoLikeSection() {
  const container = document.getElementById("you-may-also-like-section");

  if (!container) return;

  let html = `<h2 class="section-title" style="text-align:center; margin-top: 2rem;">🛍️ You May Also Like</h2>`;
  html += `<div class="product-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; padding:1rem;">`;

  youMayAlsoLikeProducts.forEach((product) => {
    html += `
      <a href="${product.link}" class="product-card" style="border:1px solid #ddd; border-radius:8px; padding:1rem; text-align:center; text-decoration:none; color:inherit; transition:transform 0.2s;">
        <img src="${product.image}" alt="${product.name}" style="width:100%; height:180px; object-fit:contain; margin-bottom:1rem;" loading="lazy" />
        <h3 style="font-size:1.1rem;">${product.name}</h3>
        <p style="color:#ff5722; font-weight:bold;">${product.price}</p>
      </a>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderYouMayAlsoLikeSection);
