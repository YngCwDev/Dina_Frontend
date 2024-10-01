import { Search } from "lucide-react";

const TopNavList = () => {
  const list = {
    group_1: {
      "dinaholding@dina.co.mz": "mailto:dinaholding@dina.co.mz",
      Blog: "https://blog.dina.co.mz",
      Careers: "https://careers.dina.co.mz",
    },
    group_2: {
      Profile: "https://profile.dina.co.mz",
      Locations: "https://locations.dina.co.mz",
    },
  };
  return (
    <div className="flex  justify-between px-[10%] bg-red-900 text-white text-[14px]">
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
      <ul className="flex gap-2 items-center">
        <li className="flex items-center">
          <input type="search" name="search" id="search" placeholder="Search" className="h-5 w-[80%] m-1 p-1 "/>
          <button type="submit" name="search"><Search  size={19} strokeWidth={2} className="bg-slate-100 rounded-sm  text-slate-600"/></button>
        </li>
        {Object.keys(list.group_2).map((key) => {
          return (
            <li>
              <a href={list.group_2[key]} key={key} className="p-1">
                {key}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TopNavList;
