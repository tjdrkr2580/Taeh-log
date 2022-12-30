import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { useRecoilValue } from "recoil";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { mode } from "../store";

const Layout = ({ children }) => {
  const darkmode = useRecoilValue(mode);
  return (
    <>
      <div className={darkmode ? "taeh-dark-layout" : "taeh-layout"}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
