import data from "../utils";
import { Menu } from "lucide-react";

const MobileMenu = ({ toggle }) => {

    const Menu = ()=>{
        return(
            <>
                <div className="bg-red-100 z-100 fixed w-full">Hello</div>
            </>
        )
    }

  return <>{toggle  ? Menu() : ''}</>;
};

export default MobileMenu;
