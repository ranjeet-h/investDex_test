import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import numeral from "numeral";
import TrendingTable from "./TrendingTable";

const MainSection = ({
  uniSwap,
  setUniSwap,
  pancakeSwap,
  setPancakeSwap,
  quickSwap,
  setQuickSwap,
}) => {
  const [uniSwapData, setUniSwapData] = useState(null);
  const [pancakeSwapData, setPancakeSwapData] = useState(null);
  const [quickSwapData, setQuickSwapData] = useState(null);

  useEffect(() => {
    const getUniSwap = async () => {
      await axios
        .get(
          "https://investdex.io/dexvision/trending/tokens?page=1&size=11&include=admin&field=volumeChange&sort=desc"
        )
        .then((response) => setUniSwapData(response.data.tokens))
        .then((error) => console.log("UniSwap Api Error", error));
    };
    const getPancakeSwap = async () => {
      await axios
        .get(
          "https://investdex.io/dexvision/trending/bscswap?page=1&size=11&include=admin&field=priceChange&sort=desc"
        )
        .then((response) => setPancakeSwapData(response.data.tokens))
        .then((error) => console.log("PancakeSwap API Error", error));
    };
    const getQuickSwap = async () => {
      await axios
        .get(
          "https://investdex.io/dexvision/trending/quickswap?page=1&size=11&include=admin&field=volumeChange&sort=desc"
        )
        .then((response) => setQuickSwapData(response.data.tokens))
        .then((error) => console.log("QuickSwap Api Error", error));
    };
    getUniSwap();
    getPancakeSwap();
    getQuickSwap();
  }, []);

  // Change Data
  let mainData;
  if (uniSwapData !== null && uniSwap) {
    mainData = uniSwapData;
  }
  if (pancakeSwapData !== null && pancakeSwap) {
    mainData = pancakeSwapData;
  }
  if (quickSwapData !== null && quickSwap) {
    mainData = quickSwapData;
  }
  //   console.log("uni sWap data", mainData);

  // Change IMGS
  let startIMG = "/";
  if (uniSwap) {
    startIMG = "/startUni.png";
  }
  if (pancakeSwap) {
    startIMG = "/startPancake.png";
  }
  if (quickSwap) {
    startIMG = "/startQuickSwap.png";
  }

  // HAndle Functions
  const handleUniSwap = () => {
    setUniSwap(true);
    setPancakeSwap(false);
    setQuickSwap(false);
  };
  const handlePancakeSwap = () => {
    setUniSwap(false);
    setPancakeSwap(true);
    setQuickSwap(false);
  };
  const handleQuickSwap = () => {
    setUniSwap(false);
    setPancakeSwap(false);
    setQuickSwap(true);
  };

  let quickIMG;
  if (quickSwap) {
    quickIMG = "/quick_swap_active.svg";
  } else {
    quickIMG = "/quick_swap_inactive.svg";
  }

  const currentDate = new Date();
  console.log(currentDate);
  return (
    <div className="">
      <div className=" relative flex flex-col items-center h-[34vh]  mt-6">
        <div
          className={`relative flex flex-col items-center m-4 rounded-t-2xl w-[18vw] h-[20vh] bg-gradient-to-b ${
            uniSwap ? "from-[#2a5454]" : ""
          } ${pancakeSwap ? "from-[#523b34]" : ""} ${
            quickSwap ? "from-[#2f2951]" : ""
          }`}
        >
          <div className="absolute -top-5 left-[44%] w-10 h-10">
            <Image
              src={startIMG}
              alt="worstationUni"
              width="100%"
              height="100%"
            />
          </div>
          <p className="text-white font-bold text-center mt-7">#1</p>
          <div className="flex items-center">
            <p className="font-semibold text-base text-gray-400">
              Best pair today is
            </p>{" "}
            <p className="text-white ml-2 font-semibold text-base">
              {mainData?.[0].name}
            </p>
          </div>
          <p
            className={`text-3xl font-bold ${uniSwap ? "text-[#22977a]" : ""}
          ${pancakeSwap ? "text-[#fba562]" : ""}
          ${quickSwap ? "text-[#b8a6ff]" : ""} mt-3`}
          >
            ${mainData?.[0].price.toFixed(10)}
          </p>
          <p
            className={`text-xl font-bold ${uniSwap ? "text-[#22977a]" : ""}
          ${pancakeSwap ? "text-[#fba562]" : ""}
          ${quickSwap ? "text-[#b8a6ff]" : ""}
          ${
            mainData?.[0].priceChange.toFixed(2) < 0 ? "text-[#e0304f]" : ""
          } mt-3`}
          >
            {mainData?.[0].priceChange.toFixed(4)}%
          </p>
          <div className="mt-4">
            <p className="text-gray-400 font-semibold">
              {currentDate.getDate()}{" "}
              {currentDate.toLocaleString("default", { month: "long" })}{" "}
              {currentDate.getFullYear()} at {currentDate.toLocaleTimeString()}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 ml-5">
          <div className="flex items-center ">
            <svg
              width="22"
              height="27"
              viewBox="0 0 11 12"
              fill="none"
              focusable="false"
              className="chakra-icon css-lv5gj7"
            >
              <path
                d="M9.68055 1.61143C9.68055 1.44247 9.53731 1.3055 9.36061 1.3055L6.51549 1V1C6.33903 0.9999 6.19591 1.1366 6.1958 1.30532C6.19575 1.38656 6.22954 1.46447 6.2897 1.52183L9.45432 4.54782V4.54782C9.57891 4.6673 9.78121 4.66757 9.90616 4.54843C9.96631 4.49107 10.0001 4.41316 10.0001 4.33192L9.68055 1.61143Z"
                stroke={`${uniSwap ? "#798dff" : ""}
               ${pancakeSwap ? "#ffb880" : ""}
               ${quickSwap ? "#b8a6ff" : ""}`}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6.74268 1.95435L9.00312 4.11577L5.92767 7.05651C5.7534 7.22313 5.47087 7.22313 5.29661 7.05651L3.66722 5.49849V5.49849C3.49296 5.33187 3.49296 5.06171 3.66722 4.89508L6.74268 1.95435V1.95435Z"
                stroke={`${uniSwap ? "#798dff" : ""}
               ${pancakeSwap ? "#ffb880" : ""}
               ${quickSwap ? "#b8a6ff" : ""}`}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4.48055 6.27783L1 9.60592"
                stroke={`${uniSwap ? "#798dff" : ""}
               ${pancakeSwap ? "#ffb880" : ""}
               ${quickSwap ? "#b8a6ff" : ""}`}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M5.15816 6.92554H5.15816C4.53392 7.52236 4.53386 8.49007 5.15803 9.08696C5.15807 9.087 5.15812 9.08704 5.15816 9.08708"
                stroke={`${uniSwap ? "#798dff" : ""}
               ${pancakeSwap ? "#ffb880" : ""}
               ${quickSwap ? "#b8a6ff" : ""}`}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8.65287 8.43701L7.97461 9.08556"
                stroke={`${uniSwap ? "#798dff" : ""}
               ${pancakeSwap ? "#ffb880" : ""}
               ${quickSwap ? "#b8a6ff" : ""}`}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7.06889 9.95166L6.39062 10.6002"
                stroke={`${uniSwap ? "#798dff" : ""}
               ${pancakeSwap ? "#ffb880" : ""}
               ${quickSwap ? "#b8a6ff" : ""}`}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8.65287 10.6002L7.97461 9.95166"
                stroke={`${uniSwap ? "#798dff" : ""}
               ${pancakeSwap ? "#ffb880" : ""}
               ${quickSwap ? "#b8a6ff" : ""}`}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7.06889 9.08556L6.39062 8.43701"
                stroke={`${uniSwap ? "#798dff" : ""}
               ${pancakeSwap ? "#ffb880" : ""}
               ${quickSwap ? "#b8a6ff" : ""}`}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="text-white text-opacity-75 text-lg font-bold ml-1">
              Trending
            </p>
            <div className="flex items-center justify-between transition-all h-8 w-24 bg-[#111118] rounded-xl ml-2">
              <button
                className="flex items-center justify-center transition-all focus:bg-[#22222f] h-7 w-7 rounded-full ml-1 "
                onClick={(e) => handleUniSwap()}
              >
                <svg
                  width="12"
                  height="18"
                  viewBox="0 0 10 14"
                  fill="none"
                  focusable="false"
                  className="chakra-icon css-nfxww5 mr-1"
                >
                  <path
                    d="M8.92426 10.0373C9.50018 9.27492 9.99764 8.61656 10.0002 7.3447C10.0025 6.27017 9.28602 5.13672 8.2582 4.58796C7.91191 4.4035 7.28948 4.16351 6.62667 4.35043C6.62667 4.35073 6.62699 4.35103 6.62699 4.35166C6.81629 4.72332 7.02265 5.25121 6.98553 5.73399C6.97422 5.88285 6.94711 6.03141 6.90414 6.17781C7.59185 7.17927 7.34249 8.16203 7.07955 9.19879C6.98944 9.5542 6.89609 9.92189 6.83148 10.3157L6.81499 10.4148C6.73102 10.924 6.63602 11.5013 6.6073 12.143C6.57372 12.8916 6.76365 13.425 7.17161 13.7282C7.34119 13.8544 7.54468 13.9391 7.76261 13.9933C7.93997 14.0375 8.08107 13.8533 7.98711 13.7037C7.98627 13.7024 7.98544 13.701 7.98461 13.6997C7.63447 13.1393 7.57213 12.4966 7.80921 11.8904C8.11448 11.1094 8.54473 10.5397 8.92426 10.0373Z"
                    fill={`${uniSwap ? "#ff7bca" : "#525561"}`}
                  ></path>
                  <path
                    d="M5.98355 6.53599C5.87791 6.40679 5.85238 6.23398 5.91667 6.08211C5.97414 5.94583 6.00839 5.80649 6.01906 5.66745C6.0462 5.31542 5.79071 4.75655 5.54167 4.38607C5.50449 4.33059 5.46247 4.26671 5.41591 4.1948C5.34679 4.0881 5.17769 4.10869 5.13878 4.2284C5.13849 4.22931 5.13821 4.23018 5.13792 4.23108C5.10851 4.32039 5.08235 4.39312 5.05941 4.44961C4.93184 4.76237 4.86594 5.06837 4.86916 5.33415C4.8727 5.62017 4.95152 5.86082 5.11012 6.06983C5.25481 6.26012 5.22575 6.52344 5.04229 6.68091C5.02744 6.69346 4.98934 6.73524 4.95831 6.76868C4.791 6.95068 4.51094 7.25516 3.98897 7.50773C3.38932 7.79774 2.61489 7.94356 1.68724 7.94074C1.68721 7.94074 1.68718 7.94077 1.68715 7.94077C1.36058 8.40269 0.953605 8.95298 0.703901 9.21969L0.670634 9.25496C0.354079 9.59227 -0.00509645 9.97467 5.47695e-05 10.1454C0.00848665 10.4154 0.141872 10.9553 0.588934 11.2638C1.00981 11.5541 1.62807 11.5882 2.42688 11.3657C2.67077 11.2975 2.89461 11.2165 3.11133 11.1386C3.43758 11.0207 3.74542 10.9096 4.05616 10.8688C5.45059 10.6861 5.70674 10.3172 5.84467 10.1189C5.8605 10.0959 5.87762 10.0717 5.89569 10.0471C5.89578 10.0469 5.89589 10.0466 5.89601 10.0464C5.96464 9.66613 6.05227 9.31914 6.13766 8.983C6.42477 7.85051 6.54849 7.22718 5.98355 6.53599ZM0.814321 10.6603C0.542688 10.6603 0.341445 10.4495 0.329819 10.2C0.318164 9.95138 0.56076 9.7396 0.814321 9.7396C1.08595 9.7396 1.2872 9.95075 1.29882 10.2C1.31048 10.4485 1.06788 10.6603 0.814321 10.6603ZM5.18373 8.4895C4.88913 8.76942 4.49635 8.92287 4.08517 8.92285C4.02799 8.92285 3.97081 8.91978 3.91299 8.91366C3.64717 8.88604 3.45494 8.6586 3.48403 8.40602C3.51341 8.15312 3.75244 7.97079 4.01861 7.99844C4.19689 8.01717 4.37197 7.95887 4.49859 7.83823C4.68789 7.65869 4.9944 7.65869 5.1837 7.83823C5.37303 8.01807 5.37303 8.30964 5.18373 8.4895Z"
                    fill={`${uniSwap ? "#ff7bca" : "#525561"}`}
                  ></path>
                  <path
                    d="M3.90161 5.38354C3.4875 5.63368 3.00815 5.72359 2.69289 5.72797C2.69064 5.72797 2.68805 5.72797 2.68578 5.72797C2.50975 5.72797 2.34727 5.6371 2.26197 5.4907L2.20801 5.39831C1.7364 5.88875 1.17791 6.46206 0.174316 6.55968C0.540945 6.8058 1.05356 7.02034 1.71283 7.02004C3.23486 7.02004 3.81404 6.58694 4.11865 6.27883C3.98302 6.00687 3.91065 5.70672 3.90161 5.38354Z"
                    fill={`${uniSwap ? "#ff7bca" : "#525561"}`}
                  ></path>
                  <path
                    d="M0.447283 0.0735658C0.277667 -0.116117 -0.0325 0.0965891 0.103302 0.309432L2.95046 4.77211C3.19559 4.72024 3.81298 4.33371 3.95736 4.02068C3.80211 3.82919 1.91178 1.71156 0.447283 0.0735658Z"
                    fill={`${uniSwap ? "#ff7bca" : "#525561"}`}
                  ></path>
                </svg>
              </button>
              <button
                className="flex items-center justify-center transition-all focus:bg-[#22222f] h-7 w-7 rounded-full"
                onClick={(e) => handlePancakeSwap()}
              >
                <svg
                  width="16"
                  height="22"
                  viewBox="0 0 14 14"
                  fill="none"
                  focusable="false"
                  className="chakra-icon css-82u03q"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.51052 2.18829C2.29594 1.05084 3.17762 0 4.34653 0C5.37808 0 6.21427 0.827776 6.21427 1.84889V4.12828C6.47229 4.11026 6.73446 4.10101 7 4.10101C7.2551 4.10101 7.5071 4.10954 7.75531 4.1262V1.84889C7.75531 0.827776 8.59151 0 9.62305 0C10.792 0 11.6736 1.05084 11.4591 2.18829L10.9536 4.86758C12.6883 5.61728 14 6.91937 14 8.55557V9.54546C14 10.8909 13.1008 12.0175 11.8437 12.778C10.5767 13.5444 8.86283 14 7 14C5.13716 14 3.42326 13.5444 2.15634 12.778C0.899229 12.0175 0 10.8909 0 9.54546V8.55557C0 6.92803 1.29821 5.63097 3.01827 4.87979L2.51052 2.18829ZM10.3059 5.21959L10.8974 2.08445C11.0463 1.295 10.4344 0.565657 9.62305 0.565657C8.90711 0.565657 8.32673 1.14018 8.32673 1.84889V4.74959C8.13911 4.72579 7.94854 4.70689 7.75531 4.69324C7.50755 4.67569 7.25554 4.66668 7 4.66668C6.73402 4.66668 6.4718 4.67644 6.21427 4.69543C6.02104 4.70969 5.83043 4.72911 5.64286 4.75348V1.84889C5.64286 1.14018 5.06247 0.565657 4.34653 0.565657C3.53524 0.565657 2.9233 1.295 3.07224 2.08445L3.66565 5.23001C1.81055 5.91216 0.571428 7.1463 0.571428 8.55557V9.54546C0.571428 11.6932 3.4496 13.4344 7 13.4344C10.5504 13.4344 13.4286 11.6932 13.4286 9.54546V8.55557C13.4286 7.13912 12.1768 5.89956 10.3059 5.21959Z"
                    fill={`${pancakeSwap ? "#78451D" : "#525561"}`}
                  ></path>
                  <path
                    d="M13.4284 9.54555C13.4284 11.6933 10.5503 13.4344 6.99984 13.4344C3.44946 13.4344 0.571289 11.6933 0.571289 9.54555V8.55566H13.4284V9.54555Z"
                    fill={`${pancakeSwap ? "#FEDC90" : "#525561"}`}
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.07209 2.08447C2.92317 1.29502 3.5351 0.565674 4.34639 0.565674C5.06231 0.565674 5.6427 1.14019 5.6427 1.84891V4.75352C6.0802 4.69661 6.53427 4.66668 6.99984 4.66668C7.45466 4.66668 7.89848 4.69525 8.32657 4.74959V1.84891C8.32657 1.14019 8.90696 0.565674 9.6229 0.565674C10.4342 0.565674 11.0462 1.29502 10.8972 2.08447L10.3058 5.21964C12.1766 5.89956 13.4284 7.13912 13.4284 8.55557C13.4284 10.7033 10.5503 12.4445 6.99984 12.4445C3.44946 12.4445 0.571289 10.7033 0.571289 8.55557C0.571289 7.14634 1.81041 5.91216 3.66551 5.23001L3.07209 2.08447Z"
                    fill={`${pancakeSwap ? "#D1884F" : "#525561"}`}
                  ></path>
                  <path
                    d="M5.21422 8.27275C5.21422 8.85851 4.89441 9.33333 4.49992 9.33333C4.10544 9.33333 3.78564 8.85851 3.78564 8.27275C3.78564 7.68698 4.10544 7.21216 4.49992 7.21216C4.89441 7.21216 5.21422 7.68698 5.21422 8.27275Z"
                    fill={`${pancakeSwap ? "#78451D" : "#525561"}`}
                  ></path>
                  <path
                    d="M10.1429 8.27275C10.1429 8.85851 9.82311 9.33333 9.42861 9.33333C9.03416 9.33333 8.71436 8.85851 8.71436 8.27275C8.71436 7.68698 9.03416 7.21216 9.42861 7.21216C9.82311 7.21216 10.1429 7.68698 10.1429 8.27275Z"
                    fill={`${pancakeSwap ? "#78451D" : "#525561"}`}
                  ></path>
                </svg>
              </button>
              <button
                className="flex items-center justify-center  transition-all focus:bg-[#292938] h-7 w-7 mr-2 rounded-full"
                onClick={(e) => handleQuickSwap()}
              >
                <div className="h-3 w-5 flex items-center justify-center">
                  <Image
                    src={quickIMG}
                    alt="quick swap"
                    width="100%"
                    height="100%"
                  />{" "}
                </div>
              </button>
            </div>
            <div className="bg-[#303453] h-7 flex items-center  rounded-xl px-1 py-0.5 m-1 cursor-pointer ml-32">
              <p className="text-[#6a7bdd] mx-1 text-xs">Show All</p>
            </div>
          </div>
        </div>
      </div>{" "}
      <TrendingTable mainData={mainData} />
    </div>
  );
};

export default MainSection;
