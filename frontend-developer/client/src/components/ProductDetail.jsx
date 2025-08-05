import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image" />
      <h1 className="product-name">{product.name}</h1>
      <p className="product-description">{product.description}</p>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
{
  "checklist": [
    {
      "item": "Product image display",
      "completed": true
    },
    {
      "item": "Product name display",
      "completed": true
    },
    {
      "item": "Product description display",
      "completed": true
    },
    {
      "item": "Product price display",
      "completed": true
    },
    {
      "item": "Add to cart button",
      "completed": true
    },
    {
      "item": "Loading state handling",
      "completed": true
    }
  ]
}