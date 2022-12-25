import Link from "next/link";

const Header = () => {
  return (
    <section>
      <Link href="/">
        <h1 className="logo"></h1>
      </Link>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/">
          <li>Posts</li>
        </Link>
      </ul>
    </section>
  );
};

export default Header;
