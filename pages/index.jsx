import IndexStyle from "../styles/index.module.scss";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

function Home({ posts }) {
  return (
    <div className={IndexStyle.taeh}>
      <ul className={IndexStyle.postListWrapper}>
        {posts.map((post, index) => (
          <Link
            className={IndexStyle.postlist}
            href={`/post/${post.fileName}`}
            key={index}
          >
            <Image
              width="140"
              height="140"
              alt="darkmode icon"
              placeholder="blur"
              quality={100}
              src={require(`/public/thumbnail/${post.fileName}.jpg`)}
            />
            <li>
              <h1>{post.data.title}</h1>
              <span>{post.data.date}</span>
              <ul>
                <li>
                  <span>{post.data.category}</span>
                </li>
              </ul>
            </li>
          </Link>
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
    let fileName = filePath.split(".")[0];
    return { data, fileName };
  });
  return {
    props: {
      posts,
    },
  };
};

export default Home;
