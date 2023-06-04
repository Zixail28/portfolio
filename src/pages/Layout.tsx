import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/staticComponents/Header/Header";
import Main from "../components/staticComponents/Main/Main";

const Layout: FC = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <Outlet />
      </Main>
      <div>Footer</div>
    </>
  );
};

export default Layout;
