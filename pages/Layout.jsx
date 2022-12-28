import { Analytics } from "@vercel/analytics/react";
import React from "react";
import Header from "../components/Header";
import HeadInfo from "../components/HeadInfo";
import ToggleMode from "../components/ToggleMode";

const Layout = ({ children }) => {
  return (
    <>
      <HeadInfo />
      <div className="taeh-layout">
        <Header />
        {children}
        <ToggleMode />
        <Analytics />
      </div>
    </>
  );
};

export default Layout;
