import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        // Example items (you would normally fetch this data from a backend or context/store)
        { id: 1, name: 'Product 1', price: 9.99, quantity: 1 },
        { id: 2, name: 'Product 2', price: 19.99, quantity: 2 },
        // Add more items as needed
      ],
    };
  }

  removeItemFromCart = (itemId) => {
    this.setState({
      cartItems: this.state.cartItems.filter(item => item.id !== itemId)
    });
  }

  calculateTotal = () => {
    return this.state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }

  render() {
    return (
      <div className="shopping-cart">
        <h2>Your Shopping Cart</h2>
        <ul>
          {this.state.cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => this.removeItemFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <div className="total">
          Total: ${this.calculateTotal()}
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
{
  "checklist": [
    {
      "item": "Create ShoppingCart component",
      "completed": true
    },
    {
      "item": "Display list of cart items",
      "completed": true
    },
    {
      "item": "Implement remove item functionality",
      "completed": true
    },
    {
      "item": "Calculate and display total cost",
      "completed": true
    }
  ]
}