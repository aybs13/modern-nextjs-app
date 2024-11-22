import React, { useState } from 'react';
import styles from '../styles/Newsletter.module.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className={styles.newsletter}>
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Newsletter;
