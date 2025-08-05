const express = require('express');
const cors = require('cors');

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Middleware for handling CORS
app.use(cors());

// ... rest of your route handlers ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
{
  "checklist": [
    {
      "task": "Import Express module",
      "completed": true
    },
    {
      "task": "Import CORS module",
      "completed": true
    },
    {
      "task": "Create Express application instance",
      "completed": true
    },
    {
      "task": "Set up JSON parsing middleware",
      "completed": true
    },
    {
      "task": "Set up CORS middleware",
      "completed": true
    },
    {
      "task": "Start server and listen on a port",
      "completed": true
    }
  ]
}