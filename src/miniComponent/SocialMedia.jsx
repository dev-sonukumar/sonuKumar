import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className=" flex gap-3 text-[30px] ">
      {/* ---- GitHub ---- */}
      <div className=" flex gap-3 text-[30px] ">
        <Link to={"https://github.com/dev-sonukumar"} target="_blank">
          <FaGithub />
        </Link>

        {/* ---- LinkedIn---- */}
        <Link
          to={"https://www.linkedin.com/in/sonukumar-singh/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>

        {/* ---- Instagram---- */}
        <Link
          to={"https://www.instagram.com/sonukumarsingh.dev"}
          target="_blank"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
