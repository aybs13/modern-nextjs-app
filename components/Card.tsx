import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Card.module.css';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className={styles.cardImage} />
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default Card;
