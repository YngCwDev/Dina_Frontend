import data from "../utils";
import { Menu } from "lucide-react";

const MobileMenu = ({ toggle }) => {

    const Menu = ()=>{
        return(
            <div>
                <div className="bg-red-100">Hello</div>
            </div>
        )
    }

  return <>{toggle  ? Menu() : ''}</>;
};

export default MobileMenu;
