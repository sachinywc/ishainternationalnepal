// ✅ Inject styles dynamically for grid layout
const style = document.createElement('style');
style.textContent = `
  .related-section {
    margin: 1rem;
    padding: 1rem;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .related-section h2 {
    font-size: 24px;
    margin-bottom: 1rem;
  }

  .related-grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }

  .related-item {
    background: #fafafa;
    border: 1px solid #ddd;
    border-radius: 6px;
    text-align: center;
    padding: 1rem;
    transition: background-color 0.3s ease;
  }

  .related-item:hover {
    background-color: #f0f0f0;
  }

  .related-item a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }

  .related-item img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    margin-bottom: 0.5rem;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    .related-grid-container {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }
  }
`;
document.head.appendChild(style);

// ✅ Fetch categories from JSON file and render 20 products in grid
fetch('/frontend/data/related-categories.json')
  .then(res => {
    if (!res.ok) throw new Error('Failed to load related categories');
    return res.json();
  })
  .then(data => {
    const container = document.getElementById('related-grid');
    const itemsToShow = data.slice(0, 20); // Get first 20 items only

    itemsToShow.forEach(cat => {
      const div = document.createElement('div');
      div.className = 'related-item';
      div.innerHTML = `
        <a href="${cat.link}">
          <img src="${cat.image}" alt="${cat.name}" />
          ${cat.name}
        </a>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error('Error loading related categories:', err);
  });
