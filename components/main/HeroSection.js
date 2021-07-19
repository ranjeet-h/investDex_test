import React from "react";
import Image from "next/image";
import TrendingTable from "../rightSideBar/TrendingTable";

const HeroSection = ({
  uniSwap,
  setUniSwap,
  pancakeSwap,
  setPancakeSwap,
  quickSwap,
  setQuickSwap,
}) => {
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

  let workstationIMG = "/";
  if (uniSwap) {
    workstationIMG = "/workstationUni.svg";
  }
  if (pancakeSwap) {
    workstationIMG = "/workstationPancake.svg";
  }
  if (quickSwap) {
    workstationIMG = "/workstationQuick .svg";
  }
  return (
    <div className="grid grid-cols-3 m-2 h-[40vh] ">
      {/* Box 1 */}
      <div className="bg-[#232230] ml-4 mr-4 rounded-3xl  ">
        <div
          className={`relative m-4 flex flex-col items-center justify-center rounded-t-2xl bg-gradient-to-b ${
            uniSwap ? "from-[#5d394b]" : ""
          } ${pancakeSwap ? "from-[#523b34]" : ""} ${
            quickSwap ? "from-[#2f2951]" : ""
          }`}
        >
          <div className={`${uniSwap ? "mt-4" : "mt-8"}`}>
            <Image
              src={workstationIMG}
              alt="worstationUni"
              width={uniSwap ? 280 : 205}
              height={uniSwap ? 280 : 205}
            />
          </div>
          <div className="absolute top-48 w-full">
            <div
              className={`flex items-center justify-center ${
                uniSwap ? "text-[#e45a79]" : ""
              } ${pancakeSwap ? "text-[#f9a35f]" : ""} ${
                quickSwap ? "text-[#b2a0fb]" : ""
              } `}
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                focusable="false"
                className="chakra-icon css-1jxgtto"
              >
                <path
                  d="M12.5915 12.7994H5.94279C5.55639 12.7994 5.24994 13.1048 5.24994 13.4899C5.24994 13.8749 5.55639 14.1803 5.94279 14.1803H12.5915C12.9778 14.1803 13.2843 13.8749 13.2843 13.4899C13.2843 13.1048 12.9778 12.7994 12.5915 12.7994Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M5.26282 9.65271C5.26282 10.0378 5.56927 10.3431 5.95566 10.3431H12.6043C12.9907 10.3431 13.2972 10.0378 13.2972 9.65271C13.2972 9.26766 12.9907 8.96228 12.6043 8.96228H5.95566C5.56927 8.96228 5.26282 9.26766 5.26282 9.65271Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M5.95566 6.50597H8.48722C8.87362 6.50597 9.18007 6.20059 9.18007 5.81555C9.18007 5.4305 8.87362 5.12512 8.48722 5.12512H5.95566C5.56927 5.12512 5.26282 5.4305 5.26282 5.81555C5.26282 6.20059 5.56927 6.50597 5.95566 6.50597Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M16.5351 4.91265C17.8941 4.91265 19 3.81062 19 2.45632C19 1.10203 17.8941 0 16.5351 0C15.176 0 14.0701 1.10203 14.0701 2.45632C14.0701 3.81062 15.176 4.91265 16.5351 4.91265ZM16.5351 1.39413C17.1346 1.39413 17.6143 1.87212 17.6143 2.4696C17.6143 3.06709 17.1346 3.54507 16.5351 3.54507C15.9355 3.54507 15.4558 3.06709 15.4558 2.4696C15.4558 1.87212 15.9355 1.39413 16.5351 1.39413Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M17.5877 6.46615C17.2013 6.46615 16.8948 6.77153 16.8948 7.15658V13.6094C16.8948 16.0525 15.4025 17.6325 13.0975 17.6325H5.18303C2.83801 17.6325 1.38569 16.0923 1.38569 13.6094V6.2006C1.38569 3.75756 2.87798 2.17754 5.18303 2.17754H11.8717C12.2581 2.17754 12.5645 1.87216 12.5645 1.48712C12.5645 1.10207 12.2581 0.796691 11.8717 0.796691H5.18303C2.07854 0.783414 0 2.96091 0 6.18733V13.5961C0 16.8358 2.07854 19 5.18303 19H13.0975C16.202 19 18.2805 16.8358 18.2805 13.6094V7.15658C18.2805 6.77153 17.9741 6.46615 17.5877 6.46615Z"
                  fill="currentColor"
                ></path>
              </svg>
              <p className="ml-2 ">Workstation</p>
            </div>
            <p className="text-white mt-3 text-center font-bold text-lg">
              Check your workstation
            </p>
            <button
              className={` ${uniSwap ? "bg-[#4e3c4d]" : ""} ${
                pancakeSwap ? "bg-[#4e3a35]" : ""
              } ${
                quickSwap ? "bg-[#403c59]" : ""
              } focus:ring-2 ring-blue-400 cursor-pointer rounded-lg p-2.5 w-full mt-2 flex items-center justify-center`}
            >
              <p className="uppercase text-white font-bold ">complete Tasks</p>
              <svg
                stroke="currentColor"
                fill="white"
                strokeWidth="0"
                viewBox="0 0 16 16"
                focusable="false"
                className="chakra-icon ml-2 mt-1 css-1yyhfbq"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                  clipRule="evenodd"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="mt-2 flex items-center justify-between">
              <p
                className={`text-xs font-bold  ${
                  uniSwap ? "text-[#e45a79]" : ""
                } ${pancakeSwap ? "text-[#f9a35f]" : ""} ${
                  quickSwap ? "text-[#b2a0fb]" : ""
                }`}
              >
                Upcoming Events
              </p>
              <div
                className={`flex items-center border-[1px]  rounded-full  ${
                  uniSwap ? "border-[#e95e7c]" : ""
                } ${pancakeSwap ? "border-[#f9a35f]" : ""} ${
                  quickSwap ? "border-[#b2a0fb]" : ""
                } `}
              >
                <div className="ml-1">
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    focusable="false"
                    className="chakra-icon css-1v3al2u"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 9.91371V4.83838H12V9.95438C12 12.047 10.6828 13.3337 8.57519 13.3337H3.41822C1.33041 13.3337 0 12.0204 0 9.91371ZM3.30657 8.27358C3.00361 8.28758 2.75333 8.04692 2.74016 7.74092C2.74016 7.43425 2.97726 7.18092 3.28023 7.16692C3.5766 7.16692 3.82029 7.40092 3.82688 7.70025C3.84005 8.00758 3.60295 8.26092 3.30657 8.27358ZM6.01338 8.27358C5.71041 8.28758 5.46014 8.04692 5.44697 7.74092C5.44697 7.43425 5.68407 7.18092 5.98703 7.16692C6.28341 7.16692 6.5271 7.40092 6.53368 7.70025C6.54686 8.00758 6.30975 8.26092 6.01338 8.27358ZM8.70033 10.7265C8.39736 10.7198 8.15368 10.4665 8.15368 10.1598C8.14709 9.85316 8.39078 9.60049 8.69374 9.59383H8.70033C9.00988 9.59383 9.26015 9.84716 9.26015 10.1598C9.26015 10.4732 9.00988 10.7265 8.70033 10.7265ZM5.44697 10.1604C5.46014 10.4671 5.71041 10.7077 6.01338 10.6937C6.30975 10.6811 6.54686 10.4277 6.53368 10.1211C6.5271 9.82106 6.28341 9.58706 5.98703 9.58706C5.68407 9.60106 5.44697 9.85373 5.44697 10.1604ZM2.73317 10.1604C2.74635 10.4671 2.99662 10.7077 3.29958 10.6937C3.59596 10.6811 3.83306 10.4277 3.81989 10.1211C3.8133 9.82106 3.56962 9.58706 3.27324 9.58706C2.97028 9.60106 2.73317 9.85373 2.73317 10.1604ZM8.16076 7.73368C8.16076 7.42701 8.39786 7.18034 8.70082 7.17368C8.9972 7.17368 9.2343 7.41301 9.24747 7.70701C9.25406 8.01368 9.01696 8.26701 8.72058 8.27301C8.41762 8.27968 8.16734 8.04634 8.16076 7.74034V7.73368Z"
                      fill="#686C79"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M0.00195312 4.83783C0.0105151 4.4465 0.043446 3.66983 0.105356 3.41983C0.421492 2.01383 1.49504 1.1205 3.02961 0.993164H8.97034C10.4917 1.12716 11.5785 2.0265 11.8946 3.41983C11.9558 3.66316 11.9888 4.44583 11.9973 4.83783H0.00195312Z"
                      fill="#686C79"
                    ></path>
                    <path
                      d="M3.53668 3.06C3.82647 3.06 4.04381 2.84067 4.04381 2.54667V0.514C4.04381 0.22 3.82647 0 3.53668 0C3.24688 0 3.02954 0.22 3.02954 0.514V2.54667C3.02954 2.84067 3.24688 3.06 3.53668 3.06Z"
                      fill="#686C79"
                    ></path>
                    <path
                      d="M8.46295 3.06C8.74615 3.06 8.97008 2.84067 8.97008 2.54667V0.514C8.97008 0.22 8.74615 0 8.46295 0C8.17315 0 7.95581 0.22 7.95581 0.514V2.54667C7.95581 2.84067 8.17315 3.06 8.46295 3.06Z"
                      fill="#686C79"
                    ></path>
                  </svg>
                </div>
                <p className="m-1 text-white font-bold text-xs">Events</p>
                <div className="mr-1">
                  <svg
                    stroke="currentColor"
                    fill="white"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    focusable="false"
                    className="chakra-icon css-1nrc84w"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div className="relative bg-[#232230] mr-4 rounded-3xl">
        <div className="absolute -top-2   left-[45%]  w-10  rounded-full bg-[#0bb68c] ">
          <p className="m-0.5 text-center  text-gray-600 font-bold text-xs">
            New
          </p>
        </div>
        <div className="bg-[#111118]  grid grid-cols-3 m-4 rounded-lg h-14">
          <div
            className={`${
              uniSwap ? "bg-[#232230] text-[#ff7bca]" : "text-[#525561]"
            } flex flex-col items-center justify-center cursor-pointer transition-all  rounded-lg m-1 h-13`}
            onClick={(e) => handleUniSwap()}
          >
            {" "}
            <svg
              width="14"
              height="24"
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
            <p className={`text-xs font-bold mt-0 pt-0`}>Uniswap</p>
          </div>
          <div
            className={`${
              pancakeSwap ? "bg-[#232230] text-[#d1884f]" : ""
            } flex flex-col items-center justify-center cursor-pointer transition-all text-[#525561] rounded-lg m-1 h-13`}
            onClick={(e) => handlePancakeSwap()}
          >
            <svg
              width="18"
              height="27"
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
            <p className="text-xs font-bold mt-0  pt-0">Pancake Swap</p>
          </div>
          <div
            className={`${
              quickSwap ? "bg-[#232230] text-[#37a6d7]" : ""
            } flex flex-col items-center justify-center cursor-pointer transition-all text-[#525561] rounded-lg m-1 h-13`}
            onClick={(e) => handleQuickSwap()}
          >
            <div className="h-6 w-5">
              <Image
                src={quickIMG}
                alt="quick swap"
                width="100%"
                height="100%"
              />{" "}
            </div>
            <p className="text-xs font-bold mt-0  pt-0">Quick Swap</p>
          </div>
        </div>
        <div className="flex m-4 items-center justify-center ring-2 ring-[#111118] p-1 pl-2 rounded-xl ring-opacity-40">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            focusable="false"
            className="chakra-icon css-u8k257"
          >
            <path
              d="M8.65039 0C13.4279 0 17.3008 3.78737 17.3008 8.45933C17.3008 10.6641 16.4382 12.6719 15.0251 14.1776L17.8043 16.8873C18.0648 17.1413 18.0653 17.5538 17.8055 17.8086C17.5693 18.0402 17.1992 18.0617 16.9381 17.8728L16.8633 17.8098L14.0514 15.0676C12.5713 16.2259 10.6936 16.9187 8.65039 16.9187C3.87291 16.9187 0 13.1313 0 8.45933C0 3.78737 3.87291 0 8.65039 0ZM8.65039 1.30296C4.60877 1.30296 1.33239 4.50698 1.33239 8.45933C1.33239 12.4117 4.60877 15.6157 8.65039 15.6157C12.692 15.6157 15.9684 12.4117 15.9684 8.45933C15.9684 4.50698 12.692 1.30296 8.65039 1.30296Z"
              fill="gray"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Search pair by symbol / name / pair contract"
            className="bg-[#232230] w-full ml-2 text-sm  text-white placeholder-gray-600"
          />
        </div>
        <div className="ml-4">
          <div className="flex items-center text-gray-500 cursor-pointer hover:text-white transition-all hover:bg-gradient-to-r from-[#1c1c27] rounded-lg ">
            <div className="h-14 w-14">
              <Image
                src="/pair_tool_dark.svg"
                alt="Pair Explorer"
                width="100%"
                height="100%"
              />
            </div>
            <div className="flex flex-col ">
              <p className="text-[#6271cb] font-bold ">Pair Explorer</p>
              <p className="text-gray-500 -m-1 ml-0 text-sm">
                Search and research on tokens
              </p>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              focusable="false"
              className="chakra-icon css-c67ogi ml-20"
              height="20"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
            </svg>
          </div>
          <div className=" pl-2 h-14 flex items-center text-gray-500 cursor-pointer hover:text-white transition-all hover:bg-gradient-to-r from-[#1c1c27] rounded-lg ">
            <div className="h-10 w-10">
              <Image
                src="/whale_tool_dark.svg"
                alt="Pair Explorer"
                width="100%"
                height="100%"
              />
            </div>
            <div className="flex flex-col ml-3 ">
              <p className="text-[#6271cb] font-bold ">Whale Watcher</p>
              <p className="text-gray-500 -m-1 ml-0 text-sm">
                Watch new Whales
              </p>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              focusable="false"
              className="chakra-icon css-c67ogi ml-[9.1rem]"
              height="20"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
            </svg>
          </div>
          <div
            className={`${
              pancakeSwap || quickSwap
                ? "hidden transition-all"
                : "block transition-all"
            }`}
          >
            <div className="flex items-center text-gray-500 cursor-pointer hover:text-white transition-all hover:bg-gradient-to-r from-[#1c1c27] rounded-lg ">
              <div className="h-14 w-14">
                <Image
                  src="/pool_tool_dark.svg"
                  alt="Pair Explorer"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="flex flex-col ">
                <p className="text-[#6271cb] font-bold ">Pool Explorer</p>
                <p className="text-gray-500 -m-1 ml-0 text-sm">
                  Find valuable tokens
                </p>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                focusable="false"
                className="chakra-icon css-c67ogi ml-[8.8rem]"
                height="20"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
              </svg>
            </div>
            <div className="flex items-center text-gray-500 cursor-pointer hover:text-white transition-all hover:bg-gradient-to-r from-[#1c1c27] rounded-lg ">
              <div className="h-14 w-14">
                <Image
                  src="/multi_tool_dark.svg"
                  alt="Pair Explorer"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="flex flex-col ">
                <p className="text-[#6271cb] font-bold ">Multi Swap</p>
                <p className="text-gray-500 -m-1 ml-0 text-sm">
                  Swap your tokens
                </p>
              </div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                focusable="false"
                className="chakra-icon css-c67ogi ml-[8.8rem]"
                height="20"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div className="bg-[#232230] mr-4 rounded-3xl ">
        <div className="flex justify-between ml-4 mt-2">
          <div className="flex items-center ">
            <div className="">
              <svg
                width="23"
                height="22"
                viewBox="0 0 17 16"
                fill="none"
                focusable="false"
                className="chakra-icon css-f2cdq9"
              >
                <path
                  d="M6.59515 2.78259H3.50023C3.23016 2.78259 3.01123 2.99761 3.01123 3.26284V7.34583C3.01123 7.61106 3.23016 7.82607 3.50023 7.82607H6.59515C6.86521 7.82607 7.08415 7.61106 7.08415 7.34583V3.26284C7.08415 2.99761 6.86521 2.78259 6.59515 2.78259Z"
                  fill="#0bb68c"
                ></path>
                <path
                  d="M17 6.6087C17 5.4561 16.0486 4.52174 14.875 4.52174H13.4583V1.3913C13.4583 0.622908 12.8241 0 12.0417 0H1.41667C0.634263 3.35877e-08 0 0.622909 0 1.3913V13.5652H0C2.06744e-07 14.9099 1.10996 16 2.47917 16H14.5208C15.89 16 17 14.9099 17 13.5652V6.6087ZM2.47917 14.6087C1.89236 14.6087 1.41667 14.1415 1.41667 13.5652V1.73913C1.41667 1.54703 1.57523 1.3913 1.77083 1.3913H11.6875C11.8831 1.3913 12.0417 1.54703 12.0417 1.73913V1.73913V13.5652V13.5652C12.0414 13.7703 12.0676 13.9746 12.1196 14.1732C12.1685 14.3592 12.0546 14.5489 11.8652 14.597C11.8363 14.6043 11.8066 14.608 11.7767 14.608L2.47917 14.6087ZM15.5833 13.5652C15.5833 14.1415 15.1076 14.6087 14.5208 14.6087C13.934 14.6087 13.4583 14.1415 13.4583 13.5652V6.26087C13.4583 6.06877 13.6169 5.91304 13.8125 5.91304H14.875C15.2662 5.91304 15.5833 6.2245 15.5833 6.6087V13.5652Z"
                  fill="#0bb68c"
                ></path>
                <path
                  d="M9.03196 3.85876H10.4486C10.742 3.85876 10.9799 4.09235 10.9799 4.3805V4.72833C10.9799 5.01648 10.742 5.25007 10.4486 5.25007H9.03196C8.73895 5.25084 8.50079 5.01818 8.5 4.73042C8.5 4.73042 8.5 4.73042 8.5 4.73042V4.38259V4.38258C8.49922 4.09405 8.73676 3.85953 9.03055 3.85877C9.03102 3.85877 9.03149 3.85876 9.03197 3.85876H9.03196Z"
                  fill="#0bb68c"
                ></path>
                <path
                  d="M9.03196 6.64139H10.4486C10.742 6.64139 10.9799 6.87498 10.9799 7.16313V7.51095C10.9799 7.7991 10.742 8.03269 10.4486 8.03269H9.03196C8.73911 8.03308 8.50117 7.80065 8.5 7.51304V7.16521V7.16521C8.49922 6.87668 8.73676 6.64216 9.03055 6.64139C9.03102 6.64139 9.03149 6.64139 9.03197 6.64139H9.03196Z"
                  fill="#0bb68c"
                ></path>
                <path
                  d="M3.36472 9.42401H10.4481C10.7415 9.42401 10.9793 9.6576 10.9793 9.94575V10.2936C10.9793 10.5817 10.7415 10.8153 10.4481 10.8153H3.36472C3.07187 10.8157 2.83394 10.5833 2.83277 10.2957V9.94784V9.94783C2.83199 9.6593 3.06952 9.42478 3.36331 9.42401C3.36378 9.42401 3.36426 9.42401 3.36473 9.42401H3.36472Z"
                  fill="#0bb68c"
                ></path>
                <path
                  d="M3.36402 12.2066H8.67652C8.96992 12.2066 9.20777 12.4402 9.20777 12.7284V13.0762C9.20777 13.3643 8.96992 13.5979 8.67652 13.5979H3.36402C3.07128 13.5983 2.83355 13.3658 2.83277 13.0783V12.7304V12.7304C2.8316 12.4423 3.06849 12.2078 3.36189 12.2066C3.3626 12.2066 3.36331 12.2066 3.36402 12.2066L3.36402 12.2066Z"
                  fill="#0bb68c"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col ml-3">
              <p className="text-gray-400">Latest News</p>
              <p className="text-xl font-bold text-white -mt-1.5">News Feed</p>
            </div>
          </div>
          <div className="bg-green-300 h-5 bg-opacity-20 rounded-xl px-1 py-0.5 m-1 mr-3 cursor-pointer">
            <p className="text-green-500 opacity-100 mx-1 text-xs">Show All</p>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default HeroSection;
