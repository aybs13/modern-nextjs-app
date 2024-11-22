import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Welcome to Our Modern Website</h1>
        <p>Discover the simplicity of a modern design that works for you.</p>
        <a href="#features" className={styles.ctaButton}>Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
