import Social from "../miniComponent/Social";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#2D2E32]  text-white h-[7rem] flex justify-center items-center ">
        <div className="container mx-auto xs:px-5 lg:px-0 px-5 md:flex justify-between items-center">
          <div className="left-part font-bold text-center text-[0.9rem] mb-4">
            Copyright © 2024. All rights are reserved
          </div>
          <div>
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
