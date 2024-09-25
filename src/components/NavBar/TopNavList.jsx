import { Search } from "lucide-react";

function TopNavList() {
  return (
    <>
      <div className="p-2 w-screen bg-red-800 flex justify-between text-white font-thin text-[14px] px-[10%]">
        <ul className="flex gap-4 items-center">
          <li className="hover:bg-red-900 rounded-md p-[3px] px-[3px]" >
            <a href="#">dinaholding@dina.co.mz</a>
          </li>
          <li className="hover:bg-red-900 rounded-md p-[3px] px-[3px]" >
            <a href="#">Blog</a>
          </li>
          <li className="hover:bg-red-900 rounded-md p-[3px] px-[3px]" >
            <a href="#">Careers</a>
          </li>
        </ul>
        <ul className="flex gap-4 items-center">
          <li>
            <div className="flex gap-2 items-center">
                <input className="p-[2px] w-48 border-slate-200 rounded-sm" type="text" placeholder="Search" />
                <button className="hover:bg-red-900 rounded-md p-[3px]" type="submit">
                    <Search size={20} strokeWidth={2} />
                </button>
            </div>
          </li>
          <li className="hover:bg-red-900 rounded-md p-[3px] px-[3px]" >
            <a href="#">Profile</a>
          </li>
          <li className="hover:bg-red-900 rounded-md p-[3px] px-[3px]" >
            <a href="#">locations</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default TopNavList;
