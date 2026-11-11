import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Partners from "../components/Partners";
import Security from "../components/Security";
import ContactCTA from "../components/ContactCTA";
import ServiceLinks from "../components/ServiceLinks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServiceLinks />
      <Products />
      <Partners />
      <Security />
      <ContactCTA />
    </>
  );
}
