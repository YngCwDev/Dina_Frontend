import LOGO from "../assets/LOGO-w.svg";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <div className="md:px-[10%]">
      <div className="text-white p-[5%]  flex  justify-center ">
        <div className="flex justify-center  md:flex-nowrap flex-wrap gap-44">
          <div className="flex flex-col  pt-4 md:order-1 order-3">
            <img className="md:w-[200px] w-[100px]" src={LOGO} alt="" />
            <ul className="">
              <li className="font-bold text-[1rem] my-4 ">
                <a href="">COMPANY</a>
              </li>
              <li className="hover:text-red-800">
                <a href="">About Us</a>
              </li>
              <li className="hover:text-red-800">
                <a href="">Partners</a>
              </li>
              <li className="hover:text-red-800">
                <a href="">Blog</a>
              </li>
              <li className="hover:text-red-800">
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col pt-4 md:order-2 order-1">
            <ul className="">
              <li className="font-bold text-[1rem]">
                <a href="">INDUSTRIES</a>
              </li>
              <ul className="flex flex-col gap-2 mt-4">
                <li className="hover:text-red-800">
                  <a href="">Mining</a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">Energy</a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">Healthcare</a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">Cleaning</a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">Construction</a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">Others</a>
                </li>
              </ul>
            </ul>
          </div>
          <div className="w-full h-[1px] md:hidden my-4 bg-white"></div>
          <div className="flex flex-col items-end pt-4 md:order-3 order-2">
            <ul className="">
              <li className="font-bold text-[1rem]">
                <a href="">SERVICES</a>
              </li>
              <ul className="flex flex-col gap-2 mt-4">
                <li className="hover:text-red-800">
                  <a href=""> Technical Consulting</a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">Safety Training</a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">Customer Support</a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">Equipment Maintenance</a>
                </li>
              </ul>
            </ul>
          </div>
          <div className="flex flex-col items-end pt-4 md:px-0 px-8 md:order-4 order-4">
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[1rem]">
                <a href="">SOCIAL MEDIA</a>
              </li>
              <ul className="flex gap-4 mt-4">
                <li className="hover:text-red-800">
                  <a href="">
                    <Facebook />
                  </a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">
                    <Twitter />
                  </a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">
                    <Linkedin />
                  </a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">
                    <Instagram />
                  </a>
                </li>
              </ul>
              <li className="hover:text-red-800">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex md:static justify-center">
        <p className="text-white  text-[14px]">© 2024 Dina Holding. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
