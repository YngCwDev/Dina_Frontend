import logo from "../assets/LOGO.svg";
import NavList from "./NavBar/NavList";
import TopNavList from "./NavBar/TopNavList";
import Dropdown from "./NavBar/Dropdown";

function NavBar() {
  return (
    <>
      <div className="shadow-md">
        <TopNavList />

        <nav className="block">
          <div className="flex justify-around p-2">
            <img className="w-28" src={logo} alt="dina_holding_logo" />
            <NavList />
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
