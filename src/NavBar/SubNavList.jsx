import data from "../utils";


const SubNavList = ({ open, SetState }) => {
    return (
      <div
        onMouseEnter={() => SetState(open)}
        onMouseLeave={() => SetState(false)}
      >
        {data.categories.map((category, index) => {
          if (open === category.name) {
            return (
              <div >
                <ul
                  className="bg-white shadow-md p-16 flex justify-center gap-8 z-10 fixed w-full"
                  key={index}
                >
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


  export default SubNavList