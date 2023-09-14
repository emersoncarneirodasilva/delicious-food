import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div id="contact" className="container pt-40">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="leading-[1.8]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            atque repudiandae consectetur quibusdam eius dignissimos recusandae,
            tenetur maiores quos veniam deleniti esse.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">The Restaurant</h2>

          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-accent transition-all duration-300">
              About Us
            </li>
            <li className="cursor-pointer hover:text-accent transition-all duration-300">
              Chefs
            </li>
            <li className="cursor-pointer hover:text-accent transition-all duration-300">
              Events
            </li>
            <li className="cursor-pointer hover:text-accent transition-all duration-300">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex gap-8 text-accent text-2xl pt-16">
          <FaFacebookF className="hover:scale-[1.1] hover:translate-x-[6px] hover:translate-y-[-5px] transition-all duration-300 cursor-pointer" />
          <BsTwitter className="hover:scale-[1.1] hover:translate-x-[6px] hover:translate-y-[-5px] transition-all duration-300 cursor-pointer" />
          <BsPinterest className="hover:scale-[1.1] hover:translate-x-[6px] hover:translate-y-[-5px] transition-all duration-300 cursor-pointer" />
          <FaLinkedinIn className="hover:scale-[1.1] hover:translate-x-[6px] hover:translate-y-[-5px] transition-all duration-300 cursor-pointer" />
        </div>
      </div>

      <div className="w-fit mx-auto pt-16 pb-8 text-[14px] sm:text-[16px]">
        &copy; Copyright 2023 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
