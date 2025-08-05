document.addEventListener('DOMContentLoaded', () => {
  fetchProducts();
});

function fetchProducts() {
  fetch('/api/products')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderProducts(data);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
}

function renderProducts(products) {
  const productsContainer = document.getElementById('products-container');
  productsContainer.innerHTML = ''; // Clear any existing content

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
    `;
    productsContainer.appendChild(productElement);
  });
}
<div id="products-container">
  <!-- Products will be rendered here by the JavaScript function -->
</div>
{
  "checklist": [
    {
      "task": "Add event listener for DOMContentLoaded",
      "completed": true
    },
    {
      "task": "Define fetchProducts function",
      "completed": true
    },
    {
      "task": "Make GET request to /api/products",
      "completed": true
    },
    {
      "task": "Check response status",
      "completed": true
    },
    {
      "task": "Parse response as JSON",
      "completed": true
    },
    {
      "task": "Define renderProducts function",
      "completed": true
    },
    {
      "task": "Clear products-container",
      "completed": true
    },
    {
      "task": "Append product elements to container",
      "completed": true
    }
  ]
}