import { div } from "framer-motion/client";

function Footer() {
  return (
    <div>
      <div className="text-white p-[5%] md:px-[20%] flex flex-col">
        <div className="flex justify-between flex-row flex-wrap">
          <div className="flex flex-col md:items-end pt-4">
            <img className="md:w-[200px] w-[100px]" src="img/LOGO-w.svg" alt="" />
            <ul className="">
              <li className="font-bold text-[1rem] my-4 pr-8">
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
          <div className="flex flex-col pt-4">
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
          <div className="flex flex-col items-end pt-4">
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
          <div className="flex flex-col items-end pt-4">
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[1rem]">
                <a href="">SOCIAL MEDIA</a>
              </li>
              <ul className="flex gap-4 mt-4">
                <li className="hover:text-red-800">
                  <a href="">
                    <ion-icon className="text-2xl" name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">
                    <ion-icon className="text-2xl" name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">
                    <ion-icon className="text-2xl" name="logo-linkedin"></ion-icon>
                  </a>
                </li>
                <li className="hover:text-red-800">
                  <a href="">
                    <ion-icon className="text-2xl" name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
              <li className="hover:text-red-800">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>

          <div></div>
        </div>
      </div>
      <p className="flex justify-self-end">
        © 2024 Dina Holding. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
