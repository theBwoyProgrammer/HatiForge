// pages/index.js
import React from 'react';
import styles from '../styles/styles.module.css';

const Home = () => {
  return (
    <div className={styles.welcome_container}>
      <nav className='nav-sec'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
      <div className={styles.container}>
        <h1 className='welcome-h1'>We are HatiForge</h1>
        <div className={styles.slogan}>
          <span className={styles.slogan_word}>Tech</span>
          <span className={styles.slogan_word}>Innovate</span>
          <span className={styles.slogan_word}>Forge</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
