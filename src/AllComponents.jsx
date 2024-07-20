import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Hero from "./Components/hero/Hero";
import MajorProjects from "./Components/projects/MajorProjects";
import MiniProjects from "./Components/projects/MiniProjects";
import TechStack from "./Components/techStack/TechStack";

const AllComponents = () => {
  return (
    <div>
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

export default AllComponents;
