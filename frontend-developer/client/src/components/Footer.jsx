import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling your footer

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p>Follow us on social media</p>
        <ul className="social-links">
          <li><a href="https://twitter.com/yourcompany">Twitter</a></li>
          <li><a href="https://facebook.com/yourcompany">Facebook</a></li>
          <li><a href="https://instagram.com/yourcompany">Instagram</a></li>
          <li><a href="https://linkedin.com/company/yourcompany">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
.site-footer {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e7e7e7;
}

.footer-content p {
  margin: 0;
  padding: 5px;
  font-size: 0.9em;
}

.social-links {
  list-style: none;
  padding: 0;
}

.social-links li {
  display: inline;
  margin-right: 10px;
}

.social-links a {
  text-decoration: none;
  color: #333;
}
{
  "checklist": [
    {
      "task": "Create the Footer component",
      "completed": true
    },
    {
      "task": "Add dynamic year in the copyright",
      "completed": true
    },
    {
      "task": "Include social media links",
      "completed": true
    },
    {
      "task": "Style the Footer component",
      "completed": true
    }
  ]
}