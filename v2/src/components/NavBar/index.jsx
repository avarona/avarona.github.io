import React from "react";
import styles from "./styles.module.scss";
import headshot from "../../images/headshot.png";
import { Icon } from "@avarona/react-components";

const NavBar = () => (
  <nav className={styles.navContainer}>
    <Icon addClass={styles.image} img={headshot} alt='headshot' size={40} />

    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <a href='#portfolio'>Projects</a>
      </li>
      <li className={styles.navItem}>
        <a href='#about'>About</a>
      </li>
      <li className={styles.navItem}>
        <a href='#github'>Github</a>
      </li>
      <li className={styles.navItem}>
        <a href='#linkedin'>LinkedIn</a>
      </li>
      <li className={styles.navItem}>
        <a href='#angel'>Angel.co</a>
      </li>
      <li className={styles.navItem}>
        <a href='#contact'>Contact</a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
