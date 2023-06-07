import { FC } from "react";
import styles from "./Footer.module.scss";
import { IComponentWichClasses } from '../../../shared/interfaces/IComponentWithClasses';
import SocialList from "./SocialList/SocialList";

const Footer: FC<IComponentWichClasses> = ({classes}) => {
  return (
    <footer className={`${styles.footer || ""} ${classes || ""}`}>
      <SocialList />
      <h3>©2023 Zixail28 | All Rights Reserved</h3>
    </footer>
  );
};

export default Footer;
