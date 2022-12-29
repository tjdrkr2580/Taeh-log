import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { useRecoilValue } from "recoil";
import Header from "../components/Header";
import HeadInfo from "../components/HeadInfo";
import { mode } from "../store";

const Layout = ({ children }) => {
  const darkmode = useRecoilValue(mode);
  return (
    <>
      <HeadInfo />
      <div className={darkmode ? "taeh-dark-layout" : "taeh-layout"}>
        <Header />
        {children}
        <Analytics />
      </div>
    </>
  );
};

export default Layout;
