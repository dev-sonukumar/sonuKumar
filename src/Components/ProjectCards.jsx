/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProjectCards = ({ img, live, source }) => {
  return (
    <div className="bg-white overflow-hidden p-2 rounded-lg w-[90%] md:w-[17rem] mx-auto ">
      <img src={img} className="object-cover w-full rounded-lg" />
      <div className="flex justify-between pt-2 ">
        <button className=" px-5 py-md-2 bg-green-400  rounded-lg hover:bg-green-300 text-xs ">
          <Link target="_blank" to={live}>
            Live Link
          </Link>
        </button>

        <button className="px-5 py-2 bg-blue-400 rounded-lg  hover:bg-blue-300 text-xs ">
          <Link target="_blank" to={source}>
            Source Code
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProjectCards;
