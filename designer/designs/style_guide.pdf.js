:root {
  --primary-color: #5b6c5d;
  --secondary-color: #a4b0be;
  --accent-color: #f1c40f;
  --background-color: #ffffff;
  --text-color: #333333;
  --error-color: #e74c3c;
}
body {
  font-family: 'Arial', sans-serif;
  color: var(--text-color);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Helvetica', sans-serif;
  color: var(--primary-color);
}

a {
  color: var(--accent-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
.container {
  padding: 16px;
  margin: 0 auto;
}

.row {
  display: flex;
  gap: 16px;
}

.column {
  flex: 1;
}
.button {
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: var(--background-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: var(--secondary-color);
}

.button:disabled {
  background-color: var(--text-color);
  cursor: not-allowed;
}
.input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.input:focus {
  border-color: var(--accent-color);
}

.label {
  display: block;
  margin-bottom: 5px;
}
<button class="button">Click me</button>
<label for="name" class="label">Name:</label>
<input type="text" id="name" class="input" placeholder="Enter your name">
<div class="card">
  <h3 class="card-title">Card Title</h3>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button class="button">Go somewhere</button>
</div>
.card {
  background-color: var(--background-color);
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
}

.card-title {
  margin-top: 0;
}

.card-text {
  margin-bottom: 16px;
}
{
  "checklist": [
    {
      "item": "Define color scheme",
      "completed": true
    },
    {
      "item": "Set up typography rules",
      "completed": true
    },
    {
      "item": "Establish spacing guidelines",
      "completed": true
    },
    {
      "item": "Design button component",
      "completed": true
    },
    {
      "item": "Create input field component",
      "completed": true
    },
    {
      "item": "Implement card component",
      "completed": true
    }
  ]
}