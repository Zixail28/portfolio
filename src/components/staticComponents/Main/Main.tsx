import { FC, PropsWithChildren } from "react";
import styles from "./Main.module.scss";

const Main: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
