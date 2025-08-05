const express = require('express');
const router = express.Router();

// Middleware to handle potential common logic for product routes
router.use((req, res, next) => {
    // Middleware logic here, e.g., authentication, logging, etc.
    next();
});

// GET all products
router.get('/products', (req, res) => {
    // Logic to retrieve all products
    res.json({ message: 'List of all products' });
});

// GET a single product by ID
router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    // Logic to retrieve a single product by ID
    res.json({ message: `Product with ID ${id}` });
});

// POST a new product
router.post('/products', (req, res) => {
    const newProduct = req.body;
    // Logic to create a new product
    res.status(201).json({ message: 'Product created', product: newProduct });
});

// PUT to update a product by ID
router.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    // Logic to update an existing product by ID
    res.json({ message: `Product with ID ${id} updated`, product: updatedProduct });
});

// DELETE a product by ID
router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    // Logic to delete a product by ID
    res.json({ message: `Product with ID ${id} deleted` });
});

module.exports = router;
{
  "checklist": [
    {"task": "Create GET route for all products", "status": "complete"},
    {"task": "Create GET route for a single product by ID", "status": "complete"},
    {"task": "Create POST route for a new product", "status": "complete"},
    {"task": "Create PUT route to update a product by ID", "status": "complete"},
    {"task": "Create DELETE route for a product by ID", "status": "complete"}
  ]
}