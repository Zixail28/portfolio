import { FC } from 'react'
import styles from "./Button.module.scss";

interface IButton {
  children?: any,
}

const Button: FC<IButton> = ({children}) => {
  return <button className={styles.button}>{children}</button>
}

export default Button