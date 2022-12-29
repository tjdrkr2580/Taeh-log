import Link from "next/link";
import { useRecoilState } from "recoil";
import { mode } from "../store";

import HeaderStyle from "../styles/header.module.scss";

const Header = () => {
  const [darkmode, setDarkmode] = useRecoilState(mode);
  const clickToggle = () => {
    setDarkmode(!darkmode);
  };
  return (
    <section
      className={darkmode ? HeaderStyle.darkHeader : HeaderStyle.lightHeader}
    >
      <Link href="/">
        <h1 className={HeaderStyle.logo}>Taeh</h1>
      </Link>
      <ul>
        <Link href="/about">
          <li>About</li>
        </Link>
        <li onClick={clickToggle}>{darkmode ? "Night" : "Morning"}</li>
      </ul>
    </section>
  );
};

export default Header;
