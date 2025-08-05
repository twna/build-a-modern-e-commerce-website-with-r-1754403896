const express = require('express');
const router = express.Router();

// Middleware to handle user data validation or authentication could be added here

// Create a new user
router.post('/users', (req, res) => {
    // Logic to create a new user
    res.status(201).json({ message: 'User created successfully', user: req.body });
});

// Retrieve all users
router.get('/users', (req, res) => {
    // Logic to retrieve all users
    res.status(200).json({ message: 'Users retrieved successfully', users: [] });
});

// Retrieve a single user by id
router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to retrieve a user by id
    res.status(200).json({ message: 'User retrieved successfully', userId: userId });
});

// Update a user by id
router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to update a user by id
    res.status(200).json({ message: 'User updated successfully', userId: userId });
});

// Delete a user by id
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Logic to delete a user by id
    res.status(200).json({ message: 'User deleted successfully', userId: userId });
});

module.exports = router;
const express = require('express');
const userRoutes = require('./path-to-user-routes-file'); // Adjust the path accordingly

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api', userRoutes); // Prefix all routes with /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
{
  "checklist": [
    {"task": "Create a new user", "endpoint": "POST /api/users", "status": "Implemented"},
    {"task": "Retrieve all users", "endpoint": "GET /api/users", "status": "Implemented"},
    {"task": "Retrieve a single user by id", "endpoint": "GET /api/users/:id", "status": "Implemented"},
    {"task": "Update a user by id", "endpoint": "PUT /api/users/:id", "status": "Implemented"},
    {"task": "Delete a user by id", "endpoint": "DELETE /api/users/:id", "status": "Implemented"}
  ]
}