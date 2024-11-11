import { AiOutlineHtml5 } from "react-icons/ai";
import { RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript } from "react-icons/tb";

const Tech = () => {
  return (
    <div className="text-xl flex justify-center md:justify-start gap-2 mt-5">
      <div>
        <h2 className="text-[14px]">Tech Stack - </h2>
      </div>
      <div className="flex gap-2 text-2xl">
        <AiOutlineHtml5 className=" text-[#FF5733] " />
        <TbBrandCss3 className="text-[#264de4] " />
        <TbBrandJavascript className="text-[#f0db4f] " />
        <RiReactjsLine className="text-[#61DBFB] " />
        <RiNodejsLine className="text-[#88bb3b]" />
        <SiMongodb className="text-[#2ed880] " />
      </div>
    </div>
  );
};

export default Tech;
