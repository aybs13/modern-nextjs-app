import 'aos/dist/aos.css'; // Import CSS AOS
import AOS from 'aos'; // Import library AOS
import { useEffect } from 'react'; // Untuk efek awal
import Head from 'next/head'; // Mengatur metadata
import Navbar from '../components/Navbar'; // Komponen Navbar
import Sidebar from '../components/Sidebar'; // Komponen Sidebar
import Hero from '../components/Hero'; // Komponen Hero
import Card from '../components/Card'; // Komponen Card
import Footer from '../components/Footer'; // Komponen Footer
import ContactForm from '../components/ContactForm'; // Komponen Formulir Kontak
import Newsletter from '../components/Newsletter'; // Komponen Newsletter
import styles from '../styles/Home.module.css'; // Styling untuk halaman Home

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durasi animasi dalam milidetik
      easing: 'ease-in-out', // Efek easing
      once: true, // Animasi hanya diputar sekali
    });
  }, []);

  return (
    <>
      <Head>
        <title>Modern Website</title>
        <meta name="description" content="Sebuah website modern yang dibangun dengan Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Sidebar />
      <div className={styles.mainContent}>
        <Hero />
        <section id="features" className={styles.features}>
          <h2 data-aos="fade-down">Fitur Unggulan</h2>
          <Card
            title="Fitur Satu"
            description="Deskripsi fitur satu yang menarik dan memberikan solusi modern."
            image="/images/image1.jpg"
            data-aos="fade-up"
          />
          <Card
            title="Fitur Dua"
            description="Deskripsi fitur dua yang membantu meningkatkan produktivitas."
            image="/images/image2.jpg"
            data-aos="fade-up"
          />
          <Card
            title="Fitur Tiga"
            description="Deskripsi fitur tiga yang menggunakan teknologi canggih."
            image="/images/image3.jpg"
            data-aos="fade-up"
          />
        </section>
        <section id="contact" className={styles.contact}>
          <h2 data-aos="fade-right">Kontak Kami</h2>
          <ContactForm />
        </section>
        <section id="newsletter" className={styles.newsletterSection}>
          <h2 data-aos="fade-left">Berlangganan Newsletter</h2>
          <Newsletter />
        </section>
        <Footer />
      </div>
    </>
  );
}
