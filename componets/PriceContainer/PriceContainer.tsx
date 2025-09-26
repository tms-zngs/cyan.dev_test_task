import React from "react";

interface PriceContainerProps {
  background?: string;
  boxShadow?: string;
  children?: React.ReactNode;
}

const PriceContainer: React.FC<PriceContainerProps> = ({
  background = "#0c0117",
  boxShadow = "inset 4px 6px 10px 4px rgba(167,93,243,0.2)",
  children,
}) => {
  return (
    <div
      className="relative rounded-[1.75rem] w-[19.56rem] h-[26.88rem] p-[32px]"
      style={{
        background,
        boxShadow,
      }}
    >
      {children}
    </div>
  );
};

export default PriceContainer;
