import SiteLayout from "./layouts/SiteLayout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <SiteLayout>
      <Navbar />
      <Hero />
     
    </SiteLayout>
  );
}

export default App;
