import { FC } from 'react';
import styles from "./Header.module.scss";
import NavBar from './NavBar/NavBar';

const Header: FC = () => {
  return <div className={styles.header}>
    <h1 className={styles.logo}>Zixail28</h1>
    <NavBar></NavBar>
  </div>
}

export default Header