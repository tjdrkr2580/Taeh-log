import Head from "next/head";

const HeadInfo = ({ title, desc, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta charSet="utf-8" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={desc} />
    </Head>
  );
};

export default HeadInfo;
