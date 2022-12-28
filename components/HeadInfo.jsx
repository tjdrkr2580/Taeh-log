import Head from "next/head";

const HeadInfo = ({ title, desc }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta charset="utf-8" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "Home | Taeh",
  desc: "서걱서걱 소리가 나는 종이 개발 블로그",
};

export default HeadInfo;
