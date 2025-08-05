const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
{
  "checklist": [
    {
      "step": "Create a project directory",
      "completed": true
    },
    {
      "step": "Initialize a Node.js project",
      "completed": true
    },
    {
      "step": "Install Express",
      "completed": true
    },
    {
      "step": "Create a server file",
      "completed": true
    },
    {
      "step": "Set up Express server",
      "completed": true
    },
    {
      "step": "Start the server",
      "completed": true
    }
  ]
}