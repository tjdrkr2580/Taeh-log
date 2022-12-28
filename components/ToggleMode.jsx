import React from "react";
import { useRecoilValue } from "recoil";
import ToggleModeStyle from "../styles/toggleMode.module.scss";

const ToggleMode = () => {
  // const darkmode = useRecoilValue(darkmode);
  return <button className={ToggleModeStyle.togglemode}>🌕</button>;
};

export default ToggleMode;
