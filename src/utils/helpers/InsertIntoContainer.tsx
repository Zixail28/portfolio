import { FC, PropsWithChildren, ReactElement } from "react";
import styles from "./InsertIntoContainer.module.scss";
import React from "react";

const InsertIntoContainer: FC<PropsWithChildren<{children: ReactElement, style?: string}>> = ({ children, style }) => {
  return <div className={style || ""}>{React.cloneElement(children, {
    classes: styles.container,
  })}</div>;
};

export default InsertIntoContainer;
