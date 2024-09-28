import logo from "../assets/LOGO.svg";
import { ChevronDown } from "lucide-react";
import TopNavList from "./NavBar/TopNavList";
import { useState } from "react";
import data from "./NavBar/utils";

function NavBar() {
  const categories = data.categories;

  return (
    <>
      <div className="shadow-md">
        <TopNavList />

        <nav className="flex flex-col">
          <div className="flex justify-around p-2">
            <img className="w-28" src={logo} alt="dina_holding_logo" />

            <ul className="gap-12 flex items-center">
              <li className="text-[16px]">
                <a href="">About</a>
              </li>

              <div className="flex gap-12">
                {categories.map((category, index) => {
                  return (
                    <li key={index} className="group/link flex">
                      <div className="text-[16px] flex items-center gap-2">
                        <a href="">{category.name}</a>
                        <ChevronDown
                          size={18}
                          strokeWidth="1"
                          className="group-hover/link:rotate-180 duration-200"
                        />
                      </div>

                      <div className="absolute hidden group-hover/link:flex bg-red-100 justify-center items-center w-full gap-12 p-16 top-[11%] left-0">
                        <ul className="flex gap-12">
                          {category.items.map((item, itemIndex) => {
                            return (
                              <li key={itemIndex}>
                                <div>
                                  <a className=" text-[18px] font-semibold" href="">
                                    {item.name}
                                  </a>
                                </div>

                                <ul className="flex flex-col gap-4 mt-2">
                                  {item.sub_items.map((sub_item, subItemIndex) => (
                                    <li className="" key={subItemIndex}>
                                      <a className="text-[14px] flex flex-col" href="">
                                        {sub_item}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </div>

              <li className="text-[16px]">
                <a href="">Contacts</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
