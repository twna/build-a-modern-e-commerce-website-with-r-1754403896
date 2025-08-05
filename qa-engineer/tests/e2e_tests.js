# End-to-End Tests for E-commerce Website

## Test: Home Page Load
- Navigate to the home page URL.
- Check if the home page is loaded by verifying the presence of the main elements (e.g., logo, search bar, navigation menu).

## Test: Search for a Product
- Navigate to the home page.
- Locate the search bar and enter the name of a product.
- Submit the search query.
- Verify that the search results page is displayed with relevant products.

## Test: Add a Product to the Cart
- Perform a search for a specific product.
- Select a product from the search results.
- Verify that the product details page is displayed.
- Locate and click the 'Add to Cart' button.
- Verify that the product is added to the cart by checking the cart count or contents.

## Test: Checkout Process
- Add a product to the cart as described above.
- Navigate to the cart page.
- Verify that the correct product is listed in the cart.
- Click the 'Proceed to Checkout' button.
- Fill in the required shipping and payment information.
- Submit the order.
- Verify that an order confirmation page is displayed with an order number.
{
  "checklist": [
    {
      "test": "Home Page Load",
      "description": "Verify that the home page loads correctly with all main elements present."
    },
    {
      "test": "Search for a Product",
      "description": "Ensure the search functionality returns relevant products."
    },
    {
      "test": "Add a Product to the Cart",
      "description": "Confirm that a product can be added to the shopping cart."
    },
    {
      "test": "Checkout Process",
      "description": "Check that the checkout process can be completed with an order confirmation."
    }
  ]
}