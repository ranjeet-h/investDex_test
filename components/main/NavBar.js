import React from "react";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className="m-4 flex items-center  ">
      <div className="">
        <p className="text-white font-bold text-3xl">InvestSuite</p>
      </div>
      <div className="backdrop-blur-lg bg-gray-200 bg-opacity-10 h-9 flex items-center rounded-lg  ml-4">
        <div className="m-1 h-7   rounded-lg bg-[#5f7ae1] flex items-center cursor-pointer">
          <div className="h-5 w-5 m-1">
            <Image src="/eth.svg" alt="eth" width="100" height="100" />
          </div>

          <p className="text-white font-bold mx-2">ETH</p>
          <p className="text-white text-sm  mr-3">Network</p>
        </div>
        <div className="m-1 ml-0 h-7   rounded-lg bg-[#eab612] flex items-center cursor-pointer">
          <div className="h-5 w-5 m-1">
            <Image src="/bsc.svg" alt="bsc" width="100" height="100" />
          </div>

          <p className="text-white font-bold mx-2">BSC</p>
          <p className="text-white text-sm  mr-3">Network</p>
        </div>
        <div className="m-1 ml-0 h-7   rounded-lg bg-[#6d45db] flex items-center cursor-pointer">
          <div className="h-5 w-5 m-1">
            <Image src="/poly.svg" alt="poly" width="100" height="100" />
          </div>

          <p className="text-white font-bold mx-2">Poly</p>
          <p className="text-white text-sm  mr-3">Network</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

