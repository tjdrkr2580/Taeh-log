import IndexStyle from "../styles/index.module.scss";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

function Home({ posts }) {
  return <div className={IndexStyle.taeh}>메인</div>;
}

export const getStaticProps = () => {
  const POST_PATH = path.join(process.cwd(), "public/posts");
  const postFilePaths = fs.readdirSync(POST_PATH).map((post) => {
    const source = fs.readFileSync(path.join(POST_PATH, post));
    const { content, data } = matter(source);
    console.log(content, data);
  });
  return {
    props: {},
  };
};

export default Home;
