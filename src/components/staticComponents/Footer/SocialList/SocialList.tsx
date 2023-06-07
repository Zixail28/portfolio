import { FC } from "react";
import styles from "./SocialList.module.scss";
import SocialListItem from "./SocialListItem/SocialListItem";
import { socialLinks } from "../../../../utils/constants/socialLinks";

const SocialList: FC = () => {
  return <div className={styles.socialList}>{socialLinks.map((social, i) => <SocialListItem url={social.url} path={social.imgPath} social={social.social} key={i}/>)}</div>;
};

export default SocialList;
