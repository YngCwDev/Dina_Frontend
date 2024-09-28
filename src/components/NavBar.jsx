import logo from "../assets/LOGO.svg";
import { ChevronDown } from "lucide-react";
import TopNavList from "./NavBar/TopNavList";
import Dropdown from "./NavBar/Dropdown";
import { useState } from "react";

function NavBar() {
  const navList = ["About", "Products", "Services", "Industries", "Contacts"];
  const [navOption, setNavOpiton] = useState(null);
  return (
    <>
      <div className="shadow-md">
        <TopNavList />

        <nav className="block">
          <div className="flex justify-around p-2">
            <img className="w-28" src={logo} alt="dina_holding_logo" />

            <ul className="gap-4 flex items-center">
              {navList.map((item) => {
                if (
                  item === "Services" ||
                  item === "Products" ||
                  item === "Industries"
                ) {
                  return (
                    <li
                      className="p-2 flex items-center gap-1"
                      onMouseOver={() => {
                        setNavOpiton(item);
                      }}
                      key={item}
                    >
                      <a href="#">{item}</a>
                      <ChevronDown size={18} strokeWidth={1} />
                    </li>
                  );
                }

                return (
                  <li className="p-2" key={item}>
                    <a href="#">{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <Dropdown navoption={navOption} />
        </nav>
      </div>
    </>
  );
}

export default NavBar;
