import data from "./utils";
import logo from "./assets/LOGO.svg";
import { ChevronDown } from "lucide-react";
import { useState } from "react";


function NavBar() {
  const [open, setOpen] = useState(false)
  const SetState = (State)=>{
    setOpen(State)
  }
  
  return (
    <div>
      <TopNavList />
      <MainNav SetState={SetState} />
      <SubNavList open={open} SetState={SetState}/>
    </div>
  );
}

const TopNavList = () => {
  const list = {
    group_1: {
      "dinaholding@dina_co_mz": "mailto:dinaholding@dina.co.mz",
      Blog: "https://blog.dina.co.mz",
      Careers: "https://careers.dina.co.mz",
    },
    group_2: {
      Search: "https://search.dina.co.mz",
      Profile: "https://profile.dina.co.mz",
      Locations: "https://locations.dina.co.mz",
    },
  };
  return (
    <div className="flex justify-around bg-red-900 text-white text-[14px]">
      <ul>
        <li className="flex gap-2">
          {Object.keys(list.group_1).map((key) => {
            return (
              <a href={list.group_1[key]} key={key} className="p-1">
                {key}
              </a>
            );
          })}
        </li>
      </ul>
      <ul>
        <li className="flex gap-2">
          {Object.keys(list.group_2).map((key) => {
            return (
              <a href={list.group_2[key]} key={key} className="p-1">
                {key}
              </a>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

const MainNav = ({SetState}) => {
  return (
    <div className="flex justify-around items-center">
      <div>
        <img src={logo} alt="logo" className="w-[80px]" />
      </div>
      <ul className="flex gap-8  text-[15px] items-center" key={"MainNav"}>
        <li key={"About"}>
          <a href="">About</a>
        </li>
        {data.categories.map((category) => {
          return (
            <li onMouseEnter={()=> SetState(category.name)} onMouseLeave={() => SetState(false)} key={category.name} className="p-2 flex items-center  gap-2">
              <a href={category.link} key={category.name}>
                {category.name}
              </a>
              {category.name === "Products" ||
              category.name === "Services" ||
              category.name === "Industries" ? (
                <ChevronDown size={16} strokeWidth={1} />
              ) : null}
            </li>
          );
        })}
        <li key={"Contacts"}>
          <a href="">Contacts</a>
        </li>
      </ul>
    </div>
  );
};


const SubNavList = ({open, SetState}) => {
  return (
    <div onMouseEnter={()=>SetState(open)} onMouseLeave={()=>SetState(false)}>
      {data.categories.map((category, index) => {
        if(open === category.name){
          return (
            <div>
              <ul className="bg-red-100 p-4 flex justify-center gap-8" key={index}>
                {category.items.map((item) => {
                  return (
                    <div className="p-2 leading-loose  space-y-2">
                      <h2 className="text-[14px] font-semibold">{item.name}</h2>
                      <li key={item.name} className="flex flex-col text-[12px]">
                        {item.sub_items.map((sub_item) => {
                          return (
                            <a href={item.sub_items_link} key={sub_item}>
                              {sub_item}
                            </a>
                          );
                        })}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
};
export default NavBar;
