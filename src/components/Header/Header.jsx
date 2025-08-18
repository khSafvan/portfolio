import React from "react";
import { Button } from "../ui";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brandAndNav}>
        <a href="#home" className={styles.logo}>
          <span className={styles.brand}>Binjan</span>
        </a>
        <nav className={styles.nav}>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#works" className={styles.navLink}>Works</a>
          <a href="#notes" className={styles.navLink}>Notes</a>
          <a href="#experience" className={styles.navLink}>Experience</a>
        </nav>
      </div>

      <div className={styles.contactArea}>
        <a href="tel:+1313345678" className={styles.phone}>+001 (313) 345 678</a>
        <Button variant="outline" size="small" className={styles.cta}>
          Call
        </Button>
      </div>
    </header>
  );
};

export default Header;
