import { FC } from 'react'
import styles from "./SocialListItem.module.scss";

const SocialListItem: FC<{url: string, path: string, social: string}> = ({url, path, social}) => {
  return <a href={url} target='_blank' className={`${styles.socialItem} ${styles[social]}`}><img src={path}></img></a>
}

export default SocialListItem