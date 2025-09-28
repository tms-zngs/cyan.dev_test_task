import React, { CSSProperties } from "react";

interface PriceContainerProps {
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
}

const PriceContainer: React.FC<PriceContainerProps> = ({
  children,
  style,
  className,
}) => {
  return (
    <div
      className={`relative rounded-[1.75rem] w-[312px] h-[430px] p-[32px] lg:w-[360px] lg:h-[464px] lg:p-[36px] ${className || ""}`}
      style={{
        background: "#0c0117",
        boxShadow: "inset 4px 6px 10px 4px rgba(167,93,243,0.2)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default PriceContainer;
