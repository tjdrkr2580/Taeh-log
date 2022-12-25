import Link from "next/link";

import HeaderStyle from "../styles/header.module.scss";

const Header = () => {
  return (
    <section className={HeaderStyle.header}>
      <Link href="/">
        <h1 className={HeaderStyle.logo}>Taeh</h1>
      </Link>
      <ul>
        <Link href="/">
          <li>home</li>
        </Link>
        <Link href="/">
          <li>blog</li>
        </Link>
      </ul>
    </section>
  );
};

export default Header;
