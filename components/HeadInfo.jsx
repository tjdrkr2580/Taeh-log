import Head from "next/head";

const HeadInfo = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="끄적끄적 나의 이야기들" />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "다이어리 | Taeh",
};

export default HeadInfo;
