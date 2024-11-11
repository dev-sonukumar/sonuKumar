import Contact from "../contact/Contact";
import About from "../pages/About";
import Hero from "../pages/Home/Hero";
import Projects from "../projects/Projects";
import TechStack from "../techStack/TechStack";

const AllComponents = () => {
  return (
    <div>
      <Hero />

      <TechStack />
      <About />
      <Projects />
      {/* <MajorProjects /> */}
      {/* <MiniProjects /> */}
      <Contact />
    </div>
  );
};

export default AllComponents;
