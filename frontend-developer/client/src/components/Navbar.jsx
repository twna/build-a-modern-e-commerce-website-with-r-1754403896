// Navbar.js
import React from 'react';
import styles from './Navbar.module.css'; // Assuming CSS modules are being used

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyWebsite</div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="/about" className={styles.navLink}>About</a>
        </li>
        <li className={styles.navItem}>
          <a href="/services" className={styles.navLink}>Services</a>
        </li>
        <li className={styles.navItem}>
          <a href="/contact" className={styles.navLink}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
/* Navbar.module.css */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 0.5rem 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.navList {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navItem {
  margin-left: 1rem;
}

.navLink {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
}

.navLink:hover {
  background-color: #555;
}
{
  "checklist": [
    {"item": "Create Navbar component", "completed": true},
    {"item": "Import CSS module for styling", "completed": true},
    {"item": "Add logo to Navbar", "completed": true},
    {"item": "Add navigation links to Navbar", "completed": true},
    {"item": "Ensure Navbar is responsive", "completed": false},
    {"item": "Implement routing for navigation links", "completed": false}
  ]
}