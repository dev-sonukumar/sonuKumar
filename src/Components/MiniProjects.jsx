import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectData from "./miniProjectData.json";

import ProjectCards from "./ProjectCards";

const MiniProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <div className=" bg-[#2D2E32] ">
      <div className="container mx-auto  ">
        <p className="text-center md:text-left font-semibold text-[1.1rem] md:text-[1.2rem] pb-3 md:pl-6 text-white">
          Mini Projects {"🧑‍💻"}
        </p>
        <div className="px-4 pb-10">
          <Slider {...settings}>
            {projectData.map((data, index) => (
              <ProjectCards
                img={data.img}
                live={data.liveLink}
                source={data.sourceCode}
                key={index}
              />
            ))}
          </Slider>
          <h3 className="text-center font-bold text-[1.1rem] md:text-[1.5rem] pt-10 text-white ">
            <span className="text-white hover:text-yellow-200 cursor-pointer">
              More {"🔻"}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MiniProjects;
