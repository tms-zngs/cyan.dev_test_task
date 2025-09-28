"use client";

import React, { CSSProperties } from "react";

interface LevelBadgeProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  textStyle?: CSSProperties;
}

const LevelBadge: React.FC<LevelBadgeProps> = ({
  text,
  className,
  style,
  textStyle,
}) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full whitespace-nowrap ${className}`}
      style={style}
    >
      <span style={textStyle}>{text}</span>
    </div>
  );
};

export default LevelBadge;
