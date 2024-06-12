import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import TechStack from "./Components/TechStack";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
