"use client";

import React from "react";

interface DiscountButtonProps {
  width?: string;
  text?: string;
  discount?: string;
  circleSize?: string;
  textOffset?: string;
  onClick?: () => void;
  /** Фон кнопки */
  background?: string;
  /** Тень кнопки */
  boxShadow?: string;
}

const DiscountButton: React.FC<DiscountButtonProps> = ({
  width = "19.56rem",
  text = "Придбати зі знижкою",
  discount = "-50%",
  circleSize = "3.75rem",
  textOffset = "0",
  onClick,
  background,
  boxShadow,
}) => {
  return (
    <button
      onClick={onClick}
      className="relative rounded-full h-[3.75rem] flex items-center justify-between
                 hover:bg-[#f0f0f0] hover:shadow-lg transition-all duration-200 cursor-pointer"
      style={{ width, background, boxShadow }}
    >
      <span style={{ width: circleSize }} />
      <span
        className="text-center font-medium text-black whitespace-nowrap"
        style={{ marginLeft: textOffset }}
      >
        {text}
      </span>
      <span
        className="rounded-full bg-[#ff4a77] flex items-center justify-center
                   hover:scale-105 transition-transform duration-200"
        style={{ width: circleSize, height: circleSize }}
      >
        <span className="font-semibold text-[1.25rem] leading-[1.27605] text-white">
          {discount}
        </span>
      </span>
    </button>
  );
};

export default DiscountButton;
