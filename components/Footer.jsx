import { BsInstagram } from "react-icons/bs";
import FooterStyle from "/styles/footer.module.scss";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <ul>
        <li>
          <a
            href="https://github.com/tjdrkr2580"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/only04_/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </li>
        <li>
          ⓒ 2023. <span>Taeh</span> all rights reserved.
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
