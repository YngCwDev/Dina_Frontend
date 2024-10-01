import data from "../utils";
import { ChevronDown, Menu } from "lucide-react";
import logo from "../assets/LOGO.svg";

const MainNav = ({ SetState, isMobile, handleClick }) => {
  const MenuButton = (
    <button>
      <Menu onClick={handleClick} strokeWidth={2} size={35} />
    </button>
  );
  return (
    <div
      className={`flex ${
        isMobile ? "justify-between px-4 py-2" : "justify-around"
      } items-center bg-white  shadow-md`}
    >
      <div>
        <img src={logo} alt="logo" className="w-[80px]" />
      </div>
      {isMobile ? (
        MenuButton
      ) : (
        <ul className="flex gap-8  text-[15px] items-center" key={"MainNav"}>
          <li key={"About"}>
            <a href="">About</a>
          </li>
          {data.categories.map((category) => {
            return (
              <li
                onMouseEnter={() => SetState(category.name)}
                onMouseLeave={() => SetState(false)}
                key={category.name}
                className="px-4 py-4 flex items-center  gap-2 group/link cursor-pointer"
              >
                <a href={category.link} key={category.name}>
                  {category.name}
                </a>
                {category.name === "Products" ||
                category.name === "Services" ||
                category.name === "Industries" ? (
                  <ChevronDown
                    size={16}
                    strokeWidth={1}
                    className="group-hover/link:rotate-180 duration-200"
                  />
                ) : null}
              </li>
            );
          })}
          <li key={"Contacts"}>
            <a href="">Contacts</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MainNav;
