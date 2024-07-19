import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import MiniProjects from "./Components/MiniProjects";
import Navbar from "./Components/Navbar";
import TechStack from "./Components/TechStack";
import MajorProjects from "./Components/MajorProjects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <MajorProjects />
      <MiniProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
