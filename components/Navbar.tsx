import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Modern Website</Link>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!isMenuOpen)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
