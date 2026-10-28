import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Partners from "../components/Partners";
import Security from "../components/Security";
import ContactCTA from "../components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Partners />
      <Security />
      <ContactCTA />
    </>
  );
}
