import logo from "../assets/LOGO.svg";
import NavList from "./NavBar/NavList";
import TopNavList from "./NavBar/TopNavList";
function NavBar() {
 

  return (
    <>
      <div className="shadow-md">
        <div className="p-2 w-screen bg-red-800 flex justify-evenly text-white font-thin text-[14px]">
          <TopNavList/>
        </div>
        <nav className="flex justify-around p-2">
          <img className="w-[5%]" src={logo} alt="dina_holding_logo" />
          <NavList />
        </nav>
      </div>
    </>
  );
}

export default NavBar;
