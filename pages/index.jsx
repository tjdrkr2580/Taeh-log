import IndexStyle from "../styles/index.module.scss";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

function Home({ posts }) {
  return (
    <div className={IndexStyle.taeh}>
      <ul className={IndexStyle.postListWrapper}>
        {posts.map((post, index) => (
          <li className={IndexStyle.postlist} key={index}>
            <h1>{post.data.title}</h1>
            <p>{post.data.desc}</p>
            <span>{post.data.date}</span>
            <div>{post.data.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const post_files = fs.readdirSync(path.join(process.cwd(), "public/posts"));
  const posts = post_files.map((filePath) => {
    const post_read = fs.readFileSync(
      path.join(process.cwd(), `public/posts/${filePath}`)
    );
    const { data } = matter(post_read);
    return { data };
  });
  return {
    props: {
      posts,
    },
  };
};

export default Home;
