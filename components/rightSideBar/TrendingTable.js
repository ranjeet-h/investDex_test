import Image from "next/image";
import React from "react";

const TrendingTable = ({ mainData }) => {
    // console.log(mainData);
  return (
    <div className="mt-4 ">
      <div className="flex items-center justify-between h-[45px] mx-1 bg-[#121219] text-gray-400 text-sm">
        <div className="flex ml-9 ">
          <p className="">#</p> <p className="ml-7">Name</p>
        </div>
        <div className="mr-11">
          <p className="">Price Change(24h)</p>
        </div>
      </div>
      {mainData?.slice(1).map((item, index) => (
        <div
          key={index}
          className="flex items-center border-b-2 mt-2   border-gray-400 border-opacity-20 justify-between  h-[49px]"
        >
          <div className="flex justify-end ml-4">
            <p className="text-gray-400 w-4">{index + 2}</p>
            <div className=" ml-4">
              <p className="uppercase text-white  font-bold">{item.symbol}</p>

              <p className="text-gray-400 -mt-1 text-xs ">{item.name}</p>
            </div>
          </div>
          <div className="mr-5 flex  space-x-4">
            <div className="h-3 w-3 mr-6 mt-1">
              <Image
                src="/up.svg"
                alt="quick swap"
                width="100%"
                height="100%"
              />{" "}
            </div>
            <p className="text-[#0bb68c] font-bold mt-1 w-14">{item.priceChange.toFixed(2)}%</p>
            <div className="rounded-lg bg-[#303453] flex items-center h-7 w-7 justify-center">
              <svg
                width="20"
                height="11"
                viewBox="0 0 12 8"
                fill="none"
                focusable="false"
                className="chakra-icon css-32wtbl"
              >
                <path
                  d="M5.99933 1.25054C4.20776 1.2199 2.35484 2.48918 1.18994 3.78909V3.78909C0.936686 4.07413 0.936686 4.50704 1.18994 4.79207C2.32951 6.0645 4.17709 7.36306 5.99933 7.33197C7.82158 7.36306 9.6696 6.0645 10.8101 4.79207V4.79207C11.0633 4.50704 11.0633 4.07413 10.8101 3.78909C9.64382 2.48918 7.79091 1.2199 5.99933 1.25054V1.25054Z"
                  stroke="#798dff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M7.66589 4.29147V4.29102C7.66589 5.22421 6.91969 5.98071 5.99921 5.98071C5.07872 5.98071 4.33252 5.22421 4.33252 4.29102C4.33252 3.358 5.07845 2.60157 5.99876 2.60132V2.60132C6.919 2.60082 7.6654 3.35672 7.66589 4.28966C7.66589 4.29027 7.66589 4.29087 7.66589 4.29147V4.29147Z"
                  stroke="#798dff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingTable;
