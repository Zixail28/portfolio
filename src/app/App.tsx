import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Layout from "../pages/Layout";
import PageNotFound from "../pages/404page/PageNotFound";
import Homepage from "../pages/Homepage/Homepage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<Homepage />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
