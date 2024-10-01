import topViewImg_1 from "../assets/img1.png";

function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="" id="header">
          <div className="flex md:justify-between justify-center items-center mx-auto flex-wrap md:my-0 my-32">
            <div className="md:px-16 px-4 md:w-[50%] text-center md:text-left w-full">
              <h1 className="md:text-[3rem] text-[1.5rem] font-bold md:text-red-800 text-white">
                Your Solution for Productivity
                <br />
                And Safety
              </h1>
              <p className="md:text-[20px] text-[16px]">
                Maximize efficiency and safeguard your workforce with our
                reliable products.
              </p>
            </div>
            <div className="w-[50%] md:flex hidden md:p-0 p-16">
              <img src={topViewImg_1} alt="" />
            </div>
          </div>
          <div className="p-[5%] md:px-[25%] text-justify md:block flex flex-col justify-center w-full bg-white md:my-0 my-32 block">
            <p className="md:text-[1.1rem] text-[1rem]">
              We proudly offer an extensive selection of high-quality electrical
              materials, powerful generators, essential personal protective
              equipment (PPE), durable batteries, premium oils, and lubricants,
              all carefully designed to optimize your industrial operations.
              Whether you're in construction, mining, or energy, our products
              ensure peak efficiency, reliable performance, and maximum safety
              for your workforce.
            </p>
            <div className="md:flex block py-4 gap-8 items-center mx-auto">
              <div className="p-1 px-2 bg-red-800 text-white">
                <a href="">Contact us</a>
              </div>
              <p className="underline mt-4 md:mt-0">
                <a href="">Our locations</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
