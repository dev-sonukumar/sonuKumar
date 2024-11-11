import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className=" flex gap-3 text-[30px] ">
      {/* ---- GitHub ---- */}
      <div className=" flex gap-3 text-[25px] ">
        <Link
          to={"https://github.com/dev-sonukumar"}
          target="_blank"
          className=" bg-[#1e1e1d] p-1 inline-block rounded-md text-white"
        >
          <FaGithub />
        </Link>

        {/* ---- LinkedIn---- */}
        <Link
          to={"https://www.linkedin.com/in/dev-sonukumar/"}
          target="_blank"
          className="bg-[#1e1e1d] p-1 inline-block rounded-md text-white"
        >
          <FaLinkedin />
        </Link>

        {/* ---- Instagram---- */}
        <Link
          to={"https://www.instagram.com/sonu_singh.dev"}
          target="_blank"
          className="bg-[#1e1e1d] p-1 inline-block rounded-md text-white"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
