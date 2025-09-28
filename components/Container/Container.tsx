import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
        mx-auto
        w-full max-w-[320px]
        lg:w-[1120px] lg:max-w-[1120px]
      "
    >
      {children}
    </div>
  );
};

export default Container;
