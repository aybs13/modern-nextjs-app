import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.css';

const Hero: React.FC = () => {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.heroContent}>
        <h1>Welcome to Our Modern Website</h1>
        <p>Discover innovative solutions and features that will take your business to the next level.</p>
        <button>Get Started</button>
      </div>
    </motion.section>
  );
};

export default Hero;
