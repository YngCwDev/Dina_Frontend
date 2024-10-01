import topViewImg_1 from "../assets/img1.png";

function Hero() {
  return (
    <>
      <div class="flex flex-col justify-center items-center ">
        <div class="" id="header">
          <div class="flex md:justify-between justify-center items-center mx-auto flex-wrap md:my-0 my-32">
            <div class="md:px-16 px-4 md:w-[50%] text-center md:text-left w-full">
              <h1 class="md:text-[3rem] text-[2rem] font-bold text-red-800">
                Your Solution for Productivity
                <br />
                And Safety
              </h1>
              <p class="text-[20px]">
                Maximize efficiency and safeguard your workforce with our
                reliable products.
              </p>
            </div>
            <div class="w-[50%] md:block hidden md:p-0 p-16">
              <img src={topViewImg_1} alt="" />
            </div>
          </div>
          <div class="p-[5%] md:px-[25%] text-justify md:block flex flex-col justify-center w-full bg-white md:my-0 my-32 block">
            <p class="md:text-[1.1rem] text-[1rem]">
              We proudly offer an extensive selection of high-quality electrical
              materials, powerful generators, essential personal protective
              equipment (PPE), durable batteries, premium oils, and lubricants,
              all carefully designed to optimize your industrial operations.
              Whether you're in construction, mining, or energy, our products
              ensure peak efficiency, reliable performance, and maximum safety
              for your workforce.
            </p>
            <div class="md:flex block py-4 gap-8 items-center mx-auto">
              <div class="p-1 px-2 bg-red-800 text-white">
                <a href="">Contact us</a>
              </div>
              <p class="underline mt-4 md:mt-0">
                <a href="">Our locations</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="md:h-[10vh] h-[6vh] w-full"></div>
    </>
  );
}

export default Hero;
