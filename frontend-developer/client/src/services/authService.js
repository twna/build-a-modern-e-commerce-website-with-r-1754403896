// Function to handle form submission
async function handleLogin(event) {
  event.preventDefault();

  // Get the data from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // Send a POST request to the backend API
    const response = await fetch('https://your-backend-api.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    // Parse the JSON response
    const data = await response.json();

    if (response.ok) {
      // If authentication is successful, store the token
      localStorage.setItem('authToken', data.token);

      // Redirect to a protected page or update the UI accordingly
      window.location.href = '/dashboard';
    } else {
      // Handle errors, such as displaying a message to the user
      alert(data.message || 'Authentication failed');
    }
  } catch (error) {
    // Handle network errors
    alert('Network error: ' + error.message);
  }
}

// Add event listener to the login form
document.getElementById('login-form').addEventListener('submit', handleLogin);
<form id="login-form">
  <input type="text" id="username" placeholder="Username or Email" required />
  <input type="password" id="password" placeholder="Password" required />
  <button type="submit">Login</button>
</form>
{
  "checklist": [
    {"task": "Create a login form in HTML", "done": true},
    {"task": "Capture form data in JavaScript", "done": true},
    {"task": "Send authentication request to backend API", "done": true},
    {"task": "Handle backend API response", "done": true},
    {"task": "Store authentication token securely", "done": true},
    {"task": "Redirect user to a protected page or update UI", "done": true},
    {"task": "Handle and display authentication errors", "done": true}
  ]
}