import { FC, PropsWithChildren } from "react";

const Main: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <div>{children}</div>;
};

export default Main;
