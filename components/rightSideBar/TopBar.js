import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import axios from "axios";

const whatsNew = (
  <Menu theme="dark" className="rounded-2xl">
    <Menu.Item>
      <div target="_blank" className="relative w-[352px] h-[135px]">
        <div className="flex items-center mt-4 ml-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 15"
            fill="none"
            focusable="false"
            className="chakra-icon css-1ead6s2"
          >
            <path
              d="M1.06165 5.93618H12.9443"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.96147 8.53982H9.96765"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.00292 8.53982H7.00909"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.03868 8.53982H4.04486"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.96147 11.1308H9.96765"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.00292 11.1308H7.00909"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.03868 11.1308H4.04486"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.69595 1V3.19385"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.31027 1V3.19385"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.82551 2.05286H4.18064C2.22285 2.05286 1 3.14348 1 5.14821V11.1813C1 13.2176 2.22285 14.3334 4.18064 14.3334H9.81933C11.7833 14.3334 13 13.2365 13 11.2317V5.14821C13.0062 3.14348 11.7895 2.05286 9.82551 2.05286Z"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="text-xl font-bold ml-3 text-[#40dab4]">
            Workstation goes live today!!!!
          </p>
        </div>

        <p className="ml-9 text-white font-semibold ">
          Please to announce that the Workstation <br /> goes live!!!
        </p>
        <p className="absolute bottom-0 right-0 flex text-white items-center ">
          13 Days ago{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 15"
            fill="none"
            focusable="false"
            className="chakra-icon css-1ead6s2 ml-2"
          >
            <path
              d="M1.06165 5.93618H12.9443"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.96147 8.53982H9.96765"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.00292 8.53982H7.00909"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.03868 8.53982H4.04486"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.96147 11.1308H9.96765"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.00292 11.1308H7.00909"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.03868 11.1308H4.04486"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.69595 1V3.19385"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M4.31027 1V3.19385"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.82551 2.05286H4.18064C2.22285 2.05286 1 3.14348 1 5.14821V11.1813C1 13.2176 2.22285 14.3334 4.18064 14.3334H9.81933C11.7833 14.3334 13 13.2365 13 11.2317V5.14821C13.0062 3.14348 11.7895 2.05286 9.82551 2.05286Z"
              stroke="#9094A1"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </p>
      </div>
    </Menu.Item>
  </Menu>
);

const gweiMenu = (
  <Menu theme="dark" className="rounded-2xl">
    <Menu.Item>
      <div target="_blank" className="relative w-[352px] h-[135px]"></div>
    </Menu.Item>
  </Menu>
);

const TopBar = ({
  uniSwap,
  setUniSwap,
  pancakeSwap,
  setPancakeSwap,
  quickSwap,
  setQuickSwap,
}) => {
  const [gasPrice, setGasPrice] = useState(null);
  const [ebm, setEbm] = useState(null);

  useEffect(() => {
    const getGasPrice = async () => {
      await axios
        .get("https://investdex.io/dexvision/gas/price")
        .then((response) => setGasPrice(response.data))
        .then((error) => console.log("GAS Price Error", error));
    };
    const getEthPrice = async () => {
      await axios
        .get("https://investdex.io/dexvision/eth/price")
        .then((response) => setEbm(response.data))
        .then((error) => console.log("Eth Price Api Error", error));
    };
    getGasPrice();
    getEthPrice();
  }, []);
  // console.log("Eth Price Api", Number.parseFloat(ethPrice).toPrecision(6));

  let max,
    min,
    avg = 0;
  if (gasPrice !== null) {
    let arr = Object.values(gasPrice);
    let no = arr.map((x) => +x);

    min = Math.min(...no);
    max = Math.max(...no);
    const sum = no.reduce((a, b) => a + b, 0);
    avg = Math.round(sum / no.length || 0);
  }
  //   console.log(min, max, avg);

  return (
    <div className="mt-2 mr-2 flex justify-end">
      <Dropdown overlay={whatsNew} placement="bottomLeft">
        <div className="flex items-center space-x-1 cursor-pointer w-24  rounded-full bg-[#131315] border-[1px] border-gray-300 border-opacity-50 ">
          <p className="flex m-0.5 text-center ml-2  text-gray-400 font-semibold  text-xs  ">
            Whats New
          </p>
          <p className="   inline-flex h-2 w-2 rounded-full bg-green-900 "></p>
        </div>
      </Dropdown>
      <Dropdown overlay={gweiMenu} placement="bottomLeft" className="ml-2">
        <div className="flex items-center space-x-2 cursor-pointer">
          <svg
            width="21"
            height="27"
            viewBox="0 0 13 9"
            fill="none"
            focusable="false"
            className="chakra-icon __eth_stats-gas_icon css-1s1hblo"
          >
            <path
              d="M6.5 1.00003V1.00003C3.43939 1.02211 0.977038 3.4084 1.00016 6.32994C1.00016 6.3302 1.00017 6.33046 1.00017 6.33072V7.29998V7.29998C1.00017 7.68658 1.32848 7.99998 1.73348 7.99998H11.2665V7.99998C11.6715 7.99998 11.9998 7.68658 11.9998 7.29998V6.32932V6.32931C12.0226 3.408 9.56034 1.02208 6.50001 1L6.5 1.00003Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M5.03369 7.99999V7.64999V7.64999C5.03369 6.8768 5.69032 6.25 6.50031 6.25C7.31029 6.25 7.96692 6.8768 7.96692 7.64999V7.64999V7.99999"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.59998 3.10002L6.5 6.25001"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3.01685 5.89998V5.89998C2.91558 5.89998 2.8335 5.97833 2.8335 6.07498C2.8335 6.17163 2.91558 6.24998 3.01685 6.24998C3.11811 6.24998 3.2002 6.17163 3.2002 6.07498V6.07498C3.2002 5.97833 3.11811 5.89998 3.01685 5.89998"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3.75024 4.15137V4.15137C3.64898 4.15137 3.56689 4.22972 3.56689 4.32637C3.56689 4.42302 3.64898 4.50137 3.75024 4.50137C3.85151 4.50137 3.93359 4.42302 3.93359 4.32637C3.93359 4.22972 3.85151 4.15137 3.75024 4.15137"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.98315 5.89998V5.89998C9.88189 5.89998 9.7998 5.97833 9.7998 6.07498C9.7998 6.17163 9.88189 6.24998 9.98315 6.24998C10.0844 6.24998 10.1665 6.17163 10.1665 6.07498V6.07498C10.1665 5.97833 10.0844 5.89998 9.98315 5.89998"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.25024 4.15137V4.15137C9.14898 4.15137 9.06689 4.22972 9.06689 4.32637C9.06689 4.42302 9.14898 4.50137 9.25024 4.50137C9.35151 4.50137 9.43359 4.42302 9.43359 4.32637C9.43359 4.22972 9.35151 4.15137 9.25024 4.15137"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M5.21704 2.75139V2.75139C5.11578 2.75139 5.03369 2.82974 5.03369 2.92639C5.03369 3.02304 5.11578 3.10139 5.21704 3.10139C5.3183 3.10139 5.40039 3.02304 5.40039 2.92639C5.40039 2.82974 5.3183 2.75139 5.21704 2.75139"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <p className="text-sm font-bold text-white"> {avg} GWEI</p>
        </div>
      </Dropdown>
      <div className="flex text-center space-x-1 text-white ml-2 mt-1">
        {uniSwap ? (
          <>
            <p className="text-sm font-semibold">ETH:</p>
            <p className="font-bold">
              ${Number.parseFloat(ebm?.ethPrice).toPrecision(6)}
            </p>
          </>
        ) : null}
        {pancakeSwap ? (
          <>
            <p className="text-sm font-semibold">BNB:</p>
            <p className="font-bold">
              ${Number.parseFloat(ebm?.bnbPrice).toPrecision(6)}
            </p>
          </>
        ) : null}
        {quickSwap ? (
          <>
            <p className="text-sm font-semibold">MATIC:</p>
            <p className="font-bold">
              ${Number.parseFloat(ebm?.maticPrice).toPrecision(6)}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TopBar;
