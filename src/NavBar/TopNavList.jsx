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
      <div className="flex  justify-around bg-red-900 text-white text-[14px]">
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
 export default TopNavList;  