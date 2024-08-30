import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import styles from '../../styles/NavBar.module.css';


const NavBar = () => {
  return (
    <nav>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/category/electronics" className={styles.link}>Electronics</Link>
      <Link to="/cart" className={styles.link}><CartWidget /></Link>
    </nav>
  );
};

export default NavBar;