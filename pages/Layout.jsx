import React from "react";
import Header from "../components/Header";
import HeadInfo from "../components/HeadInfo";

const Layout = ({ children }) => {
  return (
    <>
      <HeadInfo />
      <div className="taeh-layout">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
