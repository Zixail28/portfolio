import { FC } from 'react';
import styles from "./Header.module.scss";
import NavBar from './NavBar/NavBar';
import { IComponentWichClasses } from '../../../shared/interfaces/IComponentWithClasses';

const Header: FC<IComponentWichClasses> = ({classes}) => {
  return <header className={`${styles.header} ${classes || ""}`}>
  <h1 className={styles.logo}><a href="/">Zixail28</a></h1>
  <NavBar></NavBar>
</header>
}

export default Header