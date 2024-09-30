import { useState } from "react";
import useMediaQuery from "../MediaQuery/UseMediaQuery";
import SubNavList from "./SubNavList";
import TopNavList from "./TopNavList";
import MainNav from "./MainNav";
import MobileMenu from "./MobileMenu";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const SetState = (State) => {
    setOpen(State);
  };
  const handleClick = () => {
    setToggle(!toggle);
  };
  

  return (
    <div>
      {!isMobile && <TopNavList />}
      <MainNav SetState={SetState} toogle={open} isMobile={isMobile} handleClick={handleClick}/>
      {!isMobile && <SubNavList open={open} SetState={SetState} />} 
      {isMobile && <MobileMenu toggle={toggle} SetState={SetState}/>}
    </div>
  );
}






export default NavBar;
