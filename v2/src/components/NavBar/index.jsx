import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { URLS } from "../../constants";
import headshot from "../../images/headshot.png";
import { Icon } from "@avarona/react-components";

const NavBar = ({ children }) => (
  <>
    <nav className={styles.navContainer}>
      <Link className={styles.link} to='/'>
        <Icon addClass={styles.image} img={headshot} alt='headshot' size={40} />
      </Link>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to='/projects'>Projects</Link>
        </li>
        <li className={styles.navItem}>
          <Link to='/about'>About</Link>
        </li>
        <li className={styles.navItem}>
          <a href={URLS.GITHUB} target='_blank' rel='noopener noreferrer'>
            Github
          </a>
        </li>
        <li className={styles.navItem}>
          <a href={URLS.LINKEDIN} target='_blank' rel='noopener noreferrer'>
            LinkedIn
          </a>
        </li>
        <li className={styles.navItem}>
          <a href={URLS.ANGEL} target='_blank' rel='noopener noreferrer'>
            Angel.co
          </a>
        </li>
        <li className={styles.navItem}>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
    {children}
  </>
);

export default NavBar;
