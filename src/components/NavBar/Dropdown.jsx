import { useState } from "react";
import data from "./list.json";

function Dropdown({navoption}) {
  const products = data.products;
  const services = data.services;
  const industries = data.industries;
  
  return (
    <><div  className="flex flex-col gap-8 justify-center items-center">

    
      {navoption === "Products" ? (
        <div className="flex flex-row gap-4  bg-red-100 p-10 w-full justify-center items-center space-x-8">
          {Object.keys(products).map((item) => {
            return (
              <div className="space-y-2 ">
                <h1 className="text-[16px] font-semibold">{item}</h1>
                <ul className="flex flex-col gap-4">
                  {products[item].map((item) => {
                    return (
                      <li className="text-[14px]"  key={item}>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      ) : null}
      {navoption === "Industries" ? (
        <div className="flex flex-row gap-4  bg-red-100 p-10 w-full justify-center items-center space-x-8">
          {Object.keys(services).map((item) => {
            return (
              <div className="space-y-2 ">
                <h1 className="text-[16px] font-semibold">{item}</h1>
                <ul className="flex flex-col gap-4">
                  {services[item].map((item) => {
                    return (
                      <li className="text-[14px]" key={item}>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      ) : null}
      {navoption === "Services" ? (
        <div className="flex flex-row gap-4  bg-red-100 p-10 w-full justify-center items-center space-x-8">
          {Object.keys(industries).map((item) => {
            return (
              <div className="space-y-2 ">
                <h1 className="text-[16px] font-semibold">{item}</h1>
                <ul className="flex flex-col gap-4">
                  {industries[item].map((item) => {
                    return (
                      <li className="text-[14px]" key={item}>
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      ) : null}
      </div>
    </>
  );
}

export default Dropdown;
