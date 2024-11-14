import { Link } from "react-router-dom";
import projects from "./ProjectsData.json";

const Projects = () => {
  return (
    <div className="py-10 md:py-20 bg-gray-100 ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="  bg-white overflow-hidden p-2 rounded-2xl w-[95%] md:w-[24rem] mx-auto hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full rounded-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>

                <div className="mt-4 flex justify-between">
                  {/* -- Live link Button--  */}

                  <button className=" px-5 py-2 bg-green-400  rounded-lg hover:bg-green-300 text-xs ">
                    <Link target="_blank" to={project.liveLink}>
                      Live Link
                    </Link>
                  </button>

                  {/* -- GitHub link Button--  */}
                  <button className="px-5 py-2 bg-blue-400 rounded-lg  hover:bg-blue-300 text-xs ">
                    <Link target="_blank" to={project.githubLink}>
                      Source Code
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
