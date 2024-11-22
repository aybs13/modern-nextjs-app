import React from 'react';
import styles from '../styles/Home.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Welcome to Our Modern Website</h1>
        <p>Discover innovative solutions and features that will take your business to the next level.</p>
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
