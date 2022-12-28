import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Id from "../../styles/id.module.scss";
import HeadInfo from "../../components/HeadInfo";

const Post = ({ data, mdxSource }) => {
  console.log(data);
  return (
    <>
      <HeadInfo title={data.title + " | Taeh"} desc={data.desc} />
      <div className={Id.postWrapper}>
        <section className={Id.markdown}>
          <h1>{data.title}</h1>
          <MDXRemote {...mdxSource} />
        </section>
      </div>
    </>
  );
};

export async function getStaticProps({ params }) {
  const { data, content } = matter(
    fs.readFileSync(path.join(process.cwd(), `public/posts/${params.id}.mdx`))
  );
  const mdxSource = await serialize(content);
  return {
    props: {
      data,
      content,
      mdxSource,
    },
  };
}

export const getStaticPaths = async () => {
  const post_files = fs.readdirSync(path.join(process.cwd(), "public/posts"));
  const paths = post_files.map((fileFullName) => {
    const id = fileFullName.split(".")[0];
    return { params: { id } };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Post;
