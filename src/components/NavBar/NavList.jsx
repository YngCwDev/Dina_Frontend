import { ChevronDown } from "lucide-react";

function NavList() {
  const navList = ["About", "Products", "Services", "Industries", "Contacts"];

  return (
    <>
      <ul className="gap-4 flex items-center">
        {navList.map((item) => {
          if (
            item === "Services" ||
            item === "Products" ||
            item === "Industries"
          ) {
            return (
              <li className="p-2 flex items-center gap-1" key={item}>
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
    </>
  );
}

export default NavList;
