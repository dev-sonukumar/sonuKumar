import { GoLocation } from "react-icons/go";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="container w-full mx-auto my-[6rem]">
      <div className=" flex justify-center md:flex md:justify-between items-end ">
        <div className="">
          <div className="xs:text-center lg:text-start xs:mb-10 lg:mb-0">
            <h3 className="font-bold text-xl mb-2">CONTACT</h3>
            <h2 className="font-bold text-2xl mb-3 text-[#f44236]">
              Don&#39;t be shy! Hit me up! 👇
            </h2>
          </div>

          <div className="lg:flex lg:items-center items-center gap-10 mt-8 inline ">
            <div className="flex items-center gap-3 xs:mb-5 lg:mb-0">
              <div className="email text-3xl">
                <GoLocation />
              </div>
              <div>
                <h4 className="font-bold">Location</h4>
                <p>Delhi , India</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="email text-3xl">
                <MdOutlineAlternateEmail />
              </div>
              <div>
                <h4 className="font-bold">Email</h4>
                <a href="email">dev.sonukumarsingh@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/public/images/contactimage.png"
          className="hidden md:inline w-[40%]"
        />
      </div>
    </div>
  );
};

export default Contact;
