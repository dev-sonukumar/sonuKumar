import resume from "../../public/documents/Resume_FrontendDev.pdf";

const Resume = () => {
  return (
    <div>
      <button className="my-6 md:font-bold rounded-[14px] p-3  bg-[#fc6b60] text-white hover:bg-[#f44236] ease-linear duration-300">
        <a href={resume} download="resume" className="text-white">
          Download Resume
        </a>
      </button>
    </div>
  );
};

export default Resume;
