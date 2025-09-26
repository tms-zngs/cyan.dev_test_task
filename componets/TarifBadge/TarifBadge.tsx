"use client";

import React from "react";

interface BadgeProps {
  text: string;
  background?: string;
  textColor?: string;
  textGradient?: string;
  fontWeight?: number | string;
  fontSize?: string;
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
  boxShadow?: string;
  paddingX?: string;
  paddingY?: string;
}

const TarifBadge: React.FC<BadgeProps> = ({
  text,
  background = "#000",
  textColor = "#fff",
  textGradient,
  fontWeight = 700,
  fontSize = "1rem",
  textTransform = "uppercase",
  boxShadow,
  paddingX = "34px",
  paddingY = "12px",
}) => {
  const gradientStyle = textGradient
    ? {
        backgroundImage: textGradient,
        WebkitBackgroundClip: "text" as const,
        WebkitTextFillColor: "transparent" as const,
        color: undefined,
      }
    : { color: textColor };

  return (
    <span
      className="inline-flex items-center justify-center rounded-[1.12rem] whitespace-nowrap text-center"
      style={{
        background,
        fontWeight,
        fontSize,
        textTransform,
        boxShadow,
        padding: `${paddingY} ${paddingX}`,
        width: "auto",
        ...gradientStyle,
      }}
    >
      {text}
    </span>
  );
};

export default TarifBadge;
