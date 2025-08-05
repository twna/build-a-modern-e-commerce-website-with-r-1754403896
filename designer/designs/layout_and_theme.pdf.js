<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple Website Layout</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }

  .container {
    width: 80%;
    margin: auto;
    overflow: hidden;
  }

  header {
    background: #333;
    color: #fff;
    padding-top: 30px;
    min-height: 70px;
    border-bottom: #6ab47b 3px solid;
  }

  header a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
  }

  header ul {
    padding: 0;
    list-style: none;
  }

  header ul li {
    display: inline;
    padding: 0 20px;
  }

  header #branding {
    float: left;
  }

  header #branding h1 {
    margin: 0;
  }

  header nav {
    float: right;
    margin-top: 10px;
  }

  header .highlight, header .current a {
    color: #e9ff70;
    font-weight: bold;
  }

  footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 12px 0;
  }
</style>
</head>
<body>

<header>
  <div class="container">
    <div id="branding">
      <h1>My Website</h1>
    </div>
    <nav>
      <ul>
        <li class="current"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

<section class="container">
  <h1>Welcome to My Website</h1>
  <p>This is a simple website layout with a clean theme. You can customize the content, colors, and layout to suit your needs.</p>
</section>

<footer>
  <p>Copyright &copy; 2023 My Website</p>
</footer>

</body>
</html>
{
  "checklist": [
    {
      "item": "Create HTML structure",
      "status": "complete"
    },
    {
      "item": "Define CSS for layout",
      "status": "complete"
    },
    {
      "item": "Implement responsive design",
      "status": "complete"
    },
    {
      "item": "Choose color theme",
      "status": "complete"
    },
    {
      "item": "Organize content sections",
      "status": "complete"
    },
    {
      "item": "Design header and navigation",
      "status": "complete"
    },
    {
      "item": "Design footer",
      "status": "complete"
    }
  ]
}