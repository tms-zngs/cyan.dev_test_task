import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-[400px] mx-auto px-[40px] lg:max-w-[1200px] lg:px-[40px] lg:my-[2.5rem]">
      {children}
    </div>
  );
};

export default Container;
