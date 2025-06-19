document.addEventListener('DOMContentLoaded', () => {
  const product = JSON.parse(localStorage.getItem('selectedProduct'));
  if (product) {
    document.getElementById('productId').value = product.productId;
    document.getElementById('price').value = product.price;
    document.getElementById('productName').textContent = product.productName;
  } else {
    alert("No product selected. Please go back and choose a product.");
  }
});

  document.getElementById('orderForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const productId = document.getElementById('productId').value;
    const productName = document.getElementById('productName').textContent;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Prepare products array and total price
    const products = [
      {
        id: productId,
        name: productName,
        qty: quantity,
        price: price,
      },
    ];
    const totalPrice = price * quantity;

    // Create payload matching backend schema
    const payload = {
      name,
      email,
      products,
      totalPrice,
      phone,
      address,
      paymentMethod,
    };

    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        alert('✅ Order placed! Thank you for your purchase.');
        window.location.href = '/frontend/pages/connect/thankyou.html'; // redirect after success
      } else {
        alert('❌ Error: ' + data.message);
      }
    } catch (err) {
      alert('❌ Network Error: ' + err.message);
    }
});
