import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
        w-full
        max-w-[320px]
        mx-auto
      "
    >
      {children}
    </div>
  );
};

export default Container;
