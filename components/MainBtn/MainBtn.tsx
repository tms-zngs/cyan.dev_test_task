"use client";

import React, { CSSProperties } from "react";
import BtnCircle from "../BtnCircle/BtnCircle";

interface MainBtnProps {
  text?: string;
  width?: string;
  onClick?: () => void;
  background?: string;
  boxShadow?: string;
  padding?: string;
  className?: string;
  style?: CSSProperties;
  showCircle?: boolean;
}

const MainBtn: React.FC<MainBtnProps> = ({
  onClick,
  text = "Придбати зі знижкою",
  style,
  showCircle = true,
  className,
}) => {
  return (
    <button
      className={`relative h-[3.75rem] flex items-center justify-center bg-white rounded-full
                 hover:bg-[#f0f0f0] hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer
                 ${className}`}
      onClick={onClick}
      style={style}
    >
      <p className="font-semibold text-[14px] lg:text-[22px] leading-[1.5424] whitespace-nowrap lg:leading-[1.66667]">
        {text}
      </p>
      <div className="absolute right-0 top-0">
        {showCircle && (
          <div className="absolute right-0 top-0">
            <BtnCircle />
          </div>
        )}
      </div>
    </button>
  );
};
export default MainBtn;
