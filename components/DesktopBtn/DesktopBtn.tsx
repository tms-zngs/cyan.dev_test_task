"use client";

import React, { CSSProperties } from "react";

interface DesktopBtnProps {
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

const DesktopBtn: React.FC<DesktopBtnProps> = ({
  onClick,
  text = "Придбати зі знижкою",
  style,
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
      <p className="font-semibold text-[12px] whitespace-nowrap leading-[1.66667]">
        {text}
      </p>
    </button>
  );
};
export default DesktopBtn;
