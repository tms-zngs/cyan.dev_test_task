"use client";

import React from "react";

interface GlowCircleProps {
  className?: string;
}

const GlowCircle: React.FC<GlowCircleProps> = ({ className }) => {
  return (
    <div
      className={`w-[180px] h-[180px] rounded-full bg-[#13b8ff] ${className}`}
      style={{ filter: "blur(120px)" }}
    />
  );
};

export default GlowCircle;
