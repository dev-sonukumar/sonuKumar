const TechStack = () => {
  const frontendSkills = [
    { name: "HTML 5", level: "Experienced" },
    { name: "CSS 3", level: "Experienced" },
    { name: "JavaScript", level: "Experienced" },
    { name: "React JS", level: "Experienced" },
    { name: "Tailwind CSS", level: "Experienced" },
    { name: "Bootstrap", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "Node JS", level: "Intermediate" },
    { name: "Express JS", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    // { name: "Tailwind CSS", level: "Experienced" },
  ];

  return (
    <section className="w-full py-10 md:py-20 border-dashed">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="font-bold text-2xl">Tech Stack</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Frontend Section */}
          <div className="frontend-section p-10  border-[1px] border-dark border-dashed rounded-xl ">
            <h2 className="font-bold text-xl text-center mb-5">Frontend</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="text-center">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <p>{skill.level}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend Section */}
          <div className="backend-section p-10 border-[1px] border-dark border-dashed rounded-xl">
            <h2 className="font-bold text-xl text-center mb-5">Backend</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {backendSkills.map((skill, index) => (
                <li key={index} className="text-center">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <p>{skill.level}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
