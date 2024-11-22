import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern Website</title>
        <meta name="description" content="A modern website built with Next.js" />
      </Head>
      <Navbar />
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <Hero />
        <section id="features" className={styles.features}>
          <Card
            title="Feature One"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="/images/image1.jpg"
          />
          <Card
            title="Feature Two"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image="/images/image2.jpg"
          />
          <Card
            title="Feature Three"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            image="/images/image3.jpg"
          />
        </section>
        <section id="contact" className={styles.contact}>
          <ContactForm />
        </section>
        <Footer />
      </div>
    </>
  );
}
