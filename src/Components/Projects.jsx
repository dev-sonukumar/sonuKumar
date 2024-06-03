import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectCards from "./ProjectCards";

const Projects = () => {
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
  const projectData = [
    { imageSrc: "./images/projects.png" },
    { imageSrc: "./images/profile.png" },
    { imageSrc: "./images/projects.png" },
    { imageSrc: "./images/profile.png" },
    { imageSrc: "./images/projects.png" },
    { imageSrc: "./images/profile.png" },
  ];

  return (
    <div className=" bg-[#2D2E32] ">
      <div className="container mx-auto  ">
        <h1 className="text-center font-bold text-[1.1rem] md:text-[1.5rem] pb-3 text-white">
          Major Projects - coming soon -
        </h1>
        <div className="px-4 pb-10">
          <Slider {...settings}>
            {projectData.map((data, index) => (
              <ProjectCards img={data.imageSrc} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
