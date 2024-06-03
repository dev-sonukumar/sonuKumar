import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <div className="text-white xs:mt-5 md:mt-0">
      <div className="flex gap-5 text-[25px] justify-center items-center">
        {/*---- LinkedIn Link ----*/}
        <Link
          to={"https://www.linkedin.com/in/sonukumar-singh/"}
          target="_blank"
          className="text-white"
        >
          <FaLinkedin />
        </Link>

        {/*---- gitHub Link ----*/}

        <Link
          to={"https://github.com/dev-sonukumar"}
          target="_blank"
          className="text-white"
        >
          <FaGithub />
        </Link>

        {/* ---- Instagram---- */}
        <Link
          to={"https://www.instagram.com/sonukumarsingh.dev"}
          target="_blank"
          className="text-white"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default Social;
