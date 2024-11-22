import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Contact Us</h2>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </label>
      <label className={styles.label}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </label>
      <label className={styles.label}>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
          required
        />
      </label>
      <button type="submit" className={styles.button}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
