
import React from 'react'
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useState } from 'react';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  
    return (
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <ul className={`${styles.navLinks}`}>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;
