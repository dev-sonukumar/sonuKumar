import Tech from "../miniComponent/Tech";
import Resume from "./Resume";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[80%] md:h-screen flex justify-center items-center flex-wrap bg-[#F9F9F9] ">
        <div className="container flex justify-center items-center flex-col-reverse sm:flex-row gap-3 md:gap-10 text-center md:text-start">
          <div className="w-full md:w-[60%] mb-10">
            <h1 className="font-bold text-[40px] md:text-[60px] inline">
              Web Developer
            </h1>
            <img
              src="/public/images/hand.png"
              className="h-[70px] w-[70px] p-2 mx-2 mb-8 hidden md:inline "
              alt="Hand image"
            />
            <p className="text-[16px] md:text-[21px] ">
              Hi, I am{" "}
              <span className="text-[#fc6b60] font-bold}">Sonu Kumar</span> A
              passionate Web Developer.
            </p>
            <Tech />
            <Resume />
          </div>

          <div className="box-container h-[320px] w-[320px] md:h-[420px] md:w-[420px] flex justify-center items-center mt-10 md:mt-0">
            <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] ">
              <img
                src="./images/profile.png"
                alt="Profile-image"
                className="profile-img lg:ml-auto mx-auto box"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
