import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/staticComponents/Header/Header";
import Main from "../components/staticComponents/Main/Main";
import Footer from "../components/staticComponents/Footer/Footer";
import InsertIntoContainer from "../utils/helpers/InsertIntoContainer";
import styles from "./Layout.module.scss";

const Layout: FC = () => {
  return (
    <>
      <InsertIntoContainer>
        <Header />
      </InsertIntoContainer>
      <Main>
        <Outlet />
      </Main>
      <InsertIntoContainer style={styles.footerBg}>
        <Footer />
      </InsertIntoContainer>
    </>
  );
};

export default Layout;
