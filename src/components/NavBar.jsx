import logo from "../assets/LOGO.svg";
import NavList from "./NavBar/NavList";
import TopNavList from "./NavBar/TopNavList";
function NavBar() {
 

  return (
    <>
      <div className="shadow-md">
      
          <TopNavList/>
       
        <nav className="flex justify-around p-2">
          <img className="w-28" src={logo} alt="dina_holding_logo" />
          <NavList />
        </nav>
      </div>
    </>
  );
}

export default NavBar;
