import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Tech = () => {
  return (
    <div className="text-xl flex justify-center md:justify-start gap-2 mt-5">
      <div>
        <h2 className="text-[16px]">Tech Stack - </h2>
      </div>
      <div className="flex gap-2">
        <FaHtml5 className=" text-[#FF5733] " />
        <FaCss3Alt className="text-[#264de4] " />
        <SiJavascript className="text-[#f0db4f] bg-black  " />
        <FaReact className="text-[#61DBFB] " />
        <TbBrandNextjs className="text-[#61DBFB] " />
      </div>
    </div>
  );
};

export default Tech;
