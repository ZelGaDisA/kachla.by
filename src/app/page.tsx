import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Items from "./components/Items";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ContactForm from "../app/components/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        {/* Преимущества */}
        <section id="features">
          <Features />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="objects">
          <Items />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="contacts">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}