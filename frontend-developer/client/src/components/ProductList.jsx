import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-item {
  border: 1px solid #ddd;
  padding: 16px;
  width: 200px;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
}

.product-title {
  font-size: 1.2em;
  margin: 10px 0;
}

.product-description {
  font-size: 0.9em;
  color: #666;
}

.product-price {
  font-size: 1.1em;
  color: #333;
  margin-top: 10px;
}
import './ProductList.css';
{
  "checklist": [
    {
      "task": "Create the ProductList component",
      "done": true
    },
    {
      "task": "Map over the products array to render each product",
      "done": true
    },
    {
      "task": "Display the product's image, title, description, and price",
      "done": true
    },
    {
      "task": "Style the ProductList component",
      "done": true
    },
    {
      "task": "Import the CSS file in the ProductList component",
      "done": true
    }
  ]
}