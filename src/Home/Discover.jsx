import grid from "./utils";

function Discover() {
  return (
    <div className="bg-white  md:px-[10%] px-4  flex items-center justify-center">
      <div className="bg-white py-10 text-center mx-auto">
        <div>
          <h2 className="md:text-[2rem] text-[1rem] font-medium">
            Discover our products and services
          </h2>
          <div className="h-[2px] w-[10%] my-4 bg-black  mx-auto"></div>
          <p className="text-[1rem] py-4 md:px-[20%]">
            We offer a wide range of premium products designed to meet the needs
            of various industries. Explore our product categories to find the
            right solution for your business:
          </p>
        </div>
        <Square />
      </div>
    </div>
  );
}

const Square = () => {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {grid.map((items) => {
        return (
          <div className="md:h-[365px] h-[345px] md:w-[400px] w-[370px] bg-gray-200">
            <div className="flex flex-col justify-center items-start bg-gray-200 h-full w-full">
              <a href={items.link}>
                <div>
                  <img src={items.imgpath} alt={items.header} />
                  <div className="my-4 mx-2 text-left">
                    <h2 className="text-1xl font-bold">{items.header}</h2>
                    <p className="text-sm">{items.details}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Discover;
