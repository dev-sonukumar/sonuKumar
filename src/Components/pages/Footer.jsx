import SocialMedia from "../miniComponent/SocialMedia";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#2D2E32]  text-white h-[7rem] flex justify-center items-center ">
        <div className="container xs:px-5 lg:px-0 px-5 flex gap-3 flex-col md:flex-row md:justify-between">
          <div className="text-md">
            Copyright © 2024. All rights are reserved
          </div>
          <div className="text-white">
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
