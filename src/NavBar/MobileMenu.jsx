import { useEffect, useState } from "react";
import data from "../utils";
import { ChevronDown } from "lucide-react";


const MobileMenu = ({ toggle }) => {
  const [openCategories, setOpenCategories] = useState({});

  const handleCategoryClick = (categoryName) => {
    setOpenCategories((prev) => ({ [categoryName]: !prev[categoryName] })); // Open and Close the submenu and Prevent two of the to be opened
  };
  useEffect(() => {
    if (!toggle) {
      setOpenCategories({}); // Reset SubMenu
    }
  }, [toggle]);

  const RenderMenu = () => {
    return (
      <div className="absolute bg-white shadow-md z-10 fixed w-full">
        <ul className="block space-y-2 p-4">
          <li className="p-4">
            <a href="#">About</a>
          </li>
          {data.categories.map((category) => {
            return (
              <div key={category.name} className="group/link">
                <li
                  onClick={() => handleCategoryClick(category.name)}
                  className={`p-4 cursor-pointer flex items-center justify-between rounded-lg ${openCategories[category.name] && 'bg-slate-100'} `} 
                >
                  <div>{category.name}</div>
                  <ChevronDown
                    size={16}
                    strokeWidth={1}
                    className="group-active/link:rotate-180 duration-200"
                  />
                </li>

                {openCategories[category.name] && (
                  <ul className="pl-4 space-y-2">
                    {category.items.map((item) => (
                      <li key={item.name} className="p-2">
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
          <li className="p-4 flex justify-center">
            <button className="bg-red-800 rounded-md p-2 px-8 text-white">
              <a href="#">Contact Us</a>
            </button>
          </li>
        </ul>
      </div>
    );
  };

  return <>{toggle ? <RenderMenu /> : null}</>;
};

export default MobileMenu;
